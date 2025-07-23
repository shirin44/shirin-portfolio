// App.jsx
import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import DotNav from './components/DotNav'
import { setupScrollSections } from './helpers/sectionController'
import SECTIONS from './constants/sections'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    return setupScrollSections(SECTIONS.map(s => s.id), setActiveSection)
  }, [])

  return (
    <main className="scroll-container relative">
      <DotNav active={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
