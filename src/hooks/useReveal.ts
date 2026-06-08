import { useEffect } from 'react'

/**
 * Observes all .reveal elements inside `containerRef` and adds
 * the `visible` class when they enter the viewport.
 */
export function useReveal(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const els = container.querySelectorAll('.reveal')
    if (container.classList.contains('reveal')) observer.observe(container)
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [containerRef])
}
