// constants/servicesData.jsx
import { 
  Code2, 
  Database, 
  Gamepad2, 
  Building2, 
  Users, 
  Cpu,
  LayoutDashboard,
  Globe
} from 'lucide-react';

export const services = [
  {
    num: '01',
    title: 'Frontend Web Development',
    description: 'Building high-performance, interactive web applications using React.js and Next.js with TypeScript, featuring smooth user experiences and responsive designs with Tailwind CSS and Framer Motion animations.',
    color: 'from-cyan-500 to-blue-500',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    icon: Code2,
    iconBg: 'bg-blue-500/10'
  },
  {
    num: '02',
    title: 'ERP & Web Solutions',
    description: 'Product data management and formatting in Odoo ERP systems, developing custom algorithms for data standardization and structuring, along with website content management and editing.',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Odoo ERP', 'Data Formatting', 'Content Management', 'Algorithms'],
    icon: Building2,
    iconBg: 'bg-emerald-500/10'
  },
  {
    num: '03',
    title: 'Gaming Platforms Development',
    description: 'Designing and building interactive gaming platforms using Next.js and React.js, with TypeScript ensuring type safety, maintainable code, optimized performance, and smooth gameplay experience.',
    color: 'from-amber-500 to-orange-500',
    skills: ['Next.js', 'TypeScript', 'Interactive UI', 'Performance Optimization'],
    icon: Gamepad2,
    iconBg: 'bg-amber-500/10'
  },
  {
    num: '04',
    title: 'Software Engineering & Consulting',
    description: 'Implementing software development methodologies (Agile, Scrum, Waterfall) with comprehensive documentation and full Software Development Life Cycle (SDLC) management, transforming requirements into technical solutions.',
    color: 'from-rose-500 to-red-500',
    skills: ['Agile/Scrum', 'SDLC', 'Requirements Analysis', 'Software Documentation'],
    icon: Users,
    iconBg: 'bg-rose-500/10'
  },
  {
    num: '05',
    title: 'Database Design & Optimization',
    description: 'Designing and developing databases using MySQL, Oracle, and PostgreSQL, ensuring data integrity, performance optimization, and efficient system management.',
    color: 'from-indigo-500 to-purple-500',
    skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Performance Tuning'],
    icon: Database,
    iconBg: 'bg-indigo-500/10'
  },
  {
    num: '06',
    title: 'Full-Stack Next.js Development',
    description: 'Building powerful full-stack web applications with Next.js and TypeScript, integrating PostgreSQL databases for robust data management, server-side rendering, and optimal performance with end-to-end type safety.',
    color: 'from-blue-600 to-violet-600',
    skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma/ORM', 'Server Components', 'API Routes'],
    icon: Globe,
    iconBg: 'bg-blue-500/10'
  }
];