// components/services/ServiceArrow.jsx
import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceArrow = ({ href }) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-8 left-8 w-12 h-12 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary group-hover:bg-gradient-primary dark:group-hover:bg-gradient-dark group-hover:text-white transition-all duration-500 cursor-pointer"
      >
        <BsArrowDownRight className="w-5 h-5" />
      </motion.div>
    </Link>
  );
};

export default ServiceArrow;