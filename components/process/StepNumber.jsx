// components/process/StepNumber.jsx
import React from 'react';
import { motion } from "framer-motion";

const StepNumber = ({ number }) => {
  const paddedNumber = String(number + 1).padStart(2, '0');
  
  return (
    <motion.div 
      className="absolute top-4 right-4 text-5xl font-bold text-light-text-tertiary/20 dark:text-dark-text-tertiary/20 select-none"
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      {paddedNumber}
    </motion.div>
  );
};

export default StepNumber;