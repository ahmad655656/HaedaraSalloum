"use client";

import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaIdBadge, FaGraduationCap } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "I'm a full stack developer passionate about building scalable and efficient applications.",
  info: [
    { fieldName: "Name", fieldValue: "Haedara Salloum" },
    { fieldName: "Phone", fieldValue: "(+963) 983 796 029" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "WhatsApp", fieldValue: "(+963) 983 796 029" },
    { fieldName: "Nationality", fieldValue: "Syrian" },
    { fieldName: "Email", fieldValue: "haedarahasan69@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, English (Intermediate)" },
  ],
};

const experience = {
  icon: <FaIdBadge />,
  title: "My Experience",
  description: "2+ years developing scalable and efficient applications.",
  items: [
    { company: "Syrian Telecommunication Establishment", position: "Junior FrontEnd Developer", duration: "2023 - 2025" },
  ],
};

const education = {
  icon: <FaGraduationCap />,
  title: "My Education",
  description: "Bachelor's degree in Computer Science from University of Latakia.",
  items: [
    { institution: "University of Latakia", degree: "Bachelor's degree in Computer Science", duration: "2026" },
  ],
};

const skills = {
  title: "My Skills",
  description: "Strong background in FrontEnd and understanding of BackEnd development.",
  skilList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <RiNextjsFill />, name: "Next.js" },
  ],
};

const ResumeSection = () => {
  return (
    <section id="resume" className="relative py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* عناصر زخرفية */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
            ✦ MY RESUME
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Experience & Skills
          </h2>

          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
            A glimpse into my professional journey and technical expertise
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-8"
          />
        </motion.div>

        {/* Tabs Component */}
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8 lg:gap-12">
          {/* Tabs Navigation */}
          <div className="w-full xl:w-[280px]">
            <TabsList className="flex flex-row xl:flex-col w-full gap-2 bg-transparent h-auto">
              <TabsTrigger 
                value="experience" 
                className="flex-1 xl:w-full px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary data-[state=active]:text-light-text-primary dark:data-[state=active]:text-dark-text-primary data-[state=active]:bg-light-bg-tertiary dark:data-[state=active]:bg-dark-bg-tertiary rounded-xl transition-all duration-300 font-medium"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="flex-1 xl:w-full px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary data-[state=active]:text-light-text-primary dark:data-[state=active]:text-dark-text-primary data-[state=active]:bg-light-bg-tertiary dark:data-[state=active]:bg-dark-bg-tertiary rounded-xl transition-all duration-300 font-medium"
              >
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                className="flex-1 xl:w-full px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary data-[state=active]:text-light-text-primary dark:data-[state=active]:text-dark-text-primary data-[state=active]:bg-light-bg-tertiary dark:data-[state=active]:bg-dark-bg-tertiary rounded-xl transition-all duration-300 font-medium"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger 
                value="about" 
                className="flex-1 xl:w-full px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary data-[state=active]:text-light-text-primary dark:data-[state=active]:text-dark-text-primary data-[state=active]:bg-light-bg-tertiary dark:data-[state=active]:bg-dark-bg-tertiary rounded-xl transition-all duration-300 font-medium"
              >
                About Me
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tabs Content */}
          <div className="flex-1">
            {/* Experience */}
            <TabsContent value="experience" className="mt-0">
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
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary p-6 rounded-2xl border border-light-border-primary dark:border-dark-border-primary hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 transition-all duration-300"
                      >
                        <span className="inline-block px-3 py-1 bg-gradient-primary dark:bg-gradient-dark text-white text-sm rounded-full mb-3">
                          {item.duration}
                        </span>
                        <h4 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">{item.position}</h4>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">{item.company}</p>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="mt-0">
              <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary dark:bg-gradient-dark flex items-center justify-center text-white">
                    <FaGraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{education.title}</h3>
                </div>
                
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{education.description}</p>
                
                <ScrollArea className="h-[400px] pr-4">
                  <ul className="space-y-4">
                    {education.items.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary p-6 rounded-2xl border border-light-border-primary dark:border-dark-border-primary hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 transition-all duration-300"
                      >
                        <span className="inline-block px-3 py-1 bg-gradient-primary dark:bg-gradient-dark text-white text-sm rounded-full mb-3">
                          {item.duration}
                        </span>
                        <h4 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">{item.degree}</h4>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">{item.institution}</p>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="mt-0">
              <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg">
                <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">{skills.title}</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{skills.description}</p>
                
                <ScrollArea className="h-[400px] pr-4">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skills.skilList.map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
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
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="mt-0">
              <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg">
                <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">{about.title}</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">{about.description}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {about.info.map((info, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-center gap-4 p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary"
                    >
                      <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary w-24">{info.fieldName}</span>
                      <span className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary flex-1">{info.fieldValue}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* خط فاصل */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
};

export default ResumeSection;