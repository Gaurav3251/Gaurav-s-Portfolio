export const SITE_CONFIG = {
  name: import.meta.env.VITE_SITE_NAME || 'Gaurav Tarate',
  title: import.meta.env.VITE_SITE_TITLE || 'AI/ML Developer',
  tagline: import.meta.env.VITE_SITE_TAGLINE || 'Exploring the world of AI. My motto is - "Learn. Build. Improve. Repeat"',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'gaurav.dt108@gmail.com',
  location: import.meta.env.VITE_SITE_LOCATION || 'Pune, India',
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/assets/resume.pdf'
}

export const ACCENT_COLORS = {
  cyan: '#06E6FF',
  'cyan-dark': '#00D4F0',
  'cyan-light': '#1FFFFF'
}

export const ANIMATION_CONFIG = {
  staggerDelay: 100,
  fadeUpDuration: 0.6,
  slideInDuration: 0.8,
  hoverScaleDuration: 0.3
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
