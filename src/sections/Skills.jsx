import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../constants/skillslist'

const categoryNames = Object.keys(skills)

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0])

  return (
    <section
      id="skills"
      className=" snap-start h-screen  w-full bg-[#FAF3E0] text-[#322828] overflow-hidden flex flex-col justify-center  relative items-center px-4  animate-fadeIn "
      tabIndex={-1} >
      {/* Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-10 w-[500px] h-[500px] bg-[#FFF3C7] rounded-full blur-[160px] opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-[#FFE0DC] rounded-full blur-[130px] opacity-60 animate-pulse-slow" />
        <div className="absolute top-[35%] left-[40%] w-[300px] h-[300px] bg-[#B23A48] rounded-full blur-[160px] opacity-25" />
      </div>

      <h2 className="text-5xl md:text-6xl font-extrabold text-[#B23A48] mb-10 z-10 text-center">
        Skills
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 z-10">
        {categoryNames.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-3 rounded-full border border-[#B23A48] text-base md:text-lg font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-[#B23A48] text-white shadow-lg'
                : 'bg-transparent text-[#B23A48] hover:bg-[#b23a48]/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="w-full max-w-7xl px-4 overflow-x-auto scroll-smooth cursor-grab z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex gap-6 md:gap-10 justify-center items-center min-w-max py-8"
          >
            {skills[selectedCategory].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.15,
                  boxShadow: '0 0 40px rgba(178, 58, 72, 0.35)',
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                className="min-w-[180px] h-[200px] md:min-w-[220px] md:h-[240px] bg-white rounded-3xl border border-[#e4dccf] shadow-xl transition-all duration-300 flex flex-col justify-center items-center gap-4 p-6 md:p-8"
              >
                <div className="text-6xl md:text-7xl text-[#B23A48]">
                  {skill.icon}
                </div>
                <div className="text-base md:text-lg font-bold text-[#5F4B44] text-center leading-tight">
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
