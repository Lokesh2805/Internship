import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_page from './Loader_page/Loader_page';
import Home from "./Home_Page/Home";
import Project from './Home_Page/Project';
import ImageDetail from './Home_Page/ImageDetail';
import About from './About_page/About';
import AnimatedCursor from 'react-animated-cursor';
import Contact from './Contact_page/Contact';
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

      </Routes>
    </Router>
    </div>
  );
}

export default App;
