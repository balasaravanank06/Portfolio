"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, ShieldCheck, Sparkles, Workflow, X } from "lucide-react"
import { Github } from "@/components/brand-icons"
import {
  projectFilters,
  projects,
  type Project,
  personal,
} from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Projects() {
  const [filter, setFilter] = useState("All")
  const [active, setActive] = useState<Project | null>(null)

  const handleFilterClick = (f: string) => {
    setFilter(f)
    if (f === "Labs") {
      const labsElement = document.getElementById("labs")
      if (labsElement) {
        labsElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const filtered =
    filter === "All" || filter === "Labs"
      ? projects
      : projects.filter((p) => p.filters.includes(filter))

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Developed Projects & Security Implementations"
          subtitle="Software applications and cybersecurity projects built with Java, Python, Machine Learning, and web technologies."
        />

        {/* Filters */}
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterClick(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                filter === f
                  ? "border-primary/40 bg-primary/15 text-primary shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                  : "border-border bg-muted/30 text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {f === "Labs" ? "Labs (Go to Section)" : f}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={(i % 3) * 90}
              onView={() => setActive(project)}
            />
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-5"
            render={
              <a href={personal.GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <Github className="size-4" />
            Explore GitHub Repositories
          </Button>
        </Reveal>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ProjectCard({
  project,
  delay,
  onView,
}: {
  project: Project
  delay: number
  onView: () => void
}) {
  const isPlaceholderRepo = project.repoUrl === "#"

  return (
    <Reveal delay={delay} className="flex flex-col h-full">
      <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
        {/* Image */}
        <button
          onClick={onView}
          className="relative aspect-[16/10] w-full overflow-hidden text-left"
          aria-label={`View details for ${project.title}`}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {project.isCybersecurity ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-primary/40 bg-background/80 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur">
              <ShieldCheck className="size-3.5" />
              Cybersecurity
            </span>
          ) : project.featured ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
              <Sparkles className="size-3" />
              Featured
            </span>
          ) : null}

          <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
        </button>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            {project.year && (
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            )}
          </div>

          <h3 className="mt-2 text-pretty text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {(project.badges || project.technologies).slice(0, 5).map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
            {(project.badges || project.technologies).length > 5 && (
              <li className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                +{(project.badges || project.technologies).length - 5}
              </li>
            )}
          </ul>

          <div className="mt-auto pt-5 flex items-center justify-between">
            {isPlaceholderRepo ? (
              <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground/80">
                <Github className="size-3.5" />
                GitHub (Placeholder)
              </span>
            ) : (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-3.5" />
                GitHub Repository
              </a>
            )}

            <button
              onClick={onView}
              className="text-xs font-semibold text-primary transition-colors hover:text-foreground"
            >
              View Details →
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const isPlaceholderRepo = project.repoUrl === "#"

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
    >
      <button
        aria-label="Close details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-background/80 backdrop-blur-sm animate-in fade-in"
      />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border glass glow-border animate-in fade-in slide-in-from-bottom-4 duration-300 sm:rounded-2xl sm:zoom-in-95">
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:text-primary"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            {project.year && (
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            )}
          </div>

          <h3 className="mt-2 text-2xl font-bold text-foreground">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Key Badges */}
          {project.badges && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-primary"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* Incident Response / Security Workflow if available */}
          {project.workflow && (
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                <Workflow className="size-4" />
                Incident Response Workflow Phases
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {project.workflow.map((step, idx) => (
                  <span key={step} className="flex items-center gap-1">
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary font-medium">
                      {idx + 1}. {step}
                    </span>
                    {idx < (project.workflow?.length ?? 0) - 1 && (
                      <span className="text-muted-foreground text-xs font-mono">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Key Features & Capabilities
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-foreground font-medium">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Technologies & Frameworks
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {isPlaceholderRepo ? (
              <Button disabled variant="outline">
                <Github className="size-4" />
                GitHub Repository
              </Button>
            ) : (
              <Button
                render={<a href={project.repoUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <Github className="size-4" />
                GitHub Repository
              </Button>
            )}

            {project.demoUrl && (
              <Button
                variant="outline"
                render={<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <ExternalLink className="size-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
