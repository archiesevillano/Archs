import { Button, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./ProjectCard.css";

const ProjectCard = ({ projectIcon, projectTitle, shortDescription, developmentStatus }) => {
    return (
        <div className="project-card">
            <header className="header-image">
                <img src={projectIcon} className="header-image-content" />
            </header>
            <div className="textual-content">
                <Typography variant="subtitle1">{shortDescription}</Typography>
                <Typography variant="subtitle1">{projectTitle}</Typography>
                <Button endIcon={<ArrowRightAltIcon />}>View Project</Button>
            </div>
            <Typography>{developmentStatus}</Typography>
        </div>
    );
}

export default ProjectCard;