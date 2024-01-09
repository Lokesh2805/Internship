
import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ text, to }) => {
  return (
    <Link to={to} className="flex items-center justify-center w-[380.742px] h-[194.364px] flex-shrink-0 rounded-[28px] bg-[#3E3E3E] cursor-pointer hover:bg-gray-400 transition duration-300 ease-in-out">
      <span className="text-[#FFF] text-center font-[Inter] text-[35px] not-italic font-medium leading-[32px]">{text}</span>
    </Link>
  );
};

export default CardComponent;
