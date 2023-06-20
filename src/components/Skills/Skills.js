import { Container, Paper, Box, Typography, Button } from "@mui/material";
import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import Axios from "axios";
import { useEffect, useState } from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

const Skills = () => {
    const [visibleData, setVisibleData] = useState([]);
    const [hiddenData, setHiddenData] = useState([]);
    const [isAllVisible, setAllVisibility] = useState(false);
    const [isAscending, setAscesding] = useState(true);

    const getTechs = async () => {
        const newList = await Axios.get("http://localhost:3001/technologies");
        const data = newList.data;

        const hidden = data.splice(5, 6);
        const visible = data;
        setVisibleData(visible);
        setHiddenData(hiddenData);

        console.log(visible);
        console.log(data);
    }

    useEffect(() => {
        getTechs();
    }, []);

    const toggleBtns = () => {
        return (
            <Box sx={{ display: "flex", gap: "8px" }}>
                <Button startIcon={isAllVisible ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}>{isAllVisible ? "See less" : "See all"}</Button>
            </Box>
        )
    }

    return (
        <Container maxWidth="lg" className="skills-container">
            <Typography variant="h3" align="center" sx={{ margin: "40px 0" }}>Technologies</Typography>
            <Box className="skill-wrapper">
                <Container sx={{ padding: "10px 15px", display: "flex", flexDirection: { lg: "row", sm: "column", width: "100%" }, gap: "30px", alignItems: "center", justifyContent: "center" }}>
                    <div className="left">
                        {
                            visibleData.splice(0, 3).map((tech, index) => {
                                return <SkillCard key={"tech" + (index + 1)} techName={tech.name} value={parseInt(tech.proficiency)} />
                            })
                        }
                    </div>
                    <div className="right">
                        {
                            visibleData.splice(3, 3).map((tech, index) => {
                                return <SkillCard key={"tech" + (index + 1)} techName={tech.name} value={parseInt(tech.proficiency)} />
                            })
                        }
                    </div>
                </Container>
                {toggleBtns}
            </Box>
        </Container>
    );
}
export default Skills;