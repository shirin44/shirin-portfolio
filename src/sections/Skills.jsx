import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaPython, FaFigma, FaGitAlt, FaDocker, FaJava, FaVial
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMongodb, SiMysql, SiVite, SiRedux, SiExpress,
  SiPostman, SiJira, SiVercel, SiCanva, SiTypescript, SiJavascript,
  SiTensorflow, SiScikitlearn, SiOpencv
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const skills = {
  Programming: [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Java', icon: <FaJava /> },
  ],
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <TbBrandNextjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Redux', icon: <SiRedux /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Vite', icon: <SiVite /> },
  ],
  AI_ML: [
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
  ],
  Creative: [
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Canva', icon: <SiCanva /> },
    { name: 'Excel VBA', icon: <FaVial /> },
  ]
}

const categoryNames = Object.keys(skills)

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0])

  return (
    <section
      id="skills"
      className="relative h-screen w-screen bg-[#FAF3E0] text-[#322828] overflow-hidden flex flex-col justify-center items-center px-4"
    >
      {/* Parallax floating blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#FFF3C7] rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#FFE0DC] rounded-full blur-[100px] opacity-50 animate-pulse-slow" />
        <div className="absolute top-[40%] left-[45%] w-64 h-64 bg-[#B23A48] rounded-full blur-[160px] opacity-20" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-[#B23A48] mb-6 z-10">Skills</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 z-10">
        {categoryNames.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border border-[#B23A48] text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-[#B23A48] text-white shadow-md'
                : 'bg-transparent text-[#B23A48] hover:bg-[#b23a48]/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills */}
      <div className="w-full max-w-6xl px-4 overflow-x-auto scroll-smooth cursor-grab z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex gap-8 justify-center items-center min-w-max py-6"
          >
            {skills[selectedCategory].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.12,
                  boxShadow: '0 0 25px rgba(178, 58, 72, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="min-w-[160px] h-[180px] bg-white rounded-3xl border border-[#e4dccf] shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-center items-center gap-3 p-4"
              >
                <div className="w-16 h-16 text-5xl flex items-center justify-center text-[#B23A48]">
                  {skill.icon}
                </div>
                <div className="text-sm font-semibold text-[#5F4B44] text-center leading-tight">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
