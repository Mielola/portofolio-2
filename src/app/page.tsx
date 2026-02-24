"use client";
import React from 'react';
import CardSwap, { Card } from "@/components/CardSwap";
import LightRays from "@/components/LightRays";
import LogoLoop from "@/components/LogoLoop";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/navbar/navbar";
import EmailSidebar from "@/components/layout/vertical/EmailSidebar";
import SocialSidebar from "@/components/layout/vertical/SocialSidebar";
import AboutSection from "@/components/section/AboutSection";
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

      <div id="projects" className="bg-black h-screen w-full pt-20 p-6">
        <div className="text-center">
          <h1 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500">
            Gradient title
          </h1>
          <h2 className="text-white pt-4 text-3xl font-bold">Featured Case Studies</h2>
          <p className="text-gray-400 pt-2">A selection of projects I've worked on recently.</p>
        </div>

        <div className="w-full flex items-center justify-around">
          <div className="text-white w-full sm:w-1/3">
            <h1 className="text-2xl sm:text-5xl font-bold">Crafting elegant interfaces with purpose</h1>
            <p className="text-gray-400 pt-2">
              Showcasing projects that blend functionality, creativity, and clean design.
            </p>

            <div>
              <button className="mt-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                See All Projects
              </button>
            </div>
          </div>
          <div style={{ height: '600px', position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
              easing="elastic"
              width={600}
            >
              <Card className="text-white overflow-hidden">
                <div className="border-b-[0.8px] px-3 py-2 border-white">
                  <h3>Tzens</h3>
                </div>

                <img
                  src={Tzens.src}
                  alt="Tzens Project"
                  className="w-full object-cover"
                />
              </Card>
              <Card className="text-white overflow-hidden">
                <div className="border-b-[0.8px] px-3 py-2 border-white">
                  <h3>Netpro Connect</h3>
                </div>

                <img
                  src={Card1.src}
                  alt="Tzens Project"
                  className="w-full object-cover"
                />
              </Card>
              <Card className="text-white overflow-hidden">
                <div className="border-b-[0.8px] px-3 py-2 border-white">
                  <h3>SANTARA</h3>
                </div>

                <img
                  src={Card2.src}
                  alt="SANTARA Project"
                  className="w-full object-cover"
                />
              </Card>
              <Card className="text-white overflow-hidden">
                <div className="border-b-[0.8px] px-3 py-2 border-white">
                  <h3>Ticketing</h3>
                </div>

                <img
                  src={Card3.src}
                  alt="Ticketing Project"
                  className="w-full object-cover"
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>

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
    </section>
  );
}