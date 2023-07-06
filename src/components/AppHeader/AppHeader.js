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
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Scrollspy from 'react-scrollspy';


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


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    console.log([...sections.map(item => item.path.replace("/#", ""))]);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Scrollspy items={[...sections.map(item => item.path.replace("/#", ""))]} currentClassName="active-section">
                {sections.map((text, index) => (
                    <li key={text?.name + index} disablePadding>
                        <ListItemButton>
                            <HashLink to={text?.path} className="drawer-links" style={{ color: "inherit" }}><ListItemText primary={text.name} /></HashLink>
                        </ListItemButton>
                    </li>
                ))}
            </Scrollspy>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (<Container className={`app-header ${scrolled ? "active" : "none"}`} sx={{ maxWidth: "100%", margin: 0, padding: { sm: "0 60px !important", xs: "0 20px !important" } }}>
        <IconButton onClick={toggleDrawer("left", true)} sx={{ color: scrolled ? "white" : "inherit", display: { sm: "none", xs: "block" }, transform: "translateY(3px)" }}>
            <MenuOutlined />
        </IconButton>
        <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
        >
            {list("left")}
        </Drawer>
        <Box sx={{ width: "40px", height: "40px", marginLeft: "10px", transform: { xl: "translateX(0px)", sm: "translateX(0px)", xs: "translateX(-15px)" } }}>
            <Link to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "inherit", textDecoration: "none" }}>
                <img className="app-logo" src={process.env.REACT_APP_LOGO} alt="logo" />
                <Typography variant="subtitle1" sx={{ display: "inline-block" }}>Archs</Typography>
            </Link>
        </Box>
        <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <ul className="topnav-list">
                {sections.map(item => <li><HashLink key={item?.name + "links"} smooth data-to-scrollspy-id={item?.path.replace("/#", "")} to={item?.path}>{item?.name}</HashLink></li>)}
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