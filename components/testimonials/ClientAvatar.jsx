// components/testimonials/ClientAvatar.jsx
import React from 'react';

const ClientAvatar = ({ name }) => {
  const initial = name.charAt(0);
  
  return (
    <div className="w-14 h-14 rounded-2xl bg-gradient-primary dark:bg-gradient-dark flex items-center justify-center text-white text-xl font-semibold shadow-md">
      {initial}
    </div>
  );
};

export default ClientAvatar;