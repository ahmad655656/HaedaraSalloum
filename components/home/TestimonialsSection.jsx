"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Al-Meer",
      role: "Project Manager",
      text: "Working with Haedara was truly enjoyable. The website developed exceeded my expectations!",
      rating: 5,
    },
    {
      name: "Sara Ibrahim",
      role: "Graphic Designer",
      text: "The design was amazing, and the interface is extremely user-friendly. I will definitely work with him again!",
      rating: 5,
    },
    {
      name: "Mohammed Al-Anzi",
      role: "Entrepreneur",
      text: "High professionalism and fast execution. Deep understanding of project needs and creative solutions.",
      rating: 5,
    },
    {
      name: "Noura Al-Tamimi",
      role: "Marketing Manager",
      text: "Great experience! The website significantly helped increase sales. Thank you Haedara for the excellent work.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* Decorative elements */}
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
            ✦ CLIENT TESTIMONIALS
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            What People Say About Me
          </h2>

          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Some words from clients I had the pleasure to work with
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-8"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg hover:shadow-xl transition-all duration-500">
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-4xl text-light-text-tertiary/20 dark:text-dark-text-tertiary/20 select-none">
                  &quot;
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 fill-current text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-light-text-primary dark:text-dark-text-primary leading-relaxed text-lg mb-8 relative z-10">
                  “{item.text}”
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary dark:bg-gradient-dark flex items-center justify-center text-white text-xl font-semibold shadow-md">
                    {item.name.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary text-lg">
                      {item.name}
                    </h4>
                    <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
}