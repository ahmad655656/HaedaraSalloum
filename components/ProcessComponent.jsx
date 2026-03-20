"use client";
import { motion } from "framer-motion";
import { 
  FiClipboard, 
  FiPenTool, 
  FiCode, 
  FiCheckCircle 
} from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ProcessComponent = () => {
  const steps = [
    {
      icon: <FiClipboard className="w-8 h-8" />,
      title: "التخطيط",
      description: "أبدأ برسم هيكل الموقع (Wireframe) وتحديد الأهداف، لأضمن تجربة مستخدم سلسة ومنطقية.",
      color: "from-[#8A9A8C] to-[#9BAB9D]",
      delay: 0.2
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "التصميم",
      description: "أختار الألوان الهادئة والخطوط الأنيقة، وأصمم واجهة مستخدم تعكس هوية العلامة التجارية.",
      color: "from-[#B7AA9A] to-[#C8BBAB]",
      delay: 0.4
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "التطوير",
      description: "أكتب أكواد نظيفة باستخدام أحدث التقنيات، مع ضمان أداء سريع وتجاوب كامل مع جميع الأجهزة.",
      color: "from-[#9BAB9D] to-[#8A9A8C]",
      delay: 0.6
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "الاختبار",
      description: "أختبر كل التفاصيل بدقة، وأجري تحسينات إضافية لأضمن تجربة مستخدم مثالية.",
      color: "from-[#C8BBAB] to-[#B7AA9A]",
      delay: 0.8
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs text-[#8A7F75] uppercase tracking-[0.3em] font-light mb-4 px-4 py-2 bg-[#E8E2D9]/30 rounded-full backdrop-blur-sm border border-[#D6CFC4]/20"
        >
          ✦ منهجية العمل
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-[#3F3A36] mb-4"
        >
          كيف أحوّل الأفكار إلى واقع؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8A7F75] text-lg max-w-2xl mx-auto font-light"
        >
          رحلة متكاملة من الفكرة إلى الإطلاق، مع الاهتمام بكل تفصيل صغير
        </motion.p>

        {/* خط زخرفي */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-[#D6CFC4] to-transparent mx-auto mt-8"
        />
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: step.delay,
              ease: [0.25, 0.1, 0.15, 1]
            }}
            className="group relative"
          >
            {/* بطاقة الخطوة */}
            <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-[#E8E2D9]/50 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              
              {/* خلفية متدرجة عند التحويم */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />

              {/* الرقم */}
              <div className="absolute top-4 right-4 text-5xl font-light text-[#E8E2D9] select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* الأيقونة */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 mb-6"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        {step.icon}
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-[#3F3A36] text-white border-0">
                    <p className="text-sm font-light">الخطوة {index + 1}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* العنوان */}
              <h3 className="relative z-10 text-xl font-light text-[#3F3A36] mb-3">
                {step.title}
              </h3>

              {/* الوصف */}
              <p className="relative z-10 text-[#8A7F75] text-sm leading-relaxed font-light">
                {step.description}
              </p>

              {/* خط زخرفي سفلي */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`} />
            </div>

            {/* سهم ربط بين الخطوات (للشاشات الكبيرة) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.delay + 0.3 }}
                  className="text-[#D6CFC4]"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/30 backdrop-blur-sm rounded-full border border-[#E8E2D9]/50">
          <span className="text-[#8A7F75] text-sm font-light">
            النتيجة النهائية: موقع أنيق، سريع، وجاهز للإطلاق
          </span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
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