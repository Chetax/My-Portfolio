import { Box, Button, Grid, Typography } from '@mui/material';
import Prog from './Prog.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

const handledownload=()=>{
    const url="https://drive.google.com/file/d/1a9gWzrMqrdkHiV9jO_Q2QSxazU6u3Mji/view";
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
