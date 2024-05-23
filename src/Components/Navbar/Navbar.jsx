import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './logo3.png';
import { useEffect, useRef } from "react";
import {NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const pages = ['Home', 'AboutMe', 'Project','ContactMe'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const hasRunRef = useRef(false);
  useEffect(() => {
    if (!hasRunRef.current) {
      Aos.init({ duration: 2000 });
      hasRunRef.current = true;
    }
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" sx={{ top: 0, p: 1.1, bgcolor: 'rgba(255, 255, 255, 0)', backdropFilter: 'blur(6px)' }}>
    <Container maxWidth="xl">
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
         <img src={logo} style={{width:"125px"}}></img>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            {pages.map((page) => (
            
            <NavLink to={page}>
             <div data-aos="fade-down" data-aos-once="true">
                 <Button to={page}
                sx={{ mx: 2, color: 'black' }}
              >
                {page}
              </Button>
              </div>
              </NavLink>
             
            ))}
          
          </Box>




  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
  <IconButton
    size="large"
    aria-label="open menu"
    onClick={handleOpenNavMenu}
    color="black"
  >
    <MenuIcon />
  </IconButton>
  <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
  >
    {pages.map((page) => (
      <MenuItem key={page} onClick={handleCloseNavMenu}>
        <Typography textAlign="center" color="textPrimary">
          {page}
        </Typography>
      </MenuItem>
    ))}
  </Menu>
</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
