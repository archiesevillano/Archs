import "./TechStacks.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow } from "swiper";
import ProgressCard from "../ProgressCard/ProgressCard";
import { Container, Tooltip, useMediaQuery, Typography, useTheme } from "@mui/material";

const TechStacks = () => {

    const [list, setList] = useState([]);
    const screenWidth = window.screen.width;
    const [fitCardCount, setFitCardCount] = useState(1);
    const currentTheme = useTheme();

    useEffect(() => {
        const handleResize = () => {
            setFitCardCount(Math.floor(screenWidth / 250));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getData = async () => {
        try {
            // request data from expressjs to firebase
            const host = process.env.REACT_APP_SERVER;
            const newList = await Axios.get(`${host}/technologies`);
            const sortedStacks = newList?.data.sort((a, b) => b.proficiency - a.proficiency);
            //set the response data
            //generate components using the data
            setList(
                newList?.data.map(stackItem => <SwiperSlide className="technologies-slides" key={stackItem?.name}><ProgressCard cardImage={stackItem?.image} cardTitle={stackItem?.name} value={stackItem?.proficiency} /></SwiperSlide>)
            );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // load data
        getData();
    }, []);


    return (
        <Container maxWidth="lg" disableGutters className="techstacks-section">
            <Typography variant="h3" align="center">Technologies</Typography>
            <Typography variant="body1" align="center" sx={{ opacity: "0.9" }}>
                These are the technologies I am familiar with.
            </Typography>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={window.screen.width > 1100 ? 4 : fitCardCount}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {list}
            </Swiper >
        </Container>
    );
}

export default TechStacks;