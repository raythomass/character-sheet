import React from 'react';
import { skillList } from '../configs/skillsList';
import { useUpdateCharacter } from '../hooks/useUpdateCharacter';

export default function Skills({characterId, skills, stats, proficiencyBonus}) {
    const { updateCharacter } = useUpdateCharacter();

    const getModifier = (score) => Math.floor((score - 10) / 2);
    
    const plusOrMinus = (mod) => {
        if (mod >= 0) {
            return (
                `+${mod}`
            )
        } else {
            return (
                `${mod}`
            )
        }
    }

    const getProfMultiplier = (level) => {
        if (level === 0) return 0;     // none
        if (level === 1) return 0.5;   // half proficiency
        if (level === 2) return 1;     // proficiency
        if (level === 3) return 2;     // expertise
        return 0;
    };

    const getSkillBonus = (skill) => {
        const abilityMod = getModifier(stats[skill.ability]);

        const level = skills?.[skill.key]?.proficiency_level || 0;

        return (
            abilityMod + proficiencyBonus * getProfMultiplier(level)
        );
    };

    const handleSkillToggle = async (skillKey) => {
        const currentLevel = skills?.[skillKey]?.proficiency_level || 0;

        const newLevel =
            currentLevel === 0 ? 1 :
            currentLevel === 1 ? 2 :
            currentLevel === 2 ? 3:
            0;
        
        await updateCharacter(characterId, {
            [`skills.${skillKey}.proficiency_level`] :
            newLevel,
        });
    }

  return (
    <div className='flex flex-wrap justify-between'>
        {skillList.map((skill) => {
            const level = skills?.[skill.key]?.proficiency_level || 0

            return (
                <div key={skill.key} className='skill-container flex gap-4 justify-between items-center p-2'>
                    <div
                        className={`skill-prof cursor-pointer ${
                            level === 0 ? "none" :
                            level === 1 ? "half-prof" :
                            level === 2 ? "prof" :
                            "expertise"
                        }`}
                        onClick={() =>
                            handleSkillToggle(skill.key)
                         }
                    />
                    <small>{skill.label}</small>
                    <h6>
                        {getSkillBonus(skill) >= 0
                            ? `+${getSkillBonus(skill)}`
                            : getSkillBonus(skill)}
                    </h6>
                </div>
            )
    })}
    </div>
  );
}
