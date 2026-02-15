"use client";
import { motion } from "framer-motion";
import { 
  FiClipboard, 
  FiPenTool, 
  FiCode, 
  FiCheckCircle,
  FiArrowRight 
} from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ProcessComponent = () => {
  const steps = [
    {
      icon: <FiClipboard className="w-8 h-8" />,
      title: "Planning",
      description: "I start by sketching the website structure (Wireframe) and defining goals to ensure a smooth and logical user experience.",
      color: "from-cyan-500 to-indigo-500",
      delay: 0.2
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "Design",
      description: "I choose calm colors and elegant fonts, and design a user interface that reflects the brand identity.",
      color: "from-cyan-500 to-indigo-500",
      delay: 0.4
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Development",
      description: "I write clean code using the latest technologies, ensuring fast performance and full responsiveness across all devices.",
      color: "from-cyan-500 to-indigo-500",
      delay: 0.6
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Testing",
      description: "I test every detail thoroughly and make additional optimizations to ensure a perfect user experience.",
      color: "from-cyan-500 to-indigo-500",
      delay: 0.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.15, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary"
        >
          ✦ WORK PROCESS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4"
        >
          How I Turn Ideas Into Reality?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto"
        >
          A complete journey from concept to launch, paying attention to every small detail
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-8"
        />
      </motion.div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={step.delay}
            className="group relative"
          >
            {/* Step Card */}
            <div className="relative bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />

              {/* Number with animation */}
              <motion.div 
                className="absolute top-4 right-4 text-5xl font-bold text-light-text-tertiary/20 dark:text-dark-text-tertiary/20 select-none"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* Icon with enhanced animation */}
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
                        {step.icon}
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-light-text-primary dark:bg-dark-text-primary text-light-bg-primary dark:text-dark-bg-primary border-0">
                    <p className="text-sm font-medium">Step {index + 1}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary dark:bg-gradient-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" />
            </div>

            {/* Connecting arrow with enhanced design */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.delay + 0.3 }}
                  whileHover={{ scale: 1.2, x: 5 }}
                  className="text-light-border-secondary dark:text-dark-border-secondary bg-light-bg-primary dark:bg-dark-bg-primary rounded-full p-1 shadow-lg"
                >
                  <FiArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary shadow-md hover:shadow-lg transition-all duration-300">
          <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">
            Final Result: Elegant, Fast, and Ready-to-Launch Website
          </span>
          <motion.span
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: "easeInOut" 
            }}
            className="text-xl"
          >
            ✨
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessComponent;