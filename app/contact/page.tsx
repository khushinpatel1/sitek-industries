'use client'

import { useRef, useState } from 'react'
import { Mail, MapPin, Clock, Loader2, Check } from 'lucide-react'
import { submitContact } from '@/app/actions/contact'
import ScrollReveal from '@/components/ScrollReveal'

const staffContacts = [
  { name: 'Lisa Corral', role: 'CEO — General Inquiries', email: 'l.corral@sitekindustries.com' },
  { name: 'Alex Trujillo', role: 'Compliance & Licensing', email: 'a.trujillo@sitekindustries.com' },
  { name: 'Mark Sitek', role: 'Technical / Physics Questions', email: 'm.sitek@sitekindustries.com' },
  { name: 'Judah Farahi', role: 'Operations & Scheduling', email: 'j.farahi@sitekindustries.com' },
]

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('All fields are required.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const fd = new FormData()
      fd.set('name', name)
      fd.set('email', email)
      fd.set('message', message)
      const result = await submitContact(fd)
      if (result.success) {
        setSuccess(true)
      } else {
        setError(result.message)
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-si-bg">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(52,211,153,0.07),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 page-hero">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="font-sora font-extrabold text-5xl md:text-7xl text-si-text leading-[1.05] max-w-3xl mb-6">
              Let's start a{' '}
              <span className="gradient-text">conversation.</span>
            </h1>
            <p className="text-si-muted text-lg md:text-xl max-w-xl leading-relaxed">
              Whether you have a specific project, a compliance question, or just want to understand your options — we are here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">

            {/* ── Left: Form ── */}
            <ScrollReveal direction="left">
              <h2 className="font-sora font-bold text-2xl text-si-text mb-2">Send us a message</h2>
              <p className="text-si-muted text-sm mb-8">We respond within one business day.</p>

              {success ? (
                <div className="glass-card rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-si-emerald/15 border border-si-emerald/30 flex items-center justify-center mx-auto mb-5">
                    <Check size={26} className="text-si-emerald" />
                  </div>
                  <h3 className="font-sora font-bold text-xl text-si-text mb-2">Message sent</h3>
                  <p className="text-si-muted text-sm leading-relaxed">
                    Thanks for reaching out. A team member will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-si-muted text-xs font-medium mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-si-text text-sm placeholder:text-si-dim focus:outline-none focus:border-si-emerald/50 focus:bg-si-emerald/[0.03] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-si-muted text-xs font-medium mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@yourfacility.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-si-text text-sm placeholder:text-si-dim focus:outline-none focus:border-si-emerald/50 focus:bg-si-emerald/[0.03] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-si-muted text-xs font-medium mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your facility, current program, or what you need help with..."
                      rows={6}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-si-text text-sm placeholder:text-si-dim focus:outline-none focus:border-si-emerald/50 focus:bg-si-emerald/[0.03] transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm px-4 py-3 rounded-xl bg-red-400/10 border border-red-400/20">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full font-semibold font-sora text-si-bg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* ── Right: Info ── */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="space-y-6">
                {/* Office info */}
                <div className="glass-card rounded-2xl p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-si-emerald/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-si-emerald" />
                    </div>
                    <div>
                      <p className="text-si-text text-sm font-medium font-sora mb-1">Headquarters</p>
                      <p className="text-si-muted text-sm leading-relaxed">
                        United States<br />
                        Serving clients nationally and internationally
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06]" />
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-si-emerald/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-si-emerald" />
                    </div>
                    <div>
                      <p className="text-si-text text-sm font-medium font-sora mb-1">Business Hours</p>
                      <p className="text-si-muted text-sm leading-relaxed">
                        Monday – Friday, 9:00 AM – 5:00 PM ET<br />
                        Emergency support available 24/7 for active clients
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06]" />
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-si-emerald/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-si-emerald" />
                    </div>
                    <div>
                      <p className="text-si-text text-sm font-medium font-sora mb-1">General Inquiries</p>
                      <a
                        href="mailto:info@sitekindustries.com"
                        className="text-si-muted text-sm hover:text-si-emerald transition-colors"
                      >
                        info@sitekindustries.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct contacts */}
                <div>
                  <p className="text-si-text text-xs font-semibold font-sora uppercase tracking-widest mb-4">
                    Direct Contacts
                  </p>
                  <div className="space-y-3">
                    {staffContacts.map(({ name, role, email }) => (
                      <div
                        key={email}
                        className="glass-card rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-si-emerald/20 transition-all duration-200"
                      >
                        <div>
                          <p className="text-si-text text-sm font-medium">{name}</p>
                          <p className="text-si-dim text-xs mt-0.5">{role}</p>
                        </div>
                        <a
                          href={`mailto:${email}`}
                          className="text-si-muted hover:text-si-emerald transition-colors flex-shrink-0"
                          title={email}
                        >
                          <Mail size={15} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
