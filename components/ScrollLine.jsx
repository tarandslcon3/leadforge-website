'use client'
import { useEffect, useState } from 'react'

export default function ScrollLine() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      {/* Horizontal progress bar pinned to top */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
          zIndex: 9999,
          transition: 'width 0.1s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Vertical line — desktop only */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'fixed',
          left: 24,
          top: 0,
          width: 2,
          height: `${progress}%`,
          background: 'linear-gradient(180deg, #3b82f6, #06b6d4)',
          boxShadow: '0 0 8px rgba(59,130,246,0.6)',
          borderRadius: 99,
          zIndex: 9990,
          transition: 'height 0.1s ease',
          pointerEvents: 'none',
        }}
      >
        {progress > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: -4,
              left: -3,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#06b6d4',
              boxShadow: '0 0 8px #06b6d4, 0 0 16px rgba(6,182,212,0.5)',
            }}
          />
        )}
      </div>
    </>
  )
}
