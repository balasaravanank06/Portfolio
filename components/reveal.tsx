"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  as?: ElementType
  /** How much of the element must be visible before revealing (0-1) */
  threshold?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    // Safety fallback: reveal element after delay + 800ms if observer misses it
    const fallbackTimer = setTimeout(() => {
      setVisible(true)
    }, delay + 800)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            clearTimeout(fallbackTimer)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: "0px 0px 50px 0px" },
    )

    observer.observe(node)

    return () => {
      clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [delay, threshold])

  return (
    <Tag
      ref={ref as never}
      data-reveal={visible ? "visible" : ""}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(className)}
    >
      {children}
    </Tag>
  )
}
