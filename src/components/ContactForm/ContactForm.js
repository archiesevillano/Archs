import "./ContactForm.css";
import { Box, Container, Paper, Typography, useTheme, IconButton, Button, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext, forwardRef } from 'react';
import { Email } from "@mui/icons-material";
import Axios from 'axios';
import { Notif } from "../../SnackBar";


const ContactForm = forwardRef(({ boxStyle, closeAction }, ref) => {

    const { handleOpen } = useContext(Notif);
    const currentTheme = useTheme();
    const [receiverName, setReceiverName] = useState("");
    const [receiverEmail, setReceiverEmail] = useState("");
    const [receiverMessage, setReceiverMessage] = useState("");
    const postBody = {
        name: receiverName,
        email: receiverEmail,
        message: `<div style="padding:30px;"><p>${receiverMessage}</p><br/><p><b>From ${receiverName}</b></p></div>`,
    }

    const sendForm = async () => {
        try {
            const host = process.env.REACT_APP_SERVER;
            const response = await Axios.post(`${host}/send-email`, postBody);
            console.log(response);
            handleOpen("Sent");
            closeAction();
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <Container ref={ref} maxWidth="sm" disableGutters sx={{ ...boxStyle, overflow: "hidden", minWidth: "300px", margin: "0 20px", margin: 0 }}>
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
                        <input style={{ color: currentTheme.palette.background.paper }} type="text" id="nameField" className="nameField inputFields" autoComplete="off" onChange={e => setReceiverName(e.target.value)} />
                        <label htmlFor="nameField" className="inputGroup__label" style={{ color: "#141414" }}>Name</label>
                    </div>
                    <div className="inputGroup field">
                        <input style={{ color: currentTheme.palette.background.paper }} type="email" id="emailField" className="emailField inputFields" autoComplete="off" onChange={e => setReceiverEmail(e.target.value)} />
                        <label htmlFor="emailField" className="inputGroup__label" style={{ color: "#141414" }}>Email</label>
                    </div>
                    <div className="inputGroup field">
                        <textarea style={{ color: currentTheme.palette.background.paper }} type="text" id="messageField" className="messageField inputFields" autoComplete="off" onChange={e => setReceiverMessage(e.target.value)}></textarea>
                        <label htmlFor="messageField" className="inputGroup__label" style={{ color: "#141414" }}>Message</label>
                    </div>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%", gap: "5px", padding: { sm: "15px 20px", xs: "15px 0px" }, flexDirection: { sm: "row", xs: "column-reverse" } }}>
                    <Button variant="text" sx={{ width: { sm: "160px", xs: "100%" }, color: "inherit", opacity: "0.7" }} onClick={closeAction} >Cancel</Button>
                    <Button variant="contained" sx={{ width: { sm: "160px", xs: "100%" } }} endIcon={< SendIcon />} onClick={sendForm}> Send</Button>
                </Box>
            </Box>
        </Container >
    );
})

export default ContactForm;