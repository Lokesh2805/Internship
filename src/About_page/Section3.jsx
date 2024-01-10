import React from 'react';
import CardComponent from './Card';
import { sections } from '../Constants/constants';
function Section3() {
  

  // Function to chunk the array into groups of size 'size'
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the sections array into groups of 3
  const chunkedSections = chunkArray(sections, 3);

  return (
    <div className='flex flex-col gap-3'>
      {chunkedSections.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-3">
          {row.map((section, index) => (
            <CardComponent key={index} text={section.text} to={section.to} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Section3;
