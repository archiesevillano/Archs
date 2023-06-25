import { Paper, Container, Typography, Box } from "@mui/material";
import { useState, useEffect } from 'react';
import Axios from "axios";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

import "./Services.css";

const Services = () => {

    const [currentService, setServices] = useState([]);
    const icons = [<DesignServicesOutlinedIcon sx={{ fontSize: "35px" }} />, <CodeOutlinedIcon sx={{ fontSize: "35px" }} />, <AnalyticsOutlinedIcon sx={{ fontSize: "35px" }} />];
    const getServices = async () => {
        try {
            const response = await Axios.get("http://localhost:3001/services");
            const data = await response.data;
            const svc = data.myservices;

            setServices(svc);
            return svc;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getServices();
    }, []);

    const card = (icon, title, details) => {
        return (<Paper key={title} className="services-card" sx={{ margin: { md: "20px", xs: "0" } }}>
            <div className="icon-container">
                {icon}
            </div>
            <div className="textual-content">
                <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{title}</p>
                <p>{details}</p>
            </div>
        </Paper>)
    }

    return (
        <Container className="services-section" maxWidth="lg" id="services" sx={{ marginTop: "50px" }}>
            <Typography variant="h3" align="center">Services</Typography>
            <Container className="services-wrapper" sx={{ padding: { md: "30px 20px", xs: "30px 10px" }, display: "flex", flexDirection: { sm: "row", xs: "column", } }}>
                {currentService.map((item, index) => card(icons[index], item.title, item.description))}
            </Container>
        </Container>
    );
}

export default Services;


// Accordion Skills
// Responsive Header
// Responsive Hero
// Spy Navigation Bar
// About New Design