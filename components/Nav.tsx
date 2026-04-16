'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Work',     href: isHome ? '#work'     : '/#work'     },
    { label: 'About',    href: isHome ? '#about'    : '/#about'    },
    { label: 'Blog',     href: '/blog'                              },
  ]

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="logo">
          db<span>.</span>tech
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              {href.startsWith('#') || href.startsWith('/#') ? (
                <a href={href}>{label}</a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          ))}
          <li>
            {isHome ? (
              <a href="#contact" className="nav-cta">Let&apos;s Talk</a>
            ) : (
              <Link href="/#contact" className="nav-cta">Let&apos;s Talk</Link>
            )}
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Glass slide-in panel */}
      <div className={`nav-mobile-panel${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav-mobile-inner">

          {/* Big staggered nav links */}
          <nav className="nav-mobile-links">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-mobile-num">0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>

          {/* Bottom section — always at the bottom via margin-top: auto */}
          <div className="nav-mobile-bottom">
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="nav-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk →
            </a>
            <div className="nav-mobile-footer">
              dbohltech &middot; Pittsburgh, USA
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
