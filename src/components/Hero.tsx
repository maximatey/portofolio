import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const ROLES = ['Front-End Developer', 'Software Engineer', 'QA Engineer', 'React Developer']

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' })
}

export default function Hero() {
  const [displayText, setDisplayText] = useState(ROLES[0])

  useEffect(() => {
    let roleIdx = 0, charIdx = ROLES[0].length, isDeleting = true
    let tid: ReturnType<typeof setTimeout>

    function tick() {
      const cur = ROLES[roleIdx]
      if (isDeleting) {
        setDisplayText(cur.substring(0, --charIdx))
        if (charIdx === 0) { isDeleting = false; roleIdx = (roleIdx + 1) % ROLES.length; tid = setTimeout(tick, 420); return }
        tid = setTimeout(tick, 42)
      } else {
        setDisplayText(cur.substring(0, ++charIdx))
        if (charIdx === cur.length) { isDeleting = true; tid = setTimeout(tick, 1700); return }
        tid = setTimeout(tick, 82)
      }
    }
    tid = setTimeout(tick, 2200)
    return () => clearTimeout(tid)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream px-6 pt-24 pb-16"
    >
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-radial from-[#d4b896]/40 to-transparent blur-[80px] animate-float-a" />
        <div className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full bg-gradient-radial from-[#b5c4e0]/35 to-transparent blur-[80px] animate-float-b" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Available badge */}
        <div className="animate-fade-down inline-flex items-center gap-2 bg-white border border-pebble rounded-full px-4 py-1.5 text-sm font-medium text-subdued mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-badge-dot" />
          <Sparkles size={13} className="text-bronze" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="font-playfair font-bold leading-none mb-4 text-[clamp(3.5rem,9vw,6.5rem)] animate-fade-up-1">
          <span className="block text-ink">Alex</span>
          <span className="block text-bronze italic">Sander.</span>
        </h1>

        {/* Typing role */}
        <p id="hero-role" className="text-lg md:text-xl text-subdued font-light mb-4 h-7 animate-fade-up-2">
          {displayText}
          <span className="inline-block w-0.5 h-5 bg-bronze ml-0.5 align-middle animate-blink" />
        </p>

        {/* Subtitle */}
        <p className="text-base text-subdued max-w-lg mx-auto leading-relaxed mb-10 animate-fade-up-3">
          Informatics Engineering graduate from{' '}
          <strong className="text-ink font-semibold">Bandung Institute of Technology</strong>,
          crafting responsive web experiences and reliable software with precision and elegance.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12 animate-fade-up-4">
          <Button id="btn-view-work" size="lg" onClick={() => scrollTo('#projects')}>
            View My Work
          </Button>
          <Button id="btn-get-in-touch" variant="outline" size="lg" asChild>
            <a href="mailto:alexjiang1609@gmail.com">Get in Touch</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 animate-fade-up-5">
          {[
            { num: '3.69', label: 'GPA / 4.00' },
            { num: '6+',   label: 'Projects Built' },
            { num: '2+',   label: 'Years Experience' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              {i > 0 && <Separator orientation="vertical" className="h-10 bg-pebble-dark" />}
              <div className="text-center">
                <span className="block font-playfair text-3xl font-bold text-ink leading-none mb-1">{s.num}</span>
                <span className="text-[11px] text-subdued uppercase tracking-widest">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subdued">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
