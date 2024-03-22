import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/AboutMe/About';
import Project from './Components/Project/Project';
import Contact from './Components/ContactMe/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* Ensure that Navbar is within a fixed container */}
      <div style={{ position: 'fixed', width: '100%', zIndex: 999 }}>
        <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutMe" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/ContactMe" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
