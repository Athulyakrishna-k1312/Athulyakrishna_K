import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative grid place-items-center w-9 h-9 rounded-full border border-navy/15 dark:border-cream/15 text-navy dark:text-cream hover:bg-navy/5 dark:hover:bg-cream/5 transition-colors"
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}
