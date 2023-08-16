import { Typography, Container, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectSection.css";
import Axios from 'axios';
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState, useEffect } from 'react';

const ProjectSection = () => {

    const [projectList, setProjectList] = useState(null);

    const getProjects = async () => {
        const response = await Axios.get(`${process.env.REACT_APP_SERVER}/projects`);

        setProjectList(response?.data.reverse());
    }

    useEffect(() => {
        getProjects();
    }, []);

    const swiperSlides = () => {
        const list = projectList;

        return list.map(project => {
            return <SwiperSlide className="project__swiper__slide">
                <ProjectCard image={project?.image} name={project?.name} repository={project?.repository} stacks={project?.stacks} />
            </SwiperSlide>;
        })
    }

    return (
        <Container maxWidth="lg" id="projects">

            <Box sx={{ paddingTop: "30px" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "20px", gap: "20px" }}>
                    <Typography variant="h3" align="left">
                        Projects
                    </Typography>
                    <Typography variant="subtitle1" align="left" sx={{ opacity: "0.6" }}>
                        15 items
                    </Typography>
                </Box>
                <Typography variant="body1">
                    These are the recent projects I have developed and added to my portfolio. Some projects are not included here either because the client didn't permit their display or they have been deleted. These projects are specifically created and intended for the viewing of clients and recruiters.
                </Typography>
            </Box>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                slidesPerView={1}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="projects-swiper"
            >
                {projectList !== null ? swiperSlides() : null}
            </Swiper>
        </Container>
    );
}

export default ProjectSection;
