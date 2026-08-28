import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center grid-texture px-6 bg-white dark:bg-[#171f29]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-sm text-navy/50 dark:text-cream/50 mb-3">error 404</p>
        <h1 className="font-display text-6xl sm:text-7xl text-navy dark:text-cream mb-4">
          Page not found
        </h1>
        <p className="text-ink/60 dark:text-cream/60 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-hover transition-colors"
        >
          Back to home
        </Link>
      </motion.div>
    </div>
  )
}
