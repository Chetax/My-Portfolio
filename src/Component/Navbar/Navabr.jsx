import lightimg from './light.png';
import darkimg from './dark.png';
import { useState } from 'react';
import React from 'react';
const Navbar = () => {
  const[sun,setsun]=useState(0);
  const navbarbgcolor=sun===0 ? "whitesmoke" : "black";
  const fontcolor=sun===0 ? "black" : "white";
   const changethem=()=>{
    console.log("hello")
    setsun((prevsun) => (prevsun === 0 ? 1 : 0));  

   }

    return ( 
  
  <nav className="navbar navbar-expand-lg " style={{backgroundColor:navbarbgcolor}} >
  <div className="container">
    <a className="navbar-brand " href="#">
     { sun==0 ? <img src={darkimg}style={{height:'55px'}} alt="logo" /> : <img src={ lightimg}style={{height:'55px'}} alt="logo" /> }
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link fw-semibold" aria-current="page" href="#" style={{color:fontcolor}}>Home</a>
        </li>
        <li className="nav-item"  style={{marginLeft:'20px'}}>
          <a className="nav-link fw-semibold " href="#"  style={{color:fontcolor}}>About Me</a>
        </li>
        <li className="nav-item"  style={{marginLeft:'20px'}}>
          <a className="nav-link fw-semibold " href="#"  style={{color:fontcolor}}>Codding Language</a>
        </li>
        <li className="nav-item" style={{marginLeft:'20px'}}>
          <a className="nav-link fw-semibold " aria-disabled="true"  style={{color:fontcolor}}>Latest Work</a>
        </li>
        <li className="nav-item" style={{marginLeft:'20px'}}>
          <a className="nav-link fw-semibold " aria-disabled="true"  style={{color:fontcolor}}>Contect Me</a>
        </li>
        <li className="nav-item" style={{marginLeft:'20px'}}>
          <a className="nav-link fw-semibold " aria-disabled="true" onClick={changethem} style={{color:fontcolor}}>
            { sun==0 ? <i className="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i> }
            </a>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
     );
}
 

export default Navbar;