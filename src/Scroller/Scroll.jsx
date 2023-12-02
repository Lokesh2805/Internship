// StickyButtons.js
import React from 'react';
import { Link } from 'react-scroll';

const StickyButtons = () => {
  return (
    <div className="fixed top-2/4 right-[20px] -translate-y-1/2 flex flex-col gap-[10px] bg-[#fff] p-[10px] rounded-[5px] [box-shadow:0_2px_5px_rgba(0,_0,_0,_0.1)]">
      <Link to="section1" className='cursor-pointer no-underline text-[#333] p-[8px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] [transition:background-color_0.3s] hover:bg-[#f0f0f0]' spy={true} smooth={true} duration={500}>
        Button 1
      </Link>
      <Link to="section2" className='cursor-pointer no-underline text-[#333] p-[8px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] [transition:background-color_0.3s] hover:bg-[#f0f0f0]' spy={true} smooth={true} duration={500}>
        Button 2
      </Link>
      <Link to="section3" className='cursor-pointer no-underline text-[#333] p-[8px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] [transition:background-color_0.3s] hover:bg-[#f0f0f0]' spy={true} smooth={true} duration={500}>
        Button 3
      </Link>
      <Link to="section4" className='cursor-pointer no-underline text-[#333] p-[8px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] [transition:background-color_0.3s] hover:bg-[#f0f0f0]' spy={true} smooth={true} duration={500}>
        Button 4
      </Link>
    </div>
  );
};

export default StickyButtons;
