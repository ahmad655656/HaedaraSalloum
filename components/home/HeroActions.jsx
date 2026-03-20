"use client";

import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import Social from "../Social";

export default function HeroActions() {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
      
      <a href="/MyCv.pdf" download>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold rounded-2xl bg-light-accent-primary dark:bg-dark-accent-primary hover:bg-light-accent-hover-primary dark:hover:bg-dark-accent-hover-primary text-light-button-text dark:text-dark-button-text transition-all duration-500 shadow-lg hover:shadow-xl border-0"
          >
            Download CV <FiDownload className="ml-2 text-lg" />
          </Button>
        </motion.div>
      </a>

      <Link href="#contact">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-semibold rounded-2xl border-light-border-primary dark:border-dark-border-primary text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-all duration-500"
          >
            Let's Work Together
          </Button>
        </motion.div>
      </Link>

      <Social
        containerStyles={"flex gap-4"}
        iconStyles={
          "w-11 h-11 border border-light-border-primary dark:border-dark-border-primary bg-light-bg-primary dark:bg-dark-bg-primary rounded-2xl flex justify-center items-center text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary hover:border-light-accent-primary/30 dark:hover:border-dark-accent-primary/30 hover:shadow-md transition-all duration-500"
        }
      />
    </div>
  );
}