// components/services/ServiceNumber.jsx
import React from 'react';

const ServiceNumber = ({ num }) => {
  return (
    <div className="absolute top-4 right-4 text-7xl font-bold text-light-text-tertiary/20 dark:text-dark-text-tertiary/20 select-none">
      {num}
    </div>
  );
};

export default ServiceNumber;