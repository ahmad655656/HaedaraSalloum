"use client";

import { motion } from "framer-motion";
import Stats from "@/components/Stats";

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-[#FCF9F6] overflow-hidden">
      {/* خلفية ناعمة جداً */}
      <div className="absolute inset-0 -z-10">
        {/* تدرجات خلفية هادئة */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F5F1EA] to-[#FAF7F2]" />
        
        {/* عناصر زخرفية خفيفة جداً */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg className="absolute top-20 right-20 w-64 h-64" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="url(#grad3)" />
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D6CFC4" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#B7AA9A" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="absolute bottom-20 left-20 w-80 h-80" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="url(#grad4)" />
            <defs>
              <linearGradient id="grad4" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B7AA9A" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#D6CFC4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        {/* عنوان القسم - اختياري، يمكنك إزالته إذا أردت */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.15, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-[#8A7F75] uppercase tracking-[0.3em] font-light mb-3 px-4 py-2 bg-[#E8E2D9]/30 rounded-full backdrop-blur-sm border border-[#D6CFC4]/20">
            ✦ الإنجازات
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#3F3A36]">
            أرقام تتحدث عن نفسها
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-[#D6CFC4] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* مكون الإحصائيات */}
        <Stats />
      </div>

      {/* مؤشر التمرير للقسم التالي - اختياري */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-[#8A7F75]/30">
          <div className="w-5 h-10 rounded-full border border-[#D6CFC4]/30 flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#B7AA9A]/40 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}