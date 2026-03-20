// components/contact/ContactSection.jsx
"use client";

import { motion } from "framer-motion";
import ContactForm from "../contact/ContactForm";
import Map from "../contact/Map";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-24 bg-light-bg-primary dark:bg-dark-bg-primary overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-secondary dark:via-dark-bg-primary dark:to-dark-bg-secondary" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-light-accent-primary/5 dark:bg-dark-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-medium mb-4 px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full border border-light-border-primary dark:border-dark-border-primary">
            ✦ GET IN TOUCH
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Let's Work Together
          </h2>

          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll respond within 24 hours.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-gradient-primary dark:bg-gradient-dark mx-auto mt-8"
          />
        </motion.div>

        {/* Contact Grid - Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <Map />
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">Email</h3>
            <a href="mailto:haedarahasan69@gmail.com" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors">
              haedarahasan69@gmail.com
            </a>
          </div>

          <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">WhatsApp</h3>
            <a href="https://wa.me/963983796029" target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors">
              +963 983 796 029
            </a>
          </div>

          <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary text-center hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">Location</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Sheikh Badr - Tartous, Syria
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border-secondary/30 dark:via-dark-border-secondary/30 to-transparent" />
    </section>
  );
}