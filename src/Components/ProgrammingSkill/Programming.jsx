import { Box, Button, Grid, Typography } from '@mui/material';
import Prog from './Prog.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

const handledownload=()=>{
    const url="https://doc-0c-14-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/2id039dca8imud6tn5110iq925ftcm9r/1p0nrri4lnn1t3o14cc06mlg2tgokum4/1716443850000/3/109076899132961872876/APznzaZ8f5huUpXYQhfZFZH_H5fWa8SLCbNqd_Ehebu1cmKg7Y74FE-LP46DFJbFG6MNxlrtjVUb5rEGHmEsCFpLwlHnJY9mUa9Ejk59siQ3byAr0OUnHLzj-DORNJU3frsNaF2xDDeAzKlxgyOmSN_fq-Uy1b22l-MgCuODvnQmGuM6OKn6m-KsfxpXEbTfFMqBHL3c2OC0Tj8fy3k07wd5Rt2UKfPcEIlH2DdQYxi2Iv4T_BqycjGqS2g48PxD8mENstee5yegVP9c5KDsKnaRHKwjtGaSvaRPp-vUhlOHqDF_K14-iq1BNBruIWDhaCk_beobenDtz8bF6f28H6VqEyTtffIWgTBna8_E3XBCU3te1UeuXr6ZUK0Vgy4iW4CrRQVYibhtJ1u30iJnE7_J34nCLxHAWKwdO-kQHi88_qYGbM2DHco=?authuser=0&nonce=4kidv442v4o8m&user=109076899132961872876&hash=64mqbosrdh6sca5q1m69b4vraei43cgp";
    const link=document.createElement('a');
    link.href=url;
    link.setAttribute('download','Chetan_Padhen_Full_Stack.pdf');
    document.body.appendChild(link);link.click();
    document.body.removeChild(link);
}
const skills = [
  { name: 'React.js', value: 75 },
  { name: 'Html & CSS', value: 90 },
  { name: 'Javascript', value: 80 },
  { name: 'Typescript', value: 60 },
  { name: 'Firebase', value: 50 },
  { name: 'Material UI', value: 70 },
  { name: 'Bootstrap', value: 80 },
  { name: 'Node.js & Express.js', value: 70 },
  { name: 'REST API', value: 80 },
  { name: 'MongoDB', value: 70 },
  { name: 'Next Js', value: 0 },
];

function Programming() {
  return (
    <Grid container spacing={2} sx={{mt:15}}>
      <Grid item xs={12} md={6}>
        <img src={Prog} alt="" style={{ maxWidth: '100%' }} />
      </Grid>
      <Grid item xs={12} md={6} >
        {skills.map((skill, index) => (
          <Box key={index} mb={2} display="flex" alignItems="center">
            <Typography variant="subtitle1" fontWeight="bold" fontFamily="cursive" flex="0.5">
              {skill.name}
            </Typography>
            <Box flex="1" ml={2}>
              <ProgressBar now={skill.value} label={`${skill.value}%`} style={{ width: '100%' }} />
            </Box>
          </Box>
        ))}
         <Button sx={{mt:2}} variant='contained' onClick={handledownload}>Download My CV</Button>
      </Grid>
     
    </Grid>
  );
}

export default Programming;
