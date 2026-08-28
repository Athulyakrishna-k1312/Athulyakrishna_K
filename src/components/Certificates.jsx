import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink } from 'react-icons/fi'
import { certificates } from '../data/portfolio'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function Certificates() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="certificates" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          Certificates
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-2xl"
        >
          Proof of the work.
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.title}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              onClick={() => setPreview(cert)}
              className="text-left rounded-2xl overflow-hidden border border-navy/10 dark:border-cream/10 bg-white/60 dark:bg-white/[0.02] shadow-card"
            >
              <div className="h-48 bg-navy/5 dark:bg-cream/5 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.style.opacity = 0.12 }}
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-xs text-navy/50 dark:text-cream/50">{cert.date}</p>
                <h3 className="font-display text-base text-navy dark:text-cream mt-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-ink/60 dark:text-cream/60 mt-1">{cert.issuer}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-w-2xl w-full rounded-2xl overflow-hidden glass shadow-soft"
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute top-4 right-4 z-20 grid place-items-center w-9 h-9 rounded-full bg-navy/10 dark:bg-cream/10 text-navy dark:text-cream"
                aria-label="Close preview"
              >
                <FiX size={18} />
              </button>
              <img
                src={preview.image}
                alt={preview.title}
                className="w-full max-h-[80vh] object-contain bg-navy/5 dark:bg-cream/5"
                onError={(e) => { e.currentTarget.style.opacity = 0.12 }}
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-navy dark:text-cream">{preview.title}</h3>
                <p className="text-sm text-ink/60 dark:text-cream/60 mt-1">
                  {preview.issuer} · {preview.date}
                </p>
                {preview.url && (
                  <a
                    href={preview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-hover transition-colors"
                  >
                    <FiExternalLink size={15} /> View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
