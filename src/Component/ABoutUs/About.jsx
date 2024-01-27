import React from "react";
import Context from '../../ContextApi/Context';
import { useContext } from "react";
const About = () => {
    const {sun}=useContext(Context);
    const fontcolor = sun === 0 ? "black" : "white";
    let present=0;
    return (<>
    <div className="container">
        <h2 style={{marginLeft:'6px',color:fontcolor}}>About Me</h2>
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid   px-0 ">
        <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav " style={{fontSize:"18px"}} >
        <li class="nav-item">
        {present===0 ?  <a class="nav-link active " aria-current="page" href="#" style={{color:'gold'}}>Life</a> : <a class="nav-link active " aria-current="page" href="#" style={{color:fontcolor}}>Home</a>} 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:fontcolor}} >Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:fontcolor}}>Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true" style={{color:fontcolor}}>Disabled</a>
        </li>
      </ul>
    </div>
      </div>
       </nav>
    <div className="container fw-semibold" style={{height:"40vh",color:fontcolor,fontFamily:'Sans-serif'}}>
<p className="ms-auto" style={{textAlign: "justify" }}>I'm Chetan Padhen From Nagpur Also Know As Orange City.
I am Persuing My Becholor Desgree in Computer From Pimpri Chinchwad Collage Of Enginerring
Which Enable Me To Desgin And Develop Software System. 
I possess a set of technical skills, including C/C++, HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. Apart From Technical Skills I Have team management and leadership skill.
My Project experience and open source contribution enabling me to create robust and responsive Web applications.
I Completet Hactoberfest Challnge by merging six pull requests in open-source projects.</p>
    </div>
    </div>
    </> );
}
 
export default About;