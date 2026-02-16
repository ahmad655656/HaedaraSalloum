// components/process/ProcessStep.jsx
import React from 'react';
import { motion } from "framer-motion";
import StepNumber from './StepNumber';
import StepIcon from './StepIcon';
import StepConnector from './StepConnector';

const ProcessStep = ({ step, index, isLast }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.15, 1],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={step.delay}
      className="group relative"
    >
      {/* Step Card */}
      <div className="relative bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg hover:shadow-xl transition-all duration-500 h-full">
        
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />

        <StepNumber number={index} />
        <StepIcon icon={step.icon} stepIndex={index} />

        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
          {step.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          {step.description}
        </p>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary dark:bg-gradient-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" />
      </div>

      {/* Connecting arrow */}
      {!isLast && <StepConnector delay={step.delay} />}
    </motion.div>
  );
};

export default ProcessStep;