"use client";
import React from 'react';
import LightRays from "@/components/LightRays";
import LogoLoop from "@/components/LogoLoop";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/navbar/navbar";
import EmailSidebar from "@/components/layout/vertical/EmailSidebar";
import SocialSidebar from "@/components/layout/vertical/SocialSidebar";
import AboutSection from "@/components/section/AboutSection";
import ProjectSection, { Project } from "@/components/section/ProjectSection";
import ExperienceSection, { Experience } from "@/components/section/ExperienceSection";
import Footer from "@/components/layout/Footer";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Tzens from '../../public/images/projects/tzens.png';
import Card1 from '../../public/images/cards/01-320x200.jpg';
import Card2 from '../../public/images/cards/02-320x200.jpg';
import Card3 from '../../public/images/cards/03-320x200.jpg';
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const onLoad = () => setLoading(false);
    if (document.readyState === 'complete') {
      setLoading(false);
      return;
    }
    window.addEventListener('load', onLoad);
    // Fallback: remove loading after 6s
    const t = setTimeout(() => setLoading(false), 6000);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(t);
    };
  }, []);
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Tzens",
      description: "A modern e-commerce platform built with Next.js and TypeScript, featuring real-time inventory management and seamless checkout experience.",
      image: Tzens.src,
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      liveUrl: "https://tzens.com",
      githubUrl: "https://github.com/yourusername/tzens",
    },
    {
      id: 2,
      title: "Netpro Connect",
      description: "Professional networking application that connects developers and businesses, with real-time messaging and job posting features.",
      image: Card1.src,
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://netpro-connect.com",
      githubUrl: "https://github.com/yourusername/netpro-connect",
    },
    {
      id: 3,
      title: "SANTARA",
      description: "Investment platform for agricultural sector, enabling users to invest in farming projects with transparent returns and impact tracking.",
      image: Card2.src,
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      liveUrl: "https://santara.co.id",
      githubUrl: "https://github.com/yourusername/santara",
    },
    {
      id: 4,
      title: "Ticketing System",
      description: "Event ticketing platform with QR code validation, seat selection, and integrated payment gateway for seamless ticket purchasing.",
      image: Card3.src,
      techStack: ["React", "Express", "MySQL", "Tailwind CSS"],
      liveUrl: "https://ticketing-app.com",
      githubUrl: "https://github.com/yourusername/ticketing",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern animations and responsive design.",
      image: Card1.src,
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management tool with kanban boards, team collaboration features, and productivity analytics.",
      image: Card2.src,
      techStack: ["React", "Node.js", "MongoDB", "Redux"],
      liveUrl: "https://taskapp.com",
      githubUrl: "https://github.com/yourusername/taskapp",
    },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Startup Inc.",
      companyUrl: "https://techstartup.com",
      location: "Jakarta, Indonesia",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Led the development of a new customer-facing dashboard, improving user engagement by 40%",
        "Mentored junior developers and conducted code reviews to maintain code quality",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team to create responsive and accessible UI components",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "Digital Agency",
      companyUrl: "https://digitalagency.com",
      location: "Bandung, Indonesia",
      startDate: "Jun 2022",
      endDate: "Dec 2023",
      description: [
        "Developed and maintained multiple client projects using React and Node.js",
        "Built RESTful APIs and integrated third-party services for e-commerce platforms",
        "Optimized database queries resulting in 50% faster page load times",
        "Participated in agile ceremonies and sprint planning sessions",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Software House",
      companyUrl: "https://softwarehouse.com",
      location: "Surabaya, Indonesia",
      startDate: "Jan 2021",
      endDate: "May 2022",
      description: [
        "Assisted in developing web applications using PHP Laravel and Vue.js",
        "Created responsive landing pages and marketing websites for clients",
        "Learned best practices in version control and collaborative development",
        "Contributed to internal tools that improved team productivity",
      ],
      techStack: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-scroll overflow-x-hidden bg-black">
      <LoadingScreen visible={loading} />
      <Navbar />
      <EmailSidebar email="muhamadwildan@example.com" />
      <SocialSidebar 
        githubUrl="https://github.com/yourusername"
        linkedinUrl="https://linkedin.com/in/yourusername"
      />
      <div id="home" className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-sm text-white/80 font-medium tracking-wide">
            Available for new opportunities
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-white/90 font-bold text-2xl sm:text-5xl lg:text-5xl leading-tight max-w-6xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Building impactful digital experiences with{" "}
          <motion.span
            className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            clean design
          </motion.span>{" "}
          & efficient code.
        </motion.h1>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-gray-400 mt-6 max-w-xl text-sm sm:text-lg leading-relaxed">
          I’m a Fullstack Developer focused on creating seamless web applications that
          combine performance, aesthetics, and user delight.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex items-center gap-4 mt-8">
          <a
            href="#projects"
            className="bg-gradient-to-r text-sm sm:text-base from-green-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-transform duration-300"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="text-sm sm:text-base border border-gray-600 text-gray-300 px-6 py-2.5 rounded-full font-medium hover:border-white hover:text-white transition-all"
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>

      <div style={{ width: '100%', }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#fffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={4.2}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0b0b0b"
          className="text-white"
          ariaLabel="Technology partners"
        />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* Projects Section */}
      <ProjectSection projects={projects} />

      {/* Contact Section */}
      <div id="contact" className="bg-gradient-to-b from-black to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            GET IN TOUCH
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:muhamadwildan@example.com"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Send Email
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-white hover:text-white transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        name="Muhamad Wildan"
        email="muhamadwildan@example.com"
        githubUrl="https://github.com/yourusername"
        linkedinUrl="https://linkedin.com/in/yourusername"
      />
    </section>
  );
}