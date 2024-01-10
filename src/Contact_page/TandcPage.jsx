import React, { useRef } from "react";
import Header from "../Home_Page/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function TandcPage() {
  const location = useLocation();

  const bodyBackgroundColor =
    location.pathname === "/tandc" ? "bg-white" : "bg-1C1C1C";
  document.body.className = `bg ${bodyBackgroundColor}`;
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/tandc");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]); 
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto">
    <Header/>
    <div className="flex justify-center items-center text-white font-[Inter] text-[7rem] not-italic ">
    <h1>Privacy Policy</h1>
    </div>
    </div>
  )
}

export default TandcPage