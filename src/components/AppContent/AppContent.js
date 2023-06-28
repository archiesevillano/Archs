import { Container, Paper, Typography, Button, useTheme, Box } from "@mui/material";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import "./AppContent.css";
import { useMemo, useState } from "react";
import SwiperSection from "../SwiperSection/SwiperSection";
import Axios from "axios";

const AppContent = () => {

    const currentTheme = useTheme();
    const [hasStarted, setStartStatus] = useState(false);
    const started = useMemo(() => {
        return hasStarted ? "100%" : "50%";
    }, [hasStarted]);


    const headerActions = [
        {
            name: "Services",
            action: "",
            icon: <DesignServicesIcon />,
        },
        {
            name: "Download CV",
            action: "",
            icon: <DownloadIcon />,
        },
        {
            name: "Message me",
            action: "",
            icon: <EmailIcon />,
        },
    ]

    return (
        <main className="app-main">
            {/* Desktop and Wider View Screens */}
            <Container maxWidth="xl" sx={{ height: { lg: "85vh", sm: "90vh" }, position: "relative", overflow: "hidden", display: { sm: "block", xs: "none" } }} disableGutters>
                <Paper square sx={{ height: "100%", opacity: "0.2", width: "100%", position: "absolute", top: "0", left: "0", zIndex: "-1" }} />
                <div className="orange-cover" style={{ width: started }}>
                    <span className="bigHello">He<br />llo</span>
                    <Button onClick={() => setStartStatus(!hasStarted)} sx={{ position: "absolute", bottom: "15px", right: "20px", color: currentTheme.palette.text.primary, fontFamily: "Open Sans", zIndex: "1" }} endIcon={hasStarted ? <ArrowBackIcon /> : <ArrowForwardOutlinedIcon />}>
                        {hasStarted ? "Back" : "Get Started"}
                    </Button>
                </div>
                <div className="header-content" style={{ width: hasStarted ? "100%" : "0%", display: "flex", opacity: hasStarted ? "1" : "0" }}>
                    <div className="left">
                        <Box>
                            <Typography variant="h3">I'm</Typography>
                            <Typography variant="h2" sx={{ filter: "invert(1)", fontWeight: "bold", fontSize: "4.5rem", textTransform: "uppercase" }}>Archie<br />Sevillano</Typography>
                            <Typography variant="h3" sx={{ fontSize: "2rem" }}>Full-Stack Web Developer</Typography>
                            <Typography variant="body1" maxWidth="300px" sx={{ marginTop: "10px", fontSize: "1rem" }}>
                                I am a passionate Web Developer who transform my Ideas into digital reality with Creativity and Technical Expertise
                            </Typography>

                        </Box>
                    </div>
                    <div className="right">
                        <img src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/profile.png?alt=media&token=81b46136-89f4-4e90-bfa8-d8151b6989f7"} className="profile-pic" />
                    </div>
                </div>
            </Container>

            {/* Mobile View */}
            <Container className="mob-view-header-content" maxWidth="lg" sx={{ overflow: "hidden", margin: 0, display: { sm: "none", xs: "flex" }, height: "100vh", justifyContent: "center", alignItems: "flex-end" }} disableGutters>
                <Box className="content">
                    <Typography variant="h3" sx={{ color: "white", }}>I'm</Typography>
                    <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "2.5rem", textTransform: "uppercase", color: currentTheme.palette.primary.main }}>Archie<br />Sevillano</Typography>
                    <Typography variant="h3" sx={{ fontSize: "2rem", color: "white" }}>Full-Stack Web Developer</Typography>
                    <Typography variant="body1" maxWidth="300px" sx={{ marginTop: "10px", fontSize: "1rem", color: "white", }}>
                        I am a passionate Web Developer who transform my Ideas into digital reality with Creativity and Technical Expertise
                    </Typography>
                </Box>
                <img src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/profile.png?alt=media&token=81b46136-89f4-4e90-bfa8-d8151b6989f7"} className="profile-pic" />
            </Container>
        </main >
    );
}

export default AppContent;