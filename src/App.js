import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_page from './Loader_page/Loader_page';
import Home from "./Home_Page/Home";
import Project from './Home_Page/Project';
import ImageDetail from './Home_Page/ImageDetail';
function App() {
  return (
    
    <Router>
      <Routes>
         <Route path="/" element={<Loader_page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ImageDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
