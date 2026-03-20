"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="group relative">
      <motion.div 
        className="flex items-center gap-3"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {/* أيقونة */}
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-light-bg-tertiary dark:bg-dark-bg-tertiary flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 border border-light-border-primary dark:border-dark-border-primary">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-primary dark:bg-gradient-dark">
              H
            </span>
          </div>
          
          {/* glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-light-accent-primary/20 to-light-accent-secondary/20 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* النص */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary leading-tight">
              Haedara
            </span>
            <span className="text-xs text-light-accent-primary dark:text-dark-accent-primary font-medium">✦</span>
          </div>
          <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary tracking-[0.2em] uppercase font-medium">
            Developer
          </span>
        </div>

        {/* خط سفلي */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary dark:bg-gradient-dark group-hover:w-full transition-all duration-500" />
      </motion.div>
    </Link>
  );
}