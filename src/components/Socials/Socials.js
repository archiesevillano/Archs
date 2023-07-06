import { Tooltip, useTheme } from "@mui/material";
import { socialLinks } from "../../AppRoutes";
import "./Socials.css";
import { Link } from "react-router-dom";

const Socials = () => {

    const currentTheme = useTheme();

    const screenSize = window.screen.availWidth;

    return (
        <ul className="socials-list">
            {socialLinks.map((site, index) => <Tooltip title={site?.name}><li><Link key={index + "social-links"} style={{ textDecoration: "none", color: "inherit" }} to={site?.path}>{site?.icon}</Link></li></Tooltip>)}
        </ul>
    );
}

export default Socials;