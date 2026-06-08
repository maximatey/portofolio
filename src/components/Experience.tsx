import { useRef } from 'react'
import { Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

const EXPERIENCES = [
  {
    id: 'exp-fwd',
    role: 'Quality Assurance Engineer',
    company: 'FWD Singapore',
    date: 'Dec 2025 – Present',
    location: 'Remote / Batam',
    type: 'remote' as const,
    current: true,
    bullets: [
      'Design and author comprehensive test cases and matrix scenarios for complex web and back-end applications.',
      'Execute thorough manual and functional testing, ensuring all software iterations meet strict quality compliance standards before product owner hand-off.',
      'Collaborate closely with cross-functional teams to identify, document, and track software bugs and regressions.',
    ],
    tags: ['Manual Testing', 'Test Case Design', 'Bug Tracking', 'QA Compliance'],
  },
  {
    id: 'exp-paragon',
    role: 'Software Engineer Intern',
    company: 'Paragon',
    date: 'Jul – Oct 2024',
    location: 'Jakarta, Indonesia',
    type: 'onsite' as const,
    current: false,
    bullets: [
      'Developed and optimized responsive front-end components for core web applications using React and JavaScript, significantly enhancing overall user experience.',
      'Authored and executed robust unit tests using Jest and comprehensive component tests via Cypress, maintaining high code coverage and software reliability.',
      'Adhered to modern UI/UX and responsive design principles to ensure cross-browser compatibility and fluid layouts.',
    ],
    tags: ['React', 'JavaScript', 'Jest', 'Cypress', 'Responsive Design'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section id="experience" ref={ref} className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-bronze mb-5">02 / Experience</p>
        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold leading-tight text-ink mb-14">
          Professional<br /><em className="text-bronze">Journey.</em>
        </h2>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* Vertical line */}
          <div className="absolute left-1.5 md:left-3.5 top-3 bottom-3 w-px bg-gradient-to-b from-bronze via-pebble to-pebble" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} id={exp.id} className="reveal relative">
                {/* Dot */}
                <div
                  className={cn(
                    'absolute -left-6 md:-left-10 top-5 w-3.5 h-3.5 rounded-full border-2 border-cream z-10 translate-x-[-1px]',
                    exp.current
                      ? 'bg-bronze animate-pulse-glow'
                      : 'bg-pebble-dark',
                  )}
                />

                <Card className="hover:shadow-card-hover hover:border-bronze/40 hover:translate-x-1 transition-all duration-300">
                  <CardContent className="p-7">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-bronze-tint border border-bronze/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Briefcase size={16} className="text-bronze" />
                        </div>
                        <div>
                          <h3 className="font-bold text-ink text-[1.05rem] leading-tight">{exp.role}</h3>
                          <p className="text-bronze font-semibold text-sm mt-0.5">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 sm:flex-shrink-0">
                        <span className="font-mono text-xs text-subdued">{exp.date}</span>
                        <Badge variant={exp.type}>{exp.location}</Badge>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-subdued leading-relaxed">
                          <span className="text-bronze font-bold mt-px flex-shrink-0">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <Badge key={t} variant="tech">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
