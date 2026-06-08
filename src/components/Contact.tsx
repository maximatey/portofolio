import { useRef, useState } from 'react'
import { Mail, Phone, Link2, Send, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useReveal } from '@/hooks/useReveal'

const LINKS = [
  { id: 'contact-email',    href: 'mailto:alexjiang1609@gmail.com',           icon: Mail,  label: 'Email',    value: 'alexjiang1609@gmail.com', external: false },
  { id: 'contact-linkedin', href: 'https://linkedin.com/in/alex-sander1609', icon: Link2, label: 'LinkedIn', value: 'alex-sander1609',          external: true },
  { id: 'contact-phone',    href: 'tel:+6285765296846',                       icon: Phone, label: 'Phone',    value: '+62 857 6529 6846',         external: false },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [busy, setBusy]       = useState(false)
  const [success, setSuccess] = useState(false)

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setTimeout(() => {
      setBusy(false)
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    }, 1200)
  }

  return (
    <section id="contact" ref={ref} className="py-28 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-bronze mb-5">06 / Contact</p>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight text-ink mb-5">
              Let's build<br /><em className="text-bronze">something great.</em>
            </h2>
            <p className="text-subdued text-[0.95rem] leading-relaxed mb-8">
              Whether you have a role in mind, a project idea, or just want to connect —
              my inbox is always open.
            </p>

            <div className="space-y-3">
              {LINKS.map(({ id, href, icon: Icon, label, value, external }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 bg-white border border-pebble rounded-xl p-4 hover:border-bronze hover:shadow-md hover:translate-x-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-bronze-tint border border-bronze/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bronze group-hover:border-bronze transition-colors duration-300">
                    <Icon size={16} className="text-bronze group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-subdued">{label}</p>
                    <p className="text-sm font-medium text-ink">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form card
          <Card className="shadow-md">
            <CardContent className="p-8">
              <form id="contact-form" onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold tracking-[0.06em] uppercase text-ink mb-1.5">
                    Your Name
                  </label>
                  <Input id="form-name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" required />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold tracking-[0.06em] uppercase text-ink mb-1.5">
                    Your Email
                  </label>
                  <Input id="form-email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@example.com" required />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold tracking-[0.06em] uppercase text-ink mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="form-message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  id="form-submit-btn"
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={busy}
                >
                  {busy ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={15} /> Send Message</span>
                  )}
                </Button>

                {success && (
                  <div id="form-success" className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-3 text-sm font-medium">
                    <CheckCircle2 size={16} />
                    Message sent! I'll get back to you soon.
                  </div>
                )}
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
