"use client"

import { useState } from "react"
import {
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  ShieldAlert,
  Terminal,
  Wrench,
  X,
} from "lucide-react"
import { cybersecurityLabs, type CyberLab } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

function LabDetailModal({
  lab,
  onClose,
}: {
  lab: CyberLab
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lab-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 shadow-2xl sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-muted/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold uppercase tracking-wider">
          <FlaskConical className="size-4" />
          Cybersecurity Laboratory
        </div>

        <h2 id="lab-modal-title" className="mt-2 text-2xl font-bold text-foreground">
          {lab.title}
        </h2>

        {lab.environment && (
          <div className="mt-2 inline-flex items-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-xs text-amber-400 font-medium">
            <ShieldAlert className="size-3.5" />
            Environment: {lab.environment}
          </div>
        )}

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {lab.description}
        </p>

        <div className="mt-6">
          <h3 className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
            <Wrench className="size-4 text-primary" />
            Tools Utilized
          </h3>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {lab.tools.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
            <Terminal className="size-4 text-primary" />
            Practical Activities & Verification
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {lab.activities.map((act) => (
              <li
                key={act}
                className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/30 p-2.5 text-xs text-foreground font-medium"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close Lab Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export function CyberLabs() {
  const [selectedLab, setSelectedLab] = useState<CyberLab | null>(null)

  return (
    <section id="labs" className="relative py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Hands-On Practice"
          title="Cybersecurity Labs & Practical Experience"
          subtitle="Practical security exercises, controlled vulnerability testing, network traffic analysis, and dependency auditing."
        />

        {/* Informational banner distinguishing labs from software projects */}
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-primary font-semibold">Note:</strong> The items below represent hands-on security laboratories and practical training exercises performed in controlled environments. They demonstrate hands-on testing, analysis, and security auditing methodologies.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cybersecurityLabs.map((lab, i) => (
            <Reveal key={lab.id} delay={i * 100} className="flex flex-col h-full">
              <div className="card-hover group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                      <FlaskConical className="size-5" />
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary font-semibold uppercase">
                      Lab {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {lab.title}
                  </h3>

                  {lab.environment && (
                    <p className="mt-1 font-mono text-xs text-amber-400/90 font-medium">
                      Env: {lab.environment}
                    </p>
                  )}

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {lab.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {lab.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between text-xs"
                    onClick={() => setSelectedLab(lab)}
                  >
                    <span>View Lab Activities</span>
                    <ExternalLink className="size-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedLab && (
        <LabDetailModal lab={selectedLab} onClose={() => setSelectedLab(null)} />
      )}
    </section>
  )
}
