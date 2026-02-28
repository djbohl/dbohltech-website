'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="logo">
        db<span>.</span>tech
      </Link>
      <ul>
        {isHome ? (
          <>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
          </>
        ) : (
          <>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#work">Work</Link></li>
            <li><Link href="/#about">About</Link></li>
          </>
        )}
        <li><Link href="/blog">Blog</Link></li>
        <li>
          {isHome ? (
            <a href="#contact" className="nav-cta">Let&apos;s Talk</a>
          ) : (
            <Link href="/#contact" className="nav-cta">Let&apos;s Talk</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
