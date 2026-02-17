import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectImage = ({ image, title, category, isHovered }) => {
  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-0">
      
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 dark:from-blue-900/20 dark:to-purple-900/20" />

      {/* الصورة */}
      <motion.div
        className="relative w-full h-full z-10"
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        {image.endsWith(".mp4") ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-contain"
          />
        )}
      </motion.div>

      {/* watermark */}
      <div className="absolute bottom-3 right-3 text-xs text-gray-400/40 font-mono z-20">
        {category}
      </div>
    </div>
  );
};

export default ProjectImage;
