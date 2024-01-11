import React from 'react';
import { sections } from '../../Constants/constants';
import Header from '../../Home_Page/Header';
import Footer from '../../Home_Page/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Research() {
  return (
    <div className="text-white fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto">
      <Header />
      <div className="p-10">
        <h1 className="text-[#FFF] text-center font-[Poppins] text-5xl md:text-6xl lg:text-7xl not-italic font-normal leading-[32px] pt-5">
          Research
        </h1>
        <p className="text-[#FFF] text-center font-[Poppins] text-2xl md:text-3xl not-italic font-normal leading-[32px] pt-10 md:pt-20">
          We believe in a thorough, yet efficient, research phase to ensure we and
          our client partners have all we need to make informed product decisions.
        </p>
      </div>
      <div className="text-[#FFF] text-start font-[Poppins] text-4xl md:text-5xl lg:text-6xl not-italic font-normal leading-[32px] pt-7 px-4 md:px-14">
        Competition Analysis
      </div>
      <p className="text-[#FFF] text-center font-[Poppins] text-2xl md:text-3xl not-italic font-normal leading-[32px] pt-10 md:pt-20">
        We take a deep look at the market landscape to understand key players,
        what’s driving their success, and what can be improved. We leave no stone
        unturned and identify areas of learning that warrant a closer look.
        Competition Analysis
      </p>
    </div>
  );
}

export default Research;
