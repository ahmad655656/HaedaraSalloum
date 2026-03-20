// types/resume.types.ts
import { ReactNode } from "react";

export interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface SkillItem {
  icon: ReactNode;
  name: string;
}

export interface AboutData {
  title: string;
  description: string;
  info: InfoItem[];
}

export interface ExperienceData {
  icon: ReactNode;
  title: string;
  description: string;
  items: ExperienceItem[];
}

export interface EducationData {
  icon: ReactNode;
  title: string;
  description: string;
  items: EducationItem[];
}

export interface SkillsData {
  title: string;
  description: string;
  skillList: SkillItem[];
}

export interface TabConfig {
  id: string;
  label: string;
  icon?: ReactNode;
}

export type TimelineType = 'experience' | 'education';