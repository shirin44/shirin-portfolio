
export function smoothScroll(targetY, duration = 700) {
  const container = document.querySelector('.scroll-container')
  if (!container) return

  const start = container.scrollTop
  const change = targetY - start
  const startTime = performance.now()

  container.style.scrollSnapType = 'none'

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutCubic(progress)

    container.scrollTo(0, start + change * ease)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    } else {
      container.style.scrollSnapType = 'y mandatory'
    }
  }

  requestAnimationFrame(animateScroll)
}
