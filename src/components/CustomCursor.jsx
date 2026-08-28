import { useEffect, useRef } from 'react'

// Desktop-only custom cursor dot. Disabled on touch devices and
// when the user prefers reduced motion.
export default function CustomCursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reduced) return

    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`
      }
    }
    const grow = () => dotRef.current?.classList.add('!w-6', '!h-6')
    const shrink = () => dotRef.current?.classList.remove('!w-6', '!h-6')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return <div ref={dotRef} className="custom-cursor hidden md:block" />
}
