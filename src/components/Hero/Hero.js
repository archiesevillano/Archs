import "./Hero.css";
import { useTheme, Paper, Container, Box, Typography } from '@mui/material';
import React, { useMemo, useState, useRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Socials from "../Socials/Socials";

const Hero = ({ openContact }) => {

    const currentTheme = useTheme();

    //determines if the user has began to open the portfolio
    const [started, start] = useState(false);
    const alreadyStarted = useMemo(() => {
        return started;
    }, [started]);

    const greetingRef = useRef(null); //greeting div container ref


    //hide 'Hello Greeting Div'
    const toggleGreeting = () => {

        const element = greetingRef.current;

        if (!alreadyStarted) {
            element.style.filter = "blur(10px)";
            element.style.opacity = "0";
            setTimeout(() => {
                element.style.display = "none";
            }, 2000);
            console.log(greetingRef.current);
        }
    }

    return (
        <div className="heroSection">
            <Paper sx={{ width: "95%", height: "90%", position: "absolute", background: currentTheme.palette.background.paper, top: "50%", left: "50%", zIndex: "-1", transform: "translate(-50%, -50%)", opacity: "0.4" }} />
            <div className="hero__hello_container" ref={greetingRef} onClick={toggleGreeting}>
                <span className="hello_container__hello">He<br />llo</span>
            </div>
            <Container disableGutters className="heroSection__content" sx={{ maxWidth: "95%!important", margin: "0", justifyContent: { xl: "space-evenly", sm: "baseline" }, alignItems: { xl: "center", sm: "center" }, flexDirection: { xl: "row", sm: "column" } }}>
                <div className="content__left">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                        <Typography variant="subtitle1" sx={{ fontSize: "1.5rem", textTransform: "uppercase", letterSpacing: "3px" }}>Getting To Know</Typography>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: "2.5rem", margin: 0 }}>Full-Stack Web Developer</Typography>
                        <Typography variant="body1" maxWidth="300px" sx={{ fontSize: "1rem" }}>
                            I am a passionate Web Developer who transform my Ideas into digital reality with Creativity and Technical Expertise
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                            <button class="playstore-button" onClick={openContact}>
                                <EmailIcon className="icon" />
                                <span class="texts">
                                    <span class="text-1">GET IN TOUCH</span>
                                    <span class="text-2">Message me</span>
                                </span>
                            </button>
                            <Socials />
                        </Box>
                    </Box>
                </div>
                <div className="content__right">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/profile.png?alt=media&token=81b46136-89f4-4e90-bfa8-d8151b6989f7"} className="right__pic" />
                </div>
            </Container>
        </div >
    );
}

export default Hero;