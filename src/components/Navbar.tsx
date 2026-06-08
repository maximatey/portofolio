import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import LogoMark from '@/components/ui/LogoMark'

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [activeId,    setActiveId]    = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id) }),
      { threshold: 0.35 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg transition-all duration-300',
        scrolled && 'border-b border-pebble shadow-sm',
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center gap-6">
        {/* Logo — AS monogram SVG */}
        <button
          onClick={() => scrollTo('#hero')}
          aria-label="Back to top"
          className="text-ink hover:text-bronze transition-colors duration-300 mr-auto md:mr-0 flex items-center"
        >
          <LogoMark className="h-10 w-auto" />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 ml-auto">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeId === href.slice(1)
            return (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={cn(
                    'text-sm font-medium transition-colors relative group',
                    isActive ? 'text-bronze' : 'text-subdued hover:text-ink',
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-bronze transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* Hire Me CTA */}
        <Button
          id="nav-hire-btn"
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => scrollTo('#contact')}
        >
          Hire Me
        </Button>

        {/* Hamburger */}
        <button
          id="hamburger"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-ink hover:text-bronze transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-pebble px-6 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => { scrollTo(href); setMobileOpen(false) }}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-ink-soft hover:text-bronze hover:bg-bronze-tint rounded-lg transition-colors"
            >
              {label}
            </button>
          ))}
          <Button size="sm" className="mt-3 w-full" onClick={() => { scrollTo('#contact'); setMobileOpen(false) }}>
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  )
}
