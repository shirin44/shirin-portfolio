// src/sections/Hero.jsx
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import JasmineFlower from "../assets/jasmine.png";

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-start bg-[#F6E6D6] px-6 md:px-16 lg:px-24">
      {/* Name */}
      <h1 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold text-[#1E3557] mb-4 leading-tight">
        Hi, I’m Shirin
      </h1>

      {/* Typing Animation or Final Text */}
      {!isTypingDone ? (
        <TypeAnimation
          sequence={[
            "I build intuitive web apps,", 500,
            "I build web apps,\nengineer AI solutions,", 500,
            "I build web apps,\nengineer AI solutions,\ntrain models & teach languages.", 1000,
            () => setIsTypingDone(true),
          ]}
          speed={55}
          className="text-[22px] sm:text-[28px] md:text-[34px] text-[#384959] font-medium leading-snug whitespace-pre-line max-w-4xl"
        />
      ) : (
        <p className="text-[22px] sm:text-[28px] md:text-[34px] text-[#384959] font-medium leading-snug max-w-4xl">
          I build intuitive{" "}
          <span className="text-[#E3C27E] font-semibold hover:underline cursor-pointer">web apps</span>,<br />
          engineer{" "}
          <span className="text-[#E3C27E] font-semibold hover:underline cursor-pointer">AI solutions</span> and{" "}
          <span className="text-[#E3C27E] font-semibold hover:underline cursor-pointer">machine learning tools</span>,<br />
          <span className="text-[#E3C27E] font-semibold hover:underline cursor-pointer">teach languages</span>, and{" "}
          <span className="text-[#E3C27E] font-semibold hover:underline cursor-pointer">design user-centric experiences</span>.
        </p>
      )}

      {/* CTA Button */}
      <a
        href="/ShirinShujaa_CV.pdf"
        download
        className="mt-10 px-8 py-4 text-lg sm:text-xl bg-[#1E3557] text-white rounded-full shadow-lg hover:bg-[#384959] transition duration-300"
      >
        Download CV
      </a>

      {/* Decorative Jasmine Image */}
      <img
        src={JasmineFlower}
        alt="Jasmine Flower"
        className="absolute bottom-4 right-4 w-44 sm:w-56 md:w-72 opacity-90"
      />
    </div>
  );
};

export default Hero;
