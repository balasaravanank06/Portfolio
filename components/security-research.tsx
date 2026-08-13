"use client"

import { useState } from "react"
import {
  AlertTriangle,
  BrainCircuit,
  Bug,
  Eye,
  FileCode,
  Globe,
  Network,
  SearchCheck,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react"
import { securityResearchTopics, type SecurityResearchTopic } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const iconMap: Record<string, LucideIcon> = {
  Bug,
  Target,
  Globe,
  Network,
  SearchCheck,
  AlertTriangle,
  Eye,
  FileCode,
  BrainCircuit,
  ShieldCheck,
}

export function SecurityResearch() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null)

  return (
    <section id="research" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Continuous Learning & Focus Areas"
          title="Security Research"
          subtitle="Areas of ongoing study, practical exploration, and methodology development in cybersecurity."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityResearchTopics.map((topic, i) => {
            const Icon = iconMap[topic.icon] ?? ShieldCheck
            const isActive = activeTopic === topic.title

            return (
              <Reveal key={topic.title} delay={(i % 3) * 70} className="flex flex-col h-full">
                <div
                  onClick={() => setActiveTopic(isActive ? null : topic.title)}
                  className={`card-hover group relative flex h-full flex-col cursor-pointer overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                      : "border-border bg-card/60 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-11 items-center justify-center rounded-xl transition-transform duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground scale-105"
                          : "bg-primary/12 text-primary group-hover:scale-110"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-primary uppercase">
                      {topic.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-primary">
                    <span>{isActive ? "Active Focus" : "Explore Focus"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
