import { Tooltip, useTheme } from "@mui/material";
import { socialLinks } from "../../AppRoutes";
import "./Socials.css";
import { Link } from "react-router-dom";

const Socials = () => {

    const currentTheme = useTheme();

    const screenSize = window.screen.availWidth;

    return (
        <ul className="socials-list">
            {socialLinks.map((site, index) => <Tooltip title={site?.name} key={index + "social-links"}><li key={index + "social-links"}><Link key={index + "social-links"} style={{ textDecoration: "none", color: "inherit" }} to={site?.path}>{site?.icon}</Link></li></Tooltip>)}
        </ul>
    );
}

export default Socials;