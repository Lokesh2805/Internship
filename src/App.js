import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_page from './Loader_page/Loader_page';
import Home from "./Home_Page/Home";
function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Loader_page />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
