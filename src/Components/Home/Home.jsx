import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Hire from '../WhyHireMe/Hire';
import Programming from "../ProgrammingSkill/Programming";
import Homeimg from './Homeimg.png';
import './Home.css';
function Home() {
  const [showDescription, setShowDescription] = useState(false);
  const [showdiv1, setshowdiv1] = useState(false);
  const [showdiv2, setshowdiv2] = useState(false);
  const [showdiv3, setshowdiv3] = useState(false);
 
   useEffect(() => {
    let time = setTimeout(() => {
      setShowDescription(true);
    }, 1000);
     time=setTimeout(() => {
      setshowdiv1(true);
     }, 1500);
     time=setTimeout(() => {
      setshowdiv2(true);
     }, 1600);
     time=setTimeout(() => {
      setshowdiv3(true);
     }, 1700);
    return () => clearTimeout(time);
  }, []);

  return (
    <Container sx={{ p: 15 }}>
      <Grid container spacing={2} sx={{}}>
        <Grid textAlign={"start"} xs={12} lg={6} md={6}  xl={6} sx={{paddingLeft:"5%",'@media(max-width:1200px) and (min-width:1000px)':{paddingLeft:"9%"}}} >
          <div data-aos="fade-right" data-aos-once="true">
            <Typography sx={{color:"grey",fontWeight:"semibold",paddingBottom:"15px",paddingLeft:"10px",fontSize:"24px",'@media(max-width:900px)':{textAlign:"center ",fontSize:25}}} >
              Hello there, I am
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
           <Typography 
      sx={{ fontSize: "45px", marginLeft: "10px", background: "linear-gradient(to right, #e18284, #71298e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", '@media(max-width:900px)': { textAlign: "center", fontSize: "35px", lineHeight: 1.5 } }}
    >
      Web Developer
    </Typography>      </div>
          )}
        </Grid>
        <Grid textAlign={"center"} sx={{paddingRight:"9%",'@media(max-width:900px)':{textAlign:"center "}}}  xs={12} lg={6} md={6}  xl={6}>
      <div data-aos="fade-up" data-aos-once="true">
       <img src={Homeimg} className="homeimage" style={{height:"350px"}}  alt="" /> 
       </div>
        </Grid>
      </Grid>
      <Grid container textAlign={"center"} sx={{mt:10 ,mb:10}}>
      <Grid item    sm={1.5}md={1} lg={1} xl={1}></Grid>

       <Grid item  xs={12}  sm={3} md={3} lg={3} xl={3} textAlign={"center"}>{showdiv1&&<div data-aos-once="true" data-aos="fade-up"> 10+ Project </div> }</Grid>
       <Grid item  xs={12}  sm={3} md={3} lg={3} xl={3} textAlign={"center"}>{showdiv2&&<div data-aos-once="true" data-aos="fade-up">15+ PR Merge in Open Source Project</div> }</Grid>
       <Grid item  xs={12}  sm={3} md={3} lg={3} xl={3} textAlign={"center"}>{showdiv3&&<div data-aos-once="true" data-aos="fade-up">450+ DSA Problem Solved</div> }</Grid>
        </Grid>
<Programming/>
<Hire/>
    </Container>
  );
}

export default Home;
