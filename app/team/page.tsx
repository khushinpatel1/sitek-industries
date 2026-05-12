'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const team = [
  {
    name: 'Mark Sitek',
    role: 'Founder & Principal Health Physicist',
    bio: 'Board-certified health physicist with 20+ years of experience spanning nuclear medicine, industrial radiography, and research reactors. Mark founded Sitek Industries to make expert-grade radiation safety accessible to facilities of every size.',
    email: 'm.sitek@sitekindustries.com',
    initials: 'MS',
  },
  {
    name: 'Lisa Corral',
    role: 'CEO & Client Relations',
    bio: 'Lisa leads client strategy and business operations at Sitek. With a background in healthcare administration and regulatory affairs, she ensures every engagement is delivered on time and above expectation.',
    email: 'l.corral@sitekindustries.com',
    initials: 'LC',
  },
  {
    name: 'Alex Trujillo',
    role: 'Senior Health Physicist — Compliance & Licensing',
    bio: 'Alex specializes in NRC and Agreement State licensing, inspection preparation, and regulatory correspondence. He has guided clients through hundreds of license renewals and zero-finding inspections.',
    email: 'a.trujillo@sitekindustries.com',
    initials: 'AT',
  },
  {
    name: 'Judah Farahi',
    role: 'Health Physicist — Operations & Scheduling',
    bio: 'Judah manages field operations, client scheduling, and training delivery. He holds certifications in radiation protection and has conducted on-site audits across 20+ states.',
    email: 'j.farahi@sitekindustries.com',
    initials: 'JF',
  },
]

const credentials = [
  'American Board of Health Physics (ABHP) Certified',
  'NRC and Agreement State License Experience',
  'DOT Hazmat Employee Training',
  'OSHA Radiation Safety Compliance',
  'Medical, Industrial & Research Sector Experience',
  'Emergency Response Planning Certified',
]

export default function TeamPage() {
  return (
    <div className="bg-si-bg">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(52,211,153,0.07),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 page-hero">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">The Team</p>
            <h1 className="font-sora font-extrabold text-5xl md:text-7xl text-si-text leading-[1.05] max-w-3xl mb-6">
              The physicists{' '}
              <span className="gradient-text">behind the work.</span>
            </h1>
            <p className="text-si-muted text-lg md:text-xl max-w-xl leading-relaxed">
              A small, focused team of board-certified health physicists and compliance specialists. No juniors handed your account. No layers of management between you and the expert.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {team.map(({ name, role, bio, email, initials }, i) => (
              <ScrollReveal key={name} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-8 h-full hover:border-si-emerald/20 transition-all duration-300">
                  <div className="flex items-start gap-5 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-sora font-bold text-si-bg text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
                    >
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-si-text text-lg leading-tight">{name}</h3>
                      <p className="text-si-emerald text-xs mt-1 leading-snug">{role}</p>
                    </div>
                  </div>
                  <p className="text-si-muted text-sm leading-relaxed mb-5">{bio}</p>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-si-dim hover:text-si-emerald text-xs transition-colors duration-200"
                  >
                    <Mail size={13} /> {email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-3">Credentials</p>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text">Qualified at every level</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c, i) => (
              <ScrollReveal key={c} delay={i * 0.06}>
                <div className="glass-card rounded-xl px-6 py-5 flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-si-emerald flex-shrink-0" />
                  <span className="text-si-muted text-sm">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">Work With Us</p>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text mb-6">
              Ready to talk to a real physicist?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-sora text-sm text-si-bg hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
              >
                Book a Consultation <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-si-text text-sm font-medium hover:border-si-emerald/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                Send a Message
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
