// components/resume/SectionHeader.jsx
import React from "react";
import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-12 md:mb-16 px-2"
    >
      <span className="inline-block text-[10px] sm:text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
        ✦ MY RESUME
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3 sm:mb-4 leading-tight">
        Experience & Skills
      </h2>

      <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
        A glimpse into my professional journey and technical expertise
      </p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "90px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-6 sm:mt-8 rounded-full"
      />
    </motion.div>
  );
};

export default SectionHeader;
