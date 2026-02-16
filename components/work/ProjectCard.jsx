// components/work/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import ProjectImage from './ProjectImage';
import ProjectInfo from './ProjectInfo';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full h-[650px] sm:h-[700px] bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden group"
    >
      <ProjectImage 
        image={project.image} 
        title={project.title} 
        category={project.category}
        isHovered={isHovered}
      />

      <ProjectInfo project={project} isHovered={isHovered} />

      {/* تأثيرات متقدمة */}
      <motion.div 
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* حدود متوهجة */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-500" />

      {/* نقاط ضوئية */}
      <motion.div 
        className="absolute top-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: isHovered ? -20 : 0,
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          x: isHovered ? 20 : 0,
          y: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

export default ProjectCard;