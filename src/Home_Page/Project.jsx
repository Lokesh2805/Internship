import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const images = [
    'https://thumbs.dreamstime.com/b/coca-cola-can-red-background-moscow-russia-march-174345795.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5307ef37224391.57397a56d79da.jpg',
    'https://i.pinimg.com/originals/24/78/c7/2478c7cf9cefe6d7f526e0947c0e210d.jpg',
    // 'https://tse3.mm.bing.net/th?id=OIP.MF_TW1bYpCY4EwYGWfT8_AHaE8&pid=Api&P=0&h=180',
    // 'https://cache.pressmailing.net/content/995493d9-116d-4a3b-a16a-0aaaa252e55c/image-x?attachment=false.jpg',
    // 'http://mcdonaldsfiji.com/wp-content/uploads/2019/07/Fanta-600x600.jpg'

  ];
  
function Project() {
    const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/project');
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <div id='curtain' className='fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards]'>
    <div><Header /></div>
   
    <div className='flex items-center justify-center gap-20 whitespace-nowrap '>
    {images.map((image, index) => (
      <div key={index} className="relative">
        <img
          src={image}
          alt={`Image ${index + 1}`}
          className="relative inline-block mx-4 overflow-hidden h-[25.48rem] w-[19.76rem] opacity-100 object-cover mt-[7rem] animate-[movebounce_5s_linear_infinite] rounded-lg filter grayscale hover:filter-none transition-transform duration-300"
        />
        </div>
    ))}
  
   
    </div>
      
    </div>
  
  )
}

export default Project