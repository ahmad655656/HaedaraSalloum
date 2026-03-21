// components/work/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import ProjectImage from './ProjectImage';
import ProjectInfo from './ProjectInfo';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-[#0b0f14] shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl"
    >
      {/* Image Section */}
      <ProjectImage 
        image={project.image} 
        title={project.title} 
      />

      {/* Content Section */}
      <div className="p-5 sm:p-6 lg:p-7">
        <ProjectInfo project={project} isHovered={isHovered} />
      </div>

      {/* Subtle hover ring */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-transparent group-hover:ring-cyan-500/20 transition-colors duration-500" />
    </motion.article>
  );
};

export default ProjectCard;
