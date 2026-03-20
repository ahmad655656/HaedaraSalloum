"use client"
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.15, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-3 xl:py-4 bg-light-bg-primary/80 dark:bg-dark-bg-primary/80 backdrop-blur-md border-b border-light-border-primary dark:border-dark-border-primary"
    >
      <div className="container flex items-center justify-between mx-auto px-4 xl:px-0">
        {/* Logo */}
        <Logo />

        {/* desktop nav */}
        <div className="items-center hidden gap-6 xl:flex">
          <Nav />
          <ThemeToggle />
        </div>

        {/* mobile nav */}
        <div className="flex items-center gap-3 xl:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>

      {/* شريط سفلي متوهج */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-light-accent-primary dark:via-dark-accent-primary to-transparent group-hover:w-3/4 transition-all duration-700" />
    </motion.header>
  );
};

export default Header;