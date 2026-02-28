'use client'

import { useEffect, useRef } from 'react'

export default function BracketCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bracket = ref.current
    if (!bracket) return

    let mx = 0, my = 0, bx = 0, by = 0
    let magnetTarget: Element | null = null
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      bracket.classList.add('visible')
    }
    document.addEventListener('mousemove', onMove)

    const attach = () => {
      const magnetEls = document.querySelectorAll(
        'a, button, .project-card, .service-card, .btn-primary, .btn-ghost, .post-card'
      )
      magnetEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          magnetTarget = el
          bracket.classList.add('expanded')
        })
        el.addEventListener('mouseleave', () => {
          magnetTarget = null
          bracket.classList.remove('expanded')
        })
      })
    }
    attach()

    function anim() {
      const b = ref.current
      if (!b) return
      let tx = mx, ty = my
      if (magnetTarget) {
        const r = magnetTarget.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dist = Math.hypot(mx - cx, my - cy)
        const pull = Math.max(0, 1 - dist / 160)
        tx = mx + (cx - mx) * pull * 0.45
        ty = my + (cy - my) * pull * 0.45
      }
      bx += (tx - bx) * 0.18
      by += (ty - by) * 0.18
      const size = b.offsetWidth
      b.style.transform = `translate(${bx - size / 2}px, ${by - size / 2}px)`
      rafId = requestAnimationFrame(anim)
    }
    anim()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="bracket-cursor" ref={ref}>
      <div className="b-corner tl" />
      <div className="b-corner tr" />
      <div className="b-corner bl" />
      <div className="b-corner br" />
    </div>
  )
}
