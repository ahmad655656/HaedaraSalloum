// components/work/ProjectTechStack.jsx
import React from 'react';
import { motion } from "framer-motion";

const ProjectTechStack = ({ tech }) => {
  return (
    <div className="mb-4">
      <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2 font-semibold">
        Technologies used
      </h4>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;