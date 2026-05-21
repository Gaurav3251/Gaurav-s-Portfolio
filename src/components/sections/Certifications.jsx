import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import certificationsData from '../../data/certifications.json'

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface bg-opacity-30" id="certifications" aria-label="Certifications section">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Professional <span className="text-accent-cyan">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full" />
        </AnimatedSection>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-8 mb-12"
        >
          <GlassCard className="text-center">
            <p className="text-4xl font-bold text-accent-cyan">{certificationsData.length}</p>
            <p className="text-dark-muted mt-2">Total Certifications</p>
          </GlassCard>
          <GlassCard className="text-center">
            <p className="text-4xl font-bold text-accent-cyan">Oracle</p>
            <p className="text-dark-muted mt-2">Certifying Authority</p>
          </GlassCard>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            >
              <GlassCard className="h-full flex flex-col hover:shadow-glow-lg transition-all duration-300" delay={index * 0.15}>
                {/* Badge Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-accent-cyan p-2 bg-dark-hover flex items-center justify-center">
                    <img
                      src={cert.badgeImage}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  {/* Glow background */}
                  <div className="absolute w-40 h-40 rounded-full bg-accent-cyan opacity-10 blur-2xl -z-10" />
                </div>

                {/* Content */}
                <div className="flex-grow text-center">
                  <h3 className="text-xl font-bold text-dark-text mb-2">{cert.title}</h3>
                  <p className="text-accent-cyan font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-sm text-dark-muted mb-4">{cert.date}</p>
                  <p className="text-dark-muted mb-6 leading-relaxed">{cert.description}</p>
                </div>

                {/* Verify Button */}
                {cert.credentialUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent-cyan bg-opacity-10 text-accent-cyan font-semibold transition-all duration-300 hover:bg-opacity-20 border border-accent-cyan border-opacity-30"
                    aria-label={`Verify ${cert.title} on Credly`}
                  >
                    <Award size={18} />
                    Verify Credential
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Certifications Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg bg-accent-cyan bg-opacity-5 border border-accent-cyan border-opacity-30 text-center"
        >
          <p className="text-dark-muted">
            <span className="text-accent-cyan font-semibold">Continuously learning</span> and pursuing new certifications in AI, Machine Learning, and Cloud Technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
