"use client"

import { useEffect, useState } from "react"
import { ArrowRight, FileText, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import {
  floatingTags,
  heroDescription,
  heroRoles,
  personal,
} from "@/lib/portfolio-data"
import { useResume } from "@/components/resume-viewer"
import { Button } from "@/components/ui/button"

function useTypedRoles(roles: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setText(roles[index])
      const t = setTimeout(() => setIndex((i) => (i + 1) % roles.length), 2200)
      return () => clearTimeout(t)
    }

    const current = roles[index]
    let delay = deleting ? 45 : 90

    if (!deleting && text === current) {
      delay = 1500
    } else if (deleting && text === "") {
      delay = 350
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === "") {
        setDeleting(false)
        setIndex((i) => (i + 1) % roles.length)
      } else {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, roles])

  return text
}

const codeLines = [
  { indent: 0, tokens: [{ t: "const ", c: "text-[oklch(0.64_0.17_275)]" }, { t: "securityEngineer", c: "text-foreground" }, { t: " = {", c: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ t: "name", c: "text-[oklch(0.78_0.13_200)]" }, { t: ": ", c: "text-muted-foreground" }, { t: '"Balasaravanan K"', c: "text-primary" }, { t: ",", c: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ t: "role", c: "text-[oklch(0.78_0.13_200)]" }, { t: ": ", c: "text-muted-foreground" }, { t: '"Security Engineer"', c: "text-primary" }, { t: ",", c: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ t: "specialization", c: "text-[oklch(0.78_0.13_200)]" }, { t: ": ", c: "text-muted-foreground" }, { t: '"Cyber Security"', c: "text-primary" }, { t: ",", c: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ t: "coreFocus", c: "text-[oklch(0.78_0.13_200)]" }, { t: ": [", c: "text-muted-foreground" }, { t: '"AppSec"', c: "text-primary" }, { t: ", ", c: "text-muted-foreground" }, { t: '"PenTesting"', c: "text-primary" }, { t: "],", c: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ t: "supportingDev", c: "text-[oklch(0.78_0.13_200)]" }, { t: ": [", c: "text-muted-foreground" }, { t: '"Java"', c: "text-primary" }, { t: ", ", c: "text-muted-foreground" }, { t: '"Python"', c: "text-primary" }, { t: "]", c: "text-muted-foreground" }] },
  { indent: 0, tokens: [{ t: "}", c: "text-muted-foreground" }] },
]

export function Hero() {
  const typed = useTypedRoles(heroRoles)
  const { open: openResume } = useResume()

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="ambient-blob absolute -left-20 top-10 size-[420px] rounded-full bg-primary/12 blur-[120px]" />
        <div
          className="ambient-blob absolute -right-24 bottom-0 size-[460px] rounded-full bg-[oklch(0.62_0.17_268)]/12 blur-[130px]"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left content */}
        <div className="flex flex-col items-start gap-6">
          <div
            data-reveal="visible"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {personal.availability}
          </div>

          <div className="space-y-3">
            <p className="font-mono text-sm text-primary">Hello, I&apos;m</p>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              BALASARAVANAN <span className="text-gradient">K</span>
            </h1>
            <p className="flex items-center gap-1 font-mono text-lg text-muted-foreground sm:text-xl">
              <span className="text-primary">&gt;</span>
              <span className="text-foreground">{typed}</span>
              <span className="caret-blink text-primary">_</span>
            </p>
          </div>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            {heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 px-5 text-sm"
              onClick={openResume}
            >
              <FileText className="size-4" />
              View Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5 text-sm"
              render={<a href="#projects" />}
            >
              Explore Projects
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            {[
              { icon: Github, label: "GitHub", href: personal.GITHUB_PROFILE_URL },
              { icon: Linkedin, label: "LinkedIn", href: personal.LINKEDIN_PROFILE_URL },
              { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/30 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right visual: terminal + floating tags */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto max-w-md">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-transparent to-[oklch(0.62_0.17_268)]/15 blur-2xl" />

            {/* Terminal window */}
            <div className="relative overflow-hidden rounded-2xl border border-border glass glow-border">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-[oklch(0.62_0.2_25)]/80" />
                <span className="size-3 rounded-full bg-[oklch(0.8_0.13_85)]/80" />
                <span className="size-3 rounded-full bg-[oklch(0.72_0.15_150)]/80" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  security-engineer.ts
                </span>
              </div>
              <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-4 select-none text-right text-muted-foreground/40">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating tech tags */}
            {floatingTags.map((tag, i) => {
              const positions = [
                "-left-10 top-4",
                "-right-8 top-28",
                "-left-8 bottom-16",
                "right-2 -bottom-5",
                "-right-14 bottom-44",
              ]
              return (
                <span
                  key={tag}
                  className={`tag-float absolute ${positions[i]} rounded-full border border-border glass px-3 py-1.5 text-xs font-medium text-foreground shadow-lg`}
                  style={
                    {
                      "--float-dur": `${4 + i * 0.6}s`,
                      "--float-delay": `${i * 0.4}s`,
                    } as React.CSSProperties
                  }
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-max flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-8 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="scroll-wheel-dot size-1 rounded-full bg-primary" />
        </span>
      </a>
    </section>
  )
}
