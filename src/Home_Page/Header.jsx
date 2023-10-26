import React from 'react'

function Header() {
  return (
  

<div class="bg-[#0F0F0F] p-4">
  <div class="container mx-auto flex items-center justify-between">
    
      <div class="bg-white rounded-full h-12 w-12 flex items-center justify-center">
        <img src="your-logo.png" alt="Logo" class="h-8 w-8" />
    
    </div>

    <nav class="space-x-4">
      <a href="#" class="bg-[#0F0F0F] text-lg text-[#fff] px-[20px] py-[10px]  rounded-[999px] font-[-apple-system] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover:rounded-[999px] hover:bg-[#fff] hover:text-[#000] hover:rounded-[45%]">About</a>
      <a href="/project" class="bg-[#0F0F0F] text-lg text-[#fff] px-[20px] py-[10px]  rounded-[999px] font-[-apple-system] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover:rounded-[999px] hover:bg-[#fff] hover:text-[#000] hover:rounded-[45%]">Projects</a>
    </nav>

    <a href="#" class="bg-[#0F0F0F] border-[1px] font-[-apple-system] rounded-[999px] border-[solid] text-lg text-[#fff] px-[20px] py-[10px] cursor-pointer [transition:background-color_0.3s,_color_0.3s] hover:bg-[#fff] hover:rounded-[999px] hover:text-[#000] hover:rounded-[45%]">Contact</a>
  </div>
</div>




  )
}

export default Header