import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SwiperSection.css";
import { techStacks } from "../../temp";
import { Tooltip } from "@mui/material";

const SwiperSection = () => {
    return (
        <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper">
            {techStacks.map(stackItem => <SwiperSlide key={stackItem?.name}><Tooltip title={stackItem?.name}><img className="slide-image" src={stackItem?.image} /></Tooltip></SwiperSlide>)}
        </Swiper>
    );
}

export default SwiperSection;