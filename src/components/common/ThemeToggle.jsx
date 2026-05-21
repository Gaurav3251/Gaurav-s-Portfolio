import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 magnetic-btn group focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-dark-bg"
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark' ? 'true' : 'false'}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-full bg-accent-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun
            size={20}
            className="text-accent-cyan transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110"
            aria-hidden="true"
          />
        ) : (
          <Moon
            size={20}
            className="text-accent-cyan transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 px-3 py-1.5 text-xs font-medium text-dark-bg bg-accent-cyan rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  )
}
