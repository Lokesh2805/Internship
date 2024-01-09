import React from 'react';
import { useNavigate } from "react-router-dom";
function Connect() {

    const history = useNavigate();

  const handleClick = () => {
   
    history('/contact');
  }
  return (
    <div className="flex flex-col items-center justify-center h-[30.438rem] w-[74.438rem] flex-shrink-0 rounded-[28px] bg-[#3E3E3E] cursor-pointer transition duration-300 ease-in-out">
    <p className='text-white text-center font-[Inter] text-[25px] not-italic font-medium leading-[32px]'>Have a project in mind?</p>
    <h1 className='text-[#FFF] text-center font-[Inter] text-[67px] not-italic font-medium leading-[44px] py-10'>LET’S CONNECT</h1>
    <div>
    <button onClick={handleClick} className=" flex flex-col justify-center items-center h-[14.2rem] w-[14.2rem] border-[0.3rem] border-[solid] border-[white] rounded-[50%] text-white ">
   <p className='text-[#FFF] text-center font-[Inter] text-[29px] not-italic font-medium pb-5'>Write a <br></br>
   message</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 31 31" fill="none">
  <path d="M29.9996 1.95891C29.9769 0.854577 29.0633 -0.0222703 27.9589 0.000419205L9.96272 0.370177C8.85838 0.392866 7.98153 1.3065 8.00422 2.41084C8.02691 3.51517 8.94055 4.39202 10.0449 4.36933L26.0415 4.04066L26.3702 20.0373C26.3929 21.1416 27.3065 22.0185 28.4108 21.9958C29.5152 21.9731 30.392 21.0595 30.3693 19.9551L29.9996 1.95891ZM3.44297 30.4757L29.443 3.38486L26.557 0.615134L0.557034 27.706L3.44297 30.4757Z" fill="white"/>
</svg>
  </button>
    </div>
    </div>
  )
}

export default Connect