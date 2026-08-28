import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { profile } from '../data/portfolio'

const ROLES = [
  'Full Stack Developer',
  'AI / ML Enthusiast',
  'Open Source Contributor',
]

// Lightweight typing animation cycling through role labels —
// a nod to a terminal prompt, fitting the IT/engineering subject.
function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 grid-texture overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center w-full">
        {/* Left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-5"
          >
            <span className="eyebrow-line" />
            Portfolio · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-navy dark:text-cream"
          >
            Hello, I&apos;m{' '}
            <span className="italic font-medium">Athulyakrishna&nbsp;K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 font-mono text-base sm:text-lg text-navy/70 dark:text-cream/70 h-7"
          >
            <span className="text-navy dark:text-cream">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-navy dark:bg-cream ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-ink/70 dark:text-cream/70 max-w-xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative overflow-hidden px-7 py-3 rounded-full bg-navy text-cream text-sm font-medium tracking-wide transition-colors hover:bg-navy-hover"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-navy/25 dark:border-cream/25 text-navy dark:text-cream text-sm font-medium tracking-wide hover:bg-navy/5 dark:hover:bg-cream/5 transition-colors"
            >
              <FiDownload size={15} /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right column — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-[25rem] animate-float">
            <div className="absolute inset-0 rounded-3xl border border-navy/15 dark:border-cream/15 scale-110" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy/10 to-transparent blur-2xl" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-cream dark:border-[#24364D] shadow-soft">
              <img
                src={profile.photo}
                alt={profile.name}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div
                className="hidden w-full h-full items-center justify-center bg-navy text-cream font-display text-5xl"
                style={{ display: 'none' }}
              >
                AK
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy/50 dark:text-cream/50"
        aria-label="Scroll to About section"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
