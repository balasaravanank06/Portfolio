"use client"

import {
  CalendarClock,
  Download,
  GraduationCap,
  MapPin,
  School,
  ShieldCheck,
  Target,
  Award,
} from "lucide-react"
import { aboutHighlights, aboutParagraphs, personal } from "@/lib/portfolio-data"
import { useResume } from "@/components/resume-viewer"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, typeof ShieldCheck> = {
  "Primary Role": ShieldCheck,
  Specialization: Target,
  Degree: GraduationCap,
  College: School,
  CGPA: Award,
  Graduation: CalendarClock,
  Location: MapPin,
}

export function About() {
  const { download: downloadResume } = useResume()

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Security Engineer Profile" title="About Me" align="left" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: narrative */}
          <Reveal className="flex flex-col gap-5">
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}

            {/* Career Objective Highlight Card */}
            <div className="mt-2 rounded-2xl border border-primary/20 bg-primary/5 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                <Target className="size-4" />
                Career Objective
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                {personal.objective}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button className="h-11 px-5" onClick={downloadResume}>
                <Download className="size-4" />
                Download Resume
              </Button>
            </div>
          </Reveal>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {aboutHighlights.map((item, i) => {
              const Icon = iconMap[item.label] ?? MapPin
              return (
                <Reveal key={item.label} delay={i * 70}>
                  <div className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-pretty text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
