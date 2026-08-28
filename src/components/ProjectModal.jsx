import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)
  if (!project) return null

  const gallery = project.gallery?.length ? project.gallery : [project.image]

  const next = () => setImgIndex((i) => (i + 1) % gallery.length)
  const prev = () => setImgIndex((i) => (i - 1 + gallery.length) % gallery.length)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl glass shadow-soft"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-20 grid place-items-center w-9 h-9 rounded-full bg-navy/10 dark:bg-cream/10 text-navy dark:text-cream hover:bg-navy/20 dark:hover:bg-cream/20"
          >
            <FiX size={18} />
          </button>

          {/* Gallery */}
          <div className="relative w-full h-64 sm:h-80 bg-navy/5 dark:bg-cream/5">
            <img
              src={gallery[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.style.opacity = 0.15 }}
            />
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/80 dark:bg-black/40 text-navy dark:text-cream"
                  aria-label="Previous image"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/80 dark:bg-black/40 text-navy dark:text-cream"
                  aria-label="Next image"
                >
                  <FiChevronRight />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {gallery.map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i === imgIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="font-display text-2xl text-navy dark:text-cream">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
              {project.short}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-navy/15 dark:border-cream/15 text-navy/70 dark:text-cream/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-navy/50 dark:text-cream/50 mb-2">
                Features
              </h4>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-ink/75 dark:text-cream/75 flex gap-2">
                    <span className="text-navy dark:text-cream">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-navy/50 dark:text-cream/50 mb-2">
                  Challenges
                </h4>
                <p className="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-navy/50 dark:text-cream/50 mb-2">
                  What I learned
                </h4>
                <p className="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">
                  {project.learnings}
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-hover transition-colors"
                >
                  <FiGithub size={15} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-navy/25 dark:border-cream/25 text-navy dark:text-cream text-sm font-medium hover:bg-navy/5 dark:hover:bg-cream/5 transition-colors"
                >
                  <FiExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
