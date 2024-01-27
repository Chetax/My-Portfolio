import React from "react";
import Context from '../../ContextApi/Context';
import { useContext,useState } from "react";
const About = () => {
   
  const data=[
   "I'm Chetan Padhen From Nagpur Also Know As Orange City. I am Persuing My Becholor Desgree in Computer From Pimpri Chinchwad Collage Of Enginerring Which Enable Me To Desgin And Develop Software System. I possess a set of technical skills, including C/C++, HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. Apart From Technical Skills I Have team management and leadership skill.My Project experience and open source contribution enabling me to create robust and responsive Web applications.I Completet Hactoberfest Challnge by merging six pull requests in open-source projects. ",   
    "Education",
    "C++ ",
    "Playing Cricket" 
  ]
    const {sun}=useContext(Context);
    const fontcolor = sun === 0 ? "black" : "white";
    const [present,setpresent]=useState(0);
    return (<>
    <div className="container">
        <h2 style={{marginLeft:'6px',color:fontcolor}}>About Me</h2>
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid   px-0 ">
        <div class="collapse navbar-collapse ml-5 " id="navbarNav">
      <ul class="navbar-nav  " style={{fontSize:"18px"}} >
        <li class="nav-item">{present===0 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(0);}}>Life</a> : <a class="nav-link active "   style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(0);}}>Life</a>} </li>
        <li class="nav-item">{present===1 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(1);}} >Education</a> :  <a class="nav-link"  style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(1)}} >Education</a>} </li>
        <li class="nav-item">{present===2 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(2);}} >Programming Exp.</a> :  <a class="nav-link"  style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(2)}} >Programming Exp.</a>} </li>
        <li class="nav-item">{present===3 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(3);}} >Hobby</a> :  <a class="nav-link"  style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(3)}} >Hobby</a>} </li>
      </ul>
    </div>
      </div>
       </nav>
    <div className="container fw-medium"  style={{height:"40vh",color:fontcolor,fontFamily:'cursive'}}>
<p className="ms-auto" style={{textAlign: "justify" }}>{data[present]}</p>
    </div>
    </div>
    </> );
}
 
export default About;

// <li class="nav-item">{present===1 ?   <a class="nav-link"  style={{color:'gold'}} onClick={()=>{setpresent(1);}} >Education</a>:  <a class="nav-link"  style={{color:fontcolor}} onClick={()=>{setpresent(1)}} >Education</a>  } 
// <li class="nav-item">{present===2 ?   <a class="nav-link"  style={{color:'gold'}} onClick={()=>{setpresent(2);}} >Know Language</a>:  <a class="nav-link"  style={{color:fontcolor}} onClick={()=>{setpresent(1)}} >Know Language</a>  } 
// <li class="nav-item">{present===3 ?   <a class="nav-link"  style={{color:'gold'}} onClick={()=>{setpresent(3);}} >Achievment</a>:  <a class="nav-link"  style={{color:fontcolor}} onClick={()=>{setpresent(1)}} >Achievment</a>  } 
 