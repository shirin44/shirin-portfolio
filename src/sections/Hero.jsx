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
    if (!section) return;

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
      className="snap-start h-screen w-full bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] overflow-hidden relative scroll-m-0 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left px-6 md:px-20 lg:px-32"
    >
      {/* Left Side Content */}
      <div className="z-10 max-w-[900px] md:max-w-[50%] flex flex-col items-center md:items-start justify-center text-[#322828]">
        <h1 className="text-4xl md:text-[100px] font-extrabold text-[#B23A48] mb-4 leading-tight">
          Hi, I'm Shirin
        </h1>

        <TypeAnimation
          sequence={[
            "I build smart tools and elegant interfaces — blending AI, automation, and clean design into real-world solutions.",
          ]}
          speed={50}
          repeat={0}
          className="text-base md:text-4xl font-medium leading-snug max-w-xs sm:max-w-md md:max-w-[700px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-6 text-sm md:text-xl text-[#322828] leading-relaxed max-w-xs sm:max-w-md md:max-w-[700px]"
        >
          I've developed automation tools at Intel, built scalable platforms for
          startups, and crafted AI-powered applications — combining technical
          depth with user-centered design.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-10 w-full md:w-auto items-center md:items-start">
          <button
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="w-full md:w-auto px-6 py-3 bg-[#B23A48] text-white text-base md:text-lg font-semibold rounded-full shadow-md hover:bg-[#922835] transition"
          >
            View Projects
          </button>
          <a
            href="/shirin-portfolio/ShirinShujaa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full md:w-auto px-6 py-3 bg-[#FAD2D1] text-[#B23A48] text-base md:text-lg font-semibold rounded-full shadow-md hover:brightness-110 transition"
          >
            Download Resume
          </a>

          <button
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="w-full md:w-auto px-6 py-3 border-2 border-[#B23A48] text-[#B23A48] text-base md:text-lg font-semibold rounded-full shadow-sm hover:bg-[#B23A48] hover:text-white transition"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Flower image for desktop only */}
      <motion.img
        src="jasmine.png"
        alt="Jasmine Flower"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="hidden md:block absolute right-12 bottom-20 md:w-70 lg:w-[24rem] w-60 "
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-20">
        <div className="flex flex-col items-center animate-bounce">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-[#5F4B44] mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-xs md:text-base text-[#5F4B44] font-medium">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
