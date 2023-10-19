import React from 'react'

function Header() {
  return (
    <div>
    <div class="bg-black-500 p-4">
  <div class="flex items-center justify-between">
    
    <div class="flex items-center space-x-2">
      <div class="bg-white rounded-full h-12 w-12 flex items-center justify-center">
        <img src="" alt="Logo" placeholder='MY LOGO' class="h-8 w-8" />
      </div>
    </div>

    <nav class="space-x-80 flex">
    <div className='space-x-8'>
    <button class="bg-[#000] text-lg text-[#fff] px-[20px] py-[10px] border-[none] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover:bg-[#fff] hover:text-[#000] hover:rounded-[45%]">
    About
  </button>
  <button class="bg-[#000] text-lg text-[#fff] px-[20px] py-[10px] border-[none] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover:bg-[#fff] hover:text-[#000] hover:rounded-[45%]">
  Projects
  </button>
      </div>
      <a href="#" class="bg-[#000] text-lg text-[#fff] px-[20px] py-[10px] border-[none] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover:bg-[#fff] hover:text-[#000] hover:rounded-[45%]">Contact</a>
    </nav>
  </div>
</div>

    </div>
  )
}

export default Header