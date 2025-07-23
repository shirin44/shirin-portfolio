import React from 'react';
import heroImg from '../assets/me.jpg'; // Replace with your image

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 bg-[#261EFF] text-white relative overflow-hidden">
      {/* Left: Text */}
      <div className="flex-1 mt-20 md:mt-0">
        <h1 className="text-5xl font-extrabold leading-tight">
          Frontend<br />Developer<span className="text-lime-300">.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-[#C5C9FF]">
          I like to craft solid and scalable frontend products with great user experiences.
        </p>
        <div className="mt-10 text-sm text-[#A2A6FF]">
          <p>🧠 Skilled in UI Engineering and Design Systems</p>
          <p>🌍 Experience delivering products worldwide</p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 relative mt-12 md:mt-0 flex justify-center">
        <div className="relative z-10">
          <img src={heroImg} alt="Profile" className="rounded-lg w-64 md:w-80 shadow-xl" />
        </div>
        {/* Background box behind image */}
        <div className="absolute w-64 md:w-80 h-80 bg-lime-300 top-4 right-4 z-0 rounded-lg"></div>
      </div>

      {/* Accent Dots */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border-t-2 border-l-2 border-dotted border-lime-300"></div>
    </section>
  );
};

export default Hero;
