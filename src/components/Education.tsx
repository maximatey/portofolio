import { useRef } from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useReveal } from '@/hooks/useReveal'

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section id="education" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-bronze mb-5">05 / Education</p>

        <Card id="edu-bit" className="reveal hover:shadow-card-hover transition-all duration-300">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Logo */}
              <div className="w-16 h-16 rounded-xl bg-ink flex items-center justify-center flex-shrink-0">
                <span className="font-playfair font-bold text-white text-lg tracking-wide">ITB</span>
              </div>

              <div className="flex-1">
                {/* School + degree */}
                <div className="flex items-start gap-3 mb-1">
                  <GraduationCap size={18} className="text-bronze mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink leading-tight">
                      Bandung Institute of Technology
                    </h2>
                    <p className="text-subdued text-sm mt-1">Bachelor of Informatics / Computer Science</p>
                    <p className="font-mono text-xs text-subdued mt-0.5">Aug 2021 – Aug 2025 · Bandung, Indonesia</p>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Stats */}
                <div className="flex gap-10 mb-6">
                  {[
                    { num: '3.69', label: 'GPA / 4.00' },
                    { num: '146', label: 'Credits Completed' },
                  ].map((s) => (
                    <div key={s.label}>
                      <span className="block font-playfair text-3xl font-bold text-bronze leading-none mb-1">
                        {s.num}
                      </span>
                      <span className="text-xs text-subdued uppercase tracking-widest">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Thesis */}
                <div className="flex gap-3 pl-4 border-l-2 border-bronze">
                  <BookOpen size={15} className="text-bronze flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-bronze mb-1">Thesis</p>
                    <p className="text-sm text-ink-soft italic leading-relaxed">
                      Deep Learning-based Anomaly Detection on Videos using modern computer vision methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
