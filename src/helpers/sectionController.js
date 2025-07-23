// helpers/sectionController.js
import { smoothScroll } from './scroll'

let isScrolling = false
let scrollCooldown = false
export let isProgrammaticScroll = false

export function setProgrammaticScrolling(value) {
  isProgrammaticScroll = value
}

export function setupScrollSections(sectionOrder, setActiveSection) {
  const container = document.querySelector('.scroll-container')
  if (!container) return

  const getCurrentSectionIndex = () => {
    const scrollY = container.scrollTop
    const index = sectionOrder.findIndex(id => {
      const el = document.getElementById(id)
      return el && scrollY < el.offsetTop + container.clientHeight / 2
    })
    return Math.max(index - 1, 0)
  }

  const scrollToSectionIndex = (index) => {
    if (index < 0 || index >= sectionOrder.length) return
    const el = document.getElementById(sectionOrder[index])
    if (!el || isScrolling) return

    isScrolling = true
    setProgrammaticScrolling(true)
    smoothScroll(el.offsetTop)

    setTimeout(() => {
      isScrolling = false
      setProgrammaticScrolling(false)
      setActiveSection(sectionOrder[index])
    }, 900)
  }

  const handleWheel = (e) => {
    if (scrollCooldown || isScrolling) return
    if (Math.abs(e.deltaY) < 50) return
    e.preventDefault()

    const direction = e.deltaY > 0 ? 1 : -1
    const current = getCurrentSectionIndex()
    scrollToSectionIndex(current + direction)

    scrollCooldown = true
    setTimeout(() => (scrollCooldown = false), 1000)
  }

  const handleKey = (e) => {
    if (isScrolling) return

    if (['ArrowDown', 'PageDown'].includes(e.key)) {
      e.preventDefault()
      scrollToSectionIndex(getCurrentSectionIndex() + 1)
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
      e.preventDefault()
      scrollToSectionIndex(getCurrentSectionIndex() - 1)
    }
  }

  container.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKey)

  return () => {
    container.removeEventListener('wheel', handleWheel)
    window.removeEventListener('keydown', handleKey)
  }
}
