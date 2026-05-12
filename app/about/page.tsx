'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Award, Users, TrendingUp } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const values = [
  {
    Icon: Shield,
    title: 'Protection First',
    description:
      'Every recommendation we make is grounded in one principle: protecting people and the environment from unnecessary radiation exposure.',
  },
  {
    Icon: Award,
    title: 'Regulatory Precision',
    description:
      'We track every NRC, Agreement State, and DOT update so your programs are always ahead of compliance — never scrambling to catch up.',
  },
  {
    Icon: Users,
    title: 'Long-Term Partnership',
    description:
      'We are not a one-time vendor. Our clients engage us year over year because we become an extension of their safety infrastructure.',
  },
  {
    Icon: TrendingUp,
    title: 'Continuous Improvement',
    description:
      'Health physics is a discipline that evolves. We invest in continuing education and field research to keep our methodologies current.',
  },
]

const physicsCards = [
  {
    title: 'What is Health Physics?',
    body:
      'Health physics is the science concerned with recognizing, evaluating, and controlling health hazards from ionizing radiation. Health physicists design protection programs for workers and the public, and ensure that radiation sources are used safely and legally.',
  },
  {
    title: 'Why Does It Matter?',
    body:
      'Ionizing radiation is used across healthcare, nuclear energy, research, and industrial applications. Without rigorous safety programs, exposure risks go unmanaged. Health physicists are the professionals who draw the line between beneficial use and harmful exposure.',
  },
  {
    title: 'What We Actually Do',
    body:
      'We audit your facilities, review your procedures, design or overhaul your radiation safety programs, train your staff, and interface with regulators on your behalf. Think of us as your on-call RSO team — without the full-time headcount.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-si-bg">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(52,211,153,0.07),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 page-hero">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">
              About Sitek Industries
            </p>
            <h1 className="font-sora font-extrabold text-5xl md:text-7xl text-si-text leading-[1.05] max-w-3xl mb-6">
              Built on{' '}
              <span className="gradient-text">precision.</span>
              <br />
              Driven by integrity.
            </h1>
            <p className="text-si-muted text-lg md:text-xl max-w-xl leading-relaxed">
              Sitek Industries was founded to fill a critical gap in health physics consulting: expert-grade guidance that is accessible, responsive, and built for long-term partnership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HEALTH PHYSICS EXPLAINER ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-3">
                The Discipline
              </p>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text">
                Health physics, demystified
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {physicsCards.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full hover:border-si-emerald/25 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-8 h-8 rounded-lg bg-si-emerald/10 flex items-center justify-center mb-5">
                    <span className="text-si-emerald font-sora font-bold text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-sora font-semibold text-si-text text-lg mb-4 leading-snug">{title}</h3>
                  <p className="text-si-muted text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">
                Why We Exist
              </p>
              <h2 className="font-sora font-extrabold text-4xl md:text-5xl text-si-text leading-tight mb-6">
                The consulting gap we were built to close
              </h2>
              <p className="text-si-muted text-sm leading-relaxed mb-4">
                Most facilities using ionizing radiation lack dedicated in-house health physicists. They rely on part-time RSOs who are stretched thin, or they bring in consultants who treat them like a ticket — not a client.
              </p>
              <p className="text-si-muted text-sm leading-relaxed">
                Sitek Industries was founded to be different. We embed ourselves in our clients' operations, understand their specific sources and workflows, and provide guidance that is practical — not just technically correct.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div
                className="relative rounded-2xl overflow-hidden glass-card p-10"
                style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.06), rgba(34,211,238,0.03))' }}
              >
                <div className="space-y-6">
                  {[
                    ['Founded', '2009'],
                    ['Headquarters', 'United States'],
                    ['Clients Served', '500+'],
                    ['States with Active Engagements', '30+'],
                    ['Specialty Areas', 'Medical · Industrial · Research · Nuclear'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-start border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                      <span className="text-si-dim text-xs uppercase tracking-wide">{label}</span>
                      <span className="text-si-text text-sm font-medium font-sora text-right max-w-[60%]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-pad border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-3">
                Core Values
              </p>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text">
                What guides every engagement
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-8 flex gap-6 hover:border-si-emerald/25 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-11 h-11 rounded-xl bg-si-emerald/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-si-emerald" />
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-si-text mb-2">{title}</h3>
                    <p className="text-si-muted text-sm leading-relaxed">{description}</p>
                  </div>
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
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">
              Work With Us
            </p>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-si-text mb-6">
              Ready to meet the team?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-sora text-sm text-si-bg hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
              >
                Meet the Team <ArrowRight size={15} />
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-si-text text-sm font-medium hover:border-si-emerald/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
