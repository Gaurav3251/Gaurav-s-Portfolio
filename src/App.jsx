import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    // Apply to <html> tag — this is what Tailwind's darkMode: 'class' reads
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <Home toggleTheme={toggleTheme} currentTheme={theme} />
    </BrowserRouter>
  )
}