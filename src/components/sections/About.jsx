import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { SITE_CONFIG } from '../../utils/constants'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about" aria-label="About section">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            About <span className="text-accent-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full" />
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="mt-12 space-y-6"
        >
          <motion.p variants={itemVariants} className="text-lg text-dark-muted leading-relaxed">
            I'm a passionate <span className="text-accent-cyan font-semibold">AI/ML Developer</span> from Pune, India, currently pursuing my B.Tech in Computer Science & Engineering with specialization in AI & ML at Pimpri Chinchwad College of Engineering.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-dark-muted leading-relaxed">
            My journey in AI and machine learning is driven by curiosity and a desire to build intelligent systems that solve real-world problems. I specialize in <span className="text-accent-cyan font-semibold">deep learning, computer vision, and natural language processing</span>.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-dark-muted leading-relaxed">
            With hands-on experience in building end-to-end ML solutions, from data preprocessing to model deployment, I'm committed to continuous learning and improvement. My motto — <span className="italic text-accent-cyan">"Learn. Build. Improve. Repeat."</span> — guides everything I do.
          </motion.p>

         
        </motion.div>
      </div>
    </section>
  )
}