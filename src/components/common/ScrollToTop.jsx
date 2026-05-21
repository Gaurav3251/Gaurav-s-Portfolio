import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-accent-cyan text-dark-bg transition-all duration-300 hover:scale-110 group magnetic-btn focus:outline-none focus:ring-2 focus:ring-dark-bg focus:ring-offset-2 focus:ring-offset-accent-cyan"
          aria-label="Scroll to top"
        >
          <ChevronUp
            size={24}
            className="transition-transform duration-300 group-hover:-translate-y-1"
            aria-hidden="true"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-accent-cyan opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
