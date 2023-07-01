import "./TechStacks.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ProgressCard from "../ProgressCard/ProgressCard";
import { Container, Tooltip, useMediaQuery } from "@mui/material";

const TechStacks = () => {

    const [list, setList] = useState([]);
    const screenWidth = window.screen.width;
    const [fitCardCount, setFitCardCount] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setFitCardCount(Math.floor(screenWidth / 250));
        };
        console.log(fitCardCount);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getData = async () => {
        try {
            // request data from expressjs to firebase
            const newList = await Axios.get("http://localhost:3001/technologies");
            const sortedStacks = newList?.data.sort((a, b) => b.proficiency - a.proficiency);
            console.log(sortedStacks);
            //set the response data
            //generate components using the data
            setList(
                newList?.data.map(stackItem => <SwiperSlide className="technologies-slides" key={stackItem?.name}><Tooltip title={stackItem?.name}><ProgressCard cardImage={stackItem?.image} cardTitle={stackItem?.name} value={stackItem?.proficiency} /></Tooltip></SwiperSlide>)
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
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="technologies-swiper"
                slidesPerView={window.screen.width > 1100 ? 4 : fitCardCount}
            >
                {list}
            </Swiper >
        </Container>
    );
}

export default TechStacks;