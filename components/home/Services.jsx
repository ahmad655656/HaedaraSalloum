"use client";

import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/constants/projects';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.15, 1],
      },
    },
  };

  return (
    <section id='services' className="relative py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
            ✦ WHAT I OFFER
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            My Services
          </h2>

          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
            I offer a range of integrated services to develop and improve your digital presence
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-8"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />

                {/* Service number */}
                <div className="absolute top-4 right-4 text-7xl font-bold text-light-text-tertiary/20 dark:text-dark-text-tertiary/20 select-none">
                  {service.num}
                </div>

                {/* Arrow icon */}
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-8 left-8 w-12 h-12 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary group-hover:bg-gradient-primary dark:group-hover:bg-gradient-dark group-hover:text-white transition-all duration-500 cursor-pointer"
                  >
                    <BsArrowDownRight className="w-5 h-5" />
                  </motion.div>
                </Link>

                {/* Content */}
                <div className="mt-16 mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary dark:group-hover:bg-gradient-dark transition-all duration-500">
                    {service.title}
                  </h3>

                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`} />
              </div>

              {/* Glow effect behind card */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-[2rem] blur-xl transition-opacity duration-700 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
};

export default ServicesSection;