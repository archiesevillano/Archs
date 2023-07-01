import { Typography, Container, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectSection = () => {

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
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>
                <SwiperSlide className="project__swiper__slide">
                    <ProjectCard image={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/Screenshot%20(550).png?alt=media&token=e47590bf-f9f5-4dae-984e-fbc84347c3d8"} websiteTitle={"AirGlobe"} shortDescription={"Informative Website about Global Warming and Air Pollutants"} developmentStatus={"Underdevelopment"} />
                </SwiperSlide>

            </Swiper>
        </Container>
    );
}

export default ProjectSection;
