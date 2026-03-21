// components/work/ProjectTechStack.jsx
import React from 'react';
import { motion } from "framer-motion";

const ProjectTechStack = ({ tech }) => {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 font-semibold">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-medium border border-slate-200 shadow-sm dark:bg-slate-800/70 dark:text-slate-200 dark:border-slate-700"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
