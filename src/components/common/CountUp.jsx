import { useEffect, useRef, useState } from 'react'

export default function CountUp({ 
  end = 100, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      setCount(Math.floor(end * progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
