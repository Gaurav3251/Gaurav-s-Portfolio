import { motion } from 'framer-motion'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'
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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            >
              <GlassCard className="h-full flex flex-col hover:shadow-glow-lg transition-all duration-300" delay={index * 0.15}>
                <div className="flex flex-col items-center text-center">
                  {/* Badge Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 5 }}
                    className="mb-6 relative"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent-cyan p-2 bg-dark-hover flex items-center justify-center">
                      <img
                        src={cert.badgeImage}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-accent-cyan opacity-20 rounded-full blur-2xl -z-10" />
                  </motion.div>

                  {/* Certification Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-dark-text mb-2">{cert.title}</h3>
                    <p className="text-accent-cyan font-semibold text-sm mb-2">{cert.issuer}</p>
                    <p className="text-dark-muted text-sm mb-3">{cert.date}</p>
                    <p className="text-dark-muted leading-relaxed text-sm">{cert.description}</p>
                  </div>

                  {/* Verify Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan bg-opacity-10 text-accent-cyan border border-accent-cyan border-opacity-30 font-semibold hover:bg-opacity-20 transition-all duration-300 text-sm mt-4"
                    aria-label={`Verify ${cert.title} credential`}
                  >
                    <CheckCircle size={16} />
                    Verify Credential
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
