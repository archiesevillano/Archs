import { Toolbar, Container, Box, Typography, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';
import "./AppHeader.css";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ProvideTheme } from "../../AppTheme";
import { HashLink } from "react-router-hash-link";
import { Menu, MenuOutlined } from "@mui/icons-material";
import { sections } from "../../AppRoutes";

const AppHeader = () => {

    const { mode, setMode } = useContext(ProvideTheme);
    const switchMode = () => {
        //change mode based on the current theme mode
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }
    const [scrolled, setScrolled] = useState(false);

    // get current theme
    const currentTheme = useTheme();

    //checks if the user has scrolled down, if true navigation bar will change style
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<Container className={`app-header ${scrolled ? "active" : "none"}`} sx={{ maxWidth: "100%", margin: 0 }}>
        <IconButton sx={{ color: scrolled ? "white" : "inherit", display: { sm: "none", xs: "block" }, transform: "translateY(3px)" }}>
            <MenuOutlined />
        </IconButton>
        <Box sx={{ width: "40px", height: "40px", marginLeft: "10px" }}>
            <Link to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "inherit", textDecoration: "none" }}>
                <img className="app-logo" src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/archs.svg?alt=media&token=877a5271-feee-4ef0-b6ed-efbc205d52b4"} alt="logo" />
                <Typography variant="subtitle1" sx={{ display: "inline-block" }}>Archs</Typography>
            </Link>
        </Box>
        <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <ul className="topnav-list">
                {sections.map(item => <li><HashLink smooth data-to-scrollspy-id={item?.path.replace("/#", "")} to={item?.path}>{item?.name}</HashLink></li>)}
                <li>
                    <IconButton onClick={switchMode} sx={{ color: scrolled ? "white" : "inherit" }}>
                        {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                    </IconButton>
                </li>
            </ul>
        </Box>
        <IconButton onClick={switchMode} sx={{ color: scrolled ? "white" : "inherit", display: { sm: "none", xs: "block" }, transform: "translateY(3px)" }}>
            {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
        </IconButton>

    </Container >);
}

export default AppHeader;