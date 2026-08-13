"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      setProgress(100)
      const t1 = setTimeout(() => setDone(true), 200)
      const t2 = setTimeout(() => setHidden(true), 600)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }

    let raf: number
    const start = performance.now()
    const duration = 900

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setDone(true)
          setTimeout(() => setHidden(true), 500)
        }, 200)
      }
    }
    raf = requestAnimationFrame(tick)

    // Safety fallback: Never stay mounted longer than 2.5 seconds
    const fallbackTimer = setTimeout(() => {
      setProgress(100)
      setDone(true)
      setHidden(true)
    }, 2500)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(fallbackTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex size-24 items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,transparent,oklch(0.68_0.15_235_/_0.7),transparent_60%)] slow-spin" />
          <div className="absolute inset-[3px] rounded-2xl bg-background" />
          <span className="relative font-mono text-3xl font-bold tracking-tight text-gradient">
            BK
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="h-px w-52 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.64_0.17_275)] transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> initializing portfolio... {progress}%
          </p>
        </div>
      </div>
    </div>
  )
}
