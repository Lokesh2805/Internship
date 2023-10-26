import React from 'react'
import Header from './Header';
import MidSlide from './MidSlide';
import Footer from './Footer';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const bodyBackgroundColor = location.pathname === '/home' ? 'bg-white' : 'bg-1C1C1C';

  document.body.className = `bg ${bodyBackgroundColor}`;
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [navigate]);

  
  return (
    <div id='curtain' className='fixed top-0 left-0 w-full h-screen bg-black z-10 animate-curtain'>
    <Header />
    <MidSlide />
   
    <Footer />
    </div>
   
    
  )
}

export default Home