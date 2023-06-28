import "./Hero.css";
import { useTheme, Paper } from '@mui/material';
import React, { useMemo, useState, useRef } from 'react';

const Hero = () => {

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
            <Paper sx={{ width: "95%", height: "90%", position: "absolute", background: currentTheme.palette.background.paper, top: "50%", left: "50%", zIndex: "0", transform: "translate(-50%, -50%)", opacity: "0.4" }} />
            <div className="hero__hello_container" ref={greetingRef} onClick={toggleGreeting}>
                <span className="hello_container__hello">He<br />llo</span>
            </div>
        </div>
    );
}

export default Hero;