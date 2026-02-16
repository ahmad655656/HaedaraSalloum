// constants/resumeData.jsx
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaIdBadge, FaGraduationCap } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export const about = {
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

export const experience = {
  icon: <FaIdBadge />,
  title: "My Experience",
  description: "2+ years developing scalable and efficient applications.",
  items: [
    { company: "Syrian Telecommunication Establishment", position: "Junior FrontEnd Developer", duration: "2023 - 2025" },
  ],
};

export const education = {
  icon: <FaGraduationCap />,
  title: "My Education",
  description: "Bachelor's degree in Computer Science from University of Latakia.",
  items: [
    { institution: "University of Latakia", degree: "Bachelor's degree in Computer Science", duration: "2026" },
  ],
};

export const skills = {
  title: "My Skills",
  description: "Strong background in FrontEnd and understanding of BackEnd development.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <RiNextjsFill />, name: "Next.js" },
  ],
};

export const tabsConfig = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About Me" },
];