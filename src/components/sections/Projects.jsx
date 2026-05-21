import { motion } from 'framer-motion'
import { ExternalLink, Github, Youtube, PlayCircle } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import projectsData from '../../data/projects.json'

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects" aria-label="Projects section">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Featured <span className="text-accent-cyan">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            >
              <GlassCard className="h-full flex flex-col hover:shadow-glow-lg transition-all duration-300 group" delay={index * 0.1}>

                {/* Thumbnail — clickable to YouTube if youtubeUrl exists */}
                {project.youtubeUrl ? (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-xl mb-5 h-76 bg-dark-hover block flex-shrink-0"
                    aria-label={`Watch ${project.title} on YouTube`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* YouTube play overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <PlayCircle size={64} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                    {/* YouTube badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                      <Youtube size={12} />
                      YouTube
                    </div>
                  </a>
                ) : (
                  <div className="relative overflow-hidden rounded-xl mb-5 h-76 bg-dark-hover flex-shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark-bg bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                )}

                <h3 className="text-xl font-bold text-dark-text mb-2">{project.title}</h3>
                <p className="text-dark-muted mb-4 leading-relaxed flex-grow text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-accent-cyan bg-opacity-10 text-accent-cyan border border-accent-cyan border-opacity-30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-dark-border border-opacity-30 flex-wrap">
                  {project.youtubeUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-300 text-sm"
                      aria-label={`Watch ${project.title} on YouTube`}
                    >
                      <Youtube size={16} />
                      Watch Demo
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan text-dark-bg font-semibold transition-all duration-300 hover:shadow-glow text-sm"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-accent-cyan text-accent-cyan font-semibold transition-all duration-300 hover:bg-accent-cyan hover:text-dark-bg text-sm"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}