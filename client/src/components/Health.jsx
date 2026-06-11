import React from 'react';

export default function Health({health}) {
  return (
    <div className='health flex flex-col items-center'>
        <small>Health</small>
        <div className='flex gap-4'>
            <h4 className='health-temp'>{health.temp}</h4>
            <h4>{health.current} / {health.max}</h4>
        </div>
    </div>
  );
}
