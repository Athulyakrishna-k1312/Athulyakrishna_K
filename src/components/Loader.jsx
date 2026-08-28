import { motion, AnimatePresence } from 'framer-motion'

// Brief, premium loading screen shown on first paint.
export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#171f29]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              className="font-display text-3xl tracking-wide text-navy dark:text-cream"
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0.05em', opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              AK
            </motion.span>
            <div className="h-px w-24 overflow-hidden bg-navy/15 dark:bg-cream/15">
              <motion.div
                className="h-full bg-navy dark:bg-cream"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
