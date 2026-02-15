"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Car Website",
    description: "A modern car showcase platform with sleek animations and responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js"],
    level: "BEGINNER",
    levelColor: "from-emerald-400 to-cyan-400",
    image: "/asset/car.png",
    live: "https://ahmad655656.github.io/Fifth-project/",
    github: "https://github.com/ahmad655656/Fifth-project.git",
    tech: ["React", "Tailwind"],
  },
  {
    num: "02",
    category: "frontend",
    title: "Games Hub",
    description: "Interactive gaming platform with multiple mini-games and smooth UI.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js"],
    level: "BEGINNER",
    levelColor: "from-emerald-400 to-cyan-400",
    image: "/asset/game.png",
    live: "https://ahmad655656.github.io/gameWebsite/",
    github: "https://github.com/ahmad655656/gameWebsite.git",
    tech: ["React", "Tailwind"],
  },
  {
    num: "04",
    category: "frontend",
    title: "Medical Platform",
    description: "Healthcare website with appointment booking and medical information.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js"],
    level: "BEGINNER",
    levelColor: "from-emerald-400 to-cyan-400",
    image: "/asset/medical.png",
    live: "",
    github: "https://github.com/ahmad655656/medical.git",
    tech: ["React", "Tailwind"],
  },
  {
    num: "05",
    category: "full-stack",
    title: "E-Commerce",
    description: "Full-stack e-commerce platform with Stripe integration and admin panel.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Stripe"],
    level: "INTERMEDIATE",
    levelColor: "from-amber-400 to-orange-400",
    image: "/asset/fullstack.mp4",
    live: "https://photoland-five.vercel.app/",
    github: "https://github.com/ahmad655656/photoland.git",
    tech: ["React", "Next.js", "Stripe"],
  },
  {
    num: "06",
    category: "frontend",
    title: "CarLand",
    description: "Premium car rental platform with advanced filtering and booking system.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "INTERMEDIATE",
    levelColor: "from-amber-400 to-orange-400",
    image: "/asset/carland.png",
    live: "https://car-ashy-nine.vercel.app/",
    github: "https://github.com/ahmad655656/car.git",
    tech: ["Next.js", "Tailwind"],
  },
  {
    num: "07",
    category: "frontend",
    title: "Urban Build",
    description: "Construction company website showcasing projects and services.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "INTERMEDIATE",
    levelColor: "from-amber-400 to-orange-400",
    image: "/asset/constructions.png",
    live: "https://urban-build-phi.vercel.app/",
    github: "https://github.com/ahmad655656/urbanBuild.git",
    tech: ["Next.js", "Tailwind"],
  },
  {
    num: "08",
    category: "frontend",
    title: "TypeScript Games",
    description: "Collection of games built with TypeScript for type safety and performance.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "INTERMEDIATE",
    levelColor: "from-amber-400 to-orange-400",
    image: "/asset/TypeScriptGame.png",
    live: "https://game-chi-ashen-73.vercel.app/",
    github: "https://github.com/ahmad655656/game.git",
    tech: ["Next.js", "TypeScript"],
  },
  {
    num: "09",
    category: "frontend",
    title: "Software Landing",
    description: "Modern software product landing page with conversion optimization.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "INTERMEDIATE",
    levelColor: "from-amber-400 to-orange-400",
    image: "/asset/softwareLandingPage.png",
    live: "https://software-landing-page-1n9g.vercel.app/",
    github: "https://github.com/ahmad655656/softwareLandingPage.git",
    tech: ["Next.js", "TypeScript"],
  },
  {
    num: "10",
    category: "frontend",
    title: "AI Image Generator",
    description: "AI-powered image generation platform with DALL-E integration.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/aiImage.png",
    live: "https://ai-image-iota-five.vercel.app/",
    github: "https://github.com/ahmad655656/aiImage.git",
    tech: ["Next.js", "TypeScript", "AI"],
  },
  {
    num: "11",
    category: "frontend",
    title: "Foodie",
    description: "Restaurant discovery platform with reviews and reservation system.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/foodie.png",
    live: "https://foodie-mauve-two.vercel.app",
    github: "https://github.com/ahmad655656/foodie.git",
    tech: ["Next.js", "TypeScript"],
  },
  {
    num: "12",
    category: "fullstack",
    title: "CodeSync",
    description: "Real-time collaborative coding platform with Clerk authentication.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js", "Clerk", "Convex"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/codesync.png",
    live: "https://condesync.vercel.app/",
    github: "https://github.com/ahmad655656/condesync.git",
    tech: ["Next.js", "TypeScript", "Realtime"],
  },
  {
    num: "13",
    category: "fullstack",
    title: "Socially",
    description: "Social media platform with real-time updates and Prisma database.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js", "Clerk", "Prisma"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/socially.png",
    live: "https://socially-indol.vercel.app/",
    github: "https://github.com/ahmad655656/socially.git",
    tech: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    num: "14",
    category: "fullstack",
    title: "SleepTracker",
    description: "Health tracking app with sleep analytics and personalized insights.",
    stack: ["HTML5", "CSS3", "TypeScript", "Tailwind CSS", "React.js", "Next.js", "Clerk", "Prisma"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/sleeptracker.png",
    live: "https://sleeptracker-rho.vercel.app/",
    github: "https://github.com/ahmad655656/sleeptracker.git",
    tech: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    num: "15",
    category: "frontend",
    title: "Courses Platform",
    description: "Online learning platform with video courses and progress tracking.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/courses.png",
    live: "https://maiskejani.vercel.app/",
    github: "https://github.com/ahmad655656/maiskejani.git",
    tech: ["Next.js", "Tailwind"],
  },
  {
    num: "16",
    category: "frontend",
    title: "Intelligence Games",
    description: "Brain training games platform with difficulty progression and scoring.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Next.js"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/IntelligenceGames.png",
    live: "https://gamingapp-one.vercel.app/",
    github: "https://github.com/ahmad655656/gamingapp.git",
    tech: ["Next.js", "Tailwind"],
  },
  {
    num: "17",
    category: "fullstack",
    title: "Car Rental Platform",
    description: "Integrated car booking platform with complete management system, user authentication, and instant reservations.",
    longDescription: "A comprehensive car rental platform that allows users to search for available cars, book them, and manage their reservations. Includes an admin dashboard for managing cars, bookings, and users.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "NextAuth", "Mongoose"],
    level: "ADVANCED",
    levelColor: "from-purple-400 to-pink-400",
    image: "/asset/company-cars.png",
    live: "https://company-cars.vercel.app",
    github: "https://github.com/ahmad655656/companyCars.git",
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth"],
    features: [
      "Advanced car search",
      "Instant booking system",
      "Admin dashboard",
      "User authentication",
      "Profile management",
      "Filter by price and model",
    ]
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full h-[650px] sm:h-[700px] bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden group"
    >
      {/* تصميم الصورة بشكل احترافي */}
      <div className="relative w-full h-[400px] sm:h-[450px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
        {/* خلفية متدرجة للصورة */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20" />
        
        {/* أيقونة خلفية */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg className="w-64 h-64 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h4v2H8v-2z"/>
          </svg>
        </div>
        
        {/* الصورة مع ظل احترافي */}
        <motion.div 
          className="relative w-full h-full z-10"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotateY: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          {project.image.endsWith('.mp4') ? (
            <video
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
                quality={100}
              />
            </div>
          )}
        </motion.div>
        
        {/* علامة مائية */}
        <div className="absolute bottom-4 right-4 text-xs text-gray-400/30 font-mono">
          {project.category}
        </div>
      </div>

      {/* الجزء السفلي مع المعلومات */}
      <div className="relative h-[250px] sm:h-[250px] bg-white dark:bg-gray-900 p-8">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-50" />
        
        {/* المحتوى */}
        <div className="relative z-10">
          {/* الرأس مع الرقم والمستوى */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-gray-200 dark:text-gray-700">
                {project.num}
              </span>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${project.levelColor} text-white shadow-lg`}>
                {project.level}
              </span>
            </div>
            
            {/* الأزرار في الأعلى */}
            <div className="flex gap-2">
              {project.live && (
                <Link href={project.live} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </motion.div>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-lg cursor-pointer"
                  >
                    <FiGithub className="w-4 h-4" />
                  </motion.div>
                </Link>
              )}
            </div>
          </div>

          {/* العنوان */}
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          
          {/* الوصف */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* التقنيات مع تصميم أفضل */}
          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2 font-semibold">
Technologies used            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* شريط التقدم (اختياري) */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* تأثيرات متقدمة */}
      
      {/* ظل متحرك */}
      <motion.div 
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* حدود متوهجة */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-500" />

      {/* نقاط ضوئية */}
      <motion.div 
        className="absolute top-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: isHovered ? -20 : 0,
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          x: isHovered ? 20 : 0,
          y: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="relative py-12 sm:py-16 lg:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* عناصر زخرفية */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium mb-2 sm:mb-3 lg:mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
            ✦ MY WORK
          </span>

          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2 sm:mb-3 lg:mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-primary dark:bg-gradient-dark">Projects</span>
          </h2>

          <p className="text-light-text-secondary dark:text-dark-text-secondary text-xs sm:text-sm lg:text-base max-w-2xl mx-auto px-4">
            A collection of my best work, showcasing creativity and technical expertise
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-4 sm:mt-6 lg:mt-8"
          />
        </motion.div>

        {/* Projects Slider */}
        <div className="relative -mx-2 sm:mx-0">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="work-slider"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-[350px] sm:w-[450px] lg:w-[550px] xl:w-[600px]">
  <ProjectCard project={project} />
</SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center p-3 sm:p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">16+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">Total Projects</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">5+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">Full Stack</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">11+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">Frontend</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-xl border border-light-border-primary dark:border-dark-border-primary">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">6+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">Advanced</div>
          </div>
        </motion.div>
      </div>

      {/* خط فاصل */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />

      <style jsx global>{`
        .work-slider {
          padding: 20px 0 40px !important;
        }
        .work-slider .swiper-slide {
          transition: all 0.4s ease;
          opacity: 0.4;
          transform: scale(0.85);
          filter: blur(1px);
        }
        .work-slider .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
          z-index: 10;
        }
        .work-slider .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 0.3;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .work-slider .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #0891b2, #4f46e5);
          opacity: 1;
          width: 16px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default WorkSection;