import { Toolbar, Container, Box, Typography, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
import "./AppHeader.css";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ProvideTheme } from "../../AppTheme";
import { HashLink } from "react-router-hash-link";
import { Menu } from "@mui/icons-material";

const sections = [
    {
        name: "Services",
        path: "/#services",
    },
    {
        name: "Projects",
        path: "/#projects",
    },
    {
        name: "About",
        path: "/#about",
    },
    {
        name: "Contacts",
        path: "/#contacts",
    },
];

const AppHeader = () => {

    const { mode, setMode } = useContext(ProvideTheme);
    const switchMode = () => {
        //change mode based on the current theme mode
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }

    // get current theme
    const currentTheme = useTheme();

    return (<Container className={"app-header"} sx={{ maxWidth: "100%", margin: 0, padding: "0 60px!important" }}>
        <Box sx={{ width: "40px", height: "40px", marginLeft: "10px" }}>
            <Link to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "inherit", textDecoration: "none" }}>
                <img className="app-logo" src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/archs.svg?alt=media&token=877a5271-feee-4ef0-b6ed-efbc205d52b4"} alt="logo" />
                <Typography variant="subtitle1" sx={{ display: "inline-block" }}>Archs</Typography>
            </Link>
        </Box>
        <ul className="topnav-list">
            {sections.map(item => <li><Link to={item?.path}>{item?.name}</Link></li>)}
            <li>
                <IconButton onClick={switchMode}>
                    {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                </IconButton>
            </li>
        </ul>
    </Container >);
}

export default AppHeader;