import Link from "next/link"
import { ShieldAlert, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
        <ShieldAlert className="size-8" />
      </div>
      <h1 className="mt-6 font-mono text-4xl font-bold tracking-tight text-foreground">
        404 — Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The security resource or endpoint you requested could not be located.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
      >
        <ArrowLeft className="size-4" />
        Return to Home
      </Link>
    </div>
  )
}
