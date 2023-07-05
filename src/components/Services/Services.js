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
            const host = process.env.REACT_APP_SERVER;
            const response = await Axios.get(`${host}/services`);
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
        <Container className="services-section" maxWidth="lg" id="services" sx={{ display: "flex", marginTop: "50px", marginBottom: { md: "50px", xs: "0px" } }}>
            <Typography variant="h3" align="center" sx={{ padding: "20px" }}>Services</Typography>
            <Typography variant="subtitle1" align="center" sx={{ maxWidth: "800px" }}>
                I specialize in creating visually appealing and well-crafted websites that are also responsive, ensuring optimal user experience across different devices and screen sizes.
            </Typography>
            <Container className="services-wrapper" sx={{ padding: { md: "30px 20px", xs: "50px 10px" }, display: "flex", flexDirection: { sm: "row", xs: "column", } }}>
                {currentService.map((item, index) => card(icons[index], item.title, item.description))}
            </Container>
        </Container>
    );
}

export default Services;
