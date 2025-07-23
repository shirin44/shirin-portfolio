import { smoothScroll } from './scroll'

let isScrolling = false
let lastTime = 0
export let isProgrammaticScroll = false // <-- shared global flag

export function setProgrammaticScrolling(value) {
  isProgrammaticScroll = value
}

export function setupScrollSections(sectionOrder, setActiveSection) {
  const getCurrentSectionIndex = () => {
    const scrollY = window.scrollY
    const index = sectionOrder.findIndex(id => {
      const el = document.getElementById(id)
      return el && scrollY < el.offsetTop + window.innerHeight / 2
    })
    return Math.max(index - 1, 0)
  }

  const scrollToSectionIndex = (index) => {
    if (index < 0 || index >= sectionOrder.length) return
    const el = document.getElementById(sectionOrder[index])
    if (!el || isScrolling) return

    isScrolling = true
    smoothScroll(el.offsetTop)

    setTimeout(() => {
      isScrolling = false
      setActiveSection(sectionOrder[index])
    }, 900)
  }

  const handleWheel = (e) => {
    const now = Date.now()
    if (now - lastTime < 900) return
    if (isScrolling) return
    e.preventDefault()

    const dir = e.deltaY > 30 ? 1 : e.deltaY < -30 ? -1 : 0
    if (dir === 0) return

    const current = getCurrentSectionIndex()
    scrollToSectionIndex(current + dir)
    lastTime = now
  }

  const handleKey = (e) => {
    if (isScrolling) return
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault()
      scrollToSectionIndex(getCurrentSectionIndex() + 1)
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      scrollToSectionIndex(getCurrentSectionIndex() - 1)
    }
  }

  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKey)

  return () => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('keydown', handleKey)
  }
}
