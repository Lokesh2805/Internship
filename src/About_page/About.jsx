import React from "react";
import Header from "../Home_Page/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function About() {
  const location = useLocation();
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

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // You can adjust this value to control the scroll distance
      behavior: 'smooth',
    });
}
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto">
      <Header />
      <div className="text-white flex justify-center align-center font-[Poppins] font-bold text-[5rem] text-center">
        Leveraging technology<br></br>
        to craft the right <br></br>
        story for you.
      </div>
      <div className="flex justify-center align-center pt-[1.5vh] ">
        <div class="border-[0.3rem] border-[solid] border-[white] rounded-[50%]">
          <div className="border-[3.5rem] border-[solid] border-[black] rounded-[50%]">
          <div className="flex ">
      <button
        onClick={handleScroll}
        className="bg-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[7rem] w-[7rem] text-white"
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
          </div>
        </div>
      </div>
      <div className="pr-6 flex justify-end mx-auto item-center">
        <a
          href="#"
          class="bg-[#fff] text-lg text-[#000] px-[20px] py-[10px] rounded-[10px] font-[-apple-system] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover: hover:bg-[#fff] hover:text-[#000] hover:rounded-[10px]"
        >
          Chat Bot
        </a>
      </div>
    </div>
  );
}

export default About;
