// components/process/ProcessStepsGrid.jsx
import React from 'react';
import { motion } from "framer-motion";
import ProcessStep from './ProcessStep';
import { processSteps } from '@/constants/processData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const ProcessStepsGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {processSteps.map((step, index) => (
        <ProcessStep 
          key={index} 
          step={step} 
          index={index}
          isLast={index === processSteps.length - 1}
        />
      ))}
    </motion.div>
  );
};

export default ProcessStepsGrid;