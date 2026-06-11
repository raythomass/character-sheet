import React from 'react';

export default function CharacterDetails({name, characterClass, species}) {
  return (
    <div className='character-details flex flex-col items-center p-2'>
        <h3>{name}</h3>
        {/* <small>{species}</small> */}
        {characterClass.map((char) => (
            <div className='flex gap-2'>
                <small>{char.class_name}</small>
                <small>{char.subclass}</small>
                <small>{char.level}</small>
            </div>
        ))}
    </div>
  );
}
