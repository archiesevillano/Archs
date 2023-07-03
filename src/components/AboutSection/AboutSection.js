import { Box, Container, useTheme, Paper, Typography, Button } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';
import "./AboutSection.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios';

const AboutSection = () => {

    const currentTheme = useTheme();

    // About Section data
    const [aboutList, setAboutList] = useState([]);
    const [content, setContent] = useState({});
    const [counter, setCounter] = useState(0);
    const [contentStyle, setContentStyle] = useState({
        question: { margin: "15px 0", color: "white", transition: "all 0.4s ease-in-out" },
        answer: { margin: "10px 0 20px", opacity: "0.7", color: "white", transition: "all 0.4s ease-in-out" },
    });

    const getAboutData = async () => {
        try {
            const response = await Axios.get("http://localhost:3001/about");
            const data = response?.data;
            data.sort((a, b) => a.order - b.order);
            console.log(data);
            setAboutList(response?.data);
            setContent({ question: data[counter]?.question, answer: data[counter]?.answer });
        } catch (error) {
            console.warn(error);
        }
    }

    // changes the content and style of about
    // creates a fade in and out transitionn when changing content
    const handleNext = () => {
        const incrementValue = counter + 1;
        setContentStyle({
            question: { margin: "15px 0", color: "white", transition: "all 0.4s ease-in-out", opacity: "0" },
            answer: { margin: "10px 0 20px", opacity: "0.7", color: "white", transition: "all 0.4s ease-in-out", opacity: "0" },
        })
        setTimeout(() => {
            setContent({ question: aboutList[incrementValue]?.question, answer: aboutList[incrementValue]?.answer });
            setContentStyle({
                question: { margin: "15px 0", color: "white", transition: "all 0.4s ease-in-out", opacity: "1" },
                answer: { margin: "10px 0 20px", opacity: "0.7", color: "white", transition: "all 0.4s ease-in-out", opacity: "1" },
            })
        }, 600);
        setCounter(incrementValue);
    }


    // changes the content and style of about
    // creates a fade in and out transitionn when changing content
    const handlePrev = () => {
        const decrementValue = counter - 1;
        setContentStyle({
            question: { margin: "15px 0", color: "white", transition: "all 0.4s ease-in-out", opacity: "0" },
            answer: { margin: "10px 0 20px", opacity: "0.7", color: "white", transition: "all 0.4s ease-in-out", opacity: "0" },
        })
        setTimeout(() => {
            setContent({ question: aboutList[decrementValue]?.question, answer: aboutList[decrementValue]?.answer });
            setContentStyle({
                question: { margin: "15px 0", color: "white", transition: "all 0.4s ease-in-out", opacity: "1" },
                answer: { margin: "10px 0 20px", opacity: "0.7", color: "white", transition: "all 0.4s ease-in-out", opacity: "1" },
            })
        }, 600);
        setCounter(decrementValue);
    }

    useEffect(() => {
        getAboutData();
    }, []);

    return (
        <Container id="about" maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { lg: "row", sm: "column", xs: "column" } }}>
            <Paper square sx={{ filter: "invert(1)", padding: "35px 20px", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: { lg: "40%", sm: "70%", xs: "80%" }, boxSizing: "border-box" }}>
                <Typography variant="body1" fontSize="3rem" fontWeight="bold" sx={{ lineHeight: "100%", marginBottom: "15px" }}>ABOUT ME</Typography>
                <Typography variant="body1" sx={{ transform: "translateY(-16px)", opacity: "0.8" }}>Know more about me</Typography>
            </Paper>
            <Paper sx={{ backgroundColor: "#333", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: { lg: "50%", sm: "80%", xs: "90%" }, boxSizing: "border-box", padding: "35px 60px", position: "relative" }}>
                <Box sx={{
                    boxShadow:
                        ` 0px 0px 2.2px rgba(0, 0, 0, 0.107),
  0px 0px 5.3px rgba(0, 0, 0, 0.153),
  0px 0px 10px rgba(0, 0, 0, 0.19),
  0px 0px 17.9px rgba(0, 0, 0, 0.227),
  0px 0px 33.4px rgba(0, 0, 0, 0.273),
  0px 0px 80px rgba(0, 0, 0, 0.38)`
                    , borderRadius: "50%", position: "absolute", top: "50%", left: "-3%", transform: "translateY(-50%)", color: "black", background: "white", display: "flex", justifyContent: "center", alignItems: "center"
                }} >
                    <BoyIcon sx={{ color: "#333", fontSize: "40px" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                    <Typography variant="body1" fontWeight="bold" fontSize="1.2rem" sx={contentStyle?.question}>{content?.question}</Typography>
                    <Typography variant="body1" sx={contentStyle?.answer}>{content?.answer}</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                        {counter > 0 ? <Button variant="text" sx={{ color: currentTheme.palette.primary.main }} onClick={handlePrev}>Prev</Button> : ""}
                        {counter < 2 ? <Button variant="text" sx={{ color: currentTheme.palette.primary.main }} onClick={handleNext}>Next</Button> : ""}
                    </Box>
                </Box>
            </Paper>
        </Container >
    )
}

export default AboutSection;