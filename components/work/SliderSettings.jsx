// components/work/SliderSettings.jsx
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/workData';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SliderSettings = () => {
  return (
    <div className="relative -mx-2 sm:mx-0">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="work-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="w-[350px] sm:w-[450px] lg:w-[550px] xl:w-[600px]">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSettings;