'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='w-full h-full relative flex items-center justify-center perspective-1000'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='relative w-[280px] h-[280px] xl:w-[380px] xl:h-[380px] transform-style-3d group'
        style={{ transform: 'rotateY(0deg) rotateX(0deg)' }}
        whileHover={{ 
          rotateY: 10, 
          rotateX: 5,
          transition: { duration: 0.3 }
        }}
      >
        {/* الظل الخلفي 3D */}
        <div className='absolute -inset-4 rounded-3xl dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 blur-xl transform -translate-z-16' />
        
        {/* الصورة الرئيسية */}
        <div className='relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform translate-z-8'>
          <Image 
            src="/asset/Myphoto.jpg" 
            priority 
            quality={100} 
            fill 
            alt="Haedara Salloum" 
            className='object-cover'
          />
        </div>

        {/* طبقة زجاجية أمامية خفيفة */}
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none transform translate-z-16' />
      </motion.div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .transform-translate-z-8 {
          transform: translateZ(8px);
        }
        .transform-translate-z-16 {
          transform: translateZ(16px);
        }
        .transform-translate-z-32 {
          transform: translateZ(32px);
        }
        .transform--translate-z-8 {
          transform: translateZ(-8px);
        }
        .transform--translate-z-16 {
          transform: translateZ(-16px);
        }
      `}</style>
    </div>
  )
}

export default Photo