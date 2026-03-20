// components/process/ProcessHeader.jsx
import React from 'react';
import { motion } from "framer-motion";

const ProcessHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary"
      >
        ✦ WORK PROCESS
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4"
      >
        How I Turn Ideas Into Reality?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto"
      >
        A complete journey from concept to launch, paying attention to every small detail
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-8"
      />
    </motion.div>
  );
};

export default ProcessHeader;