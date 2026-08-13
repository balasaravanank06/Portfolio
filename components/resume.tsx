"use client"

import { Download, Eye, FileText, Clock, ExternalLink } from "lucide-react"
import { Github } from "@/components/brand-icons"
import { personal } from "@/lib/portfolio-data"
import { useResume } from "@/components/resume-viewer"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

export function Resume() {
  const { open: openResume, download: downloadResume } = useResume()

  return (
    <section id="resume" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Security Profile Documentation"
          title="Resume & Repository"
          subtitle="Explore my qualifications, security coursework, technical arsenal, projects, and academic background."
        />

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border glass glow-border p-6 sm:p-10">
            <div
              aria-hidden
              className="ambient-blob absolute -right-16 -top-16 size-56 rounded-full bg-primary/12 blur-3xl"
            />
            <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
              <div className="flex flex-col items-center gap-5 md:flex-row md:items-center flex-1">
                <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <FileText className="size-9" />
                </span>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    Balasaravanan K — Security Engineer Resume
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground max-w-md">
                    Access my official resume detailing my specialization in Cyber Security at Sri Eshwar College of Engineering, security research focus, developed projects, and academic performance.
                  </p>
                  <p className="mt-3.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/40 px-2.5 py-1 rounded-md border border-border/50 font-mono">
                    <Clock className="size-3.5 text-primary animate-pulse" />
                    Last updated {personal.resumeUpdated}
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center md:w-auto md:flex-col lg:flex-row">
                <Button size="lg" className="h-11 px-5 text-xs" onClick={openResume}>
                  <Eye className="size-4" />
                  View Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 px-5 text-xs"
                  onClick={downloadResume}
                >
                  <Download className="size-4" />
                  Download PDF
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 px-5 text-xs"
                  render={
                    <a href={personal.RESUME_REPO_URL} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <Github className="size-4" />
                  Resume Repo
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
