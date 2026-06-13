import React from 'react';

export default function ExtraDetails({proficiencyBonus,initiative, walkingSpeed, inspiration}) {
  const getInspiration = (inspo) => {
    if(inspo == false) {
      return (
        `No`
      )
    } else {
      return (
        'Yes'
      )
    }
  }
  
  return (
    <div className='extra-details flex flex-col gap-2 border-2 border-b-violet-400 p-1'>
      <small>Proficiency Bonus: {proficiencyBonus}</small>
      <small>Initive: {initiative}</small>
      <small>Walking Speed: {walkingSpeed}</small>
      <small>Inspiration: {getInspiration(inspiration)}</small>
    </div>
  );
}
