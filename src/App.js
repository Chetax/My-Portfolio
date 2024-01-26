
import './App.css';
import Navbar from './Component/Navbar/Navabr';
import Home from './Component/Home/Home';
import React from 'react';

function App() {
 
  return (
    <div className="App">
     <Navbar/>
     <Home position={1}/>
     <Home position={0}/>
    </div>
  );
}

export default App;
