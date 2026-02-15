"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react"; // تعديل الاستيراد

const stats = [
  {
    num: 4,
    text: "Years of Experience",
  },
  {
    num: 15,
    text: "Projects Completed",
  },
  {
    num: 6,
    text: "Technologies Mastered",
  },
  {
    num: 25,
    text: "The Age",
  },
];

// مكون عداد متحرك - نسخة مبسطة لتجنب المشكلة
function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // عداد بسيط
          let start = 0;
          const duration = 1500; // 1.5 ثانية
          const step = Math.ceil(value / (duration / 16));
          
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E8E2D9]/50 hover:border-[#D6CFC4]/80 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E2D9]/0 via-[#D6CFC4]/0 to-[#B7AA9A]/0 group-hover:from-[#E8E2D9]/10 group-hover:via-[#D6CFC4]/5 group-hover:to-[#B7AA9A]/10 transition-all duration-700" />
            
            <div className="relative z-10 mb-3">
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3F3A36]">
                <AnimatedCounter value={stat.num} />
                <span className="text-2xl md:text-3xl text-[#B7AA9A] ml-1">+</span>
              </span>
            </div>

            <h3 className="relative z-10 text-sm md:text-base text-[#8A7F75] font-light tracking-wide">
              {stat.text}
            </h3>

            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D6CFC4] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#B7AA9A] to-transparent group-hover:w-3/4 transition-all duration-700 delay-300" />
        </motion.div>
      ))}
    </motion.div>
  );
}