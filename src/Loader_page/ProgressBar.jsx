import React, { useState, useEffect } from 'react';


const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(interval);
        window.location.href = '/home';
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <div className='fixed bottom-5 left-0 right-0' style={{overflow:'hidden'}}>
  <div  className='text-white text-[40px] flex justify-end font-[-apple-system]'>
    {percentage}%
  </div>
    
    <div className="w-full h-4 bg-black-300">
      <div
        className="h-full bg-black-500"
        style={{ width: `${percentage}%`, color:'#000', background:'#fff' }}
      >

      </div>
    </div>
    </div>
  );
};



export default ProgressBar;