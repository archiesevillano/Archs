import { Tooltip } from "@mui/material";
import { socialLinks } from "../../AppRoutes";
import "./Socials.css";
import { Link } from "react-router-dom";

const Socials = () => {
    return (
        <ul className="socials-list">
            {socialLinks.map(site => <Tooltip title={site?.name}><li><Link style={{ textDecoration: "none", color: "inherit" }} to={site?.path}>{site?.icon}</Link></li></Tooltip>)}
        </ul>
    );
}

export default Socials;