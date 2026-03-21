// components/work/ProjectActions.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const ProjectActions = ({ live, github }) => {
  const isValidLink = (url) => url && url !== "#";

  return (
    <div className="flex items-center gap-2">
      {isValidLink(live) && (
        <Link
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open live project"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:shadow-md"
        >
          <FiExternalLink className="h-4 w-4" />
          <span className="hidden sm:inline">Live</span>
        </Link>
      )}
      {isValidLink(github) && (
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub repository"
          className="group inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <FiGithub className="h-4 w-4" />
          <span className="hidden sm:inline">Code</span>
        </Link>
      )}
    </div>
  );
};

export default ProjectActions;
