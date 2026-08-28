import { useEffect, useState } from 'react'

// Tracks which section is currently in view, for active nav-link highlighting.
export default function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const handleScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - offset <= 0) current = id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}
