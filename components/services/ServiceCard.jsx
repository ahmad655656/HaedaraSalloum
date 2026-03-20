// components/services/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ServiceNumber from './ServiceNumber';
import ServiceIconButton from './ServiceIconButton'; // استيراد المكون الجديد
import ServiceContent from './ServiceContent';
import ServiceBackground from './ServiceBackground';

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.15, 1],
    },
  },
};

const ServiceCard = ({ service, index }) => {
  // Create the icon element
  const IconComponent = service.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
    >
      {/* Service Card */}
      <div className="relative bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
        
        <ServiceBackground color={service.color} />
        <ServiceNumber num={service.num} />
        
        {/* استبدال السهم بالأيقونة في نفس الموقع */}
        <ServiceIconButton 
          icon={IconComponent}
          iconBg={service.iconBg}
          color={service.color}
          href={service.href}
        />
        
        <ServiceContent 
          title={service.title} 
          description={service.description} 
          skills={service.skills}
        />
      </div>

      {/* Glow effect behind card */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-[2rem] blur-xl transition-opacity duration-700 -z-10`} />
    </motion.div>
  );
};

export default ServiceCard;