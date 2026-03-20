// components/services/ServiceIconButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceIconButton = ({ icon: Icon, iconBg, color, href = '#' }) => {
  // استخراج الألوان من string التدرج
  const colors = color.split(' ');
  const fromColor = colors[1]; // مثلاً: from-cyan-500
  const toColor = colors[3];    // مثلاً: to-blue-500
  
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={`
          absolute top-8 left-8 w-12 h-12 rounded-full 
          ${iconBg} 
          flex items-center justify-center 
          group-hover:bg-gradient-to-r ${fromColor} ${toColor}
          transition-all duration-500 cursor-pointer
          dark:bg-opacity-20
        `}
      >
        <Icon className={`
          w-6 h-6 
          text-light-text-secondary 
          dark:text-dark-text-secondary 
          group-hover:text-light-text-primary 
          transition-all duration-500
        `} />
      </motion.div>
    </Link>
  );
};

export default ServiceIconButton;