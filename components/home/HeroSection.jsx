"use client"

import { motion } from "framer-motion";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-bg-primary dark:bg-dark-bg-primary">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* عناصر زخرفية */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0 pt-20 xl:pt-24 flex flex-col xl:flex-row items-center justify-between gap-16">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.15, 1] }}
          className="text-center xl:text-left flex-1"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs md:text-sm text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 relative"
          >
            <span className="relative inline-block px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
              ✦ Frontend Developer
            </span>
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 text-4xl md:text-6xl lg:text-7xl font-bold text-light-text-primary dark:text-dark-text-primary leading-[1.1] tracking-tight"
          >
            Building modern
            <br />
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-primary dark:bg-gradient-dark">
                digital experiences
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-[520px] mx-auto xl:mx-0 text-light-text-secondary dark:text-dark-text-secondary text-lg leading-relaxed"
          >
            I'm <span className="font-semibold text-light-text-primary dark:text-dark-text-primary">Haedara Salloum</span>, 
            crafting clean, performant interfaces with React, Next.js, 
            and a touch of elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <HeroActions />
          </motion.div>

          {/* Decorative line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.15, 1] }}
            className="hidden xl:block w-24 h-0.5 bg-gradient-primary dark:bg-gradient-dark mt-16 origin-left"
          />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.15, 1] }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 rounded-full blur-3xl -z-10" />
          <HeroImage />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-light-text-tertiary dark:text-dark-text-tertiary">Scroll</span>
          <motion.div 
            animate={{ height: [30, 50, 30] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px bg-gradient-to-b from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}