import React from "react";
import { useState, useEffect } from "react";
import BlobAnimation from "./BlobAnimation";

const MidSlide = () => {
  const textToDisplay = [
    "Software",
    "Mobile App",
    "Website",
    "Blockchain",
    "Wearable",
  ];
  const TYPING_SPEED = 180;
  const eraseSpeed = 50;
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleType = () => {
        const i = currentTextIndex % textToDisplay.length;
        const fullText = textToDisplay[i];

        setDisplayText((prevText) => {
            if (isTyping) {
                return fullText.substring(0, prevText.length - 1);
            } else {
                return fullText.substring(0, prevText.length + 1);
            }
        });

        setTypingSpeed(isTyping ? eraseSpeed : TYPING_SPEED);

        if (!isTyping && displayText === fullText) {
            setTimeout(() => setIsTyping(true), 500);
        } else if (isTyping && displayText === "") {
            setIsTyping(false);
            setCurrentTextIndex(currentTextIndex + 1);
        }
    };

    const typingTimer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimer);
}, [textToDisplay, displayText, isTyping, currentTextIndex, typingSpeed])
  return (

    <div>
      <div className="flex">
        <div className="text-white p-8 text-[74px] font-[Poppins]">
          <div>Multi-</div>
          Disciplinary
          <div className="fixed text-orange-600">{displayText}</div>
          <div className="pt-[6.8rem]">Developers.</div>
        </div>

        <div></div>
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
};

export default MidSlide;



