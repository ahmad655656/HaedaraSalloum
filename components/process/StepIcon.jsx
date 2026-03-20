// components/process/StepIcon.jsx
import React from 'react';
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const StepIcon = ({ icon, stepIndex }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative z-10 mb-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary dark:bg-gradient-dark text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500">
              {icon}
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-light-text-primary dark:bg-dark-text-primary text-light-bg-primary dark:text-dark-bg-primary border-0">
          <p className="text-sm font-medium">Step {stepIndex + 1}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default StepIcon;