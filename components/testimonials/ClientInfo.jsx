// components/testimonials/ClientInfo.jsx
import React from 'react';

const ClientInfo = ({ name, role }) => {
  return (
    <div>
      <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary text-lg">
        {name}
      </h4>
      <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
        {role}
      </span>
    </div>
  );
};

export default ClientInfo;