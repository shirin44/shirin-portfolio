import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaBrain, FaCode, FaRobot, FaGamepad, FaGithub } from "react-icons/fa";
import { projects } from "../constants/projectsList";

const getProjectIcon = (type) => {
  switch (type) {
    case "AI":
      return <FaBrain className="text-[#B23A48] w-5 h-5" />;
    case "Web Dev":
      return <FaCode className="text-[#B23A48] w-5 h-5" />;
    case "Embedded":
      return <FaRobot className="text-[#B23A48] w-5 h-5" />;
    case "Game Dev":
      return <FaGamepad className="text-[#B23A48] w-5 h-5" />;
    default:
      return null;
  }
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, paused]);

  useEffect(() => {
    if (!paused) return;
    const resume = setTimeout(() => setPaused(false), 10000);
    return () => clearTimeout(resume);
  }, [paused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="h-screen w-full bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] px-4 sm:px-8 md:px-16 py-10 flex flex-col justify-start relative overflow-hidden"
    >
      <div className="text-center mb-10 mt-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#B23A48] drop-shadow-md">
          Featured Work
        </h2>
        <p className="text-[#5F4B44] mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
          A curated selection of projects highlighting <strong>technical depth</strong>,{" "}
          <strong>real-world impact</strong>, and <strong>design precision</strong>.
        </p>
      </div>

      {/* 📱 Mobile view: One card with swipe controls */}
      <div
        className="md:hidden flex flex-col items-center justify-center flex-grow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          key={projects[currentIndex].title}
          className="w-full max-w-[90%] bg-white/80 border border-[#E4DCCF] rounded-3xl shadow-md p-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-2">
            {getProjectIcon(projects[currentIndex].type)}
            <h3 className="text-lg font-bold text-[#B23A48]">{projects[currentIndex].title}</h3>
          </div>
          <p className="text-sm text-[#5F4B44] italic">{projects[currentIndex].date}</p>
          {projects[currentIndex].course && (
            <p className="text-sm text-[#5F4B44] mb-1 font-medium">{projects[currentIndex].course}</p>
          )}
          <p className="text-sm text-[#322828] mb-4">{projects[currentIndex].description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {projects[currentIndex].technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#FAD2D1] text-[#B23A48] px-2 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#B23A48] font-semibold text-sm hover:underline"
          >
            View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </motion.div>

        {/* Navigation buttons */}
        <div className="mt-4 flex justify-between w-full max-w-[90%]">
          <button
            onClick={handlePrev}
            className="text-[#B23A48] font-bold text-lg hover:scale-110 transition-transform"
          >
            ‹ Prev
          </button>
          <button
            onClick={handleNext}
            className="text-[#B23A48] font-bold text-lg hover:scale-110 transition-transform"
          >
            Next ›
          </button>
        </div>
      </div>

      {/* 💻 Desktop view: Scrollable cards */}
      <div className="hidden md:flex overflow-x-auto gap-6 px-1 md:px-4 hide-scrollbar snap-x snap-mandatory scroll-smooth">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="relative min-w-[400px] snap-center bg-white/80 backdrop-blur-xl border border-[#E4DCCF] rounded-3xl shadow-md p-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              {getProjectIcon(project.type)}
              <h3 className="text-xl font-bold text-[#B23A48]">{project.title}</h3>
            </div>
            <p className="text-sm text-[#5F4B44] italic">{project.date}</p>
            {project.course && (
              <p className="text-sm text-[#5F4B44] mb-1 font-medium">{project.course}</p>
            )}
            <p className="text-sm text-[#322828] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#FAD2D1] text-[#B23A48] px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#B23A48] font-semibold text-sm hover:underline"
            >
              View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* 🌐 Footer */}
      <div className="text-center mt-6 md:mt-20">
        <a
          href="https://github.com/shirin44"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#B23A48] text-base md:text-xl font-bold underline hover:brightness-110 transition-all"
        >
          <FaGithub className="w-6 h-6" />
          See more projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
