import { Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

export const Notif = React.createContext();

const SnackBar = ({ children }) => {

    const [open, setOpen] = useState(false);
    const [barMessage, setBarMessage] = useState("Done");

    const handleOpen = (message) => {
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
        <Notif.Provider value={{ handleOpen, handleClose }}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={barMessage}
                action={action}
            />
        </Notif.Provider>
    );
}

export default SnackBar;