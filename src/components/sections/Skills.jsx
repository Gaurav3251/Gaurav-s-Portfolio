import { motion } from 'framer-motion'
import { Code2, Palette, Server, Brain, Wrench } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import skillsData from '../../data/skills.json'

const iconMap = {
  code: Code2,
  palette: Palette,
  server: Server,
  brain: Brain,
  wrench: Wrench
}

export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface bg-opacity-30" id="skills" aria-label="Skills section">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Technical <span className="text-accent-cyan">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillsData.categories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Code2

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              >
                <GlassCard className="h-full hover:shadow-glow-lg transition-all duration-300" delay={idx * 0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-accent-cyan bg-opacity-10">
                      <IconComponent size={24} className="text-accent-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-text">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (idx * 0.1) + (skillIdx * 0.05), duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-dark-text font-medium">{skill.name}</span>
                          <span className="text-xs text-accent-cyan font-semibold">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-dark-hover overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ delay: (idx * 0.1) + (skillIdx * 0.05) + 0.3, duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-cyan-light"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
