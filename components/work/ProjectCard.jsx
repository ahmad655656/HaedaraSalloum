// components/work/ProjectCard.jsx
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import ProjectImage from './ProjectImage';
import ProjectInfo from './ProjectInfo';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative w-full bg-gradient-to-br from-white to-gray-50 dark:from-[#0f1115] dark:to-[#0a0c10] rounded-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden transition-all duration-500 hover:border-gray-300/50 dark:hover:border-gray-700/50 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/40"
    >
      {/* Floating gradient background */}
      <div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.1), transparent 40%)`
        }}
      />

      {/* Image Section - تملأ العرض كاملاً */}
      <div className="relative w-full">
        <ProjectImage 
          image={project.image} 
          title={project.title} 
          category={project.category}
          isHovered={isHovered}
        />
        
        {/* Category badge - متحرك مع التحويم */}
        <motion.div
          animate={{ 
            y: isHovered ? 0 : -10,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 left-3 z-20"
        >
          <span className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-lg border border-white/20 dark:border-gray-800/50">
            {project.category}
          </span>
        </motion.div>

        {/* Minimal corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700" />
        </div>
      </div>

      {/* Content Section - مسافات متناسقة */}
      <div className="p-5 sm:p-6">
        <ProjectInfo project={project} isHovered={isHovered} />
        
        {/* Subtle tech tags - إن وجدت */}
        {project.tech && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-1.5 mt-4"
          >
            {project.tech.slice(0, 3).map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-[9px] font-mono bg-gray-100 dark:bg-gray-800/50 rounded-md text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Minimal border glow on hover */}
      <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/20 rounded-2xl pointer-events-none transition-colors duration-500" />
    </motion.article>
  );
};

export default ProjectCard;