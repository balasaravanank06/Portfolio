"use client"

import { useEffect, useRef, useState } from "react"

/**
 * A soft glow that follows the cursor. Desktop + fine-pointer only,
 * and disabled for reduced-motion users.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const wideScreen = window.matchMedia("(min-width: 768px)").matches
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || !wideScreen || prefersReduced) return

    setEnabled(true)

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`
        }
      })
    }
    window.addEventListener("mousemove", onMove)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 size-[500px] rounded-full opacity-60 blur-[100px] will-change-transform"
      style={{
        background:
          "radial-gradient(circle, oklch(0.68 0.15 235 / 0.18), transparent 65%)",
      }}
    />
  )
}
