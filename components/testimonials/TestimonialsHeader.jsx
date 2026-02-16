// components/testimonials/TestimonialsHeader.jsx
import React from 'react';
import { motion } from "framer-motion";

const TestimonialsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
        ✦ CLIENT TESTIMONIALS
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
        What People Say About Me
      </h2>

      <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
        Some words from clients I had the pleasure to work with
      </p>

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

export default TestimonialsHeader;