import React from 'react';

export default function Stats({stats}) {

    const getModifier = (score) => Math.floor((score - 10) / 2);



  return (
    <div className='stats flex justify-between'>
        <div className='stat-container flex flex-col items-center justify-center'>
            <small>Strength</small>
            <h2>+{getModifier(stats.strength)}</h2>
            <div className='stat-number mt-2'>
                <h6>{stats.strength}</h6>
            </div>
        </div>
        <div className='stat-container flex flex-col items-center justify-center'>
            <small>Dexterity</small>
            <h2>+{getModifier(stats.dexterity)}</h2>
            <div className='stat-number mt-2'>
                <h6>{stats.dexterity}</h6>
            </div>
        </div>
        <div className='stat-container flex flex-col items-center justify-center'>
            <small>Constitution</small>
            <h2>+{getModifier(stats.constitution)}</h2>
            <div className='stat-number mt-2'>
                <h6>{stats.constitution}</h6>
            </div>
        </div>
        <div className='stat-container flex flex-col items-center justify-center'>
            <small>Intelligence</small>
            <h2>+{getModifier(stats.intelligence)}</h2>
            <div className='stat-number mt-2'>
                <h6>{stats.intelligence}</h6>
            </div>
        </div>
        <div className='stat-container flex flex-col items-center justify-center'>
            <small>Wisdom</small>
            <h2>+{getModifier(stats.wisdom)}</h2>
            <div className='stat-number mt-2'>
                <h6>{stats.wisdom}</h6>
            </div>
        </div>
        <div className='stat-container flex flex-col items-center justify-center'>
            <small>Charisma</small>
            <h2>+{getModifier(stats.charisma)}</h2>
            <div className='stat-number mt-2'>
                <h6>{stats.charisma}</h6>
            </div>
        </div>
    </div>
  );
}
