'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { label: 'AI Tools & Agents', pct: 95 },
  { label: 'Web Dev', pct: 95 },
  { label: 'Automations', pct: 90 },
  { label: 'Browser Ext.', pct: 90 },
  { label: 'Graphic Design', pct: 85 },
  { label: 'Mobile Dev', pct: 85 },
  { label: 'AI Skills / MCP', pct: 88 },
  { label: 'Backend / APIs', pct: 82 },
]

export default function SkillBars() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fills = ref.current?.querySelectorAll<HTMLElement>('.skill-fill')
    if (!fills) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    fills.forEach((f) => obs.observe(f))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="about-right">
      <div className="section-label" style={{ marginBottom: '2rem' }}>
        Comfort Zones
      </div>
      {skills.map((s) => (
        <div key={s.label} className="skill-row">
          <span className="skill-label">{s.label}</span>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${s.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
