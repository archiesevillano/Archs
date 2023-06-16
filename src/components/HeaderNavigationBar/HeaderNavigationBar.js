import { Box, Container, Toolbar, Typography, Button, useTheme } from "@mui/material";
import "./HeaderNavigationBar.css";
import Brand from "../Brand/Brand";
import React, { useState, useContext } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ProvideTheme } from "../../AppTheme";

const HeaderNavigationBar = () => {
    const pages = ["Projects", "About", "Contacts"];

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
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: "18px" }}>
                            {pages.map((page) => (
                                <Typography
                                    variant="h3"
                                    key={page}
                                    sx={{ my: 2, color: 'inherit', display: 'block', fontSize: '1.2rem' }}
                                >
                                    {page}
                                </Typography>
                            ))}
                        </Box>
                        <Button onClick={switchMode} sx={{ borderRadius: "50%", minWidth: "55px" }}>
                            {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default HeaderNavigationBar;