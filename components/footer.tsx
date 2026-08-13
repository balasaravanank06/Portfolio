"use client"

import { Mail, FileText } from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import { personal } from "@/lib/portfolio-data"
import { useResume } from "@/components/resume-viewer"

export function Footer() {
  const year = new Date().getFullYear()
  const { open: openResume } = useResume()

  const socials = [
    { icon: Github, label: "GitHub", href: personal.GITHUB_PROFILE_URL },
    { icon: Linkedin, label: "LinkedIn", href: personal.LINKEDIN_PROFILE_URL },
    { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
  ]

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">Bala</span>
            <span className="text-primary">.</span>
          </button>
          <p className="text-sm text-muted-foreground">
            Designed &amp; Built by Balasaravanan K
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, label, href }) => (
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
          <button
            onClick={openResume}
            aria-label="Resume"
            title="View Resume"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/30 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          >
            <FileText className="size-5" />
          </button>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {year} Balasaravanan K. All rights reserved.</p>
          <p>Built with Next.js and deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
