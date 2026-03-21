// components/work/ProjectImage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProjectImage = ({ image, title }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // تحديد إذا كان الملف فيديو
  const isVideo = image.endsWith(".mp4") || image.endsWith(".webm") || image.endsWith(".mov");

  return (
    <div className="relative w-full overflow-hidden rounded-t-2xl bg-white dark:bg-slate-900">
      <div className="relative aspect-[16/9] w-full bg-slate-50 dark:bg-slate-950">
        {/* Loading shimmer */}
        <AnimatePresence>
          {!isImageLoaded && !isVideoLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20"
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Media container - show full image without cropping */}
        {isVideo ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute inset-0 h-full w-full object-contain"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
            quality={100}
            priority={false}
            onLoadingComplete={() => setIsImageLoaded(true)}
            className="object-contain"
          />
        )}
      </div>

      {/* Crisp border for clarity */}
      <div className="absolute inset-0 pointer-events-none rounded-t-2xl ring-1 ring-slate-200/70 dark:ring-slate-800/70" />
    </div>
  );
};

export default ProjectImage;
