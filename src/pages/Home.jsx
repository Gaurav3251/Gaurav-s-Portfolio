import { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Certifications from '../components/sections/Certifications'
import Education from '../components/sections/Education'
import Contact from '../components/sections/Contact'
import ScrollToTop from '../components/common/ScrollToTop'
import CustomCursor from '../components/common/CustomCursor'

export default function Home({ toggleTheme, currentTheme }) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark')
  }, [currentTheme])

  return (
    <>
      <CustomCursor />
      <Layout toggleTheme={toggleTheme} currentTheme={currentTheme}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </Layout>
      <ScrollToTop />
    </>
  )
}
