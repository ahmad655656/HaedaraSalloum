// components/work/ProjectInfo.jsx
import React from 'react';
import { motion } from "framer-motion";
import ProjectLevel from './ProjectLevel';
import ProjectActions from './ProjectActions';
import ProjectTechStack from './ProjectTechStack';

const ProjectInfo = ({ project, isHovered }) => {
  return (
    <div className="relative">
      {/* الرأس مع الرقم والمستوى */}
      <div className="flex items-center justify-between gap-3">
        <ProjectLevel 
          num={project.num} 
          level={project.level} 
          levelColor={project.levelColor} 
        />
        <ProjectActions live={project.live} github={project.github} />
      </div>

      {/* التصنيف */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-slate-100 text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
          {project.category}
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          {project.level} Project
        </span>
      </div>

      {/* العنوان */}
      <motion.h3 
        className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight"
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {project.title}
      </motion.h3>
      
      {/* الوصف */}
      <p className="mt-2 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
        {project.description}
      </p>
      
      {/* التقنيات */}
      <div className="mt-4">
        <ProjectTechStack tech={project.tech} />
      </div>

      {/* شريط التقدم */}
      <div className="mt-5">
        <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
