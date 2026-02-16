// components/process/ProcessFooter.jsx
import React from 'react';
import { motion } from "framer-motion";

const ProcessFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 }}
      className="text-center mt-16"
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary shadow-md hover:shadow-lg transition-all duration-300">
        <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">
          Final Result: Elegant, Fast, and Ready-to-Launch Website
        </span>
        <motion.span
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut" 
          }}
          className="text-xl"
        >
          ✨
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ProcessFooter;