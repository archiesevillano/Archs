import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SwiperSection.css";
import { Tooltip } from "@mui/material";
import Axios from 'axios';

const innerSwiperStyle = {
    display: "flex",
    justifyContent: "center",
};

const SwiperSection = () => {
    const [list, setList] = useState([]);

    const getData = async () => {
        try {
            const newList = await Axios.get("http://localhost:3001/technologies");

            setList(
                newList?.data.map(stackItem => <SwiperSlide className="technologies-slides" key={stackItem?.name}><Tooltip title={stackItem?.name}><img className="slide-image" src={stackItem?.image} /></Tooltip></SwiperSlide>)
            );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Swiper watchSlidesProgress={true} slidesPerView={5} className="technologies-swiper">
            {list}
        </Swiper>
    );
}

export default SwiperSection;