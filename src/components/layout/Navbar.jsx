import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../common/ThemeToggle'
import { SITE_CONFIG } from '../../utils/constants'

export default function Navbar({ toggleTheme, currentTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'frosted-glass shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent-cyan flex items-center justify-center font-bold text-dark-bg group-hover:shadow-glow transition-all duration-300">
              GT
            </div>
            <span className="hidden sm:block font-bold text-lg text-dark-text group-hover:text-accent-cyan transition-colors duration-300">
              {SITE_CONFIG.name.split(' ')[0]}
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-dark-text hover:text-accent-cyan transition-colors duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle theme={currentTheme} onToggle={toggleTheme} />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-dark-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, height: 0 },
            visible: { opacity: 1, height: 'auto' }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4 border-t border-dark-border border-opacity-30">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-dark-text hover:text-accent-cyan transition-colors duration-300 font-medium py-2"
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
