"use client"

import { useEffect, useState, useRef } from "react"

/**
 * Tracks which section id is currently most visible in the viewport,
 * for active navigation highlighting.
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "")
  const idsKey = sectionIds.join(",")
  const activeRef = useRef(active)
  activeRef.current = active

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return

    const observers: IntersectionObserver[] = []
    const visibility = new Map<string, number>()

    const ids = idsKey.split(",").filter(Boolean)

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
          })

          let best = ""
          let bestRatio = 0
          visibility.forEach((ratio, key) => {
            if (ratio > bestRatio) {
              bestRatio = ratio
              best = key
            }
          })
          if (best && best !== activeRef.current) {
            setActive(best)
          }
        },
        { threshold: [0.1, 0.3, 0.5], rootMargin: "-20% 0px -40% 0px" },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [idsKey])

  return active
}
