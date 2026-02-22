// components/work/ProjectImage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProjectImage = ({ image, title, category, isHovered }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // تحديد إذا كان الملف فيديو
  const isVideo = image.endsWith(".mp4") || image.endsWith(".webm") || image.endsWith(".mov");

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      
      {/* إزالة aspect ratio ثابت وترك الصورة تحدد حجمها */}
      <div className="relative w-full h-auto">
        
        {/* Artistic frame overlay - للعمق البصري */}
        <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        {/* Loading shimmer */}
        <AnimatePresence>
          {!isImageLoaded && !isVideoLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20"
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Media container مع الحفاظ على الأبعاد الأصلية */}
        <div className="relative w-full">
          {isVideo ? (
            <video
              src={image}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-auto"
              style={{ 
                display: 'block',
                width: '100%',
                height: 'auto',
                filter: isHovered ? 'brightness(1.05) contrast(1.02)' : 'brightness(1) contrast(1)'
              }}
            />
          ) : (
            <Image
              src={image}
              alt={title}
              width={1200}
              height={800}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={100}
              priority={false}
              onLoadingComplete={() => setIsImageLoaded(true)}
              className="w-full h-auto"
              style={{ 
                display: 'block',
                width: '100%',
                height: 'auto',
                filter: isHovered ? 'brightness(1.05) saturate(1.1)' : 'brightness(1) saturate(1)'
              }}
            />
          )}
        </div>
      </div>

      {/* Dynamic overlay - يتغير مع التحويم (يغطي الصورة فقط) */}
      <motion.div 
        className="absolute inset-0 z-15 pointer-events-none"
        animate={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 30%, rgba(255,255,255,0.1) 100%)'
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Decorative elements - لمسات فنية */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />

      {/* View indicator - أنيق وبسيط */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3 left-3 z-30"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-[8px] font-bold tracking-widest text-white">VIEW PROJECT</span>
              <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal border accent */}
      <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-t-2xl pointer-events-none" />
    </div>
  );
};

export default ProjectImage;