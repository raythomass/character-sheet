import React from 'react';

export default function ArmorClass({ac}) {
  return (
    <div className='armor-class flex flex-col items-center p-2'>
        <small>Armor Class</small>
        <h2>{ac}</h2>
    </div>
  );
}
