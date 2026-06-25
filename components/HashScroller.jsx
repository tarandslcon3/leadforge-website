'use client'
import { useEffect } from 'react'

export default function HashScroller() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    // Three attempts at increasing delays:
    // - 100ms: catches cases where element is already in SSR HTML
    // - 700ms: after dynamic components (Hero, ROICalculator) mount
    // - 1800ms: after LoadingScreen fully fades (1700ms) + buffer
    const t1 = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    const t2 = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 700)
    const t3 = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 1800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])
  return null
}
