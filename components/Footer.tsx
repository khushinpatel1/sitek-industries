import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/booking', label: 'Book Consultation' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Radiation Safety Programs',
  'Regulatory Compliance',
  'Dosimetry & Monitoring',
  'Facility Audits',
  'Emergency Preparedness',
  'Training & Education',
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-si-bg">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand col */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-si-emerald to-si-cyan flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-si-bg" />
              </div>
              <span className="font-sora font-bold text-si-text text-base">
                Sitek <span className="text-si-emerald">Industries</span>
              </span>
            </Link>
            <p className="text-si-muted text-sm leading-relaxed max-w-sm">
              Premier health physics consulting. Protecting workers, the public, and the environment through precision radiation safety programs and expert regulatory guidance.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-si-emerald animate-pulse" />
              <span className="text-si-dim text-xs">Currently accepting new clients</span>
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3">
            <h4 className="text-si-text text-xs font-semibold font-sora uppercase tracking-widest mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-si-muted hover:text-si-emerald text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col */}
          <div className="md:col-span-4">
            <h4 className="text-si-text text-xs font-semibold font-sora uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-si-muted hover:text-si-emerald text-sm transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-si-dim text-xs">
            © {new Date().getFullYear()} Sitek Industries. All rights reserved.
          </p>
          <p className="text-si-dim text-xs">
            Health Physics Consulting · Regulatory Compliance · Dosimetry
          </p>
        </div>
      </div>
    </footer>
  )
}
