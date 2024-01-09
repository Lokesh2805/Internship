import React from 'react';
import CardComponent from './Card';

function Section3() {
  return (
    <div className='flex flex-col gap-3'>
    <div className="flex flex-row gap-3">
      <CardComponent text="Research" to="/research" />
      <CardComponent text="Strategy" to="/strategy" />
      <CardComponent text="Design" to="/design" />
      </div>
      <div className="flex flex-row gap-3">
      <CardComponent text="Engineer" to="/engineer" />
      <CardComponent text="Launch" to="/launch" />
      <CardComponent text="Growth" to="/growth" />
    </div>
    </div>
  )
}

export default Section3