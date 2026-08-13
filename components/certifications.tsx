"use client"

import {
  Award,
  Binary,
  Bot,
  Cloud,
  Code2,
  Coffee,
  ExternalLink,
  FolderDown,
  type LucideIcon,
} from "lucide-react"
import { CERTIFICATES_DRIVE_URL, certifications } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, LucideIcon> = {
  Binary,
  Coffee,
  Bot,
  Code2,
  Cloud,
  Award,
}

export function Certifications() {
  return (
    <section id="certificates" className="relative py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dots absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Continuous Learning"
          title="CERTIFICATIONS"
          subtitle="Professional certifications in cybersecurity, programming, cloud computing, and software development."
        />

        {/* Primary View All Certificates button above the section */}
        <div className="mt-8 flex justify-center">
          <Reveal>
            <Button
              size="lg"
              className="h-11 px-6 shadow-lg glow-border"
              render={
                <a
                  href={CERTIFICATES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <FolderDown className="size-4" />
              View All Certificates
              <ExternalLink className="size-3.5 opacity-70" />
            </Button>
          </Reveal>
        </div>

        {/* Certificates Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] ?? Award

            return (
              <Reveal key={cert.title} delay={i * 90} className="flex flex-col h-full">
                <div className="card-hover group flex h-full flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                        <Icon className="size-6" />
                      </span>
                      <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-xs font-medium text-muted-foreground">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="mt-5 text-pretty text-base font-semibold leading-snug text-foreground">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs text-primary font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full justify-center gap-2"
                      render={
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <ExternalLink className="size-3.5" />
                      View Certificate
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
