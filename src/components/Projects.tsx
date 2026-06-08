import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

type Project = {
  id: string
  num: string
  featured?: boolean
  badges: string[]
  title: string
  desc: string
  tech: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'proj-thesis',
    num: '01',
    featured: true,
    badges: ['Thesis Research', 'Deep Learning'],
    title: 'Video Anomaly Detector',
    desc: 'A deep learning pipeline utilizing YOLO and I3D architectures to detect and classify anomalous behaviors in video streams — developed as academic thesis research.',
    tech: ['Python', 'YOLO', 'I3D', 'OpenCV'],
  },
  {
    id: 'proj-graduit',
    num: '02',
    badges: ['Web App'],
    title: 'Graduit',
    desc: 'Web application helping students and advisors track final project milestones, manage deadlines, and streamline academic communication.',
    tech: ['React', 'JavaScript'],
  },
  {
    id: 'proj-songster',
    num: '03',
    badges: ['Web App', 'Database'],
    title: 'Songster',
    desc: 'Music streaming web application with a structured relational SQL database managing user data, playlists, and track metadata.',
    tech: ['SQL', 'Web Dev'],
  },
  {
    id: 'proj-bondoman',
    num: '04',
    badges: ['Android', 'Mobile'],
    title: 'BondoMan',
    desc: 'Mobile financial application for logging daily expenses, tracking budgets, and visualizing spending habits over time.',
    tech: ['Java', 'Android SDK'],
  },
  {
    id: 'proj-unity',
    num: '05',
    badges: ['Game Dev'],
    title: 'Unity 3D Shooter',
    desc: 'Game mechanics, enemy AI, and character movement scripts for a fully functional 3D third-person shooter.',
    tech: ['C#', 'Unity 3D'],
  },
  {
    id: 'proj-txrecorder',
    num: '06',
    badges: ['Desktop App'],
    title: 'Transaction Recorder',
    desc: 'Desktop application for tracking commercial goods transactions, managing inventory levels, and generating sales records.',
    tech: ['Java'],
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section id="projects" ref={ref} className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-bronze mb-5">04 / Projects</p>
        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold leading-tight text-ink mb-12">
          Selected<br /><em className="text-bronze">Work.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((proj) => (
            <Card
              key={proj.id}
              id={proj.id}
              className={cn(
                'reveal relative overflow-hidden',
                proj.featured && 'md:col-span-2',
              )}
            >
              <CardContent className={cn('p-7', proj.featured && 'md:flex md:gap-8 md:items-start')}>
                {/* Number */}
                <div
                  className={cn(
                    'font-playfair text-5xl font-bold text-pebble-dark leading-none',
                    proj.featured ? 'md:text-7xl md:flex-shrink-0' : 'mb-4',
                  )}
                >
                  {proj.num}
                </div>

                <div className="flex-1">
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.badges.map((b) => (
                      <Badge key={b} variant="accent">{b}</Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl font-bold text-ink mb-2">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-subdued leading-relaxed mb-4">{proj.desc}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <Badge key={t} variant="tech">{t}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
