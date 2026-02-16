// components/testimonials/TestimonialsGrid.jsx
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '@/constants/testimonialsData';

const TestimonialsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {testimonials.map((item, index) => (
        <TestimonialCard 
          key={index} 
          testimonial={item} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default TestimonialsGrid;