import { Button, Typography, useTheme } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./ProjectCard.css";

const ProjectCard = ({ projectImage, projectTitle, shortDescription, developmentStatus }) => {

    const currentTheme = useTheme();

    return (
        <div className="project-card" style={{ backgroundColor: currentTheme.palette.background.paper }}>
            <header className="header-image">
                <img src={projectImage} className="header-image-content" />
            </header>
            <div className="textual-content">
                <Typography variant="subtitle1" align="left" sx={{ marginBottom: "10px", fontSize: "14px" }}>{shortDescription}</Typography>
                <Typography variant="h2" sx={{ fontSize: "40px" }}>{projectTitle}</Typography>
                <Button endIcon={<ArrowRightAltIcon />}>View Project</Button>
            </div>
            <Typography align="left" sx={{ width: "100%", padding: "20px 0px 20px", borderTop: `1px solid ${currentTheme.palette.divider}` }}><BarChartIcon sx={{ display: "inline-block", transform: "translateY(6px)", marginRight: "5px", padding: "0 10px 0 20px" }} />{developmentStatus}</Typography>
        </div>
    );
}

export default ProjectCard;