"use client"

import { GraduationCap } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* Timeline line */}
          <span className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[11px]" />

          <div className="flex flex-col gap-8">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 120}>
                <div className="relative">
                  {/* Node */}
                  <span
                    className={cn(
                      "absolute -left-8 top-1.5 flex size-4 items-center justify-center rounded-full border-2 sm:-left-10 sm:size-5",
                      item.current
                        ? "border-primary bg-primary/20"
                        : "border-border bg-card",
                    )}
                  >
                    {item.current && (
                      <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                    )}
                  </span>

                  <div
                    className={cn(
                      "card-hover rounded-2xl border p-5 sm:p-6",
                      item.current
                        ? "border-primary/30 bg-primary/[0.06]"
                        : "border-border bg-card/60",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        <GraduationCap className="size-3" />
                        {item.level}
                      </span>
                      {item.current && (
                        <span className="rounded-full border border-primary/30 bg-primary/12 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                          Current
                        </span>
                      )}
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mt-3 text-pretty text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    {item.specialization && (
                      <p className="text-sm text-primary">{item.specialization}</p>
                    )}
                    <p className="mt-1 text-pretty text-sm text-muted-foreground">
                      {item.institution}
                    </p>

                    <div className="mt-4 inline-flex items-baseline gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {item.scoreLabel}
                      </span>
                      <span className="font-mono text-base font-bold text-gradient">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
