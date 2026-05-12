'use client'

import Link from 'next/link'
import { ArrowRight, Shield, ClipboardCheck, Activity, Search, AlertTriangle, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import StatCounter from '@/components/StatCounter'

const services = [
  { Icon: Shield,         label: 'Radiation Safety Programs',  desc: 'Comprehensive RSO support — program design, documentation, and ongoing oversight.' },
  { Icon: ClipboardCheck, label: 'Regulatory Compliance',      desc: 'NRC, Agreement State, and DOT compliance audits so you are always ahead of the curve.' },
  { Icon: Activity,       label: 'Dosimetry & Monitoring',     desc: 'Worker exposure tracking, badge programs, and ALARA analysis.' },
  { Icon: Search,         label: 'Facility Audits',            desc: 'Independent third-party audits with actionable findings — not just a checklist.' },
  { Icon: AlertTriangle,  label: 'Emergency Preparedness',     desc: 'Response planning, drills, and spill/incident protocols tailored to your sources.' },
  { Icon: BookOpen,       label: 'Training & Education',       desc: 'Radiation worker and RSO training delivered on-site or remotely.' },
]

const stats = [
  { value: 500,  suffix: '+', label: 'Clients Served' },
  { value: 15,   suffix: '+', label: 'Years of Experience' },
  { value: 30,   suffix: '+', label: 'States Active' },
  { value: 98,   suffix: '%', label: 'Client Retention' },
]

export default function HomePage() {
  return (
    <div className="bg-si-bg">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(52,211,153,0.12),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-si-emerald/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-si-emerald/20 bg-si-emerald/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-si-emerald animate-pulse" />
              <span className="text-si-emerald text-xs font-medium tracking-widest uppercase">Currently accepting new clients</span>
            </div>

            <h1 className="font-sora font-extrabold text-6xl md:text-8xl text-si-text leading-[1.02] max-w-5xl mb-8">
              Radiation safety,{' '}
              <span className="gradient-text">engineered</span>{' '}
              to protect.
            </h1>

            <p className="text-si-muted text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
              Premier health physics consulting for medical, industrial, research, and nuclear facilities. Expert-grade guidance — responsive, practical, built for the long term.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold font-sora text-si-bg hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #34D399 0%, #22D3EE 100%)' }}
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-si-text text-sm font-medium hover:border-si-emerald/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-si-emerald/40 to-transparent" />
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map(({ value, suffix, label }) => (
              <StatCounter key={label} value={value} suffix={suffix} label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-3">What We Do</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text max-w-lg leading-tight">
                  Every service your radiation program needs
                </h2>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-si-emerald text-sm font-medium hover:gap-3 transition-all duration-200 flex-shrink-0"
                >
                  All services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ Icon, label, desc }, i) => (
              <ScrollReveal key={label} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-7 h-full hover:border-si-emerald/25 hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-si-emerald/10 flex items-center justify-center mb-5 group-hover:bg-si-emerald/15 transition-colors">
                    <Icon size={20} className="text-si-emerald" />
                  </div>
                  <h3 className="font-sora font-semibold text-si-text mb-3 leading-snug">{label}</h3>
                  <p className="text-si-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SITEK ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">Why Sitek</p>
              <h2 className="font-sora font-extrabold text-4xl md:text-5xl text-si-text leading-tight mb-6">
                Not a vendor. A long-term partner.
              </h2>
              <p className="text-si-muted text-sm leading-relaxed mb-4">
                Most facilities relying on ionizing radiation lack dedicated in-house health physicists. They settle for stretched RSOs or consultants who treat them like a support ticket.
              </p>
              <p className="text-si-muted text-sm leading-relaxed mb-8">
                Sitek embeds into your operations. We learn your sources, your workflows, your risk profile — and provide guidance that is practical, not just technically correct.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-si-emerald text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                About us <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="space-y-4">
                {[
                  ['Expert-grade guidance', 'Board-certified health physicists with field experience across medical, industrial, and nuclear sectors.'],
                  ['Regulatory fluency', 'We monitor NRC, Agreement State, and DOT updates continuously — not just when your renewal comes up.'],
                  ['Responsive by default', 'Direct access to your assigned physicist. No ticketing system, no call centers.'],
                ].map(([title, body]) => (
                  <div key={title as string} className="glass-card rounded-2xl p-6 hover:border-si-emerald/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-si-emerald mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-sora font-semibold text-si-text text-sm mb-1">{title}</p>
                        <p className="text-si-muted text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(34,211,238,0.04) 100%)' }}
            >
              <div className="absolute inset-0 border border-si-emerald/10 rounded-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(52,211,153,0.07),transparent_70%)]" />
              <div className="relative z-10">
                <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">Get Started</p>
                <h2 className="font-sora font-bold text-4xl md:text-6xl text-si-text mb-6 leading-tight">
                  Ready to strengthen your<br className="hidden md:block" /> radiation safety program?
                </h2>
                <p className="text-si-muted text-lg max-w-xl mx-auto mb-10">
                  Book a free 30-minute consultation. No commitment — just a conversation about where you stand and what you need.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-semibold font-sora text-si-bg hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #34D399 0%, #22D3EE 100%)' }}
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
