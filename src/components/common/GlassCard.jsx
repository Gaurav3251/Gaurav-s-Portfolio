import { motion } from 'framer-motion'

export default function GlassCard({ 
  children, 
  className = '', 
  hoverable = true,
  delay = 0,
  onClick = null
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverable ? { y: -8 } : {}}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`
        glass-card rounded-xl p-6 transition-all duration-300
        ${hoverable ? 'cursor-pointer hover:shadow-glow' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
