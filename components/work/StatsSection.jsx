// components/work/StatsSection.jsx
import React from 'react';
import { motion } from "framer-motion";
import { stats } from '@/constants/workData';

const StatsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-20 max-w-3xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-3 sm:p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{stat.value}</div>
          <div className="text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default StatsSection;