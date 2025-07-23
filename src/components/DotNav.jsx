import { useEffect, useState } from 'react'
import SECTIONS from '../constants/sections'
import { smoothScroll } from '../helpers/scroll'
import { setProgrammaticScrolling, isProgrammaticScroll } from '../helpers/sectionController'

export default function DotNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          const id = visible.target.id
          console.log('[DotNav] Section in view:', id)

          // Only update state if this is a user scroll (not dot click)
          if (!isProgrammaticScroll) {
            setActive(id)
          }
        }
      },
      { threshold: 0.5 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) {
        console.log('[DotNav] Observing section: #' + id)
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleDotClick = (id) => {
    console.log('[DotNav] Dot clicked for #' + id)
    const el = document.getElementById(id)
    if (!el) return

    const offset = el.offsetTop
    console.log('[DotNav] Scrolling to offsetTop:', offset)

    setProgrammaticScrolling(true)
    smoothScroll(offset)

    setTimeout(() => {
      setActive(id)
      setProgrammaticScrolling(false)
    }, 900)
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {SECTIONS.map(({ id }) => (
        <button
          key={id}
          onClick={() => handleDotClick(id)}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            active === id ? 'bg-black scale-125 shadow-lg' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  )
}
