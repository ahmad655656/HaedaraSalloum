// components/services/ServiceContent.jsx
import React from 'react';

const ServiceContent = ({ title, description }) => {
  return (
    <div className="mt-16 mb-4">
      <h3 className="text-2xl lg:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary dark:group-hover:bg-gradient-dark transition-all duration-500">
        {title}
      </h3>

      <p className="text-light-text-secondary dark:text-dark-text-secondary text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceContent;