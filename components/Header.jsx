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
          <Link href="/contact">
            <Button className="relative overflow-hidden group bg-light-accent-primary dark:bg-dark-accent-primary hover:bg-light-accent-hover-primary dark:hover:bg-dark-accent-hover-primary text-light-button-text dark:text-dark-button-text border-0 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10">Hire me</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </Link>
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