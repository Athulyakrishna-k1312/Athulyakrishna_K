import { motion } from 'framer-motion'
import { FaUsers, FaCodeBranch, FaBriefcase, FaSeedling } from 'react-icons/fa'
import { about } from '../data/portfolio'
import { fadeUp, staggerContainer } from '../utils/animations'

const ICONS = {
  leadership: FaUsers,
  opensource: FaCodeBranch,
  internship: FaBriefcase,
  learning: FaSeedling,
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          About
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-2xl"
        >
          Building real things, one project at a time.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base sm:text-lg leading-relaxed text-justify text-ink/75 dark:text-cream/75"
          >
            {about.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-2 border-navy/15 dark:border-cream/15 pl-6"
          >
            {about.education.map((edu) => (
              <div key={edu.institution} className="mb-2">
                <p className="font-mono text-xs text-navy/50 dark:text-cream/50 mb-1">
                  {edu.duration}
                </p>
                <h3 className="font-display text-xl text-navy dark:text-cream">
                  {edu.degree}
                </h3>
                <p className="text-sm text-ink/70 dark:text-cream/70 mt-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-ink/60 dark:text-cream/60 mt-2">{edu.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {about.cards.map((card, i) => {
            const Icon = ICONS[card.icon] || FaSeedling
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-navy/10 dark:border-cream/10 p-6 bg-white/60 dark:bg-white/[0.02] shadow-card"
              >
                <Icon className="text-navy dark:text-cream mb-4" size={22} />
                <h4 className="font-display text-lg text-navy dark:text-cream mb-2">
                  {card.title}
                </h4>
                <p className="text-sm leading-7 text-ink/65 dark:text-cream/65">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
