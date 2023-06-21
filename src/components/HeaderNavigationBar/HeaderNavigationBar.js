import { Box, Container, Toolbar, Typography, Button, useTheme, IconButton } from "@mui/material";
import "./HeaderNavigationBar.css";
import Brand from "../Brand/Brand";
import React, { useState, useContext } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ProvideTheme } from "../../AppTheme";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeaderNavigationBar = () => {
    const pages = [
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

    const { mode, setMode } = useContext(ProvideTheme);
    const switchMode = () => {
        //change mode based on the current theme mode
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }

    // get current theme
    const currentTheme = useTheme();

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: currentTheme.palette.background.default }}>
            <Container maxWidth="xl" sx={{ padding: "0.5rem 1rem" }} >
                <Toolbar disableGutters>
                    <Brand />
                    <Box sx={{ justifyContent: "flex-end", flexGrow: 1, gap: "18px", display: "flex" }}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: "18px", alignItems: "center" }}>
                            {pages.map((page) => (
                                <HashLink
                                    smooth
                                    to={page.path}
                                    className="header-pages-nav-items"
                                    data-to-scrollspy-id={page.name.toLocaleLowerCase()}
                                    key={page.className}
                                    style={{ textDecoration: "none", transition: "all 0.2s ease-in-out", color: currentTheme.palette.text.primary, display: 'block', fontSize: '1.2rem', fontFamily: "DM Serif Text" }}
                                >
                                    {page.name}
                                </HashLink>
                            ))}
                        </Box>
                        <IconButton onClick={switchMode}>
                            {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default HeaderNavigationBar;
