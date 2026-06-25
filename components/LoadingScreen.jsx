'use client'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 1200)
    const remove = setTimeout(() => setVisible(false), 1700)
    return () => {
      clearTimeout(timer)
      clearTimeout(remove)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0f1e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Hexagon with glowing center dot — matches favicon */}
        <svg width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 16 }}>
          <rect x="0" y="0" width="32" height="32" rx="6" fill="#0a0f1e" />
          <polygon points="10,5.6 22,5.6 28,16 22,26.4 10,26.4 4,16" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round" />
          <polygon points="12,8.9 20,8.9 24,16 20,23.1 12,23.1 8,16" fill="none" stroke="#06b6d4" strokeWidth="0.8" opacity="0.5" />
          <circle cx="16" cy="16" r="5" fill="#06b6d4" opacity="0.2" />
          <circle cx="16" cy="16" r="3" fill="#06b6d4" />
          <circle cx="16" cy="5.6" r="1" fill="#3b82f6" />
          <circle cx="26" cy="10.8" r="1" fill="#3b82f6" />
          <circle cx="26" cy="21.2" r="1" fill="#3b82f6" />
          <circle cx="16" cy="26.4" r="1" fill="#3b82f6" />
        </svg>
        <div style={{ color: 'white', fontSize: 24, fontWeight: 900, letterSpacing: '-0.5px' }}>
          TBS Tech<span style={{ color: '#3b82f6' }}> Services</span>
        </div>
        <div
          style={{
            marginTop: 16,
            width: 40,
            height: 3,
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
            borderRadius: 2,
            margin: '16px auto 0',
            animation: 'tbspulse 1s ease-in-out infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes tbspulse {
          0%, 100% { opacity: 1; transform: scaleX(1); }
          50% { opacity: 0.5; transform: scaleX(0.6); }
        }
      `}</style>
    </div>
  )
}
