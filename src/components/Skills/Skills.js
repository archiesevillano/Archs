import { Container, Paper, Box, Typography, Button } from "@mui/material";
import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import Axios from "axios";
import { useEffect, useState } from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Skills = () => {
    const [visibleData, setVisibleData] = useState([]);
    const [hiddenData, setHiddenData] = useState([]);
    const [datalist, setDatalist] = useState([]);
    const [isAllVisible, setAllVisibility] = useState(false);
    const [isAscending, setAscesding] = useState(true);

    const getTechs = async () => {
        const newList = await Axios.get("http://localhost:3001/technologies");
        const data = newList.data;

        setDatalist(data);
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

    useEffect(() => {
        if (!isAscending) {
            sortNumbersDescending(datalist);
        }
        else {
            sortNumbersAscending(datalist);
        }
        const hidden = datalist.splice(5, 6);
        const visible = datalist;
        setVisibleData(visible);
        setHiddenData(hiddenData);
    }, [isAscending]);

    const sortNumbersDescending = (numbers) => {
        return numbers.sort(function (a, b) {
            return b - a;
        });
    }

    // Sort numbers from lowest to highest
    const sortNumbersAscending = (numbers) => {
        return numbers.sort(function (a, b) {
            return a - b;
        });
    }

    const toggleBtns = () => {
        return (
            <Box sx={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                <Button variant="outlined" startIcon={isAllVisible ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />} onClick={() => setAllVisibility(!isAllVisible)}>{isAllVisible ? "See less" : "See all"}</Button>
                <Button variant="outlined" startIcon={isAscending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />} onClick={() => setAscesding(!isAscending)}>{isAllVisible ? "Ascending" : "Descending"}</Button>
            </Box>
        )
    }

    return (
        <Container maxWidth="lg" className="skills-container">
            <Typography variant="h3" align="center" sx={{ margin: "40px 0" }}>Technologies</Typography>
            <Box className="skill-wrapper">
                <Container sx={{ padding: "10px 15px 0", display: "flex", flexDirection: { lg: "row", sm: "column", width: "100%" }, gap: "30px", alignItems: "center", justifyContent: "center" }} disableGutters>
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
                {toggleBtns()}
            </Box>
        </Container>
    );
}
export default Skills;