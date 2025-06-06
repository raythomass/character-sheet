const User = require('../models/userModel')
const Sheet = require('../models/sheetModel')
const mongoose = require('mongoose')

// Get Characters from User
const getAllCharacters = async (req, res) => {
    const userId = req.user._id

    try {
        const user = await User.findById(userId).populate('sheets')

        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found.' }); 
        }

        res.status(200).json({
            success: true,
            userId: userId,
            count: user.sheets.length,
            data: user.sheets
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Get a Single Character
const getSingleCharacter = async (req, res) => {
    const userId = req.user._id
    const { id } = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "That character does not exist"})
        }

        const sheet = await Sheet.findById({ _id: id, user: userId })

        if(!sheet) {
            res.status(400).json("Character could not be found")
        }
        res.status(200).json(sheet)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }

}
// Create a Character
const createCharacter = async (req, res) => {
    const userId = req.user._id

    try {
        const sheet = new Sheet({
            user: userId,
            character_name: req.body.character_name,
            campaign: req.body.campaign,
            species: req.body.species,
            class: req.body.class,
            stats: req.body.stats || {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligenc: 10,
                wisdom: 10,
                charisma: 10,
            },
            proficiency_bonus: req.body.proficiency_bonus || 0,
            walking_speed: req.body.walking_speed || 0,
            initiative: req.body.initiative || 0,
            armor_class: req.body.armor_class || 0,
            inspiration: req.body.inspiration || false,
            defenses: req.body.defenses || "None",
            conditions: req.body.conditions || "None",
            health: {
                current: req.body.current || 0,
                max: req.body.max || 0,
                temp: req.body.temp || 0,
            },
            saving_throws: req.body.saving_throws || {
                strength: { value: 0, proficient: false },
                dexterity: { value: 0, proficient: false },
                constitution: { value: 0, proficient: false },
                intelligence: { value: 0, proficient: false },
                wisdom: { value: 0, proficient: false },
                charisma: { value: 0, proficient: false },
            },
            senses: req.body.senses || {
                passive_perception: 0,
                passive_investigation: 0,
                passive_insight: 0
            },
            proficiencies: req.body.proficiencies || {
                armor: [],
                weapons: [],
                tools: [],
                languages: []
            },
            skills: req.body.skills || {
                acrobatics: { proficiency_level: 0, modifier: 0 },
                animal_handling: { proficiency_level: 0, modifier: 0 },
                arcana: { proficiency_level: 0, modifier: 0 },
                athletics: { proficiency_level: 0, modifier: 0 },
                deception: { proficiency_level: 0, modifier: 0 },
                history: { proficiency_level: 0, modifier: 0 },
                insight: { proficiency_level: 0, modifier: 0 },
                intimidation: { proficiency_level: 0, modifier: 0 },
                investigation: { proficiency_level: 0, modifier: 0 },
                medicine: { proficiency_level: 0, modifier: 0 },
                nature: { proficiency_level: 0, modifier: 0 },
                perception: { proficiency_level: 0, modifier: 0 },
                performance: { proficiency_level: 0, modifier: 0 },
                persuasion: { proficiency_level: 0, modifier: 0 },
                religion: { proficiency_level: 0, modifier: 0 },
                sleight_of_hand: { proficiency_level: 0, modifier: 0 },
                stealth: { proficiency_level: 0, modifier: 0 },
                survival: { proficiency_level: 0, modifier: 0 },
            },
            actions: req.body.actions,
            bonus_actions: req.body.bonus_actions,
            reactions: req.body.reactions,
            other_abilities: req.body.other_abilities,
            spells: req.body.spells,
            inventory: req.body.inventory,
            features: req.body.features,
            background: req.body.background,
            notes: req.body.notes,
            extras: req.body.extras
        })

        const savedSheet = await sheet.save();

        await User.findByIdAndUpdate(userId, { $push: { sheets: sheet._id } });

        res.status(201).json(savedSheet);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Delete a Character
const deleteCharacter = async (req,res) => {
    const { id } = req.params
    try {
        const userId = req.user._id
        const sheet = await Sheet.findOneAndDelete({_id:id})
        const user = await User.findById(userId)

        user.sheets.pull(id)
        await user.save()
        res.status(200).json(sheet)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Update a Character
const updateCharacter = async (req,res) => {
    const { id } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "That character does not exist"})
        }

        const sheet = await Sheet.findOneAndUpdate(
            {_id: id},
            {...req.body},
            { new: true, runValidators: true}
        )

        if(!sheet) {
            return res.status(400).json({error: "Character Sheet could not be found"})
        }

        res.status(200).json(sheet)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getAllCharacters,
    getSingleCharacter,
    createCharacter,
    deleteCharacter,
    updateCharacter
}