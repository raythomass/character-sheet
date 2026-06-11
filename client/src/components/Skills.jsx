import React from 'react';

export default function Skills({skills, stats}) {

    const getModifier = (score) => Math.floor((score - 10) / 2);

  return (
    <div className='skills flex flex-wrap justify-between'>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Acrobatics</h7>
            <h6 className='font-bold'>+{getModifier(stats.dexterity)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Animal Handling</h7>
            <h6 className='font-bold'>+{getModifier(stats.wisdom)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Arcana</h7>
            <h6 className='font-bold'>+{getModifier(stats.intelligence)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Athletics</h7>
            <h6 className='font-bold'>+{getModifier(stats.strength)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Deception</h7>
            <h6 className='font-bold'>+{getModifier(stats.charisma)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>History</h7>
            <h6 className='font-bold'>+{getModifier(stats.intelligence)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Insight</h7>
            <h6 className='font-bold'>+{getModifier(stats.wisdom)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Intimidation</h7>
            <h6 className='font-bold'>+{getModifier(stats.charisma)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Investigation</h7>
            <h6 className='font-bold'>+{getModifier(stats.intelligence)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Medicine</h7>
            <h6 className='font-bold'>+{getModifier(stats.wisdom)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Nature</h7>
            <h6 className='font-bold'>+{getModifier(stats.intelligence)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Perception</h7>
            <h6 className='font-bold'>+{getModifier(stats.wisdom)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Perfomance</h7>
            <h6 className='font-bold'>+{getModifier(stats.charisma)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Persuasion</h7>
            <h6 className='font-bold'>+{getModifier(stats.charisma)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Religion</h7>
            <h6 className='font-bold'>+{getModifier(stats.intelligence)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Sleight of Hand</h7>
            <h6 className='font-bold'>+{getModifier(stats.dexterity)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Stealth</h7>
            <h6 className='font-bold'>+{getModifier(stats.dexterity)}</h6>
        </div>
        <div className='skill-container flex gap-4 items-center justify-between p-2'>
            <div className='skill-prof'></div>
            <h7>Survival</h7>
            <h6 className='font-bold'>+{getModifier(stats.wisdom)}</h6>
        </div>
    </div>
  );
}
