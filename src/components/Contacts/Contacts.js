import { Container, Box, IconButton, Typography, useTheme, Snackbar, Button } from "@mui/material";
import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import "./Contacts.css";
import { Link } from "react-router-dom";

const Contacts = ({ phoneNumber, address, email }) => {

    const [open, setOpen] = useState(false);
    const [barMessage, setBarMessage] = useState("Done");
    const currentTheme = useTheme();

    const handleCopy = item => {

        switch (item) {
            case "email":
                navigator.clipboard.writeText(email);
                break;
            case "address":
                navigator.clipboard.writeText(address);
                break;
            case "phone":
                navigator.clipboard.writeText(phoneNumber);
                break;
        }
    }

    const handleClick = (message, copyItem) => {
        handleCopy(copyItem); //copies specific item based on the passed argument
        setBarMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <footer className="appfooter" style={{ backgroundColor: currentTheme.palette.background.paper }} id="contacts">
            <Container maxWidth="lg" disableGutters>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img style={{ width: "75px", height: "75px" }} src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/archs.svg?alt=media&token=877a5271-feee-4ef0-b6ed-efbc205d52b4"} alt="logo" />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                        <Typography fontSize="1.5rem" fontWeight="bold">
                            Archs
                        </Typography>
                        <Typography sx={{ transform: "translateY(-10px)", display: "inline-block" }}>
                            Portfolio
                        </Typography>
                    </Box>
                </Box>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" }, justifyContent: "space-evenly", alignItems: "center", gap: "30px" }}>
                    <Box maxWidth="sm">
                        <ul className="contact-details-list">
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
                                        <IconButton aria-label="copy" onClick={() => handleClick("Address Copied", "address")}>
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
                                        <IconButton aria-label="copy" onClick={() => handleClick("Email Copied", "email")}>
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
                                        <IconButton aria-label="copy" onClick={() => handleClick("Phone Number Copied", "phone")}>
                                            <ContentCopyIcon sx={{ fontSize: "15px", opacity: "0.8" }} />
                                        </IconButton>
                                    </Box>
                                </Container>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography variant="h3" sx={{ fontSize: "25px", marginBottom: "10px" }}>
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
                        <Typography variant="h3" sx={{ fontSize: "25px", marginBottom: "10px" }}>
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
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={barMessage}
                action={action}
            />
        </footer >
    );
}

export default Contacts;