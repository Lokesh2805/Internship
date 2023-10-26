import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_page from './Loader_page/Loader_page';
import Home from "./Home_Page/Home";
import Project from './Home_Page/Project';
function App() {
  return (
    
    <Router>
      <Routes>
         <Route path="/" element={<Loader_page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />

      </Routes>
    </Router>
  );
}

export default App;
