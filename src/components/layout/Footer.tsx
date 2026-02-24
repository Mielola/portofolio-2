"use client";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from "react-icons/fi";

interface FooterProps {
  name?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  name = "Muhamad Wildan",
  email = "muhamadwildan@example.com",
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://linkedin.com/in/yourusername",
  twitterUrl,
  instagramUrl,
}) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: githubUrl, label: "GitHub" },
    { icon: <FiLinkedin />, href: linkedinUrl, label: "LinkedIn" },
    { icon: <FiMail />, href: `mailto:${email}`, label: "Email" },
    ...(twitterUrl ? [{ icon: <FiTwitter />, href: twitterUrl, label: "Twitter" }] : []),
    ...(instagramUrl ? [{ icon: <FiInstagram />, href: instagramUrl, label: "Instagram" }] : []),
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {name}
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fullstack Developer passionate about creating impactful digital experiences
              with clean design and efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${email}`}
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300 block"
              >
                {email}
              </a>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with{" "}
              <span className="text-red-500">♥</span>
              {" "}using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
