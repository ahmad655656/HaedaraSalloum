// components/work/ProjectActions.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const ProjectActions = ({ live, github }) => {
  return (
    <div className="flex gap-2">
      {live && (
        <Link href={live} target="_blank">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-xl transition-all"
          >
            <FiExternalLink className="w-4 h-4" />
          </motion.div>
        </Link>
      )}
      {github && (
        <Link href={github} target="_blank">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-lg cursor-pointer"
          >
            <FiGithub className="w-4 h-4" />
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default ProjectActions;