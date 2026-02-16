// components/work/ProjectImage.jsx
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectImage = ({ image, title, category, isHovered }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
      {/* خلفية متدرجة للصورة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20" />
      
      {/* أيقونة خلفية */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg className="w-64 h-64 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h4v2H8v-2z"/>
        </svg>
      </div>
      
      {/* الصورة مع ظل احترافي */}
      <motion.div 
        className="relative w-full h-full z-10"
        animate={{ 
          scale: isHovered ? 1.05 : 1,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        {image.endsWith('.mp4') ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
              quality={100}
            />
          </div>
        )}
      </motion.div>
      
      {/* علامة مائية */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-400/30 font-mono">
        {category}
      </div>
    </div>
  );
};

export default ProjectImage;