import { Button, Divider, Typography, useTheme, Box, Container, Paper } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./ProjectCard.css";

// developmentStatus : completed | deployed | prototyping | underdevelopment
const ProjectCard = ({ image, liveLink, repository, developmentStatus, websiteTitle }) => {
    const currentTheme = useTheme;

    return (
        <div className="projectCard">
            <img src={image} className="project__image" alt="Image not available" />
            <Paper className="floating__div">
                <Box>
                    <Typography variant="body1">{websiteTitle}</Typography>
                    <Box>
                        <Typography variant="body1">{developmentStatus}</Typography>
                        <Typography variant="body1">"Lorem Sit amet"</Typography>
                        <Typography variant="body1">"Ipsum Dolor</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box>
                    <Button variant="text" startIcon={<PublicIcon />} sx={{ marginRight: "15px" }}>Live Link</Button>
                    <Button variant="text" startIcon={<CodeIcon />} sx={{ marginRight: "15px" }}>Repository</Button>
                </Box>
            </Paper>
        </div>
    );
}

export default ProjectCard;