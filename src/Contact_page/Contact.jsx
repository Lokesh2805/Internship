import React, { useRef, useState } from "react";
import Header from "../Home_Page/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Contact() {
  const location = useLocation();
  const titleRef = useRef();
  const bodyBackgroundColor =
    location.pathname === "/contact" ? "bg-white" : "bg-1C1C1C";
  document.body.className = `bg ${bodyBackgroundColor}`;
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/contact");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleScroll = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { day: 'numeric' ,month: 'numeric'};
    setCurrentDate(today.toLocaleDateString('en-US', options));
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto">
      <Header />
      <div className="text-white flex justify-center align-center font-[Poppins] font-bold text-[5rem] text-center">
        Let's Talk
       
      </div>
      <p className="">We’ve worked with clients of all sizes, from startups to enterprise brands. 
        Let’s talk about your project and how we can help provide value.</p>
      <div className="flex justify-center align-center pt-[1.5vh] pb-[6rem]">
        <button onClick={handleScroll}>
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
        <a
          href="#"
          class="bg-[#fff] text-lg text-[#000] px-[20px] py-[10px] rounded-[10px] font-[-apple-system] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover: hover:bg-[#fff] hover:text-[#000] hover:rounded-[10px]"
        >
          Chat Bot
        </a>
      </div>
      <div ref={titleRef} className="flex justify-center content-center items-center pt-32 pb-32">
      <div className="bg-white flex lg:h-[30rem] lg:w-[70rem] md:h-[15rem] md:w-[35rem] sm:h-[7.5rem] sm:w-[17.5rem]  h-[10rem] w-[20rem]">
        <a className="pt-16 pl-20 text-[2rem]">&larr; </a>
        <p className="text-[#d3d3d3] text-[2rem] px-10 py-16">{currentDate}</p>
      </div>
      <div>
        
      </div>

      </div>
    </div>
  );
}

export default Contact;
