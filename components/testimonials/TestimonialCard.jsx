// components/testimonials/TestimonialCard.jsx
import React from 'react';
import { motion } from "framer-motion";
import QuoteIcon from './QuoteIcon';
import RatingStars from './RatingStars';
import ClientAvatar from './ClientAvatar';
import ClientInfo from './ClientInfo';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg hover:shadow-xl transition-all duration-500">
        
        <QuoteIcon />
        <RatingStars rating={testimonial.rating} />

        {/* Testimonial text */}
        <p className="text-light-text-primary dark:text-dark-text-primary leading-relaxed text-lg mb-8 relative z-10">
          “{testimonial.text}”
        </p>

        {/* Client info */}
        <div className="flex items-center gap-4">
          <ClientAvatar name={testimonial.name} />
          <ClientInfo name={testimonial.name} role={testimonial.role} />
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;