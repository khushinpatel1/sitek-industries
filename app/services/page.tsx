'use client'

import Link from 'next/link'
import { ArrowRight, Shield, ClipboardCheck, Activity, Search, AlertTriangle, BookOpen } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    Icon: Shield,
    label: 'Radiation Safety Programs',
    desc: 'We design, implement, and oversee full radiation safety programs tailored to your facility type and radioactive material license. This includes procedure writing, ALARA program development, audit schedules, and ongoing RSO support.',
    bullets: ['License-specific program design', 'ALARA program development', 'Procedure and SOP writing', 'Ongoing RSO support'],
  },
  {
    Icon: ClipboardCheck,
    label: 'Regulatory Compliance',
    desc: 'We track NRC, Agreement State, and DOT regulatory updates continuously. Our compliance engagements cover license renewals, amendments, inspection preparation, and response to agency findings.',
    bullets: ['License renewal and amendment support', 'Inspection preparation', 'Response to NRC/state findings', 'DOT shipping compliance'],
  },
  {
    Icon: Activity,
    label: 'Dosimetry & Monitoring',
    desc: 'Comprehensive occupational exposure management — from badge program setup and TLD/OSL selection to exposure record review and ALARA investigation thresholds.',
    bullets: ['Dosimetry program setup', 'Exposure record management', 'ALARA investigation support', 'Bioassay program design'],
  },
  {
    Icon: Search,
    label: 'Facility Audits',
    desc: 'Independent third-party audits of your radiation safety program with clear, prioritized findings. We identify gaps before regulators do — and provide a remediation roadmap, not just a report.',
    bullets: ['Independent third-party audits', 'Pre-inspection readiness reviews', 'Prioritized findings report', 'Remediation roadmap'],
  },
  {
    Icon: AlertTriangle,
    label: 'Emergency Preparedness',
    desc: 'Response planning, tabletop exercises, and spill/incident protocols for facilities using sealed or unsealed sources. We ensure your team knows exactly what to do when something goes wrong.',
    bullets: ['Emergency response planning', 'Tabletop exercises and drills', 'Spill and contamination protocols', 'Incident notification procedures'],
  },
  {
    Icon: BookOpen,
    label: 'Training & Education',
    desc: 'Radiation worker initial and refresher training, RSO training, and specialty courses delivered on-site or via live virtual sessions. All training is documented and certificate-ready.',
    bullets: ['Radiation worker initial training', 'Annual refresher courses', 'RSO training programs', 'On-site or virtual delivery'],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-si-bg">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(52,211,153,0.07),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 page-hero">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">Services</p>
            <h1 className="font-sora font-extrabold text-5xl md:text-7xl text-si-text leading-[1.05] max-w-3xl mb-6">
              Everything your program{' '}
              <span className="gradient-text">requires.</span>
            </h1>
            <p className="text-si-muted text-lg md:text-xl max-w-xl leading-relaxed">
              From initial program design to ongoing compliance support — we cover every layer of radiation safety so you can focus on your work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {services.map(({ Icon, label, desc, bullets }, i) => (
            <ScrollReveal key={label} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-8 md:p-10 hover:border-si-emerald/20 transition-all duration-300">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-si-emerald/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-si-emerald" />
                      </div>
                      <h2 className="font-sora font-bold text-xl text-si-text">{label}</h2>
                    </div>
                    <p className="text-si-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="md:col-span-5">
                    <ul className="space-y-2.5">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-si-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-si-emerald flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-si-muted text-lg max-w-lg mx-auto mb-10">
              Book a free consultation and we will assess your program and tell you exactly where to start.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold font-sora text-si-bg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
            >
              Book a Consultation <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
