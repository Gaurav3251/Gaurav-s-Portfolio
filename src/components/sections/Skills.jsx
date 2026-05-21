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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (idx * 0.1) + (skillIdx * 0.04), duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1.5 text-sm rounded-full bg-accent-cyan bg-opacity-10 text-accent-cyan border border-accent-cyan border-opacity-30 font-medium cursor-default"
                      >
                        {skill.name}
                      </motion.span>
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