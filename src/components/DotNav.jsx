// components/DotNav.jsx
import { useState, useEffect } from 'react'
import useSectionObserver from '../hooks/useSectionObserver'
import SECTIONS from '../constants/sections'
import { smoothScroll } from '../helpers/scroll'
import { setProgrammaticScrolling } from '../helpers/sectionController'

export default function DotNav() {
  const observedActive = useSectionObserver()
  const [manualActive, setManualActive] = useState(null)

  const active = manualActive ?? observedActive

  useEffect(() => {
    if (manualActive === observedActive) {
      setManualActive(null)
    }
  }, [observedActive, manualActive])

  const handleDotClick = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    setManualActive(id)
    setProgrammaticScrolling(true)
    smoothScroll(el.offsetTop)

    // setTimeout(() => {
    //   setProgrammaticScrolling(false)
    // }, 900)
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {SECTIONS.map(({ id }) => (
        <button
          key={id}
          onClick={() => handleDotClick(id)}
          aria-label={`Go to ${id}`}
          className={`w-4 h-4 rounded-full border-2 transition-all duration-300
            ${
              active === id
                ? 'bg-indigo-500 border-indigo-500 scale-125 shadow-[0_0_10px_#6366f1]'
                : 'bg-gray-400 border-transparent hover:bg-gray-600 hover:scale-110'
            }`}
        />
      ))}
    </div>
  )
}