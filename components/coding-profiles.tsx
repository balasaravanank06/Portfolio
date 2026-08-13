"use client"

import { Code2, ExternalLink, Trophy } from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import { codingProfiles } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ComponentType<any>> = {
  Code2,
  Trophy,
  Github,
  Linkedin,
}

const accentMap: Record<string, string> = {
  cyan: "oklch(0.78 0.13 200)",
  indigo: "oklch(0.62 0.17 268)",
  emerald: "oklch(0.72 0.15 150)",
  blue: "oklch(0.68 0.15 235)",
}

function isPlaceholder(url: string) {
  return url.includes("PROFILE_URL")
}

export function CodingProfiles() {
  return (
    <section id="coding" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Problem solving"
          title="Coding Journey"
          subtitle="Sharpening my algorithmic thinking, one problem at a time."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {codingProfiles.map((profile, i) => {
            const Icon = iconMap[profile.icon] ?? Code2
            const accent = accentMap[profile.accent] ?? accentMap.cyan
            const placeholder = isPlaceholder(profile.url)
            return (
              <Reveal key={profile.name} delay={i * 120} className="flex flex-col h-full">
                <div
                  className="card-hover group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6"
                  style={{ ["--accent" as string]: accent }}
                >
                  {/* Ambient accent glow */}
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 size-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: accent }}
                  />
                  <div className="bg-dots absolute inset-0 opacity-[0.15]" aria-hidden />

                  <div className="relative flex items-center gap-3">
                    <span
                      className="flex size-12 items-center justify-center rounded-xl"
                      style={{ background: `color-mix(in oklch, ${accent} 16%, transparent)`, color: accent }}
                    >
                      <Icon className="size-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{profile.name}</h3>
                  </div>

                  <div className="relative mt-6 grid grid-cols-2 gap-3">
                    {profile.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border bg-background/40 p-4"
                      >
                        <p
                          className="font-mono text-2xl font-bold"
                          style={{ color: accent }}
                        >
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-6">
                    <Button
                      variant="outline"
                      className="w-full"
                      disabled={placeholder}
                      render={
                        placeholder ? undefined : (
                          <a href={profile.url} target="_blank" rel="noopener noreferrer" />
                        )
                      }
                    >
                      <ExternalLink className="size-4" />
                      {placeholder ? "Add Profile Link" : "Visit Profile"}
                    </Button>
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
