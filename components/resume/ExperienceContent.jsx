// components/resume/ExperienceContent.jsx
import React from 'react';
import { FaIdBadge } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import TimelineItem from './TimelineItem';
import { experience } from '@/constants/resumeData.jsx';

const ExperienceContent = () => {
  return (
    <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-primary dark:bg-gradient-dark flex items-center justify-center text-white">
          <FaIdBadge className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{experience.title}</h3>
      </div>
      
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{experience.description}</p>
      
      <ScrollArea className="h-[400px] pr-4">
        <ul className="space-y-4">
          {experience.items.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} type="experience" />
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ExperienceContent;