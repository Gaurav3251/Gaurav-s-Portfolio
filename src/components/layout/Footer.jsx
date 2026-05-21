import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { SITE_CONFIG } from '../../utils/constants'
import socialData from '../../data/social.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail
  }

  return (
    <footer className="mt-20 border-t border-dark-border border-opacity-30 py-12 px-4 sm:px-6 lg:px-8 bg-dark-surface bg-opacity-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-dark-text mb-2">{SITE_CONFIG.name}</h3>
            <p className="text-dark-muted text-sm">{SITE_CONFIG.tagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-dark-text mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="text-dark-muted hover:text-accent-cyan transition-colors duration-300">Home</a>
              <a href="#projects" className="block text-dark-muted hover:text-accent-cyan transition-colors duration-300">Projects</a>
              <a href="#contact" className="block text-dark-muted hover:text-accent-cyan transition-colors duration-300">Contact</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-dark-text mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialData.map(social => {
                const IconComponent = iconMap[social.icon] || Mail
                return (
                  <motion.a
                    key={social.id}
                    whileHover={{ scale: 1.2, y: -3 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-hover hover:bg-accent-cyan hover:text-dark-bg text-accent-cyan transition-all duration-300"
                    aria-label={`Visit ${social.platform}`}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-dark-border border-opacity-30 my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-muted"
        >
          <p className="text-center md:text-left">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-accent-cyan" /> using React, Tailwind & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
