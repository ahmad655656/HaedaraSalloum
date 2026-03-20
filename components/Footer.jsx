"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-light-bg-primary dark:bg-dark-bg-primary border-t border-light-border-primary dark:border-dark-border-primary py-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-center gap-6">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-primary dark:bg-gradient-dark">
                Haedara
              </span>
              <span className="text-light-text-tertiary dark:text-dark-text-tertiary mx-1">•</span>
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Developer</span>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm"
          >
            <Link href="/" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/#services" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/#work" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-300 font-medium">
              Work
            </Link>
            <Link href="/#resume" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-300 font-medium">
              Resume
            </Link>
            <Link href="/contact" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-300 font-medium">
              Contact
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Link href="https://github.com/haedara" target="_blank">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-all duration-300 border border-light-border-primary dark:border-dark-border-primary"
              >
                <FiGithub className="w-4 h-4" />
              </motion.div>
            </Link>
            <Link href="https://linkedin.com/in/haedara" target="_blank">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-all duration-300 border border-light-border-primary dark:border-dark-border-primary"
              >
                <FiLinkedin className="w-4 h-4" />
              </motion.div>
            </Link>
            <Link href="mailto:haedara@example.com">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-all duration-300 border border-light-border-primary dark:border-dark-border-primary"
              >
                <FiMail className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-light-border-secondary/50 dark:via-dark-border-secondary/50 to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-xs flex items-center justify-center gap-1">
              © {currentYear} Haedara Salloum. All rights reserved.
            </p>
            <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-xs mt-1 flex items-center justify-center gap-1">
              Made with <FiHeart className="w-3 h-3 text-rose-400" /> using Next.js
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}