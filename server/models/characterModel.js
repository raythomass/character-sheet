const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    character_name: { type: String },
    species: { type: String },
    class: { type: String },
    level: { type: Number, default: 1 },

    stats: {
        strength: { type: Number, default: 10 },
        dexterity: { type: Number, default: 10 },
        constitution: { type: Number, default: 10 },
        intelligence: { type: Number, default: 10 },
        wisdom: { type: Number, default: 10 },
        charisma: { type: Number, default: 10 },
    },

    proficiency_bonus: { type: Number },
    walking_speed: { type: Number },
    initiative: { type: Number },
    armor_class: { type: Number },
    inspiration: { type: Boolean },
    defenses: [{ type: String }],
    conditions: [{ type: String }],

    health: {
        current: { type: Number },
        max: { type: Number },
        temp: { type: Number },
    },

    saving_throws: {
        strength: {
            value:{ type: Number, default: 0 },
            proficient:{ type: Boolean, default: false }
        },
        dexterity: {
            value:{ type: Number, default: 0 },
            proficient:{ type: Boolean, default: false }
        },
        constitution: {
            value:{ type: Number, default: 0 },
            proficient:{ type: Boolean, default: false }
        },
        intelligence: {
            value:{ type: Number, default: 0 },
            proficient:{ type: Boolean, default: false }
        },
        wisdom: {
            value:{ type: Number, default: 0 },
            proficient:{ type: Boolean, default: false }
        },
        charisma: {
            value:{ type: Number, default: 0 },
            proficient:{ type: Boolean, default: false }
        },
      },

      senses: {
        passive_perception: { type: Number, default: 0 },
        passive_investigation: { type: Number, default: 0 },
        passive_insight: { type: Number, default: 0 },
      },

      proficiencies: {
        armor: [{ type: String }],
        weapons: [{ type: String }],
        tools: [{ type: String }],
        languages: [{ type: String }],
      },

      skills: {
        acrobatics:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        animal_handling:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        arcana:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        athletics:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        deception:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        history:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        insight:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        intimidation:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        investigation:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        medicine:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        nature:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        perception:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        performance:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        persuasion:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        religion:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        sleight_of_hand:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        stealth:{ proficiency_level: { type: Number }, modifier: { type: Number } },
        survival:{ proficiency_level: { type: Number }, modifier: { type: Number } },
      },
       actions: [{
        //GENERAL DETAILS
        name: { type: String },
        type: {
            type: String,
            enum: [ Attack, Spell ],
        },
        proficient: { type: String },
        description: { type: String },
       }]
})

const Character = mongoose.model("Character", characterSchema)

module.exports = Character