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
    <div className="relative w-full px-4 sm:px-6 lg:px-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0, // بدون دوران
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="work-slider !py-8 md:!py-12"
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 40,
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide 
            key={index} 
            className="!w-[320px] sm:!w-[400px] md:!w-[500px] lg:!w-[600px] xl:!w-[650px] 2xl:!w-[700px] transition-all duration-300"
          >
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSettings;