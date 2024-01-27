import hero from './1694966571091-removebg-preview.png';
import image from './image2.png';
import bg from './bg.png';
import yellowbg from './yellobg.jpg' 
import {useContext } from 'react';
import Context from '../../ContextApi/Context';
import About from '../ABoutUs/About';
const Home = ({position}) => {  

  const {sun}=useContext(Context);
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
          <div className="col-2"></div>
          <div className="col-5 mt-5" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '50px' }}>
              <span style={{ color: 'gold' }}>Hello</span> <br />
              <span style={{color:fontcolor}}>I'm Chetan</span> 
            </h1>
            <h5 className="mt-1" style={{color:fontcolor}}>A Professional Web Developer And <br></br>UI/IX Designer</h5>
            <button type="button" className="btn mt-5 btn-warning" style={{ width: '105px' }}>
              Hire Me
            </button>
          </div>
          <div className="col-4 " style={{position:'relative'}} >
            <img src={hero} className='img-fluid img-reponsive'  style={{ height: '55vh', width: '13vw' ,position:'absolute',left:'0',right:'0',zIndex:'2',marginLeft:"30px" }} alt="" />
            <img src={yellowbg} className='img-fluid img-reponsive mt-4' style={{ height: '44vh', width: '20vw',position:'absolute',left:'0',top:'50px',borderTopLeftRadius:"75px",borderEndEndRadius:"45px",borderTopRightRadius:"25px",borderEndStartRadius:"15px",zIndex:'1'}} alt="" />
           </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  }
  else
  {

    return (
      <div className="container-fluid " style={{ height: '70vh' ,backgroundColor:navbarbgcolor }}>
      <div className="row pt-5">
        <div className="col-2"></div>
        <div className="col-4" style={{position:'relative'}} >
            <img src={image} className='img-fluid img-reponsive' style={{ height: '55vh', width: '15vw' ,position:'absolute',left:'0',marginLeft:"41px" ,right:'0',zIndex:'2' }} alt="" />
            <img src={yellowbg} className='img-fluid mt-4 img-reponsive' style={{ height: '44vh', width: '20vw',position:'absolute',left:'0',top:'50px',zIndex:'1'}} alt="" />
          </div>
        <div className="col-4" style={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
            <About/>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    );

  }
 
};

export default Home;
