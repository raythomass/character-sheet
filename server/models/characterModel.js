const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    character_name: {
        type: String
    },
    species: {
        type: String
    },
    class: {
        type: String
    },
    level: {
        type: Number,
        default: 1
    },

    stats: {
        strength: {
            type: Number,
            default: 10
        },
        dexterity: {
            type: Number,
            default: 10
        },
        constitution: {
            type: Number,
            default: 10
        },
        intelligence: {
            type: Number,
            default: 10
        },
        wisdom: {
            type: Number,
            default: 10
        },
        charisma: {
            type: Number,
            default: 10
        },
    },

    proficiency_bonus: {
        type: Number,
    },
    walking_speed: {
        type: Number
    },
    initiative: {
        type: Number
    },
    armor_class: {
        type: Number
    },

    health: {
        current: {
            type: Number
        },
        max: {
            type: Number
        },
        temp: {
            type: Number
        },
    },
})

const Character = mongoose.model("Character", characterSchema)

module.exports = Character