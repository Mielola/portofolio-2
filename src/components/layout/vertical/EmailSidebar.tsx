"use client";

import { motion } from "framer-motion";

interface EmailSidebarProps {
  email?: string;
  className?: string;
}

const EmailSidebar: React.FC<EmailSidebarProps> = ({ 
  email = "muhamadwildan@example.com",
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={`fixed left-4 lg:left-8 bottom-0 z-30 hidden md:flex flex-col items-center ${className}`}
    >
      {/* Email text - vertical */}
      <div className="writing-mode-vertical text-sm text-gray-400 hover:text-green-400 transition-colors duration-300">
        <a
          href={`mailto:${email}`}
          className="tracking-widest font-mono"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {email}
        </a>
      </div>
      
      {/* Vertical line */}
      <div className="w-px h-24 bg-gray-600 mt-6"></div>
    </motion.div>
  );
};

export default EmailSidebar;