// components/work/ProjectLevel.jsx
import React from 'react';
import { motion } from "framer-motion";

const ProjectLevel = ({ level, levelColor, num }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl sm:text-4xl font-extrabold text-slate-400 dark:text-slate-500 leading-none">
        {num}
      </span>
      <span className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${levelColor} text-white shadow-sm`}>
        {level}
      </span>
    </div>
  );
};

export default ProjectLevel;
