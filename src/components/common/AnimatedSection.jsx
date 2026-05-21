import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { prefersReducedMotion } from '../../utils/theme'

export default function AnimatedSection({ 
  children, 
  delay = 0,
  className = '',
  variant = 'fade-up'
}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const shouldReduceMotion = prefersReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const variants = {
    'fade-up': {
      hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
    },
    'fade-in': {
      hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay } }
    },
    'slide-in-left': {
      hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
    },
    'slide-in-right': {
      hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
    },
    'scale-in': {
      hidden: shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay } }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant] || variants['fade-up']}
      className={className}
    >
      {children}
    </motion.div>
  )
}
