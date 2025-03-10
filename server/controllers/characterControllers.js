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
            health: {
                current: req.body.current,
                max: req.body.max,
                temp: req.body.temp
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