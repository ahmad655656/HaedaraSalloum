// components/resume/TimelineItem.jsx
import React from 'react';
import { motion } from "framer-motion";

const TimelineItem = ({ item, index, type }) => {
  return (
    <motion.li 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary p-6 rounded-2xl border border-light-border-primary dark:border-dark-border-primary hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 transition-all duration-300"
    >
      <span className="inline-block px-3 py-1 bg-gradient-primary dark:bg-gradient-dark text-white text-sm rounded-full mb-3">
        {item.duration}
      </span>
      <h4 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
        {type === 'experience' ? item.position : item.degree}
      </h4>
      <p className="text-light-text-secondary dark:text-dark-text-secondary">
        {type === 'experience' ? item.company : item.institution}
      </p>
    </motion.li>
  );
};

export default TimelineItem;