import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e

      if (cursorRef.current) {
        cursorRef.current.style.left = clientX + 'px'
        cursorRef.current.style.top = clientY + 'px'
      }

      if (dotRef.current) {
        setTimeout(() => {
          dotRef.current.style.left = clientX + 'px'
          dotRef.current.style.top = clientY + 'px'
        }, 50)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-3 h-3 bg-accent-cyan rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 opacity-80 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 15px rgba(6, 230, 255, 0.6)',
        }}
      />

      {/* Trailing dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-40 w-2 h-2 bg-accent-cyan rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 opacity-40 transition-all duration-500"
        style={{
          boxShadow: '0 0 10px rgba(6, 230, 255, 0.4)',
        }}
      />
    </>
  )
}
