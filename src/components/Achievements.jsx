import { motion } from 'framer-motion'
import { FiAward, FiCode, FiBriefcase, FiUsers, FiHeart } from 'react-icons/fi'
import { achievements } from '../data/portfolio'
import { fadeUp, staggerContainer } from '../utils/animations'

const ICONS = {
  award: FiAward,
  code: FiCode,
  briefcase: FiBriefcase,
  users: FiUsers,
  heart: FiHeart,
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 grid-texture">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          Achievements
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-2xl"
        >
          Milestones along the way.
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon] || FiAward
            return (
              <motion.div
                key={a.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-navy/10 dark:border-cream/10 bg-white/60 dark:bg-white/[0.02] p-6 shadow-card"
              >
                <Icon className="text-navy dark:text-cream mb-4" size={20} />
                <h3 className="font-display text-lg text-navy dark:text-cream mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-ink/65 dark:text-cream/65 leading-relaxed">
                  {a.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
