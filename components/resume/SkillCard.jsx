// components/resume/SkillCard.jsx
import React from 'react';
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.li 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full">
            <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl p-6 flex flex-col items-center gap-3 border border-light-border-primary dark:border-dark-border-primary hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl text-light-text-secondary dark:text-dark-text-secondary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary dark:group-hover:bg-gradient-dark">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">{skill.name}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">{skill.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.li>
  );
};

export default SkillCard;