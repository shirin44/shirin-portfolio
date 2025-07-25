// App.jsx
import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import DotNav from './components/DotNav'
import Skills from './sections/Skills'
import { setupScrollSections } from './helpers/sectionController'
import SECTIONS from './constants/sections'
import './index.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    return setupScrollSections(SECTIONS.map(s => s.id), setActiveSection)
  }, [])

  return (
    <main className="scroll-container relative">
       <Toaster position="top-center" />
      <DotNav active={activeSection} />
      <Hero />
      <Experience/>
      <Skills/>
      <Projects />
      <Contact />
    </main>
  )
}

export default App
