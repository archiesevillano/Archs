import { Box, Container, Toolbar, Typography, Button, useTheme, IconButton } from "@mui/material";
import "./HeaderNavigationBar.css";
import Brand from "../Brand/Brand";
import React, { useState, useContext } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ProvideTheme } from "../../AppTheme";
import { Link } from "react-router-dom";

const HeaderNavigationBar = () => {
    const pages = ["Projects", "Services", "About", "Contacts"];

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
                                <Link

                                    data-to-scrollspy-id={page}
                                    key={page}
                                    style={{ transition: "all 0.2s ease-in-out", color: currentTheme.palette.text, display: 'block', fontSize: '1.2rem', fontFamily: "DM Serif Text" }}
                                >
                                    {page}
                                </Link>
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


// Apply Styles on the header navigation bar
// Apply Download CV