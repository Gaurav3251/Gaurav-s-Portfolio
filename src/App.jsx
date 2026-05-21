import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'dark' // Default to dark
  })

  useEffect(() => {
    // Update localStorage and DOM when theme changes
    localStorage.setItem('theme', theme)
    const html = document.documentElement
    
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <div className={`min-h-screen bg-dark-bg transition-colors duration-300 ${
        theme === 'dark' ? 'dark' : 'light'
      }`}>
        <Home toggleTheme={toggleTheme} currentTheme={theme} />
      </div>
    </BrowserRouter>
  )
}
