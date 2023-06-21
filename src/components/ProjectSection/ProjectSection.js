import { Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectSection = () => {

    return (
        <Container maxWidth="lg" sx={{ minHeight: "600px" }} id="projects">
            <Typography variant="h3" align="center">
                Projects
            </Typography>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                slidesPerView={3}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="projects-swiper"
            >
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project-swiper-slide">
                    <ProjectCard projectImage={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} projectTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>

            </Swiper>
        </Container>
    );
}

export default ProjectSection;
