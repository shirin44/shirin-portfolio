import React from "react";
import { TypeAnimation } from "react-type-animation";
import { smoothScroll } from '../helpers/scroll';
import { setProgrammaticScrolling } from '../helpers/sectionController';

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    const container = document.querySelector('.scroll-container');
    if (!section || !container) return;

    setProgrammaticScrolling(true);
    smoothScroll(section.offsetTop);

    // Optional: reset after scroll completes (DotNav already does this)
    // setTimeout(() => setProgrammaticScrolling(false), 900);
  };

  return (
    <section
      id="hero"
      tabIndex={-1}
      className="snap-start h-screen w-full flex items-center bg-[#F6E6D6] px-6 md:px-16 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-start">
        {/* Heading */}
        <h1 className="text-5xl md:text-[120px] font-extrabold text-[#1E3557] mb-6 leading-tight">
          Hi, I'm Shirin
        </h1>

        {/* Typing effect */}
        <TypeAnimation
          sequence={["I love building things that think, see, help, and inspire."]}
          speed={50}
          repeat={0}
          className="text-2xl md:text-5xl font-medium text-[#384959] leading-snug whitespace-pre-line max-w-[1000px]"
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="px-8 py-4 bg-[#1E3557] text-white text-lg md:text-2xl font-semibold rounded-full shadow-md hover:bg-[#384959] transition"
          >
            View Projects
          </button>
          <a
            href="/ShirinShujaa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#E3C27E] text-[#1E3557] text-lg md:text-2xl font-semibold rounded-full shadow-md hover:brightness-110 transition"
          >
            Download Resume
          </a>
          <button
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="px-8 py-4 border-2 border-[#1E3557] text-[#1E3557] text-lg md:text-2xl font-semibold rounded-full shadow-sm hover:bg-[#1E3557] hover:text-white transition"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Jasmine image */}
      <img
        src="jasmine.png"
        alt="Jasmine Flower"
        className="absolute bottom-4 right-4 w-60 md:w-80 lg:w-[28rem] animate-float"
      />
    </section>
  );
};

export default Hero;
