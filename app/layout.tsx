import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GrainOverlay from '@/components/GrainOverlay'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sitek Industries | Health Physics Consulting',
    template: '%s | Sitek Industries',
  },
  description:
    'Premier health physics and radiation safety consulting. Regulatory compliance, dosimetry monitoring, facility audits, and emergency preparedness — delivered with precision.',
  keywords: [
    'health physics',
    'radiation safety',
    'regulatory compliance',
    'dosimetry',
    'radiation protection',
    'NRC compliance',
    'facility audit',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sitek Industries',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll>
          <GrainOverlay />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
