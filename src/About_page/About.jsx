import React, { useRef } from "react";
import Header from "../Home_Page/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import StickyButtons from "../Scroller/Scroll";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Button } from "react-scroll";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Connect from "./Connect";

function About() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(true);
  }
  const location = useLocation();
  const titleRef1 = useRef();
  const titleRef2 = useRef();
  const titleRef3 = useRef();
  const titleRef4 = useRef();
  const connect = useRef();




  const bodyBackgroundColor =
    location.pathname === "/about" ? "bg-white" : "bg-1C1C1C";
  document.body.className = `bg ${bodyBackgroundColor}`;
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/about");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };
  const handleScrolltoWho = () => {
    titleRef1.current.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
  };

  const handleScrolltoManifesto = () => {
    titleRef2.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrolltoServices = () => {
    titleRef3.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrolltoTestimonials = () => {
    titleRef4.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrolltoConnect = () => {
    connect.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto">
      <Header />
      { visible &&
      <div className="fixed top-2/4 right-[20px] -translate-y-1/2 flex flex-col gap-[10px] bg-black p-[10px] rounded-[5px] [box-shadow:0_2px_5px_rgba(0,_0,_0,_0.1)]">
        <Button
          onClick={() => {
            handleButtonClick(1);
            handleScrolltoWho();
          }}
          className={` cursor-pointer h-[1vh] rounded-[40px] bg-white mx-[0] my-[5px] ${
            activeButton === 1 ? "w-[9vh]" : "w-[7vh]"
          }`}
          spy={true}
          smooth={true}
          duration={500}
        ></Button>
        <Button
        onClick={() => {
          handleButtonClick(2);
          handleScrolltoManifesto();
        }}
          to="section2"
          className={` cursor-pointer h-[1vh] rounded-[40px] bg-white mx-[0] my-[5px] ${
            activeButton === 2 ? "w-[9vh]" : "w-[7vh]"
          }`}
          spy={true}
          smooth={true}
          duration={500}
        ></Button>
        <Button
          to="section3"
          onClick={() => {
            handleButtonClick(3);
            handleScrolltoServices();
          }}
            className={` cursor-pointer h-[1vh] rounded-[40px] bg-white mx-[0] my-[5px] ${
              activeButton === 3 ? "w-[9vh]" : "w-[7vh]"
            }`}
          spy={true}
          smooth={true}
          duration={500}
        ></Button>
        <Button
          to="section4"
          onClick={() => {
            handleButtonClick(4);
            handleScrolltoTestimonials();
          }}
            className={` cursor-pointer h-[1vh] rounded-[40px] bg-white mx-[0] my-[5px] ${
              activeButton === 4 ? "w-[9vh]" : "w-[7vh]"}`}
          spy={true}
          smooth={true}
          duration={500}
        ></Button>

        <Button
          to="connect"
          onClick={() => {
            handleButtonClick(5);
            handleScrolltoConnect();
          }}
            className={` cursor-pointer h-[1vh] rounded-[40px] bg-white mx-[0] my-[5px] ${
              activeButton === 5 ? "w-[9vh]" : "w-[7vh]"}`}
          spy={true}
          smooth={true}
          duration={500}
        ></Button>
        
      </div> }
      <div className="text-white flex justify-center align-center font-[Poppins] font-bold text-[5rem] text-center">
        Leveraging technology<br></br>
        to craft the right <br></br>
        story for you.
      </div>
      <div className="flex justify-center align-center pt-[1.5vh] ">
        <button onClick={ () =>{handleScrolltoWho(); toggle(); handleButtonClick(1)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[14.2rem] w-[14.2rem] border-[0.3rem] border-[solid] border-[white]  rounded-[50%] text-white hover:text-black hover:bg-white "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div className="pr-6 flex justify-end mx-auto item-center">
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8 pr-8 md:pr-20 py-4 md:py-8 lg:pl-[10rem] lg:pt-8">
        <h1
          ref={titleRef1}
          className="text-white font-bold text-8xl font-[Poppins] col-span-full pb-6 pt-[100px]"
        >
          Who?
        </h1>
        <Section1 id="section1" />
        <h1 
        ref={titleRef2}
        className="text-white font-bold text-8xl font-[Poppins] col-span-full pb-6 pt-[100px]"
      >Manifesto</h1>
      <Section2 id="section2"/>
      <h1 
        ref={titleRef3}
        className="text-white font-bold text-8xl font-[Poppins] col-span-full pb-6 pt-[100px]"
      >Services</h1>
      <Section3 id="section3"/>
      <h1 
        ref={titleRef4}
        className="text-white font-bold text-8xl font-[Poppins] col-span-full pb-6 pt-[100px]"
      >Testimonials</h1>
      <Section4 />
      <div className="col-span-full pb-6 pt-[100px]" ref={connect}>
      <Connect id="connect" />
      </div>
      </div>
    </div>
  );
}

export default About;
