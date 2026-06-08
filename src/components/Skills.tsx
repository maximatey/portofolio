import { useRef, useEffect, useState } from 'react'
import { Code2, Layers, Wrench, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { useReveal } from '@/hooks/useReveal'

const SKILL_CARDS = [
  {
    id: 'skill-languages',
    icon: Code2,
    title: 'Languages',
    pills: [
      { label: 'JavaScript', hi: true },
      { label: 'TypeScript', hi: true },
      { label: 'Python' },
      { label: 'Java' },
      { label: 'C++' },
      { label: 'C' },
    ],
  },
  {
    id: 'skill-frameworks',
    icon: Layers,
    title: 'Frameworks & Libraries',
    pills: [
      { label: 'React', hi: true },
      { label: 'Jest' },
      { label: 'Cypress' },
      { label: 'YOLO' },
      { label: 'I3D (Deep Learning)' },
    ],
  },
  {
    id: 'skill-tools',
    icon: Wrench,
    title: 'Tools & Databases',
    pills: [
      { label: 'Git' },
      { label: 'SQL' },
      { label: 'Android Studio' },
      { label: 'Unity 3D' },
    ],
  },
  {
    id: 'skill-core',
    icon: Target,
    title: 'Core Competencies',
    pills: [
      { label: 'Front-End Dev', hi: true },
      { label: 'Software Engineering' },
      { label: 'AI / ML' },
      { label: 'Automated Testing' },
    ],
  },
]

const BARS = [
  { label: 'React / JavaScript', pct: 90 },
  { label: 'Automated Testing (Jest, Cypress)', pct: 85 },
  { label: 'Python / Machine Learning', pct: 80 },
  { label: 'Java / Android', pct: 75 },
  { label: 'SQL / Databases', pct: 70 },
]

export default function Skills() {
  const ref   = useRef<HTMLElement>(null)
  const barsRef = useRef<HTMLDivElement>(null)
  const [barValues, setBarValues] = useState(BARS.map(() => 0))
  useReveal(ref)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setBarValues(BARS.map((b) => b.pct)), 250)
          obs.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-bronze mb-5">03 / Skills</p>
        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold leading-tight text-ink mb-12">
          Technical<br /><em className="text-bronze">Expertise.</em>
        </h2>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {SKILL_CARDS.map(({ id, icon: Icon, title, pills }) => (
            <Card
              key={id}
              id={id}
              className="reveal hover:shadow-card-hover hover:-translate-y-1 hover:border-bronze/40 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-bronze-tint border border-bronze/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-bronze" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {pills.map((p) => (
                    <Badge key={p.label} variant={p.hi ? 'accent' : 'tech'}
                      className={p.hi ? 'cursor-default' : 'cursor-default hover:border-bronze hover:text-bronze transition-colors'}>
                      {p.label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency bars */}
        <Card className="reveal" ref={barsRef}>
          <CardContent className="p-8">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-subdued mb-6">
              Core Proficiencies
            </p>
            <div className="space-y-5">
              {BARS.map((bar, i) => (
                <div key={bar.label} id={`bar-${i}`}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-ink-soft">{bar.label}</span>
                    <span className="font-mono text-xs text-bronze">{bar.pct}%</span>
                  </div>
                  <Progress value={barValues[i]} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
