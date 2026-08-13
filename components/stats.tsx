"use client"

import {
  Code2,
  FolderGit2,
  GraduationCap,
  Medal,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react"
import { stats } from "@/lib/portfolio-data"
import { useCountUp } from "@/hooks/use-count-up"
import { Reveal } from "@/components/reveal"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Terminal,
  Medal,
  FolderGit2,
  GraduationCap,
  ShieldCheck,
}

function StatCard({
  value,
  suffix,
  isDecimal,
  label,
  icon,
  delay,
}: {
  value: number
  suffix?: string
  isDecimal?: boolean
  label: string
  icon: string
  delay: number
}) {
  const { ref, value: current } = useCountUp(isDecimal ? Math.round(value * 100) : value)
  const Icon = iconMap[icon] ?? ShieldCheck

  const displayValue = isDecimal ? (current / 100).toFixed(2) : current.toString()

  return (
    <Reveal delay={delay}>
      <div className="card-hover group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
        <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/15" />
        <div className="flex items-center justify-between">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-110">
            <Icon className="size-5" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            Metric
          </span>
        </div>
        <div className="mt-4">
          <p
            ref={ref as React.RefObject<HTMLParagraphElement>}
            className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {displayValue}
            {suffix && <span className="text-gradient">{suffix}</span>}
          </p>
          <p className="mt-1 text-xs text-muted-foreground font-medium sm:text-sm">{label}</p>
        </div>
      </div>
    </Reveal>
  )
}

export function Stats() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
