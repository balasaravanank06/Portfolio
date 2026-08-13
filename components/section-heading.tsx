import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-6 bg-primary/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed text-muted-foreground",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
