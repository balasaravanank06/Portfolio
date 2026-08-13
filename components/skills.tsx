"use client"

import {
  Brain,
  Code2,
  Cpu,
  Database,
  Layout,
  Lock,
  Server,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { skillCategories } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  Lock,
  Cpu,
  Brain,
}

type SkillCardProps = {
  title: string
  subtitle?: string
  icon: string
  skills: string[]
  isCore: boolean
}

function SkillCard({ title, subtitle, icon, skills, isCore }: SkillCardProps) {
  const Icon = iconMap[icon] ?? ShieldCheck

  return (
    <div
      className={[
        // flex flex-col h-full → card fills the grid cell height
        // so ALL cards in the same row share the tallest card's height
        "card-hover group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300",
        isCore
          ? "border border-[oklch(0.52_0.12_235/0.55)] bg-[oklch(0.155_0.022_264)] shadow-[0_0_24px_oklch(0.68_0.15_235/0.1)] hover:border-[oklch(0.52_0.12_235/0.75)] hover:shadow-[0_0_36px_oklch(0.68_0.15_235/0.18)]"
          : "border border-white/[0.08] bg-[oklch(0.155_0.022_264)] hover:border-white/[0.15]",
      ].join(" ")}
    >
      {/* ── Header: icon | title + subtitle | badge ── */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-start gap-3">
          {/* Icon box */}
          <span
            className={[
              "flex size-[38px] shrink-0 items-center justify-center rounded-xl transition-all duration-300",
              isCore
                ? "bg-[oklch(0.25_0.04_235)] text-[oklch(0.72_0.14_220)] group-hover:scale-105"
                : "bg-[oklch(0.22_0.02_264)] text-[oklch(0.60_0.02_256)] group-hover:text-[oklch(0.72_0.14_220)]",
            ].join(" ")}
          >
            <Icon className="size-[18px]" />
          </span>

          {/* Title + Subtitle */}
          <div className="min-w-0">
            <h3
              className="text-[15px] font-bold leading-snug text-white"
              style={{ wordBreak: "break-word" }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className="mt-1 font-mono text-[11px] leading-snug text-[oklch(0.55_0.02_256)]"
                style={{ wordBreak: "break-word" }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Badge */}
        <span
          className={[
            "shrink-0 self-start whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide",
            isCore
              ? "border-[oklch(0.52_0.12_235/0.5)] bg-[oklch(0.22_0.05_235/0.4)] text-[oklch(0.72_0.14_220)]"
              : "border-white/[0.12] bg-white/[0.04] text-[oklch(0.55_0.02_256)]",
          ].join(" ")}
        >
          {isCore ? "Core Security" : "Supporting"}
        </span>
      </div>

      {/* ── Skill tags — top-aligned, wrap naturally ── */}
      <ul className="mt-5 flex flex-wrap content-start items-start gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            title={
              isCore
                ? `${skill} — Core Cybersecurity Domain / Tool`
                : `${skill} — Supporting Development Skill for Security Engineering`
            }
            className={[
              "rounded-lg border px-2.5 py-1 text-xs font-medium leading-snug",
              "transition-all duration-200 hover:-translate-y-0.5",
              isCore
                ? "border-[oklch(0.52_0.12_235/0.40)] bg-[oklch(0.20_0.03_235/0.45)] text-[oklch(0.88_0.02_256)] hover:border-[oklch(0.52_0.12_235/0.65)] hover:bg-[oklch(0.22_0.04_235/0.55)]"
                : "border-white/[0.14] bg-white/[0.05] text-[oklch(0.88_0.02_256)] hover:border-white/[0.28] hover:bg-white/[0.09]",
            ].join(" ")}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Security & Engineering Stack"
          title="Skills & Technical Arsenal"
          subtitle="Core cybersecurity domains, testing tools, machine learning, and supporting software development skills."
        />

        {/*
          Grid alignment chain:
          grid (stretch by default)
            → Reveal: "flex flex-col h-full"  ← stretches to fill grid cell
              → SkillCard div: "flex flex-col h-full"  ← fills Reveal wrapper
        */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={(i % 3) * 80}
              className="flex flex-col h-full"
            >
              <SkillCard
                title={cat.title}
                subtitle={cat.subtitle}
                icon={cat.icon}
                skills={cat.skills}
                isCore={i < 3}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
