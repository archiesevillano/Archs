import "./Hero.css";
import { useTheme, Paper, Container, Box, Typography } from '@mui/material';
import React, { useMemo, useState, useRef, useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Socials from "../Socials/Socials";

const Hero = ({ openContact }) => {

    const currentTheme = useTheme();

    //determines if the user has began to open the portfolio
    const [started, start] = useState(false);
    const [visibility, setVisibility] = useState({ blur: "12px", opacity: "0.3" });
    useEffect(() => {
        // blurry effect when the portfolio hasn't opened or started yet
        if (started == true) {
            setVisibility({ blur: "0", opacity: "1" });
            console.log("opened");
        }
        else {
            setVisibility({ blur: "12px", opacity: "0.3" });
            console.log("closed");
        }
    }, [started]);

    const greetingRef = useRef(null); //greeting div container ref


    //hide 'Hello Greeting Div'
    const handleHideGreeting = () => {

        const element = greetingRef.current;

        if (!started) {
            element.style.filter = "blur(10px)";
            element.style.opacity = "0";
            setTimeout(() => {
                element.style.display = "none";
            }, 2000);
            start(true);
        }
    }

    return (
        <div className="heroSection" id="get-started">
            <Paper sx={{ width: "95%", height: "90%", position: "absolute", background: currentTheme.palette.background.paper, top: "50%", left: "50%", zIndex: "-1", transform: "translate(-50%, -50%)", opacity: "0.4" }} />
            <div className="hero__hello_container" ref={greetingRef} onClick={handleHideGreeting}>
                <span className="hello_container__hello">He<br />llo</span>
            </div>
            <Container disableGutters className={`heroSection__content ${started ? "active" : ""}`} sx={{ filter: `blur(${visibility?.blur}) opacity(${visibility?.opacity})`, transition: "all 0.5s ease-in-out", maxWidth: "95%!important", margin: "0", justifyContent: { xl: "space-evenly", xs: "baseline" }, alignItems: { xl: "center", xs: "center" }, flexDirection: { md: "row", xs: "column-reverse" } }}>
                <div className="content__left">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                        <Typography variant="subtitle1" sx={{ fontSize: "1.5rem", textTransform: "uppercase", letterSpacing: "3px" }}>Getting To Know</Typography>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: "2.5rem", margin: 0, lineHeight: "100%" }}>Full-Stack Web Developer</Typography>
                        <Typography variant="body1" maxWidth="300px" sx={{ fontSize: "1rem", marginTop: "5px" }}>
                            I am a passionate Web Developer who transform my Ideas into digital reality with Creativity and Technical Expertise
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
                            <button class="getInTouch-button" onClick={openContact}>
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