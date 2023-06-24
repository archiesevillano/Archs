import { Container, Typography, Box, Button, useTheme } from "@mui/material";
import "./CVSection.css";
import { Download } from "@mui/icons-material";

const CvSection = () => {

    const currentTheme = useTheme();

    return (
        <Container sx={{ maxWidth: "100%!important", margin: 0, height: "50vh", display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: currentTheme.palette.primary.main }} disableGutters>
            <Box sx={{ maxWidth: "500px", minWidth: "300px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                <Typography variant="subtitle1" sx={{ fontSize: "2rem", fontWeight: "bold" }}>Download my latest CV</Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                    Review and obtain the latest version of my CV.  I am excited to discuss further how my skills can bring value to your organization. Send me an email here.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                <Button variant="outlined" className="download__button" sx={{ textTransform: "capitalize!important", letterSpacing: "2px", fontSize: "1.2rem", width: "250px", borderColor: "white", color: "white" }}  >
                    <Download sx={{ marginRight: "15px" }} />
                    Download CV
                </Button>
                <Button variant="text" sx={{ textTransform: "capitalize!important", letterSpacing: "2px", fontSize: "1.2rem", width: "250px", borderColor: "white", color: "white" }}  >
                    Alternative Link
                </Button>
            </Box>
        </Container>
    );
}

export default CvSection;