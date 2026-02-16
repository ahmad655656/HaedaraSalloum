// components/work/ProjectLevel.jsx
import React from 'react';
import { motion } from "framer-motion";

const ProjectLevel = ({ level, levelColor, num }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-4xl font-black text-gray-200 dark:text-gray-700">
        {num}
      </span>
      <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${levelColor} text-white shadow-lg`}>
        {level}
      </span>
    </div>
  );
};

export default ProjectLevel;