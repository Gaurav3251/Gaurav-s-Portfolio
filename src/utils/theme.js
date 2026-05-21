export const toggleTheme = (currentTheme) => {
  return currentTheme === 'dark' ? 'light' : 'dark'
}

export const getTheme = () => {
  return localStorage.getItem('theme') || 'dark'
}

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
