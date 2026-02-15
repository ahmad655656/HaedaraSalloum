"use client";

import { motion } from "framer-motion";
import Photo from "@/components/Photo";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.1, 0.15, 1],
        delay: 0.2
      }}
      className="flex-1 flex justify-center xl:justify-end perspective-1000"
    >
      <div className="relative group transform-style-3d">
        {/* الظل الخلفي 3D */}
        <div className="absolute -inset-4 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 transform -translate-z-16" />
        
        {/* الحاوية الرئيسية مع تأثير 3D */}
        <motion.div 
          className="relative w-[300px] h-[400px] md:w-[360px] md:h-[460px] lg:w-[400px] lg:h-[500px] rounded-[2.5rem] dark:from-dark-bg-primary/80 dark:to-dark-bg-secondary/80 backdrop-blur-xl border border-light-border-primary/50 dark:border-dark-border-primary/50 overflow-hidden transform translate-z-8"
          whileHover={{ 
            rotateY: 5, 
            rotateX: 5,
            scale: 1.02,
            transition: { duration: 0.4 }
          }}
        >
          {/* طبقة الصورة مع عمق 3D */}
          <div className="relative w-full h-full transform translate-z-12">
            <Photo />
          </div>

          {/* تدرج علوي خفيف */}
          <div className="absolute top-0 left-0 right-0 h-32 dark:from-dark-bg-primary/20 pointer-events-none transform translate-z-20" />
          
          {/* تدرج سفلي خفيف */}
          <div className="absolute bottom-0 left-0 right-0 h-32 dark:from-dark-bg-primary/20 pointer-events-none transform translate-z-20" />

          {/* إطار داخلي 3D */}
          <div className="absolute inset-[2px] rounded-[2.3rem] border border-light-border-primary/20 dark:border-dark-border-primary/20 pointer-events-none transform translate-z-4" />
        </motion.div>

        {/* عناصر زخرفية عائمة 3D */}
        <motion.div 
          initial={{ opacity: 0, x: -30, z: -20 }}
          animate={{ opacity: 0.3, x: 0, z: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute -left-8 top-1/3 w-16 h-16 rounded-full dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 blur-xl transform -translate-z-8"
        />
        <motion.div 
          initial={{ opacity: 0, x: 30, z: -20 }}
          animate={{ opacity: 0.3, x: 0, z: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute -right-8 bottom-1/3 w-20 h-20 rounded-full dark:from-dark-accent-secondary/20 dark:to-dark-accent-primary/20 blur-xl transform -translate-z-12"
        />
        
        {/* نقطة ضوء صغيرة */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full dark:from-dark-accent-primary/30 dark:to-dark-accent-secondary/30 blur-md transform translate-z-24"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}