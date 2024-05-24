import { Box, Container, Grid, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
function Hire() {
    return ( <>
    <Box sx={{pt:15}}>
<Typography sx={{textAlign:'center',color:'#d18cbd',fontSize:35}}>Why Hire Me </Typography>   
<Typography variant="subtitle1" sx={{textAlign:'center',fontSize:20,color:'gray'}}>In this section I will provide you with some reasons to hire me to get you to high levels of success with my <br></br> services.</Typography> 

<Grid container spacing={1} sx={{mt:2}}>
<Grid item xl={4} md={6} sm={6} >
    <Typography sx={{textAlign:'center',fontSize:"5px"}}> <CheckCircleOutlineRoundedIcon style={{color:'green',fontSize:"35px"}}/></Typography>
    <Typography variant="h5" sx={{textAlign:'center',mb:2}}>Comprehensive Technical <br></br>Skills</Typography>
    <Typography variant="subtitle1" sx={{color:'grey',textAlign:'center'}}>Possessing diverse technical expertise, I seamlessly navigate front-end and back-end realms, adept in various frameworks, libraries, and databases, ensuring holistic project execution.</Typography>
</Grid>
<Grid item xl={4} md={6} sm={6}>
<Typography sx={{textAlign:'center',fontSize:"5px"}}> <CheckCircleOutlineRoundedIcon style={{color:'green',fontSize:"35px"}}/></Typography>
   
    <Typography variant="h5" sx={{textAlign:'center',mb:2}}>Quality and Innovation <br></br> Focused</Typography>
    <Typography variant="subtitle1" sx={{color:'grey',textAlign:'center'}}>As an open-source contributor, I stay updated with industry trends and best practices, delivering high-quality, innovative solutions. My work reflects a commitment to continuous learning.</Typography>
</Grid>
<Grid item xl={4} md={6} sm={6}>
<Typography sx={{textAlign:'center',fontSize:"5px"}}> <CheckCircleOutlineRoundedIcon style={{color:'green',fontSize:"35px"}}/></Typography>
   
    <Typography variant="h5" sx={{textAlign:'center',mb:2}}>Problem-Solving and Team Collaboration</Typography>
    <Typography variant="subtitle1" sx={{color:'grey',textAlign:'center'}}>My computer engineering studies have sharpened my analytical skills for tackling complex problems. I thrive in collaborative environments, contributing to successful project outcomes and team cohesion.</Typography>
</Grid>

</Grid>


</Box>

    </> );
}

export default Hire;