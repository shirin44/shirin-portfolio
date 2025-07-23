import React, { useState, useEffect } from "react";

const sections = ["hero", "about", "projects", "contact"];

const DotNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-3 z-50">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`block w-3 h-3 rounded-full border-2 transition-all ${
            activeSection === section
              ? "bg-indigo-600 border-indigo-600 scale-125"
              : "border-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default DotNav;
