// components/resume/AboutContent.jsx
import React from 'react';
import { motion } from "framer-motion";
import { about } from '@/constants/resumeData.jsx';

const AboutContent = () => {
  return (
    <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg">
      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">{about.title}</h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{about.description}</p>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {about.info.map((info, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
            className="flex items-center gap-4 p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary"
          >
            <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary w-24">{info.fieldName}</span>
            <span className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary flex-1">{info.fieldValue}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AboutContent;