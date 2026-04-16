'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { label: 'Backend & APIs',       pct: 92 },
  { label: 'Data Engineering',     pct: 88 },
  { label: 'Cloud / Infra',        pct: 85 },
  { label: 'Full-Stack Dev',       pct: 90 },
  { label: 'Python / Automation',  pct: 93 },
  { label: 'Database Design',      pct: 87 },
  { label: 'AI Integrations',      pct: 90 },
  { label: 'System Architecture',  pct: 84 },
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
