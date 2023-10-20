import React from 'react';
import { useState, useEffect } from 'react';
import CanvasAnimation from './BlobAnimation';

    const MidSlide = () => {
        const textToDisplay = ["Software","Mobile App"];
        const typingSpeed = 500; 
        const eraseSpeed = 100;  
        const delay = 10000; 
      
        const [displayText, setDisplayText] = useState('');
        const [isTyping, setIsTyping] = useState(true);
        const [currentTextIndex, setCurrentTextIndex] = useState(0);
      
        useEffect(() => {
          let timeout;
          if (isTyping) {
            const currentText = textToDisplay[currentTextIndex];
            const currentTextLength = displayText.length;
            if (currentTextLength < currentText.length) {
              timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, currentTextLength + 1));
              }, typingSpeed);
            } else {
              setIsTyping(false);
              timeout = setTimeout(() => {
                setIsTyping(true);
                setCurrentTextIndex((currentTextIndex + 1) % textToDisplay.length);
                setDisplayText('');
              }, delay);
            }
          } else {
            const currentText = textToDisplay[currentTextIndex];
            const currentTextLength = displayText.length;
            if (currentTextLength > 0) {
              timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, currentTextLength - 1));
              }, eraseSpeed);
            } else {
              setIsTyping(true);
              timeout = setTimeout(() => {
                setIsTyping(false);
              }, delay);
            }
          }
      
          
          
      
        }, [displayText, isTyping, textToDisplay, currentTextIndex]);
      
  return (
    <div>
    <div className='flex'>
        <div className='text-white'>
        
        </div>
        <div>
           
        </div>
    </div>
    <div className='pr-8 flex justify-end mx-auto items-center'>
    <a href="#" class="bg-[#fff] text-lg text-[#000] px-[20px] py-[10px] rounded-[10%] font-[-apple-system] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover: hover:bg-[#fff] hover:text-[#000] hover:rounded-[5%]">Chat Bot</a>

    </div>
    </div>
  )
}

export default MidSlide