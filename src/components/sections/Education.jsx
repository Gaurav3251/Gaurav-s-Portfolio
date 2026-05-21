import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import educationData from '../../data/education.json'

export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="education" aria-label="Education section">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            <span className="text-accent-cyan">Education</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full" />
        </AnimatedSection>

        <div className="space-y-8 mt-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            >
              <GlassCard className="hover:shadow-glow transition-all duration-300" delay={index * 0.15}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-accent-cyan bg-opacity-10">
                      <BookOpen size={28} className="text-accent-cyan" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-dark-text">{edu.degree}</h3>
                        <p className="text-accent-cyan font-semibold mt-1">{edu.institution}</p>
                      </div>
                      <span className="text-sm px-4 py-2 rounded-full bg-accent-cyan bg-opacity-10 text-accent-cyan font-semibold">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-dark-muted mb-3">{edu.field}</p>

                    {edu.description && (
                      <p className="text-dark-muted leading-relaxed mb-4">{edu.description}</p>
                    )}

                    {edu.highlights && edu.highlights.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-dark-text mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-dark-muted flex items-start gap-2">
                              <Award size={14} className="text-accent-cyan mt-1 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
