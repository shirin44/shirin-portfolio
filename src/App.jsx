import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './index.css'
import DotNav from './components/DotNav'
import { useEffect } from 'react'
import { setupScrollSections } from './helpers/sectionController'
import SECTIONS from './constants/sections'

function App() {
  useEffect(() => {
    return setupScrollSections(
      SECTIONS.map(s => s.id),
      id => console.log('Active section set to', id)
    )
  }, [])

  return (
    <main className="scroll-container relative">
      <DotNav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}


export default App
