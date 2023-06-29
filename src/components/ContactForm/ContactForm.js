import "./ContactForm.css";
import { Box, Container, Paper, Typography, useTheme, IconButton, Button, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Email } from "@mui/icons-material";

const ContactForm = ({ boxStyle, closeAction }) => {

    const currentTheme = useTheme();
    const [inputs, setInputs] = useState({});

    return (
        <Container maxWidth="sm" disableGutters sx={{ ...boxStyle, overflow: "hidden", minWidth: "300px" }}>
            <IconButton onClick={closeAction} sx={{ position: "absolute", right: "0", top: "0", margin: "10px" }}>
                <CloseIcon />
            </IconButton>
            <Box sx={{ boxSizing: "border-box", display: "flex", alignItems: "flex-start", justifyContent: "baseline", flexDirection: "column", backgroundColor: currentTheme.palette.background.paper, width: "100%", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "20px 20px 5px", gap: "15px" }}>
                    <Email sx={{ fontSize: "35px", marginLeft: "5px" }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" fontSize="1.6rem">Get in touch</Typography>
                        <Typography variant="subtitle1" fontSize="0.8rem" sx={{ transform: "translateY(-10px)" }}>Write a message</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "5px", width: "100%" }}>
                    <div className="inputGroup field">
                        <input type="text" id="nameField" className="nameField inputFields" />
                        <label htmlFor="nameField" className="inputGroup__label">Name</label>
                    </div>
                    <div className="inputGroup field">
                        <input type="email" id="emailField" className="emailField inputFields" />
                        <label htmlFor="emailField" className="inputGroup__label">Email</label>
                    </div>
                    <div className="inputGroup field">
                        <textarea type="text" id="messageField" className="messageField inputFields"></textarea>
                        <label htmlFor="messageField" className="inputGroup__label">Message</label>
                    </div>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%", gap: "5px", padding: { sm: "15px 20px", xs: "15px 0px" }, flexDirection: { sm: "row", xs: "column-reverse" } }}>
                    <Button variant="text" sx={{ width: { sm: "160px", xs: "100%" }, color: "inherit", opacity: "0.7" }} onClick={closeAction} >Cancel</Button>
                    <Button variant="contained" sx={{ width: { sm: "160px", xs: "100%" } }} endIcon={< SendIcon />} > Send</Button>
                </Box>
            </Box>
        </Container >
    );
}

export default ContactForm;