import { Button, Divider, Typography, useTheme, Box, Container, Paper } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./ProjectCard.css";

// developmentStatus : completed | deployed | prototyping | underdevelopment
const ProjectCard = ({ image, liveLink, repository, developmentStatus, websiteTitle }) => {
    const currentTheme = useTheme();

    return (
        <div className="projectCard">
            <img src={image} className="project__image" alt="Image not available" />
            <Paper className="floating__div">
                <Box>
                    <Typography variant="body1" fontWeight={"bold"} align="left" fontSize="1.5rem" sx={{ margin: 0, opacity: 1, }}>{websiteTitle}</Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "5px", paddingBottom: "10px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: "0.6rem", color: currentTheme.palette.primary.main }} />
                        <Typography variant="body1" fontSize={"0.9rem"}>{developmentStatus}</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "5px", marginTop: "3px" }}>
                    <Button variant="text" startIcon={<PublicIcon />} sx={{ textTransform: "capitalize", width: "50%", color: currentTheme.palette.text.primary }}>Live</Button>
                    <Button variant="text" startIcon={<CodeIcon />} sx={{ textTransform: "capitalize", width: "50%", color: currentTheme.palette.text.primary }}>Source</Button>
                </Box>
            </Paper>
        </div >
    );
}

export default ProjectCard;