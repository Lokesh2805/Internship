import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_page from './Loader_page/Loader_page';
import Home from "./Home_Page/Home";
import Project from './Home_Page/Project';
import ImageDetail from './Home_Page/ImageDetail';
import About from './About_page/About';
function App() {
  return (
    
    <Router>
      <Routes>
         <Route path="/" element={<Loader_page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ImageDetail />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
