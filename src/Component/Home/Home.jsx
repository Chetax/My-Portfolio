import hero from './1694966571091-removebg-preview.png'
const Home = () => {
  return (
    
    <div className="container-fluid"style={{height:'55vh'}}>
     <div className="row">
        <div className="col-2"></div>
       <div className="col-5" style={{display:'flex',justifyContent:'center',flexDirection:'column  '}}>
       <h1 style={{fontSize:'50px'}}><span style={{color:"gold"}}>Hello</span> <br/>I'm Chetan</h1> 
       <h5 className='mt-1'>A Professional Web Developer And <br></br>UI/IX Designer</h5>
       <button type="button" class="btn mt-5 btn-warning" style={{width:'105px'}}>Hire Me</button>
       </div>
       <div className="col-5">
        <img src={hero} style={{height:'55vh',width:'15vw'}} alt="" />
        </div>
        <div className="col-2"></div>
     </div>
    </div>
  );
};

export default Home;
