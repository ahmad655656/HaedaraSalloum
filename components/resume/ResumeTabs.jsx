// components/resume/ResumeTabs.jsx
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceContent from './ExperienceContent';
import EducationContent from './EducationContent';
import SkillsContent from './SkillsContent';
import AboutContent from './AboutContent';
import { tabsConfig } from '@/constants/resumeData.jsx';

const ResumeTabs = () => {
  return (
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8 lg:gap-12">
      {/* Tabs Navigation */}
      <div className="w-full xl:w-[280px]">
        <TabsList className="flex flex-row xl:flex-col w-full gap-2 bg-transparent h-auto">
          {tabsConfig.map((tab) => (
            <TabsTrigger 
              key={tab.id}
              value={tab.id} 
              className="flex-1 xl:w-full px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary data-[state=active]:text-light-text-primary dark:data-[state=active]:text-dark-text-primary data-[state=active]:bg-light-bg-tertiary dark:data-[state=active]:bg-dark-bg-tertiary rounded-xl transition-all duration-300 font-medium"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Tabs Content */}
      <div className="flex-1">
        <TabsContent value="experience" className="mt-0">
          <ExperienceContent />
        </TabsContent>

        <TabsContent value="education" className="mt-0">
          <EducationContent />
        </TabsContent>

        <TabsContent value="skills" className="mt-0">
          <SkillsContent />
        </TabsContent>

        <TabsContent value="about" className="mt-0">
          <AboutContent />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default ResumeTabs;