"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/haedara", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/haedara", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/haedara", label: "Twitter" },
    { icon: <FaEnvelope />, href: "mailto:haedara@example.com", label: "Email" },
  ];

  return (
    <div className={containerStyles}>
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <div className={iconStyles}>
            {link.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Social;