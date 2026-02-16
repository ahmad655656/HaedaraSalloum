// components/work/SectionHeader.jsx
import React from 'react';
import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 sm:mb-12 lg:mb-16"
    >
      <span className="inline-block text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium mb-2 sm:mb-3 lg:mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
        ✦ MY WORK
      </span>

      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2 sm:mb-3 lg:mb-4">
        Featured <span className="text-transparent bg-clip-text bg-gradient-primary dark:bg-gradient-dark">Projects</span>
      </h2>

      <p className="text-light-text-secondary dark:text-dark-text-secondary text-xs sm:text-sm lg:text-base max-w-2xl mx-auto px-4">
        A collection of my best work, showcasing creativity and technical expertise
      </p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-4 sm:mt-6 lg:mt-8"
      />
    </motion.div>
  );
};

export default SectionHeader;