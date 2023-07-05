import { Container, Box, IconButton, Typography, useTheme, Snackbar, Button, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./Contacts.css";
import { Link } from "react-router-dom";
import { Notif } from "../../SnackBar";

const Contacts = ({ phoneNumber, address, email }) => {

    const currentTheme = useTheme();
    const medq = useMediaQuery('(max-width: 764px)');
    const { handleOpen } = useContext(Notif);

    const handleCopy = item => {

        switch (item) {
            case "email":
                navigator.clipboard.writeText(email);
                handleOpen("Email Copied");
                break;
            case "address":
                navigator.clipboard.writeText(address);
                handleOpen("Address Copied");
                break;
            case "phone":
                navigator.clipboard.writeText(phoneNumber);
                handleOpen("Phone Number Copied");
                break;
        }
    }

    return (
        <footer className="appfooter" style={{ backgroundColor: currentTheme.palette.background.paper }} id="contacts">
            <Container maxWidth="lg" disableGutters>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img style={{ width: "75px", height: "75px" }} src={process.env.REACT_APP_LOGO} alt="logo" />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                        <Typography fontSize="1.5rem" fontWeight="bold">
                            Archs
                        </Typography>
                        <Typography sx={{ transform: "translateY(-10px)", display: "inline-block" }}>
                            Portfolio
                        </Typography>
                    </Box>
                </Box>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: medq ? "column" : "row", justifyContent: medq ? "center" : "space-evenly", alignItems: "center", gap: "30px" }}>
                    <Box maxWidth="sm">
                        <ul className="contact-details-list" >
                            <li>
                                <Container sx={{ maxWidth: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Box>
                                        <LocationOnOutlinedIcon sx={{ fontSize: "35px" }} />
                                    </Box>
                                    <Box>
                                        <p className="detail-header">My Address</p>
                                        <p className="detail-content">{address}</p>
                                    </Box>
                                    <Box>
                                        <IconButton aria-label="copy" onClick={() => handleCopy("address")}>
                                            <ContentCopyIcon sx={{ fontSize: "15px", opacity: "0.8" }} />
                                        </IconButton>
                                    </Box>
                                </Container>
                            </li>
                            <li>
                                <Container sx={{ maxWidth: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Box>
                                        <EmailOutlinedIcon sx={{ fontSize: "35px" }} />
                                    </Box>
                                    <Box>
                                        <p className="detail-header">Send an Email</p>
                                        <p className="detail-content">{email}</p>
                                    </Box>
                                    <Box>
                                        <IconButton aria-label="copy" onClick={() => handleCopy("email")}>
                                            <ContentCopyIcon sx={{ fontSize: "15px", opacity: "0.8" }} />
                                        </IconButton>
                                    </Box>
                                </Container>
                            </li>
                            <li>
                                <Container sx={{ maxWidth: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Box>
                                        <LocalPhoneOutlinedIcon sx={{ fontSize: "35px" }} />
                                    </Box>
                                    <Box>
                                        <p className="detail-header">Text or Call me</p>
                                        <p className="detail-content">{phoneNumber}</p>
                                    </Box>
                                    <Box>
                                        <IconButton aria-label="copy" onClick={() => handleCopy("phone")}>
                                            <ContentCopyIcon sx={{ fontSize: "15px", opacity: "0.8" }} />
                                        </IconButton>
                                    </Box>
                                </Container>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography variant="h3" sx={{ fontSize: "25px", marginBottom: "10px", textAlign: medq ? "center" : "left" }}>
                            More
                        </Typography>
                        <ul className="more-list">
                            <li>
                                <Link to="/">Download GIT Cheatsheet</Link>
                            </li>
                            <li>
                                <Link to="/">Google Free APIS</Link>
                            </li>
                            <li>
                                <Link to="/">OpenAI - ChatGPT</Link>
                            </li>
                            <li>
                                <Link to="/">FontAwesome</Link>
                            </li>
                            <li>
                                <Link to="/">Neumorphism</Link>
                            </li>
                            <li>
                                <Link to="/">Bootstrap</Link>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography variant="h3" sx={{ fontSize: "25px", marginBottom: "10px", textAlign: medq ? "center" : "left" }}>
                            Links
                        </Typography>
                        <ul className="more-list">
                            <li>
                                <Link to="/">Terms of Service</Link>
                            </li>
                            <li>
                                <Link to="/">Download CV</Link>
                            </li>
                            <li>
                                <Link to="/">Projects</Link>
                            </li>
                            <li>
                                <Link to="/">Services</Link>
                            </li>
                            <li>
                                <Link to="/">Skills</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                        </ul>
                    </Box>
                </Container>
            </Container>
            <Container maxWidth="lg" disableGutters sx={{ marginTop: "30px" }}>
                <Typography align="center" variant="subtitle1">Copyright &copy; 2023 Archie Cedeño Sevillano</Typography>
                <Typography align="center" variant="subtitle1">Website Portfolio</Typography>
            </Container>
        </footer >
    );
}

export default Contacts;