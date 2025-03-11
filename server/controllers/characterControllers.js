const User = require('../models/userModel')
const Character = require('../models/characterModel')
const jwt = require('jsonwebtoken')

// Get Characters from User
const getAllCharacters = async (req, res) => {
    const userId = req.user._id

    try {
        const user = await User.findById(userId).populate('characters')

        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found.' }); 
        }

        res.status(200).json({
            success: true,
            userId: userId,
            count: user.characters.length,
            data: user.characters
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Get a Single Character
// Create a Character
const createCharacter = async (req, res) => {
    const userId = req.user._id

    try {
        const character = new Character({
            user: userId,
            character_name: req.body.character_name,
            species: req.body.species,
            class: req.body.class,
            level: req.body.level,
            stats: req.body.stats || {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligenc: 10,
                wisdom: 10,
                charisma: 10,
            },
            proficiency_bonus: req.body.proficiency_bonus,
            walking_speed: req.body.walking_speed,
            initiative: req.body.initiative,
            armor_class: req.body.armor_class,
            inspiration: req.body.inspiration,
            defenses: req.body.defenses,
            conditions: req.body.conditions,
            health: {
                current: req.body.current,
                max: req.body.max,
                temp: req.body.temp
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
            }
        })

        const savedCharacter = await character.save();

        await User.findByIdAndUpdate(userId, { $push: { characters: savedCharacter._id } });

        res.status(201).json(savedCharacter);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Delete a Character
// Update a Character

module.exports = {
    getAllCharacters,
    createCharacter
}