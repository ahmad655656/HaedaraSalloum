// components/resume/SkillsContent.jsx
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import SkillCard from './SkillCard';
import { skills } from '@/constants/resumeData';

const SkillsContent = () => {
  return (
    <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg">
      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">{skills.title}</h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{skills.description}</p>
      
      <ScrollArea className="h-[400px] pr-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.skillList.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default SkillsContent;