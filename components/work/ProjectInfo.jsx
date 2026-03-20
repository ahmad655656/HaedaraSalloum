// components/work/ProjectInfo.jsx
import React from 'react';
import { motion } from "framer-motion";
import ProjectLevel from './ProjectLevel';
import ProjectActions from './ProjectActions';
import ProjectTechStack from './ProjectTechStack';

const ProjectInfo = ({ project, isHovered }) => {
  return (
    <div className="relative h-[250px] sm:h-[250px] bg-white dark:bg-gray-900 p-8">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-50" />
      
      {/* المحتوى */}
      <div className="relative z-10">
        {/* الرأس مع الرقم والمستوى */}
        <div className="flex items-center justify-between mb-4">
          <ProjectLevel 
            num={project.num} 
            level={project.level} 
            levelColor={project.levelColor} 
          />
          <ProjectActions live={project.live} github={project.github} />
        </div>

        {/* العنوان */}
        <motion.h3 
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        {/* الوصف */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* التقنيات */}
        <ProjectTechStack tech={project.tech} />

        {/* شريط التقدم */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;