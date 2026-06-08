import { useRef } from 'react'
import { MapPin, GraduationCap, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const TAGS = ['React', 'JavaScript', 'TypeScript', 'Python', 'Jest', 'Cypress', 'SQL', 'Java', 'C++']

const DETAILS = [
  { icon: MapPin,          text: 'Batam, Riau Islands, Indonesia' },
  { icon: GraduationCap,   text: 'B.Sc. Informatics — Bandung Institute of Technology' },
  { icon: Globe,           text: 'Indonesian · English · Teochew' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section id="about" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-bronze mb-5">01 / About</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="reveal">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight text-ink mb-8">
              Turning ideas into<br />
              <em className="text-bronze">elegant interfaces.</em>
            </h2>

            <p className="text-subdued text-[0.95rem] leading-[1.85] mb-5">
              I'm a detail-oriented software engineer with a passion for building beautiful,
              performant, and accessible web applications. My background spans front-end
              development, quality assurance, and machine learning research.
            </p>
            <p className="text-subdued text-[0.95rem] leading-[1.85] mb-8">
              Currently working as a{' '}
              <strong className="text-ink font-semibold">Quality Assurance Engineer at FWD Singapore</strong>,
              I bring a dual perspective — writing clean code and rigorously verifying it.
              Great software lives at the intersection of engineering discipline and creative design.
            </p>

            <div className="space-y-3">
              {DETAILS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-ink-soft">
                  <Icon size={15} className="text-bronze flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="reveal">
            <Card className="hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                {/* Avatar row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-bronze bg-bronze-tint flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair font-bold text-bronze text-lg">AS</span>
                  </div>
                  <div>
                    <p className="font-bold text-ink">Alex Sander</p>
                    <p className="text-sm text-subdued">Software Engineer</p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {TAGS.map((tag) => (
                    <Badge key={tag} variant="tech" className="cursor-default hover:border-bronze hover:text-bronze transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Interests */}
                <div className="border-t border-pebble pt-4">
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-subdued mb-1.5">Interests</p>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    Machine Learning · Software Architecture · Mathematics · Game Development
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
