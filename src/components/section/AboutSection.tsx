"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiFigma, 
  SiAngular,
  SiJavascript,
  SiMysql,
  SiLaravel,
  SiGo,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiFirebase
} from "react-icons/si";
import { HiCode, HiLightBulb, HiHeart } from "react-icons/hi";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const skills = [
    { icon: <SiReact />, name: "React", category: "Frontend" },
    { icon: <SiReact />, name: "React Native", category: "Frontend" },
    { icon: <SiAngular />, name: "Angular", category: "Frontend" },
    { icon: <SiNextdotjs />, name: "Next.js", category: "Framework" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Language" },
    { icon: <SiJavascript />, name: "Javascript", category: "Language" },
    { icon: <SiGo />, name: "Golang", category: "Language" },
    { icon: <SiGo />, name: "Golang", category: "Backend" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Styling" },
    { icon: <SiLaravel />, name: "Laravel", category: "Backend" },
    { icon: <SiMysql />, name: "MySQL", category: "Database" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database" },
    { icon: <SiFirebase />, name: "Firebase", category: "Database" },
    { icon: <SiGit />, name: "Git", category: "Tools" },
    { icon: <SiFigma />, name: "Figma", category: "Design" },
    { icon: <SiAdobephotoshop />, name: "Photoshop", category: "Design" },
    { icon: <SiAdobeillustrator />, name: "Illustrator", category: "Design" },
    { icon: <SiAdobeaftereffects />, name: "After Effects", category: "Design" },
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "∞", label: "Cups of Coffee" },
  ];

  const values = [
    {
      icon: <HiCode className="text-green-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <HiLightBulb className="text-yellow-400" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to solve complex problems."
    },
    {
      icon: <HiHeart className="text-red-400" />,
      title: "User-Centric",
      description: "Putting user experience at the heart of every design and development decision."
    },
  ];

  return (
    <section className={`relative bg-black py-20 px-6 overflow-hidden ${className}`} id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }, (_, i) => (
            <div key={i} className="border border-white/5" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            GET TO KNOW ME
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate fullstack developer with a love for creating digital experiences 
            that make a difference.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Personal Info & Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <div className="relative group">
              <div className="w-80 h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                  {/* Placeholder for profile photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-6xl text-gray-500">
                      <img src="images/profiles/profile.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Description */}
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="text-green-400 font-semibold">Muhamad Wildan</span>, 
                a passionate fullstack developer based in Indonesia. I specialize in building 
                modern web applications that combine beautiful design with robust functionality.
              </p>
              <p>
                My journey in web development started 3 years ago, and I've been fascinated 
                by the endless possibilities of creating digital solutions that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while planning my next project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Skills */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {/* Group skills by category */}
                {['Frontend', 'Backend', 'Language', 'Database', 'Tools', 'Design'].map((category) => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  if (categorySkills.length === 0) return null;
                  
                  return (
                    <div key={category}>
                      <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {categorySkills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300"
                          >
                            <div className="text-lg text-green-400 group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-8">What I Value</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  >
                    <div className="text-3xl mt-1">{value.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">{value.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;