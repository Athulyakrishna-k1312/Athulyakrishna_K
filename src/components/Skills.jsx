import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiHtml5, SiFramer,
  SiNodedotjs, SiExpress, SiSupabase, SiFirebase,
  SiJavascript, SiPython, SiC, SiPhp,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiVite, SiVercel, SiFigma, SiPostman,
} from 'react-icons/si'
import { FaJava, FaUsers, FaComments, FaPuzzlePiece, FaSyncAlt, FaCode } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import { skills } from '../data/portfolio'
import { fadeUp, staggerContainer } from '../utils/animations'

// Explicit icon map (rather than a wildcard import) keeps the production
// bundle small — react-icons ships thousands of icons per family.
const ICON_MAP = {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiHtml5, SiFramer,
  SiNodedotjs, SiExpress, SiSupabase, SiFirebase,
  SiJavascript, SiPython, SiC, SiPhp,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiVite, SiVercel, SiFigma, SiPostman,
  FaJava, FaUsers, FaComments, FaPuzzlePiece, FaSyncAlt, FaCode,
  TbApi,
}

function SkillIcon({ name }) {
  const Icon = ICON_MAP[name] || FaCode
  return <Icon size={22} />
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="py-28 px-6 grid-texture">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          Skills
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-2xl"
        >
          Tools I reach for.
        </motion.h2>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? 'bg-navy text-cream border-navy dark:bg-cream dark:text-navy dark:border-cream'
                  : 'border-navy/20 dark:border-cream/20 text-navy/70 dark:text-cream/70 hover:bg-navy/5 dark:hover:bg-cream/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills[active].map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="flex items-center gap-3 rounded-xl border border-navy/10 dark:border-cream/10 bg-white/60 dark:bg-white/[0.02] px-4 py-4 shadow-card"
              >
                <span className="text-navy dark:text-cream">
                  <SkillIcon name={skill.icon} />
                </span>
                <span className="text-sm font-medium text-ink/80 dark:text-cream/80">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
