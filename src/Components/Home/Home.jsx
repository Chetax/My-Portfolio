import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";

function Home() {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container sx={{ p: 15 }}>
      <Grid container spacing={2}>
        <Grid textAlign={"start"} xs={6}>
          <div data-aos="fade-right">
            <Typography color={"grey"} fontWeight={"semibold"} fontSize={"25px"}>
              Hello there, my name is
            </Typography>
          </div>
          <div data-aos="zoom-out-up">
            <Typography fontSize={"70px"}>Chetan </Typography>
  
            <Typography color="grey" fontSize={"70px"}>
              <span>Padhen</span>
            </Typography>
          </div>
          {showDescription && (
            <div data-aos="fade-up">
              <Typography>Web Designer & Developer</Typography>
            </div>
          )}
        </Grid>
        <Grid textAlign={"center"} xs={6}>
          Computer Engg Student
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
