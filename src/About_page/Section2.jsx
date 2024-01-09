import React from "react";
import { useState } from "react";
function Section2() {
  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [contentVisibility, setContentVisibility] = useState({
    isClicked1: true,
    isClicked2: false,
    isClicked3: false,
  });

  const handleClick01 = () => {
    setIsClicked1(!isClicked1);
    if (isClicked2) {
      setIsClicked2(!isClicked2);
    }
    if (isClicked3) {
      setIsClicked3(!isClicked3);
    }
    setContentVisibility({
        isClicked1: !isClicked1,
        isClicked2: false,
        isClicked3: false,
      });
  };
  const handleClick02 = () => {
    setIsClicked2(!isClicked2);
    if (isClicked1) {
      setIsClicked1(!isClicked1);
    }
    if (isClicked3) {
      setIsClicked3(!isClicked3);
    }
    setContentVisibility({
        isClicked1: false,
        isClicked2: !isClicked2,
        isClicked3: false,
      });
  };
  const handleClick03 = () => {
    setIsClicked3(!isClicked3);
    if (isClicked1) {
      setIsClicked1(!isClicked1);
    }
    if (isClicked2) {
      setIsClicked2(!isClicked2);
    }
    setContentVisibility({
        isClicked1: false,
        isClicked2: false,
        isClicked3: !isClicked3,
      });
  };
  return (
    <div id="section1" className="w-[120vh] flex ">
      <div className="flex flex-col text-[#5A5A5A] ">
        <button
          className={`text-${
            isClicked1 ? "white" : "#5A5A5A"
          } text-[10vh] font-[Poppins] py-2 px-4 transition duration-300 ease-in-out`}
          onClick={handleClick01}
        >
          01
        </button>
        <button
          className={`text-${
            isClicked2 ? "white" : "#5A5A5A"
          } text-[10vh] font-[Poppins] py-2 px-4 transition duration-300 ease-in-out `}
          onClick={handleClick02}
        >
          02
        </button>
        <button
          className={`text-${
            isClicked3 ? "white" : "#5A5A5A"
          } text-[10vh] font-[Poppins] py-2 px-4 transition duration-300 ease-in-out`}
          onClick={handleClick03}
        >
          03
        </button>
      </div>
      {isClicked1 && (
        <div  className="transition-opacity duration-300 ease-in-out opacity-100">
          <div className="text-white inline-flex items-start gap-[40px] px-[18vh] pt-[5vh] font-[Poppins] text-[32px] not-italic font-semibold leading-[normal]">
            trust & transparency(1)
          </div>
          <div className="w-[300px] h-[2px] flex-shrink-0 mx-[17vh] my-[2vh] bg-white"></div>
          <div className="w-[821px] h-[151px] flex-shrink-0 text-[#F5F7F9] font-[Poppins] text-[18px] not-italic font-normal leading-[32px] mx-[17vh] my-[4vh]">
            (1)(1)we encourage the environment in our team to be genuine and
            open with our clients, building a family-like environment that
            spawns optimistic results through collaborative decision-making. It
            is easy to know when someone is fibbing, and that only places more
            distance between us & our clients, which we would never desire.
          </div>
        </div>
      )}
      {isClicked2 && (
        <div className={`transition-opacity duration-300 ease-in-out opacity-${isClicked2 ? '100' : '0'}`}>
          <div className="text-white inline-flex items-start gap-[40px] px-[18vh] pt-[5vh] font-[Poppins] text-[32px] not-italic font-semibold leading-[normal]">
            trust & transparency(2)
          </div>
          <div className="w-[300px] h-[2px] flex-shrink-0 mx-[17vh] my-[2vh] bg-white"></div>
          <div className=" w-[821px] h-[151px] flex-shrink-0 text-[#F5F7F9] font-[Poppins] text-[18px] not-italic font-normal leading-[32px] mx-[17vh] my-[4vh]">
            (2)(2)we encourage the environment in our team to be genuine and
            open with our clients, building a family-like environment that
            spawns optimistic results through collaborative decision-making. It
            is easy to know when someone is fibbing, and that only places more
            distance between us & our clients, which we would never desire.
          </div>
        </div>
      )}
      {isClicked3 && (
        <div>
          <div className="text-white inline-flex items-start gap-[40px] px-[18vh] pt-[5vh] font-[Poppins] text-[32px] not-italic font-semibold leading-[normal]">
            trust & transparency(3)
          </div>
          <div className="w-[300px] h-[2px] flex-shrink-0 mx-[17vh] my-[2vh] bg-white"></div>
          <div
            className={` w-[821px] h-[151px] flex-shrink-0 text-[#F5F7F9] font-[Poppins] text-[18px] not-italic font-normal leading-[32px] mx-[17vh] my-[4vh]`}
          >
            (3)(3)we encourage the environment in our team to be genuine and
            open with our clients, building a family-like environment that
            spawns optimistic results through collaborative decision-making. It
            is easy to know when someone is fibbing, and that only places more
            distance between us & our clients, which we would never desire.
          </div>
        </div>
      )}
    </div>
  );
}

export default Section2;
