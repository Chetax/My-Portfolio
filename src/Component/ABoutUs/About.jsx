import React from "react";
import Context from '../../ContextApi/Context';
import { useContext,useState } from "react";
import html from './html.png';
import reactimg from './reactimg.png';
import css from './css-3.png'
import nodejs from './nodejs.png'
import express from './express.png';
import mongo from './mongodb.jpg';
import github from './github.png';
import  java from './java.png';
import book from './book.png';
import headset from './headset.png';
import crciket from './cricket.png';
import c from './c++.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import js from './js.png'
const About = () => {
  const {sun}=useContext(Context);
  const fontcolor = sun === 0 ? "black" : "white";
  const [present,setpresent]=useState(0);
  const data = [
    `<p mt-2>I'm Chetan Padhen From Nagpur Also Know As Orange City. I am Pursuing My Bachelor's Degree in Computer From Pimpri Chinchwad College Of Engineering Which Enables Me To Design And Develop Software System. I possess a set of technical skills, including C/C++, HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. Apart From Technical Skills I Have team management and leadership skill. My Project experience and open-source contribution enabling me to create robust and responsive Web applications. I Completed Hacktoberfest Challenge by merging six pull requests in open-source projects.</p>`,
    `
    <div class="container px-0 fw-medium" style="height: 40vh; color: ${fontcolor}; font-family: cursive;">
      <div class="row mt-3 mb-4" style="line-height: 7px;">
        <p class="fw-semibold">Bachelor In Computer (Regional Language)</p>
        <p>University Of Pune</p>
        <p>CGPA - 7.93</p>
        <p>November 2021 - July 2025</p>
      </div>
      <div class="row mb-3" style="line-height: 7px;">
        <p class="fw-semibold">XII-Science</p>
        <p>University Of Nagpur</p>
        <p>Percentage: 89%</p>
        <p>March 2019 - May 2021</p>
      </div>
    </div>
    `,
    `
    <div class="container px-0 fw-medium" style="height: 40vh; color: ${fontcolor}; font-family: cursive;">
    <div class="row mt-3 mb-4" style="line-height: 7px;">
    <p class="fw-semibold">Programing Language</p>
    <div class="row mt-3">
    
    <p> <a "https://www.flaticon.com/free-icons/coding" title="coding icons"><img src=${c} alt="freepik" style="height:18px;; margin-right:10px""/></a>C++ (stl)</p>
    <p> <a "https://www.flaticon.com/free-icons/java" title="java icons"><img src=${java} alt="freepik" style="height:18px;; margin-right:10px""/></a>Java</p>

    </div>
</div>

<div class="row mt-3 mb-4" style="line-height: 7px;">
    <p class="fw-semibold">Web Development</p>
    <div class="row mt-3 ">
        <div class="col-6">
     
            <p> <a href="https://www.flaticon.com/free-icons/html" title="html icons"><img src=${html} alt="freepik" style="height:18px;; margin-right:10px""/></a>  HTML-5</p>
            <p> <a href=""https://www.flaticon.com/free-icons/css" title="css icons"" title="css icons"><img src=${css} alt="freepik" style="height:18px;; margin-right:10px""/></a>CSS/Bootstrap-5</p>
            <p><a href="""https://www.flaticon.com/free-icons/js-file" title="js file icons"" title="js icons"><img src=${js} alt="freepik" style="height:18px;; margin-right:10px""/></a>Javascript</p>
            <p> <a href="https://www.flaticon.com/free-icons/react" title="react icons"><img src=${reactimg} alt="freepik" style="height:18px;; margin-right:10px""/></a> React Js</p>
          
        </div>
        <div class="col-4">
        <p> <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons"><img src=${nodejs} alt="freepik" style="height:18px;; margin-right:10px""/></a> Node Js</p>
        <p> <a  title="expressjs icons"><img src=${express} alt="freepik" style="height:18px;; margin-right:10px""/></a>Express Js</p>
        <p> <a  title="mongodb icons"><img src=${mongo} alt="freepik" style="height:18px;; margin-right:10px""/></a>MongoDB</p>
        <p> <a href="https://www.flaticon.com/free-icons/github" title="github icons"><img src=${github} alt="freepik" style="height:18px;; margin-right:10px""/></a>Git/Github</p>

        </div>
    </div>
</div>

</div>

    `,
    `
    <div class="container px-0 fw-medium" style="height: 40vh; color: ${fontcolor}; font-family: cursive;">
    <div class="row  mb-4" style="line-height: 7px;">
    <p class=""></p>
    <div class="row mt-1">
    <p class="fw-semibold"><a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=book&query=book&type=icon"><img src=${book} alt="freepik" style="height:18px ; margin-right:10px"/></a>Book Reading</p>
    <p class="fw-semibold mt-3"><a href="https://www.flaticon.com/free-icons/headset" title="headset icons" title="headset icons"><img src=${ headset} alt="freepik" style="height:18px ; margin-right:10px"/></a>Podcast Listening</p>
    <p class="fw-semibold mt-3"><a "https://www.flaticon.com/free-icons/cricket-ball" title="cricket ball icons"><img src=${crciket} alt="freepik" style="height:18px ; margin-right:10px"/></a>Cricket Playing</p>
    
    </div>
</div>
    </div> 
    `

  ];

   
    return (<>
    <div className="container">
        <h2 style={{marginLeft:'6px', color:fontcolor}}>About Me</h2>
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid   px-0 ">
        <div class="collapse navbar-collapse ml-5 " id="navbarNav">
      <ul class="navbar-nav  " style={{fontSize:"18px"}} >
        <li class="nav-item">{present===0 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(0);}}>Life</a> : <a class="nav-link active "   style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(0);}}>Life</a>} </li>
        <li class="nav-item">{present===1 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(1);}} >Education</a> :  <a class="nav-link"  style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(1)}} >Education</a>} </li>
        <li class="nav-item">{present===2 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(2);}} >Skill</a> :  <a class="nav-link"  style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(2)}} >Skill</a>} </li>
        <li class="nav-item">{present===3 ?   <a class="nav-link"  style={{cursor:'pointer'   , color:'gold'}} onClick={()=>{setpresent(3);}} >Hobby</a> :  <a class="nav-link"  style={{cursor:'pointer'   , color:fontcolor}} onClick={()=>{setpresent(3)}} >Hobby</a>} </li>
      </ul>
    </div>
      </div>
       </nav>
       <div
          className="container fw-medium"
          style={{ height: "40vh", color: fontcolor, fontFamily: 'cursive' }}
          dangerouslySetInnerHTML={{ __html: data[present] }}
        /> 
        
     
    </div>
    </> );
}
 
export default About;
