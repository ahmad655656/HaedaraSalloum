// components/testimonials/TestimonialsSection.jsx
"use client";

import React from 'react';
import { motion } from "framer-motion";
import TestimonialsHeader from '../testimonials/TestimonialsHeader';
import TestimonialsGrid from '../testimonials/TestimonialsGrid';

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        <TestimonialsHeader />
        <TestimonialsGrid />
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
};

export default TestimonialsSection;