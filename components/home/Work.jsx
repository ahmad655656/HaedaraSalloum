// components/work/WorkSection.jsx
"use client";

import React from 'react';
import SectionHeader from '../work/SectionHeader';
import SliderSettings from '../work/SliderSettings';
import StatsSection from '../work/StatsSection';

const WorkSection = () => {
  return (
    <section id="work" className="relative py-12 sm:py-16 lg:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* عناصر زخرفية */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <SliderSettings />
        <StatsSection />
      </div>

      {/* خط فاصل */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />

      <style jsx global>{`
        .work-slider {
          padding: 20px 0 40px !important;
        }
        .work-slider .swiper-slide {
          transition: all 0.4s ease;
          opacity: 0.4;
          transform: scale(0.85);
          filter: blur(1px);
        }
        .work-slider .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
          z-index: 10;
        }
        .work-slider .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 0.3;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .work-slider .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #0891b2, #4f46e5);
          opacity: 1;
          width: 16px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default WorkSection;