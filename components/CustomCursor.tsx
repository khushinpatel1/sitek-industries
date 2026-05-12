'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    setVisible(true)

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0)`
      }
      rafId.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => setHovering(true)
    const onLeaveLink = () => setHovering(false)

    const addLinkListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    window.addEventListener('mousemove', onMove)
    addLinkListeners()
    rafId.current = requestAnimationFrame(animate)

    const observer = new MutationObserver(addLinkListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      observer.disconnect()
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full bg-si-emerald transition-transform"
        style={{
          width: hovering ? 10 : 6,
          height: hovering ? 10 : 6,
          willChange: 'transform',
          transitionProperty: 'width, height',
          transitionDuration: '200ms',
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-si-emerald/40 transition-all duration-200"
        style={{
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          willChange: 'transform',
        }}
      />
    </>
  )
}
