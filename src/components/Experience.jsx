import { motion } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'
import { experience } from '../data/portfolio'
import { fadeUp } from '../utils/animations'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 grid-texture">
      <div className="max-w-4xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          Experience
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-2xl"
        >
          Where I&apos;ve worked and contributed.
        </motion.h2>

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-2 sm:left-3 top-1 bottom-1 w-px bg-navy/15 dark:bg-cream/15" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[26px] sm:-left-[30px] top-1.5 w-3 h-3 rounded-full bg-navy dark:bg-cream ring-4 ring-white dark:ring-[#171f29]" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white dark:bg-white/5 border border-navy/10 dark:border-cream/10 grid place-items-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg text-navy dark:text-cream">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-navy/50 dark:text-cream/50">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-navy/70 dark:text-cream/70 mt-0.5">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm text-ink/70 dark:text-cream/70 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-navy/15 dark:border-cream/15 text-navy/60 dark:text-cream/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {(exp.certificateUrl || exp.projectUrl) && (
                    <div className="mt-4 flex gap-4">
                      {exp.certificateUrl && (
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-navy dark:text-cream underline underline-offset-4"
                        >
                          <FiAward size={13} /> Certificate
                        </a>
                      )}
                      {exp.projectUrl && (
                        <a
                          href={exp.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-navy dark:text-cream underline underline-offset-4"
                        >
                          <FiExternalLink size={13} /> Project
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
