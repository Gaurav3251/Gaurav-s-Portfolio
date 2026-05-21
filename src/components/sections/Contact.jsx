import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import { SITE_CONFIG } from '../../utils/constants'
import socialData from '../../data/social.json'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Uses EmailJS — free tier allows 200 emails/month, no backend needed.
      // Steps to set up:
      //   1. Sign up at https://www.emailjs.com
      //   2. Create an Email Service (Gmail works)
      //   3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
      //   4. Copy your Service ID, Template ID, and Public Key into .env:
      //      VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
      //      VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
      //      VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS env vars not configured')
      }

      // Dynamically import emailjs so it doesn't break if not installed yet
      const emailjs = await import('@emailjs/browser')

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: SITE_CONFIG.email,
        },
        publicKey
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('Email send failed:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
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

        <div className="grid md:grid-cols-2 gap-6 mt-12 mb-12">
          <motion.a
            href={`mailto:${SITE_CONFIG.email}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="group" aria-label={`Send email to ${SITE_CONFIG.email}`}
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
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true }}
          >
            <GlassCard className="text-center hover:shadow-glow transition-all duration-300 h-full">
              <div className="p-4 rounded-lg bg-accent-cyan bg-opacity-10 mb-4 inline-block">
                <MapPin size={32} className="text-accent-cyan" />
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-2">Location</h3>
              <p className="text-dark-muted text-sm">{SITE_CONFIG.location}</p>
            </GlassCard>
          </motion.div>

        </div>

        <AnimatedSection variant="fade-up" delay={0.2}>
          <GlassCard className="hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold text-dark-text mb-6">Send me a Message</h3>

            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-lg bg-accent-cyan bg-opacity-10 border border-accent-cyan border-opacity-30 text-center"
              >
                <div className="text-4xl mb-3">✓</div>
                <p className="text-accent-cyan font-semibold mb-2">Message Sent!</p>
                <p className="text-dark-muted">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 text-center"
              >
                <div className="text-4xl mb-3">✗</div>
                <p className="text-red-400 font-semibold mb-2">Failed to send.</p>
                <p className="text-dark-muted text-sm">Please email me directly at {SITE_CONFIG.email}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name}
                    onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-dark-hover border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan focus:ring-opacity-20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email}
                    onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-dark-hover border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan focus:ring-opacity-20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message}
                    onChange={handleChange} required rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-dark-hover border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan focus:ring-opacity-20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button type="submit" disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-dark-bg font-semibold transition-all duration-300 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? <span>Sending...</span> : <><Send size={20} /> Send Message</>}
                </motion.button>
              </form>
            )}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}