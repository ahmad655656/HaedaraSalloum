"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:to-dark-bg-primary p-10 md:p-16 lg:p-20 text-center shadow-xl border border-light-border-primary dark:border-dark-border-primary overflow-hidden"
        >
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-light-accent-primary/5 via-transparent to-light-accent-secondary/5 dark:from-dark-accent-primary/5 dark:via-transparent dark:to-dark-accent-secondary/5" />
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
              ✦ LET'S COLLABORATE
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
              Ready to Build Your Next Project?
            </h2>

            <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's create a modern website with a clean interface, smooth animations, 
              and a unique experience that leaves a lasting impression on your visitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-gradient-primary dark:bg-gradient-dark text-white rounded-2xl px-8 py-4 text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>

              <Link href="/#work">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-2xl px-8 py-4 text-base font-semibold tracking-wide border border-light-border-primary dark:border-dark-border-primary hover:border-light-accent-primary/50 dark:hover:border-dark-accent-primary/50 transition-all duration-500"
                >
                  <span className="relative z-10">View My Work</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
}