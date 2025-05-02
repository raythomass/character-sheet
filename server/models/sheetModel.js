const mongoose = require('mongoose')

const sheetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    character_name: { type: String },
    campaign: { type: String },
    species: { type: String },
    class: [{
      class_name: { type: String },
      subclass: { type: String },
      level: { type: Number, default: 1 },
    }],
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
        name: { type: String, require: true },
        type: {
            type: String,
            enum: [ "Attack", "Spell", "Custom" ],
            required: true
        },
        proficient: { type: String },
        description: { type: String },
        rarity: { type : String },
        attack_type: { type: String },
        attack_bonus: { type: String },
        usage: {
            type: String,
            default: "At-will"
         },
        damage: { type: String },
        damage_type: { type: String },
        damage_scale: { type: String },
        reach: { type: String },
        range: { type: String },
        area: { type: String },
        spell_level: { type: Number },
        efect: { type: String },
        cast: { type: String },
        casting_time: { type: String },
        components: { type: String },
        duration: { type: String },
        save_dc: { type: Number },
        school: { type: String },
        weight: { type: String },
        cost: { type: String },
        properties: { type: [String] },
        mastery: {
            mastery_name: { type: String },
            mastery_description: { type: String }
        }
       }],
       bonus_actions: [{
        name: { type: String, required: true },
        type: {
            type: String,
            enum: ["Feature", "Attack", "Spell", "Custom"],
            required: true
        },
        description: { type: String },
        usage: { type: String },
        attack_bonus: { type: Number },
        damage: { type: String },
        damage_scale: { type: String },
        range: { type: String },
        spell_level: { type: Number },
        save_dc: { type: Number },
        effect: { type: String },
       }],
       reactions: [
        {
          name: { type: String, required: true },
          type: {
            type: String,
            enum: ["Feature", "Spell", "Attack", "Custom"],
            required: true
        },
          description: { type: String },
          trigger: { type: String },
          attack_bonus: { type: Number }, 
          damage: { type: String },
          range: { type: String }, 
          spell_level: { type: Number }, 
          components: { type: String }, 
          save_dc: { type: Number }, 
          effect: { type: String }
        }
      ],
      other_abilities: [
        {
          name: { type: String, required: true },
          type: {
            type: String,
            enum: ["Class Feature", "Racial Trait", "Custom"],
            required: true
        },
          description: { type: String },
          uses: { type: Number, default: 0 },
          recharge: {
            type: String,
            enum: ["Short Rest", "Long Rest", "Daily", "At-will", "Special"],
            default: "At-will"
        },
          effect: { type: String }
        }
      ],
      spells: [{
        name: { type: String },
        description: { type: String },
        level: { type: Number },
        school: { type: String },
        casting_time: { type: String },
        range: { type: String },
        area: { type: String },
        components: { type: String },
        duration: { type: String },
        prepared: { type: Boolean, default: false },
      }],
      inventory: {
        items: [
          {
            name: { type: String, required: true },
            category: { 
              type: String, 
              enum: ["Weapon", "Armor", "Consumable", "Tool", "Magic Item", "Misc", "Custom"], 
              required: true 
            },
            quantity: { type: Number, default: 1 },
            weight: { type: Number, default: 0 },
            equipped: { type: Boolean, default: false },
            attunement: { type: Boolean, default: false },
            attuned: { type: Boolean, default: false },
            rarity: { 
              type: String, 
              enum: ["Common", "Uncommon", "Rare", "Very Rare", "Legendary", "Artifact"], 
              default: "Common" 
            },
            properties: { type: [String], default: [] },
            description: { type: String },
            damage: { type: String },
            damage_type: { type: String },
            range: { type: String },
            ac_bonus: { type: Number, default: 0 },
            armor_type: { type: String, enum: ["Light", "Medium", "Heavy", "Shield"] },
            effect: { type: String },
          }
        ],
        currency: {
          gold: { type: Number, default: 0 },
          silver: { type: Number, default: 0 },
          copper: { type: Number, default: 0 },
          platinum: { type: Number, default: 0 },
        },
        total_weight: { type: Number, default: 0 } 
      },
      features: {
        class_features:[{
          name: { type: String, required: true },
          description: { type: String, required: true }, 
          level_requirement: { type: Number }, 
          uses: { type: Number, default: null },
          recharge: { 
            type: String, 
            enum: ["Short Rest", "Long Rest", "Per Day", "None"], 
            default: "None" 
          },
          activation: { 
            type: String, 
            enum: ["Passive", "Action", "Bonus Action", "Reaction"], 
            default: "Passive" 
          }
        }],
        species_traits:[{
          name: { type: String },
          description: { type: String },
        }],
        feats:[{
          name: { type: String },
          description: { type: String },
          uses: { type: Number, default: null },
          recharge: { 
            type: String, 
            enum: ["Short Rest", "Long Rest", "Per Day", "None"], 
            default: "None" 
          },
          activation: { 
            type: String, 
            enum: ["Passive", "Action", "Bonus Action", "Reaction"], 
            default: "Passive" 
          }
        }]
      },
      background: {
        background: {
          name: { type: String },
          description: { type: String },
          ability_scores: { type: [String] },
          skill_proficiencies: { type: [String] },
          feat: { type: String }
        },
        characteristics: {
          alignment: { type: String },
          gender: { type: String },
          eyes: { type: String },
          size: { type: String },
          height: { type: String },
          faith: { type: String },
          hair: { type: String },
          skin: { type: String },
          age: { type: String },
          weight: { type: String },
          personality_traits: { type: [String] },
          ideals: { type: [String] },
          bonds: { type: [String] },
          flaws: { type: [String] },
        },
        appearance: { type: String }
      },
      notes: {
        organizations: { type: String },
        allies: { type: String },
        enemies: { type: String },
        backstory: { type: String },
        other: { type: String },
      },
      extras: { type: String }
})

const Sheet = mongoose.model("Sheet", sheetSchema)

module.exports = Sheet