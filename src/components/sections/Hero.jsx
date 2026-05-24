import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, User } from 'lucide-react'
import { SITE_CONFIG } from '../../utils/constants'

export default function Hero() {
  const titleRef = useRef(null)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (titleRef.current) {
      const text = SITE_CONFIG.title || 'AI/ML Developer'
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
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const handleScroll = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Profile image — tries jpg, shows initials placeholder if it fails
  const profileSrc = SITE_CONFIG.profileImage || '/assets/profile.png'

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="home" aria-label="Hero section">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan opacity-5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center md:items-center gap-10 md:gap-16"
      >
        {/* ── LEFT: Text ─────────────────────────────────────────── */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6 space-y-1">
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

          <motion.div variants={itemVariants} className="mb-6">
            <span
              ref={titleRef}
              className="text-2xl sm:text-3xl font-semibold text-accent-cyan"
              style={{ borderRight: '3px solid #06E6FF', paddingRight: '2px' }}
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-dark-muted mb-4 max-w-xl leading-relaxed mx-auto md:mx-0">
            {SITE_CONFIG.tagline}
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-dark-muted mb-10 flex items-center gap-2 justify-center md:justify-start">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            {SITE_CONFIG.location}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={handleScroll}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent-cyan text-dark-bg font-semibold transition-all duration-300 hover:shadow-glow"
            >
              View My Work
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Resume — opens in new tab AND triggers download */}
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Gaurav_Tarate_Resume.pdf"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-accent-cyan text-accent-cyan font-semibold transition-all duration-300 hover:bg-accent-cyan hover:text-dark-bg hover:shadow-glow"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Photo ───────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 flex justify-center items-center"
        >
          <img
            src={profileSrc}
            alt="Gaurav Tarate"
            className="w-80 sm:w-96 h-auto object-contain -mt-32"
            onError={() => setImgError(true)}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-dark-muted text-sm"
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}