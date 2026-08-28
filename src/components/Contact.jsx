import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload, FiSend } from 'react-icons/fi'
import { contact, profile } from '../data/portfolio'
import { fadeUp } from '../utils/animations'
import { AiFillMediumCircle, AiFillMediumSquare } from 'react-icons/ai'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hooked up to a form backend (Formspree/EmailJS) at deploy time.
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          <span className="eyebrow-line" />
          Contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-navy dark:text-cream max-w-xl"
        >
          {contact.heading}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-ink/65 dark:text-cream/65 max-w-md"
        >
          {contact.subheading}
        </motion.p>

        <div className="mt-14 grid md:grid-cols-[1fr_1.1fr] gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-ink/80 dark:text-cream/80 hover:text-navy dark:hover:text-cream transition-colors"
            >
              <FiMail /> {profile.email}
            </a>
            <div className="flex items-center gap-4 pt-2">
              {profile.social.github && (
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 grid place-items-center rounded-full border border-navy/15 dark:border-cream/15 text-navy dark:text-cream hover:bg-navy/5 dark:hover:bg-cream/5">
                  <FiGithub size={17} />
                </a>
              )}
              {profile.social.linkedin && (
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center rounded-full border border-navy/15 dark:border-cream/15 text-navy dark:text-cream hover:bg-navy/5 dark:hover:bg-cream/5">
                  <FiLinkedin size={17} />
                </a>
              )}
              {profile.social.instagram && (
                <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-navy/15 dark:border-cream/15 text-navy dark:text-cream hover:bg-navy/5 dark:hover:bg-cream/5">
                  <FiInstagram size={17} />
                </a>
              )}
              {profile.social.medium && (
                <a href={profile.social.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="w-10 h-10 grid place-items-center rounded-full border border-navy/15 dark:border-cream/15 text-navy dark:text-cream hover:bg-navy/5 dark:hover:bg-cream/5">
                  <AiFillMediumCircle size={25} />
                </a>
              )}
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full border border-navy/25 dark:border-cream/25 text-navy dark:text-cream text-sm font-medium hover:bg-navy/5 dark:hover:bg-cream/5 transition-colors"
            >
              <FiDownload size={15} /> Download Resume
            </a>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-navy/50 dark:text-cream/50">Name</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-navy/15 dark:border-cream/15 bg-transparent text-sm text-ink dark:text-cream focus:outline-none focus:border-navy dark:focus:border-cream"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-navy/50 dark:text-cream/50">Email</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-navy/15 dark:border-cream/15 bg-transparent text-sm text-ink dark:text-cream focus:outline-none focus:border-navy dark:focus:border-cream"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-navy/50 dark:text-cream/50">Message</label>
              <textarea
                id="message" name="message" rows={4} required
                value={form.message} onChange={handleChange}
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-navy/15 dark:border-cream/15 bg-transparent text-sm text-ink dark:text-cream focus:outline-none focus:border-navy dark:focus:border-cream resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-hover transition-colors"
            >
              <FiSend size={15} /> {sent ? 'Sent' : 'Send Message'}
            </button>
            {sent && (
              <p className="text-xs text-navy/60 dark:text-cream/60 pt-1">
                Thanks — connect a form backend (e.g. Formspree) to receive this for real.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
