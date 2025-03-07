const mongoose = require('mongoose')

const sheetSchema = new mongoose.Schema({
    player_name: {
        type: String
    },
    character_name: {
        type: String
    },
    species: {
        type: String
    },
    background: {
        type: String
    },
    class: {
        type: String
    },
    level: {
        type: Number
    },
    strength: {
        type: Number
    },
    dexterity: {
        type: Number
    },
    constitution: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    wisdom: {
        type: Number
    },
    charisma: {
        type: Number
    },
})

const Sheet = mongoose.model("Sheet", sheetSchema)

module.exports = Sheet