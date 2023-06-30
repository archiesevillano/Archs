import { Box, Container, Toolbar, Typography, Button, useTheme, IconButton, ListItem, List, ListItemButton, Divider, ListItemText, Drawer } from "@mui/material";
import "./HeaderNavigationBar.css";
import Brand from "../Brand/Brand";
import React, { useState, useContext } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ProvideTheme } from "../../AppTheme";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu } from "@mui/icons-material";

const HeaderNavigationBar = () => {

    // UseState for Side Bar
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (event, anchor, open) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={(e) => toggleDrawer(e, anchor, false)}
            onKeyDown={(e) => toggleDrawer(e, anchor, false)}
        >
            <List>
                <Typography variant="h3" sx={{ padding: "20px", fontSize: "1.4rem" }}>
                    Menu</Typography>
                {/* {sections.map((navItem, index) => (
                    <ListItem key={navItem?.name} disablePadding>
                        <ListItemButton>
                            <ListItemText data-to-scrollspy-id={navItem?.name.toLowercase} component="a" href={navItem?.path} primary={navItem?.name} />
                        </ListItemButton>
                    </ListItem>
                ))} */}
            </List>
        </Box>
    );

    const { mode, setMode } = useContext(ProvideTheme);
    const switchMode = () => {
        //change mode based on the current theme mode
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }

    // get current theme
    const currentTheme = useTheme();

    return (
        <>
            {/* Large Screen View */}
            <Box sx={{ display: { xl: "block", xs: "none" }, flexGrow: 1, backgroundColor: currentTheme.palette.background.default }}>
                <Container maxWidth="xl" sx={{ padding: "0.5rem 1rem" }} >
                    <Toolbar disableGutters>
                        <Brand />
                        <Box sx={{ justifyContent: "flex-end", flexGrow: 1, gap: "18px", display: "flex" }}>
                            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: "18px", alignItems: "center" }}>
                                {/* {sections.map((page) => (
                                    <HashLink
                                        smooth
                                        to={page.path}
                                        className="header-sections-nav-items"
                                        data-to-scrollspy-id={page.name.toLocaleLowerCase()}
                                        key={page.className}
                                        style={{ textDecoration: "none", transition: "all 0.2s ease-in-out", color: currentTheme.palette.text.primary, display: 'block', fontSize: '1.2rem', fontFamily: "DM Serif Text" }}
                                    >
                                        {page.name}
                                    </HashLink>
                                ))} */}
                            </Box>
                            <IconButton onClick={switchMode}>
                                {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>


            {/* Mobile or lower screen size */}
            <Box sx={{ display: { xl: "none", xs: "block" }, flexGrow: 1 }}>
                <Container maxWidth="xl" sx={{ padding: "0.5rem 1rem" }} >
                    <Toolbar sx={{ display: "flex", flexDirection: "column" }} disableGutters>
                        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", flexGrow: 1, gap: "18px", width: "100%" }}>
                            <IconButton onClick={(e) => toggleDrawer(e, "left", true)}>
                                <Menu />
                            </IconButton>
                            <IconButton onClick={switchMode}>
                                {mode === "dark" ? <DarkModeIcon /> : <Brightness7Icon />}
                            </IconButton>
                        </Box>
                        <Brand />
                    </Toolbar>
                </Container>
            </Box >

            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={(e) => toggleDrawer(e, "left", false)}
            >
                {list("left")}
            </Drawer>
        </>

    );
}

export default HeaderNavigationBar;