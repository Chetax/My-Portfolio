import hero from './1694966571091-removebg-preview.png';
import image from './image2.png';
import {useContext } from 'react';
import Context from '../../ContextApi/Context';
const Home = ({position}) => {  

  const {sun, setsun}=useContext(Context);
  let navbarbgcolor="";
  if(position==1)
  navbarbgcolor = sun === 0 ? "whitesmoke" : "black";
  else
  navbarbgcolor = sun === 0 ? "white" : "black";
  const fontcolor = sun === 0 ? "black" : "white";
  if(position===1){
    return (
      <div className="container-fluid " style={{ height: '70vh' ,backgroundColor:navbarbgcolor }}>
        <div className="row pt-5">
          <div className="col-3"></div>
          <div className="col-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '50px' }}>
              <span style={{ color: 'gold' }}>Hello</span> <br />
              <span style={{color:fontcolor}}>I'm Chetan</span> 
            </h1>
            <h5 className="mt-1" style={{color:fontcolor}}>A Professional Web Developer And <br></br>UI/IX Designer</h5>
            <button type="button" className="btn mt-5 btn-warning" style={{ width: '105px' }}>
              Hire Me
            </button>
          </div>
          <div className="col-5">
            <img src={hero} className='img-fluid' style={{ height: '55vh', width: '15vw' }} alt="" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
  else
  {

    return (
      <div className="container-fluid " style={{ height: '70vh' ,backgroundColor:navbarbgcolor }}>
      <div className="row pt-5">
        <div className="col-3"></div>
        <div className="col-4">
          <img src={image} className='img-fluid' style={{ height: '55vh', width: '15vw' }} alt="" />
         </div>   
        <div className="col-5" style={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '50px' }}> <span style={{color:fontcolor}}> About Me </span></h1>
          
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    );

  }
 
};

export default Home;
