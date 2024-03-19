import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Homeimg from './Homeimg.png';
import './Home.css';
function Home() {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container sx={{ p: 15 }}>
      <Grid container spacing={2} sx={{}}>
        <Grid textAlign={"start"} xs={12} lg={6} md={6}  xl={6} sx={{paddingLeft:"5%",'@media(max-width:1200px) and (min-width:1000px)':{paddingLeft:"9%"}}} >
          <div data-aos="fade-right" data-aos-once="true">
            <Typography sx={{color:"grey",fontWeight:"semibold",paddingBottom:"15px",paddingLeft:"10px",fontSize:"24px",'@media(max-width:900px)':{textAlign:"center ",fontSize:25}}} >
              Hello there, my name is
            </Typography>
          </div>
          <div data-aos="zoom-out-up" data-aos-once="true" className="mt-4 mb-2" style={{lineHeight:"5px"}}>
            <Typography sx={{fontSize:"70px",lineHeight:"50px",'@media(max-width:900px)':{textAlign:"center ",fontSize:45,lineHeight:0.7}}} >Chetan </Typography>
  
            <Typography sx={{fontSize:"70px",lineHeight:"50px",paddingBottom:"15px",color:'grey',marginLeft:"7px",marginTop:"25px",'@media(max-width:900px)':{textAlign:"center ",fontSize:45,lineHeight:0.7}}}>
              Padhen
            </Typography>
          </div>
          {showDescription && (
            <div data-aos="fade-up" data-aos-once="true">
              <Typography sx={{color:"#e18284" ,fontSize:"45px",marginLeft:"10px" ,'@media(max-width:900px)':{textAlign:"center ",fontSize:35,lineHeight:1.5}}}>Web Designer & Developer</Typography>
            </div>
          )}
        </Grid>
        <Grid textAlign={"center"} sx={{paddingRight:"9%",'@media(max-width:900px)':{textAlign:"center "}}}  xs={12} lg={6} md={6}  xl={6}>
      <div data-aos="fade-up" data-aos-once="true">
       <img src={Homeimg} className="homeimage" style={{height:"350px"}}  alt="" /> 
       </div>
        </Grid>
      </Grid>
 
    </Container>
  );
}

export default Home;
