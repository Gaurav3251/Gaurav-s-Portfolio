// Support for environment variables with fallback defaults
const getEnvVar = (key, defaultValue) => {
  return import.meta.env[`VITE_${key}`] || defaultValue
}

export const SITE_CONFIG = {
  name: getEnvVar('SITE_NAME', 'Gaurav Tarate'),
  title: getEnvVar('SITE_TITLE', 'AI/ML Developer'),
  tagline: getEnvVar(
    'SITE_TAGLINE',
    'Exploring the world of AI. My motto is - "Learn. Build. Improve. Repeat"'
  ),
  email: getEnvVar('CONTACT_EMAIL', 'gaurav.dt108@gmail.com'),
  location: getEnvVar('SITE_LOCATION', 'Pune, India'),
  resumeUrl: getEnvVar('RESUME_URL', 'https://drive.google.com/drive/folders/1t1IHNOfhWYvslQ1voGkIUzG2nFl8rgjZ?usp=drive_link')
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

export const ANALYTICS_ID = getEnvVar('GA_ID', '')
export const API_URL = getEnvVar('API_URL', '')
