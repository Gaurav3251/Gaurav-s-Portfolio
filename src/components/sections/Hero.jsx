import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { SITE_CONFIG } from '../../utils/constants'

export default function Hero() {
  const nameRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      const text = 'AI/ML Developer'
      let index = 0
      titleRef.current.textContent = ''

      const typeWriter = setInterval(() => {
        if (index < text.length) {
          titleRef.current.textContent += text[index]
          index++
        } else {
          clearInterval(typeWriter)
        }
      }, 80)

      return () => clearInterval(typeWriter)
    }
  }, [])

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const handleScroll = () => {
    const projectsSection = document.querySelector('#projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="home" aria-label="Hero section">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan opacity-5 rounded-full blur-3xl" aria-hidden="true" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <div className="mb-6 space-y-2">
          {SITE_CONFIG.name.split(' ').map((word, index) => (
            <motion.h1
              key={index}
              custom={index}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark-text leading-tight"
            >
              {word}
            </motion.h1>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative h-12 sm:h-14 lg:h-16 flex items-center">
            <span
              ref={titleRef}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent-cyan"
              style={{ borderRight: '3px solid #06E6FF' }}
            />
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-dark-muted mb-8 max-w-2xl leading-relaxed">
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.p variants={itemVariants} className="text-sm text-dark-muted mb-12 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan" aria-hidden="true" />
          {SITE_CONFIG.location}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
            className="group flex items-center justify-center sm:justify-start gap-2 px-8 py-4 rounded-lg bg-accent-cyan text-dark-bg font-semibold transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-dark-bg"
            aria-label="Scroll to projects section"
          >
            View My Work
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            href={SITE_CONFIG.resumeUrl}
            download="Gaurav_Tarate_Resume.pdf"
            className="group flex items-center justify-center sm:justify-start gap-2 px-8 py-4 rounded-lg border-2 border-accent-cyan text-accent-cyan font-semibold transition-all duration-300 hover:bg-accent-cyan hover:text-dark-bg hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-dark-bg"
            aria-label="Download resume PDF"
          >
            <Download size={20} aria-hidden="true" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-dark-muted text-sm">
            <span>Scroll to explore</span>
            <svg
              className="w-6 h-6 text-accent-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
