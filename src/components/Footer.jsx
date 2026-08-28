import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy/10 dark:border-cream/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-navy/50 dark:text-cream/50">
          © {year} {profile.name}.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-xs font-medium text-navy dark:text-cream hover:opacity-70 transition-opacity"
        >
          Back to top <FiArrowUp size={13} />
        </button>
      </div>
    </footer>
  )
}
