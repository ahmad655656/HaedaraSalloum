// components/resume/ResumeSection.jsx
"use client";

import React from "react";
import SectionHeader from "../resume/SectionHeader";
import ResumeTabs from "../resume/ResumeTabs";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="relative py-16 sm:py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden"
    >
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />

        {/* عناصر زخرفية محسنة للموبايل */}
        <div className="absolute top-24 left-6 sm:top-32 sm:left-12 md:top-40 md:left-20 w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-full blur-3xl" />

        <div className="absolute bottom-24 right-6 sm:bottom-32 sm:right-12 md:bottom-40 md:right-20 w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-light-accent-secondary/10 dark:bg-dark-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-14">
          <SectionHeader />
          <ResumeTabs />
        </div>
      </div>

      {/* خط فاصل */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
};

export default ResumeSection;
