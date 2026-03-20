'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/constants/navlinks'



const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-row items-center gap-2'>
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        
        return (
          <Link 
            href={link.path} 
            key={index}
          >
            <motion.div
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-light-text-primary dark:text-dark-text-primary" 
                  : "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-sm font-medium tracking-wide capitalize">
                {link.name}
              </span>
              
              {/* خلفية للرابط النشط */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full -z-0"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
              
              {/* خلفية عند التمرير */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-light-bg-tertiary/0 dark:bg-dark-bg-tertiary/0 rounded-full -z-0"
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  )
}

export default Nav