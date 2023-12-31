'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import FrameCard from './FrameCard';
import { ProjectLabel } from '../../types';
import { useEffect, useState } from 'react';

const SwiperSection = () => {

    const [view, setViews] = useState<number | "auto">("auto");

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia(`(min-width:1500px)`).matches) {
                setViews("auto");
            }
            else if (window.matchMedia(`(min-width:1300px)`).matches) {
                setViews(3);
            }
            else if (window.matchMedia(`(min-width:900px)`).matches) {
                setViews(2);
            }
            else if (window.matchMedia(`(max-width:500px)`).matches) {
                setViews("auto");
            }
        };

        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="featuredWorks"
        >
            <SwiperSlide>
                <FrameCard shadowed={false} photo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/projects%2Fphotos%2FPengeako.png?alt=media&token=452a5c44-9bb2-4b2f-9ae9-a1e5747805f4" logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/projects%2Flogo%2FPengeako.png?alt=media&token=a0a65aea-1ef4-48e0-a77d-3f7ecd8712f8" title="Pengeako" projectType={ProjectLabel.Design} link="/projects?pid=65051ef6bbe85cfe2e884f35" />
            </SwiperSlide>
            <SwiperSlide>
                <FrameCard shadowed={false} logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/projects%2Flogo%2Fmorsee.png?alt=media&token=84513204-6b28-4462-9505-d20a9c28ff7e" photo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/projects%2Fphotos%2FWeb%20capture_18-9-2023_112457_localhost.jpeg?alt=media&token=688bc279-73d0-4f16-8792-539191378e56" title="Morsee" link="/projects?pid=6507cd67bc9f3d1bb5489910" projectType={ProjectLabel.Website} />
            </SwiperSlide>
            <SwiperSlide>
                <FrameCard shadowed={false} logo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/projects%2Flogo%2Farchs.png?alt=media&token=8f83e45f-5fc4-4e84-a444-7377ae5afe63" link="/projects?pid=6507cfa3bc9f3d1bb5489913" projectType={ProjectLabel.Website} title="Archs v1.0" photo="https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/projects%2Fphotos%2FWeb%20capture_18-9-2023_11360_archs-portfolio.netlify.app.jpeg?alt=media&token=b3646d7c-630e-4f3f-9f66-d5a8783ede19" />
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperSection;