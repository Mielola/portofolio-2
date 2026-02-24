"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Experience {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack?: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="bg-black min-h-screen w-full py-20 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 uppercase tracking-wider"
        >
          Career Journey
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white pt-4 text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Work Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 pt-4 max-w-2xl mx-auto"
        >
          A timeline of my professional journey and the companies I've had the pleasure to work with.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-black z-10" />

            {/* Date Badge - Mobile */}
            <div className="md:hidden pl-8 mb-2">
              <span className="text-sm text-green-400 font-medium">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>

            {/* Content */}
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              } pl-8 md:pl-0`}
            >
              {/* Date Badge - Desktop */}
              <div className="hidden md:block mb-2">
                <span className="text-sm text-green-400 font-medium">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              {/* Card */}
              <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-left">
                <h3 className="text-white text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors font-medium"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-green-400 font-medium">{exp.company}</span>
                  )}
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{exp.location}</span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
