import { Box, Container, useTheme, Paper, Typography, Button } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';
import "./AboutSection.css";
import { Link } from "react-router-dom";
const AboutSection = () => {

    const currentTheme = useTheme();

    return (
        <Container id="about" maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { lg: "row", sm: "column-reverse", xs: "column-reverse" } }}>
            <Paper square sx={{ filter: "invert(1)", padding: "35px 20px", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "40%", boxSizing: "border-box" }}>
                <Typography variant="body1" fontSize="3rem" fontWeight="bold">ABOUT ME</Typography>
                <Typography variant="body1" sx={{ transform: "translateY(-16px)", opacity: "0.8" }}>Know more about me</Typography>
            </Paper>
            <Paper sx={{ backgroundColor: "#333", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "50%", boxSizing: "border-box", padding: "35px 60px", position: "relative" }}>
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
                    <Typography variant="body1" fontWeight="bold" fontSize="1.2rem" sx={{ margin: "15px 0", color: "white" }}>What's your story?</Typography>
                    <Typography variant="body1" sx={{ margin: "10px 0 20px", opacity: "0.7", color: "white" }}>These questions should help evaluate a candidate's knowledge and understanding of important concepts and practices in web development. Additionally, consider tailoring the questions to your specific requirements and technologies used within your organization.</Typography>
                    <Button variant="text" sx={{ color: currentTheme.palette.primary.main }}>Next</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default AboutSection;