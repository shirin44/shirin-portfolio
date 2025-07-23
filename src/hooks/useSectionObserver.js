// hooks/useSectionObserver.js
import { useEffect, useState } from 'react'
import SECTIONS from '../constants/sections'
import { isProgrammaticScroll, setProgrammaticScrolling } from '../helpers/sectionController'

export default function useSectionObserver() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          setActive(visible.target.id)

          // ✅ Reset the programmatic flag only when section is in view
          if (isProgrammaticScroll) {
            setProgrammaticScrolling(false)
          }
        }
      },
      {
        root: container,
        threshold: 0.5,
      }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}
