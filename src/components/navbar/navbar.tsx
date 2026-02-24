"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Find the scroll container (section with overflow-scroll)
        const scrollContainer = document.querySelector("section.overflow-scroll") || document.querySelector("section");
        
        if (!scrollContainer) return;

        const onScroll = () => {
            setIsScrolled(scrollContainer.scrollTop > 0);
        };

        scrollContainer.addEventListener("scroll", onScroll);
        return () => scrollContainer.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const menuItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" }
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "backdrop-blur-xl bg-white/10 shadow-lg"
                    : "bg-transparent"
                }`}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
        >
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <motion.h1
                    className="text-white font-bold text-2xl tracking-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
                        MyPortfolio
                    </span>
                </motion.h1>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-8 text-white/80 font-medium">
                    {menuItems.map((item) => (
                        <motion.li
                            key={item.name}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-white transition-all duration-300 cursor-pointer relative group"
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </motion.li>
                    ))}
                </ul>

                {/* Button / CV */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-gradient-to-r from-green-500 to-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                    Download CV
                </motion.button>

                {/* Hamburger untuk mobile */}
                <div className="md:hidden text-white cursor-pointer">
                    ☰
                </div>
            </div>
        </motion.nav>
    );
}