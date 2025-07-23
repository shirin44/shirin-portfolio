// src/components/DotNav.jsx
import React, { useState, useEffect } from "react";

const sections = ["hero", "about", "projects", "contact"];

const DotNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element && element.offsetTop <= scrollPos) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-5">
      {sections.map((sec) => (
        <button
          key={sec}
          onClick={() => handleDotClick(sec)}
          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
            active === sec
              ? "bg-indigo-600 border-indigo-600 scale-125"
              : "bg-transparent border-gray-400 hover:border-indigo-400"
          }`}
          aria-label={`Scroll to ${sec}`}
        ></button>
      ))}
    </div>
  );
};

export default DotNav;
