import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_page from './Loader_page/Loader_page';
import Home from "./Home_Page/Home";
import Project from './Home_Page/Project';
import ImageDetail from './Home_Page/ImageDetail';
import About from './About_page/About';
import AnimatedCursor from 'react-animated-cursor';
import Contact from './Contact_page/Contact';
import TandcPage from './Contact_page/TandcPage';
import { sections } from './Constants/constants';

import Research from './About_page/services/Research';
import Strategy from './About_page/services/Strategy';
import Design from './About_page/services/Design';
import Engineer from './About_page/services/Engineer';
import Launch from './About_page/services/Launch';
import Growth from './About_page/services/Growth';
function App() {
  return (
    <div>
    <AnimatedCursor 
    color='255,255,255'
    innerSize={15}
    outerSize={15}
      clickables={[
        'a',
        'p',
        'h1',
        'h2',
        'h3',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}/>
    <Router>
   
      <Routes>
      
         <Route path="/" element={<Loader_page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ImageDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tandc' element={<TandcPage/>}/>
        <Route path='/services/research' element={<Research/>}/>
        <Route path='/services/strategy' element={<Strategy/>}/>
        <Route path='/services/design' element={<Design/>}/>
        <Route path='/services/engineer' element={<Engineer/>}/>
        <Route path='/services/launch' element={<Launch/>}/>
        <Route path='/services/growth' element={<Growth/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
