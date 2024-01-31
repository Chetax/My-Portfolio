import Context from '../../ContextApi/Context';
import React from "react";
import { useContext,useState } from "react";
const Project = () => {
  const {sun}=useContext(Context);
  const fontcolor = sun === 0 ? "black" : "white";
  const [present,setpresent]=useState(0);
  const backbgcolor = sun === 0 ? "white" : "black";
    return ( <>
<div className="container-fluid  p-5"  style={{backgroundColor:backbgcolor,color:fontcolor,fontFamily:"cursive"}}>
    <h1 className='text-center p-5'> Look Out My New Work</h1>
  <div class="container">
   <div className="row " style={{fontSize:'18px',cursor:"pointer"}}>
    <div className="col-1"></div>
     <div className="col-2 text-center" style={ present===0 ? {color:"gold"} : {color:fontcolor} } onClick={()=>{setpresent(0);}}>Dom Manipulatiion</div>
     <div className="col-2 text-center" style={ present===1 ? {color:"gold"} : {color:fontcolor} } onClick={()=>{setpresent(1);}}>Api Intigration</div>
     <div className="col-2 text-center" style={ present===2 ? {color:"gold"} : {color:fontcolor} } onClick={()=>{setpresent(2);}}>Game</div>
     <div className="col-2 text-center" style={ present===3 ? {color:"gold"} : {color:fontcolor} } onClick={()=>{setpresent(3);}}>Video Streming</div>
     <div className="col-2 text-center" style={ present===4 ? {color:"gold"} : {color:fontcolor} } onClick={()=>{setpresent(4);}}>Eccomerce</div>
    <div className="col-1">
    </div>
   </div>
  </div>




</div>


    </> );
}
 
export default Project;