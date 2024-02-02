import img1 from './todo1.jpg';
import Context from '../../ContextApi/Context';
import React from "react";
import { useContext,useState } from "react";

const Corusoel = () => {
    const data={
        d1:{
        key:"1",
        img:img1,
        title:"Simple To Do Application",
        brief:"An Dom Manipulation to do wab app where an user can create delete task",
        code:"https://github.com/Chetax/SimpleToDo",
        host:"https://chetax.github.io/SimpleToDo/",
        },
        d2:{
            key:"2",
        title:"Simple To Do Application",
        brief:"An Dom Manipulation to do wab app where an user can create delete task",
        code:"https://github.com/Chetax/SimpleToDo",
        host:"https://chetax.github.io/SimpleToDo/",
        },
        d3:{
            key:"3",
        title:"Simple To Do Application",
        brief:"An Dom Manipulation to do wab app where an user can create delete task",
        code:"https://github.com/Chetax/SimpleToDo",
        host:"https://chetax.github.io/SimpleToDo/",
        },
        
    }

    return ( 
        <>
        <div className="container  m-5 p-5 d-flex" style={{overflowX:"auto",whiteSpace:"nowap"}}>
       <div className="" style={{marginLeft:"55px"}}></div>
       {Object.values(data).map((ele,index)=>(
        <div className=" p-4 bg-dnager text-center ">
           <a href="https://github.com/Chetax/SimpleToDo">
            <img className='img-fluid mb-2'  src={ele.img} alt="Image by Freepik"  style={{height:'275px',borderRadius:"15px"}}/>
            </a> 
            <h4 className="fw-semibold pb-3">{ele.title}</h4 >
            <p className="mt-3">{ele.brief}</p>
       <div className="row">
        <div className="col-2"></div>
        <div className="col-2"><a href={ele.code} className="" style={{textDecoration:'none',fontSize:'20px'}}>code</a> </div>
        <div className="col-2"></div>
        <div className="col-4"><a href={ele.host} className="" style={{textDecoration:'none',fontSize:'20px'}}>live</a> </div>

       </div>
        </div>
       ))}
       
        </div>
        </>
     );
}
 
export default Corusoel;
