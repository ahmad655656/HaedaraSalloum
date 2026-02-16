// components/testimonials/RatingStars.jsx
import React from 'react';
import { FiStar } from "react-icons/fi";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(rating)].map((_, i) => (
        <FiStar
          key={i}
          className="w-5 h-5 fill-current text-amber-400"
        />
      ))}
    </div>
  );
};

export default RatingStars;