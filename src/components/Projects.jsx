import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import { fadeUp, staggerContainer } from '../utils/animations'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [filterTech, setFilterTech] = useState('All')
  const [selected, setSelected] = useState(null)

  const allTech = useMemo(() => {
    const s = new Set()
    projects.forEach((p) => p.tech.forEach((t) => s.add(t)))
    return ['All', ...Array.from(s)]
  }, [])

  const filtered = projects.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.short.toLowerCase().includes(query.toLowerCase())
    const matchesTech = filterTech === 'All' || p.tech.includes(filterTech)
    return matchesQuery && matchesTech
  })

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          Projects
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-2xl"
        >
          Things I&apos;ve shipped.
        </motion.h2>

        {/* Search + filter */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-72">

          </div>

        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                custom={i}
                variants={fadeUp}
                layout
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="group rounded-2xl overflow-hidden border border-navy/10 dark:border-cream/10 bg-white/60 dark:bg-white/[0.02] shadow-card flex flex-col"
              >
                <button
                  onClick={() => setSelected(project)}
                  className="block w-full h-44 overflow-hidden bg-navy/5 dark:bg-cream/5"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.opacity = 0.12 }}
                  />
                </button>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-navy dark:text-cream">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 dark:text-cream/65 leading-relaxed flex-1">
                    {project.short}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-navy/15 dark:border-cream/15 text-navy/60 dark:text-cream/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-sm font-medium text-navy dark:text-cream underline underline-offset-4 decoration-navy/30 dark:decoration-cream/30 hover:decoration-navy dark:hover:decoration-cream"
                    >
                      View details
                    </button>
                    <div className="flex items-center gap-3 text-navy/60 dark:text-cream/60">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                          <FiGithub size={17} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                          <FiExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-navy/50 dark:text-cream/50">
            No projects match that search.
          </p>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
