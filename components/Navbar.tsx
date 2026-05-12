'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-si-bg/90 backdrop-blur-2xl border-b border-white/[0.06]'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-si-emerald to-si-cyan opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-si-emerald to-si-cyan flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-si-bg" />
            </div>
          </div>
          <span className="font-sora font-bold text-si-text text-base tracking-tight">
            Sitek <span className="text-si-emerald">Industries</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-si-emerald'
                  : 'text-si-muted hover:text-si-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/booking"
            className="relative px-5 py-2.5 rounded-full text-sm font-semibold font-sora text-si-bg transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #34D399 0%, #22D3EE 100%)',
            }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-si-muted hover:text-si-text transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden border-t border-white/[0.06] bg-si-bg/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-si-emerald bg-si-emerald/5'
                      : 'text-si-muted hover:text-si-text hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="mt-3 px-5 py-3 rounded-full text-center text-sm font-semibold font-sora text-si-bg"
                style={{ background: 'linear-gradient(135deg, #34D399 0%, #22D3EE 100%)' }}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
