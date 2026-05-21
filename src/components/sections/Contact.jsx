import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import { SITE_CONFIG } from '../../utils/constants'
import socialData from '../../data/social.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)

      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface bg-opacity-30" id="contact" aria-label="Contact section">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4 text-center">
            Get in <span className="text-accent-cyan">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mx-auto" />
          <p className="text-center text-dark-muted text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
          <motion.a
            href={`mailto:${SITE_CONFIG.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
            aria-label={`Send email to ${SITE_CONFIG.email}`}
          >
            <GlassCard className="text-center hover:shadow-glow transition-all duration-300">
              <div className="p-4 rounded-lg bg-accent-cyan bg-opacity-10 mb-4 inline-block">
                <Mail size={32} className="text-accent-cyan" />
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-2">Email</h3>
              <p className="text-dark-muted text-sm break-all">{SITE_CONFIG.email}</p>
            </GlassCard>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="text-center hover:shadow-glow transition-all duration-300 h-full">
              <div className="p-4 rounded-lg bg-accent-cyan bg-opacity-10 mb-4 inline-block">
                <MapPin size={32} className="text-accent-cyan" />
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-2">Location</h3>
              <p className="text-dark-muted text-sm">{SITE_CONFIG.location}</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="text-center hover:shadow-glow transition-all duration-300 h-full">
              <h3 className="text-lg font-bold text-dark-text mb-4">Follow</h3>
              <div className="flex justify-center gap-3">
                {socialData.map(social => {
                  const IconComponent = iconMap[social.icon] || Mail
                  return (
                    <motion.a
                      key={social.id}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-accent-cyan bg-opacity-10 text-accent-cyan transition-all duration-300 hover:bg-opacity-20"
                      aria-label={`Visit ${social.platform}`}
                      title={social.description}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <AnimatedSection variant="fade-up" delay={0.2}>
          <GlassCard className="hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold text-dark-text mb-6">Send me a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-lg bg-accent-cyan bg-opacity-10 border border-accent-cyan border-opacity-30 text-center"
              >
                <div className="text-4xl mb-3">✓</div>
                <p className="text-accent-cyan font-semibold mb-2">Message Sent Successfully!</p>
                <p className="text-dark-muted">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-hover border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan focus:ring-opacity-20 transition-all duration-300"
                    placeholder="Your name"
                    aria-label="Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-hover border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan focus:ring-opacity-20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    aria-label="Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-dark-hover border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan focus:ring-opacity-20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                    aria-label="Message"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-dark-bg font-semibold transition-all duration-300 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
