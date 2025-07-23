export function smoothScroll(targetY, speed = 500) {
  const container = document.querySelector('.scroll-container')
  if (!container) return

  let currentTime = 0
  const scrollY = container.scrollTop
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - targetY) / speed, 0.8))

  const easeInOutCubic = pos => {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3)
    return 0.5 * (Math.pow(pos - 2, 3) + 2)
  }

  function animateScroll() {
    currentTime += 1 / 60
    const p = currentTime / time
    const t = easeInOutCubic(p)

    if (p < 1) {
      requestAnimationFrame(animateScroll)
      container.scrollTo(0, scrollY + (targetY - scrollY) * t)
    } else {
      container.scrollTo(0, targetY)
    }
  }

  animateScroll()
}
