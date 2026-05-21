import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import experienceData from '../../data/experience.json'

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface bg-opacity-30" id="experience" aria-label="Experience section">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Professional <span className="text-accent-cyan">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full" />
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              className="relative"
            >
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-accent-cyan opacity-30 md:transform md:-translate-x-1/2" />

              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark-bg shadow-glow" />
                </div>

                <GlassCard className="md:w-1/2 hover:shadow-glow" delay={index * 0.1}>
                  <div className="md:hidden w-4 h-4 rounded-full bg-accent-cyan mb-4" />

                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-dark-text">{exp.role}</h3>
                      <p className="text-accent-cyan font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-dark-muted mb-4">{exp.duration}</p>

                  <p className="text-dark-muted mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dark-text mb-2">Key Contributions:</h4>
                    <ul className="space-y-1 text-sm text-dark-muted">
                      {exp.contributions.map((contribution, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-cyan mt-1 flex-shrink-0">▹</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-accent-cyan bg-opacity-10 text-accent-cyan border border-accent-cyan border-opacity-30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
