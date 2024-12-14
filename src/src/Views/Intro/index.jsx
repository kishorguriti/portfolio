import React from "react";
import Header from "../../Components/Header";
import "./intro.scss";
import { Box, Button, Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Intro = () => {
  return (
    <section id="about" className="intro-container">
      <Header />
      <Container maxWidth={false} className="about-section">
        <Typography className="about-typo">
          Hi, There I am Kishor Guriti ,
        </Typography>
        <Typography className="about-typo">MERN Stack Developer,</Typography>
        <Button variant="contained" sx={{borderRadius:"24px" , padding:"6px 12px"}} endIcon={<i class="bi bi-download"></i>}>
  Download Resume
</Button>
      </Container>
      <Container maxWidth={false} className="about-social-container">
        <Box className="social-icons-cont">
          <a href="https://github.com/kishorguriti" target="_blank">
            <GitHubIcon sx={{ cursor: "pointer" }} />
          </a>
         <a href="https://www.linkedin.com/in/kishorguriti/" target="_blank"><LinkedInIcon sx={{ color: "#0A66C2", cursor: "pointer" }} /></a> 
          <a href="https://www.instagram.com/imkishor119/" target="_blank"><InstagramIcon sx={{color: "#DD2A7B",cursor: "pointer"}}/></a>

          <a href="https://x.com/kishor_Guriti" target="_blank"><TwitterIcon sx={{ color: "#3498db", cursor: "pointer" }} /></a>
        </Box>

        <Box sx={{ color: "white" , fontSize:"1rem" }}>2+ Years of  Experience </Box>
      </Container>
    </section>
  );
};

export default Intro;
