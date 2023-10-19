import React, { useState, useEffect } from 'react';

const TypedText = () => {
  const textToDisplay = ["Hello", "How are you doing?"];
  const typingSpeed = 200; 
  const eraseSpeed = 250;  
  const delay = 1000; 

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
    <div className="text-white text-[30px] w-[300px] h-[300px] mx-[auto] my-[10%] relative text-[#fff] flex justify-center items-center
    before:border-[2px] before:border-[solid] before:border-[#fff] before:rounded-[58%_42%_48%_53%_/_47%_60%_36%_53%] before:w-full before:h-full before:content-[''] before:absolute before:left-[0] before:top-[0] before:animate-[rotate_16s_linear_infinite]
    after:border-[2px] after:border-[solid] after:border-[#fff] after:rounded-[48%_42%_48%_53%_/_47%_60%_36%_53%] after:w-full after:h-full after:bg-[rgba(244,_166,_166,_0.1)] after:content-[''] after:absolute after:left-[0] after:top-[0] after:animate-[rotate_6s_linear_infinite]"
    >
    <div className='h-screen flex justify-center items-center'>
    <p   className='text-[3rem] p-2 font-bold tracking-[0.1rem] text-center overflow-hidden font-[Montserrat]'>{displayText} <span  class="typed-text font-normal text-[#dd7732] animate-none"></span><span class="cursor inline-block bg-[#ccc] ml-[0.1rem] w-[3px] animate-[blink_1s_infinite]">&nbsp;</span></p>
    </div>
    
    
    </div>

    </div>
  )
}

export default TypedText;