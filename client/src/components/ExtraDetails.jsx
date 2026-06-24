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
    <div className='extra-details flex justify-between'>
      <div className='prof-bonus flex flex-col items-center'>
        <small>Proficiency Bonus:</small>
        <h5>{proficiencyBonus}</h5>
      </div>
      <div className='initiative flex flex-col items-center'>
        <small>Initiative:</small>
        <h5>{initiative}</h5>
      </div>
      <div className='walking-speed flex flex-col items-center'>
        <small>Walking Speed:</small>
        <h5>{walkingSpeed} ft.</h5>
      </div>
      <div className='inspiration flex flex-col items-center'>
        <small>Inspiration:</small>
        <h5>{getInspiration(inspiration)}</h5>
      </div>
    </div>
  );
}
