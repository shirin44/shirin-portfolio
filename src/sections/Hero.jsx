import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { smoothScroll } from "../helpers/scroll";
import { setProgrammaticScrolling } from "../helpers/sectionController";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    const container = document.querySelector(".scroll-container");
    if (!section || !container) return;

    setProgrammaticScrolling(true);
    smoothScroll(section.offsetTop);
  };

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const bounds = hero.getBoundingClientRect();
      setIsVisible(bounds.top <= window.innerHeight / 1.5);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      tabIndex={-1}
      className="snap-start h-screen w-full flex items-center justify-between bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] px-6 md:px-16 overflow-hidden relative scroll-m-0"
    >
      <div className="flex flex-col justify-center items-start z-10">
        <h1 className="text-5xl md:text-[120px] font-extrabold text-[#B23A48] mb-6 leading-tight">
          Hi, I'm Shirin
        </h1>

        <TypeAnimation
          sequence={["I build smart tools and elegant interfaces — blending AI, automation, and clean design into real-world solutions."]}
          speed={50}
          repeat={0}
          className="text-2xl md:text-5xl font-medium text-[#322828] leading-snug whitespace-pre-line max-w-[1000px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-lg md:text-2xl text-[#322828] leading-relaxed max-w-[900px]"
        >
          I've developed automation tools at Intel, built scalable platforms for startups, and crafted AI-powered applications — combining technical depth with user-centered design.
        </motion.p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="px-8 py-4 bg-[#B23A48] text-white text-lg md:text-2xl font-semibold rounded-full shadow-md hover:bg-[#922835] transition"
          >
            View Projects
          </button>
          <a
            href="/ShirinShujaa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#FAD2D1] text-[#B23A48] text-lg md:text-2xl font-semibold rounded-full shadow-md hover:brightness-110 transition"
          >
            Download Resume
          </a>
          <button
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="px-8 py-4 border-2 border-[#B23A48] text-[#B23A48] text-lg md:text-2xl font-semibold rounded-full shadow-sm hover:bg-[#B23A48] hover:text-white transition"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <motion.img
        src="jasmine.png"
        alt="Jasmine Flower"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute bottom-4 right-4 w-60 md:w-80 lg:w-[28rem]"
      />

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <svg
          className="w-8 h-8 text-[#5F4B44] mb-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-[#5F4B44] text-sm md:text-base font-medium">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
