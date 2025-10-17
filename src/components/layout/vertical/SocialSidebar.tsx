"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface SocialSidebarProps {
  githubUrl?: string;
  linkedinUrl?: string;
  className?: string;
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ 
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://linkedin.com/in/yourusername",
  className = "" 
}) => {
  const socialLinks = [
    {
      icon: <SiGithub size={20} />,
      href: githubUrl,
      label: "GitHub"
    },
    {
      icon: <SiLinkedin size={20} />,
      href: linkedinUrl,
      label: "LinkedIn"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={`fixed right-4 lg:right-8 bottom-0 z-30 hidden md:flex flex-col items-center ${className}`}
    >
      {/* Social links */}
      <div className="flex flex-col gap-4 mb-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      
      {/* Vertical line */}
      <div className="w-px h-24 bg-gray-600"></div>
    </motion.div>
  );
};

export default SocialSidebar;