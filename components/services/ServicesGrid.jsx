// components/services/ServicesGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '@/constants/servicesData';

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

const ServicesGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
    >
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;