'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1800
    const steps = 60
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease out cubic
      const progress = 1 - Math.pow(1 - step / steps, 3)
      const current = value * progress

      if (step >= steps) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(decimals > 0 ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value, decimals])

  return (
    <div ref={ref} className="text-center">
      <div className="font-sora font-bold text-4xl md:text-5xl gradient-text tabular-nums">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-si-muted text-xs mt-2 tracking-wide">{label}</div>
    </div>
  )
}
