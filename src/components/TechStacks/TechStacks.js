import "./TechStacks.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ProgressCard from "../ProgressCard/ProgressCard";
import { Container, Tooltip } from "@mui/material";

const TechStacks = () => {

    const [list, setList] = useState([]);

    const getData = async () => {
        try {
            // request data from expressjs to firebase
            const newList = await Axios.get("http://localhost:3001/technologies");

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
                slidesPerView={4}
            >
                {list}
            </Swiper >
        </Container>
    );
}

export default TechStacks;