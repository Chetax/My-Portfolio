import { Box, Container, Grid, Typography } from "@mui/material";
import infovista from './infovista.png';
import Bynry from './Banry-ass.png';
import chexshopz from './Chexshopz.png';
function Project() {
    return (
  <>
<Box sx={{pt:15}}>
<Typography sx={{textAlign:'center',color:'#d18cbd',fontSize:35}}>Recent Projects </Typography>   
<Typography variant="subtitle1" sx={{textAlign:'center',fontSize:20,color:'gray'}}>Exploring a Selection of My Diverse Creations</Typography> 
<Grid container spacing={1} sx={{mt:2}}>
<Grid item xl={4} md={6} sm={6} >
<a href="https://github.com/Chetax/InfoVista" target="blanck"> <Typography sx={{textAlign:'center',cursor:"pointer",pb:2}}><img src={infovista} style={{width:"50vh"}}></img></Typography> </a>    <Typography variant="h5" sx={{textAlign:'center',mb:2}}>Infovista</Typography>
    <Typography variant="subtitle1" sx={{color:'grey',textAlign:'center'}}>
InfoVista: A news web app offering comprehensive access to global information, news, and insights, keeping users informed, exploring diverse perspectives, and discovering trending topics.</Typography>
</Grid>
<Grid item xl={4} md={6} sm={6}>
<a href="https://github.com/Chetax/LocateHub/tree/main" target="blanck"> <Typography sx={{textAlign:'center',cursor:"pointer",pb:2}}><img src={Bynry} style={{width:"50vh"}}></img></Typography> </a>

    <Typography variant="h5" sx={{textAlign:'center',mb:2}}> LocateHub</Typography>
    <Typography variant="subtitle1" sx={{color:'grey',textAlign:'center'}}>LocateHub is a web platform that allows users to create profiles, input their geographical addresses, and view all users' locations on an interactive map on the homepage.</Typography>
</Grid>
<Grid item xl={4} md={6} sm={6}>
<a href="https://github.com/Chetax/ChexShopz" target="blanck"> <Typography sx={{textAlign:'center',cursor:"pointer",pb:2}}><img src={chexshopz} style={{width:"50vh"}}></img></Typography> </a>
    <Typography variant="h5" sx={{textAlign:'center',mb:2}}> ChexShopz </Typography>
    <Typography variant="subtitle1" sx={{color:'grey',textAlign:'center'}}>ChexShopz: An e-commerce website built solely with React.js, featuring Context API and Redux for enhanced functionality and seamless user experience.</Typography>
</Grid>

</Grid>

</Box>
  </>
     );
}

export default Project;