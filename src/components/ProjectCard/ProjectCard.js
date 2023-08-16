import { Button, Divider, Typography, useTheme, Box, Container, Paper } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GitHub } from "@mui/icons-material";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

// developmentStatus : completed | deployed | prototyping | underdevelopment
const ProjectCard = ({ image, name, repository, }) => {
    const currentTheme = useTheme();

    return (
        <div className="projectCard">
            <img src={image} className="project__image" alt="Image not available" />
            <div className="projectOverlay">
                <p>{name}</p>
                <Link to={repository}>
                    <GitHub />
                </Link>
            </div>
        </div >
    );
}

export default ProjectCard;