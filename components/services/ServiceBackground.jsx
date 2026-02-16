// components/services/ServiceBackground.jsx
import React from 'react';

const ServiceBackground = ({ color }) => {
  return (
    <>
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />
      
      {/* Decorative bottom line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`} />
    </>
  );
};

export default ServiceBackground;