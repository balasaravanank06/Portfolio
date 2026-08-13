"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { Download, ExternalLink, FileText, X } from "lucide-react"
import { personal } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

type ResumeContextValue = {
  open: () => void
  close: () => void
  resumeUrl: string
  isPdfAvailable: boolean
  download: () => void
}

const ResumeContext = createContext<ResumeContextValue | null>(null)

export function useResume() {
  const ctx = useContext(ResumeContext)
  if (!ctx) throw new Error("useResume must be used within <ResumeProvider>")
  return ctx
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [resumeUrl, setResumeUrl] = useState(personal.RESUME_REPO_URL)
  const [isPdfAvailable, setIsPdfAvailable] = useState(false)

  useEffect(() => {
    // Check if local PDF is present without throwing unhandled dev server errors
    let isSubscribed = true
    fetch(personal.resumePath, { method: "HEAD" })
      .then((res) => {
        if (isSubscribed && res.ok) {
          setResumeUrl(personal.resumePath)
          setIsPdfAvailable(true)
        }
      })
      .catch(() => {
        // Fallback to GitHub Resume Repo silently
        if (isSubscribed) {
          setResumeUrl(personal.RESUME_REPO_URL)
          setIsPdfAvailable(false)
        }
      })

    return () => {
      isSubscribed = false
    }
  }, [])

  const open = useCallback(() => {
    if (isPdfAvailable) {
      setIsOpen(true)
    } else {
      window.open(resumeUrl, "_blank", "noopener,noreferrer")
    }
  }, [isPdfAvailable, resumeUrl])

  const close = useCallback(() => setIsOpen(false), [])

  const download = useCallback(() => {
    if (isPdfAvailable) {
      const link = document.createElement("a")
      link.href = resumeUrl
      link.download = "Balasaravanan-K-Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(resumeUrl, "_blank", "noopener,noreferrer")
    }
  }, [isPdfAvailable, resumeUrl])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  return (
    <ResumeContext.Provider value={{ open, close, resumeUrl, isPdfAvailable, download }}>
      {children}
      {isOpen && <ResumeModal onClose={close} />}
    </ResumeContext.Provider>
  )
}

function ResumeModal({ onClose }: { onClose: () => void }) {
  const { resumeUrl, download } = useResume()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop with smooth fade-in */}
      <button
        aria-label="Close resume viewer"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-background/85 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Panel with smooth slide and zoom animation */}
      <div className="relative z-10 flex h-full max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card/75 backdrop-blur-xl shadow-2xl glow-border animate-in fade-in zoom-in-95 duration-300">
        <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6 bg-card/50">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20">
              <FileText className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Balasaravanan K — Resume</p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                <span className="font-medium text-primary">Resume Profile</span>
                <span>•</span>
                <span>Professional Profile</span>
                <span>•</span>
                <span>Updated {personal.resumeUpdated}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              variant="outline"
              render={
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              <ExternalLink className="size-4" />
              <span className="hidden sm:inline">Open Tab</span>
            </Button>
            <Button
              size="sm"
              onClick={download}
              className="relative overflow-hidden group/btn"
            >
              <Download className="size-4 group-hover/btn:translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Download</span>
            </Button>
            <Button size="icon-sm" variant="ghost" onClick={onClose} aria-label="Close">
              <X className="size-4" />
            </Button>
          </div>
        </header>

        <div className="relative flex-1 bg-muted/10">
          <object
            data={`${resumeUrl}#toolbar=1&view=FitH`}
            type="application/pdf"
            className="h-full w-full"
            aria-label="Resume PDF"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <FileText className="size-10 text-muted-foreground animate-bounce" />
              <div className="space-y-1">
                <p className="text-base font-semibold">Resume Profile Link</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  View or download the official resume directly from GitHub.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  render={
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <ExternalLink className="size-4" />
                  Open Resume Repo
                </Button>
                <Button
                  variant="outline"
                  onClick={download}
                >
                  <Download className="size-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
