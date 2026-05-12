'use client'

import { useState } from 'react'
import {
  Shield,
  ClipboardCheck,
  Activity,
  Search,
  AlertTriangle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Check,
  Loader2,
} from 'lucide-react'
import { submitBooking } from '@/app/actions/booking'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  { Icon: Shield, label: 'Radiation Safety Programs' },
  { Icon: ClipboardCheck, label: 'Regulatory Compliance' },
  { Icon: Activity, label: 'Dosimetry & Monitoring' },
  { Icon: Search, label: 'Facility Audit' },
  { Icon: AlertTriangle, label: 'Emergency Preparedness' },
  { Icon: BookOpen, label: 'Training & Education' },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM',
]

function Calendar({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (d: string) => void
}) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date()
    d.setDate(1)
    return d
  })

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthLabel = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const prev = () => setViewDate(new Date(year, month - 1, 1))
  const next = () => setViewDate(new Date(year, month + 1, 1))

  const fmt = (day: number) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`

  return (
    <div>
      {/* Month nav */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-si-muted hover:text-si-text hover:bg-white/[0.06] transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="font-sora font-semibold text-si-text text-sm">{monthLabel}</span>
        <button
          onClick={next}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-si-muted hover:text-si-text hover:bg-white/[0.06] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center text-si-dim text-xs py-2 font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-1">
        {/* Blank cells */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`b${i}`} />
        ))}
        {/* Day buttons */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const date = new Date(year, month, day)
          const isPast = date < today
          const isWeekend = date.getDay() === 0 || date.getDay() === 6
          const disabled = isPast || isWeekend
          const dateStr = fmt(day)
          const isSelected = selected === dateStr

          return (
            <button
              key={day}
              disabled={disabled}
              onClick={() => onSelect(dateStr)}
              className={`
                mx-auto w-9 h-9 rounded-xl text-sm transition-all duration-150
                ${disabled ? 'text-si-dim/40 cursor-not-allowed' : ''}
                ${isSelected
                  ? 'bg-gradient-to-br from-si-emerald to-si-cyan text-si-bg font-bold'
                  : !disabled
                  ? 'text-si-text hover:bg-white/[0.08] hover:text-si-emerald'
                  : ''}
              `}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const STEP_LABELS = ['Select Service', 'Choose Date & Time', 'Your Details']

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (!name.trim() || !email.trim()) {
      setError('Name and email are required.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const result = await submitBooking({ service, date, time, name, email, notes })
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

  const formatDate = (d: string) => {
    if (!d) return ''
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }

  if (success) {
    return (
      <div className="bg-si-bg min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-si-emerald/15 border border-si-emerald/30 flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-si-emerald" />
          </div>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-si-text mb-4">
            Consultation booked
          </h2>
          <p className="text-si-muted text-base leading-relaxed mb-2">
            We received your request for:
          </p>
          <div className="glass-card rounded-xl p-5 text-left space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-si-dim text-sm">Service</span>
              <span className="text-si-text text-sm font-medium">{service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-si-dim text-sm">Date</span>
              <span className="text-si-text text-sm font-medium">{formatDate(date)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-si-dim text-sm">Time</span>
              <span className="text-si-text text-sm font-medium">{time}</span>
            </div>
          </div>
          <p className="text-si-muted text-sm mb-8">
            A member of our team will confirm this appointment via email within one business day.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold font-sora text-sm text-si-bg"
            style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-si-bg min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(52,211,153,0.06),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 page-hero text-center">
          <ScrollReveal>
            <p className="text-si-emerald text-xs font-medium tracking-widest uppercase mb-4">
              Book a Consultation
            </p>
            <h1 className="font-sora font-extrabold text-4xl md:text-6xl text-si-text leading-[1.05] mb-4">
              Schedule your <span className="gradient-text">consultation</span>
            </h1>
            <p className="text-si-muted text-lg max-w-md mx-auto">
              Pick a service, choose a time, and we will confirm within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-6">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-12">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1
              const done = step > n
              const active = step === n
              return (
                <div key={label} className="flex items-center gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-sora transition-all duration-300 ${
                        done
                          ? 'bg-si-emerald text-si-bg'
                          : active
                          ? 'bg-si-emerald/20 border border-si-emerald text-si-emerald'
                          : 'bg-white/[0.05] border border-white/[0.1] text-si-dim'
                      }`}
                    >
                      {done ? <Check size={14} /> : n}
                    </div>
                    <span
                      className={`text-xs font-medium hidden md:block ${
                        active ? 'text-si-text' : done ? 'text-si-muted' : 'text-si-dim'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="flex-1 h-px mx-3 bg-white/[0.07]">
                      <div
                        className="h-px bg-si-emerald/50 transition-all duration-500"
                        style={{ width: step > n ? '100%' : '0%' }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* ── STEP 1: Service ── */}
          {step === 1 && (
            <div>
              <h2 className="font-sora font-bold text-2xl text-si-text mb-2">
                What service do you need?
              </h2>
              <p className="text-si-muted text-sm mb-8">
                Not sure? Select your closest match — we will discuss specifics on the call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map(({ Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => setService(label)}
                    className={`glass-card rounded-2xl p-6 flex items-center gap-4 text-left transition-all duration-200 ${
                      service === label
                        ? 'border-si-emerald/50 bg-si-emerald/[0.06]'
                        : 'hover:border-si-emerald/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        service === label ? 'bg-si-emerald/20' : 'bg-si-emerald/10'
                      }`}
                    >
                      <Icon size={18} className="text-si-emerald" />
                    </div>
                    <span
                      className={`font-sora font-medium text-sm ${
                        service === label ? 'text-si-text' : 'text-si-muted'
                      }`}
                    >
                      {label}
                    </span>
                    {service === label && (
                      <Check size={16} className="text-si-emerald ml-auto flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
              <button
                disabled={!service}
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-full font-semibold font-sora text-si-bg disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
              >
                Continue
              </button>
            </div>
          )}

          {/* ── STEP 2: Date + Time ── */}
          {step === 2 && (
            <div>
              <h2 className="font-sora font-bold text-2xl text-si-text mb-2">
                When works for you?
              </h2>
              <p className="text-si-muted text-sm mb-8">
                All times are Eastern. Monday–Friday only.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Calendar */}
                <div className="glass-card rounded-2xl p-6">
                  <Calendar selected={date} onSelect={setDate} />
                </div>

                {/* Time slots */}
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-si-text text-sm font-medium font-sora mb-4">
                    {date ? formatDate(date) : 'Select a date first'}
                  </p>
                  {date ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setTime(slot)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                            time === slot
                              ? 'bg-si-emerald/20 border border-si-emerald/50 text-si-emerald'
                              : 'bg-white/[0.04] border border-white/[0.06] text-si-muted hover:border-si-emerald/25 hover:text-si-text'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-32 text-si-dim text-sm">
                      Pick a date to see available times
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-full border border-white/[0.1] text-si-muted hover:text-si-text hover:border-white/20 transition-all text-sm font-medium flex items-center gap-2"
                >
                  <ChevronLeft size={15} /> Back
                </button>
                <button
                  disabled={!date || !time}
                  onClick={() => setStep(3)}
                  className="flex-1 py-4 rounded-full font-semibold font-sora text-si-bg disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Contact ── */}
          {step === 3 && (
            <div>
              <h2 className="font-sora font-bold text-2xl text-si-text mb-2">
                Your contact details
              </h2>
              <p className="text-si-muted text-sm mb-8">
                We will send a confirmation to the email provided.
              </p>

              {/* Booking summary */}
              <div className="glass-card rounded-2xl p-5 mb-8 space-y-2.5">
                {[
                  ['Service', service],
                  ['Date', formatDate(date)],
                  ['Time', time],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-si-dim text-sm">{label}</span>
                    <span className="text-si-text text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-si-muted text-xs font-medium mb-2 uppercase tracking-wide">
                    Full Name *
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@facility.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-si-text text-sm placeholder:text-si-dim focus:outline-none focus:border-si-emerald/50 focus:bg-si-emerald/[0.03] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-si-muted text-xs font-medium mb-2 uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Brief description of your situation or specific questions..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-si-text text-sm placeholder:text-si-dim focus:outline-none focus:border-si-emerald/50 focus:bg-si-emerald/[0.03] transition-all resize-none"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm mb-4 px-4 py-3 rounded-xl bg-red-400/10 border border-red-400/20">
                  {error}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-4 rounded-full border border-white/[0.1] text-si-muted hover:text-si-text hover:border-white/20 transition-all text-sm font-medium flex items-center gap-2"
                >
                  <ChevronLeft size={15} /> Back
                </button>
                <button
                  disabled={loading || !name.trim() || !email.trim()}
                  onClick={handleSubmit}
                  className="flex-1 py-4 rounded-full font-semibold font-sora text-si-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #34D399, #22D3EE)' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
