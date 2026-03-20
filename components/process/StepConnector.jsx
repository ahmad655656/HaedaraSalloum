// components/process/StepConnector.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const StepConnector = ({ delay }) => {
  return (
    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3 }}
        whileHover={{ scale: 1.2, x: 5 }}
        className="text-light-border-secondary dark:text-dark-border-secondary bg-light-bg-primary dark:bg-dark-bg-primary rounded-full p-1 shadow-lg"
      >
        <FiArrowRight className="w-5 h-5" />
      </motion.div>
    </div>
  );
};

export default StepConnector;