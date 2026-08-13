"use client"

import { useEffect, useState } from "react"
import { FileText, Menu, X } from "lucide-react"
import { navLinks } from "@/lib/portfolio-data"
import { useActiveSection } from "@/hooks/use-active-section"
import { useResume } from "@/components/resume-viewer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sectionIds = navLinks.map((l) => l.href.replace("#", ""))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const { open: openResume } = useResume()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.getElementById(href.replace("#", ""))
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[95] transition-all duration-300",
        scrolled ? "py-2.5" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-5",
          scrolled
            ? "glass border border-border py-2.5 shadow-lg"
            : "border border-transparent py-2",
        )}
        style={{ width: "calc(100% - 1.5rem)" }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="group flex items-center gap-2 rounded-full font-mono text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="text-gradient">Bala</span>
          <span className="text-primary">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            const isActive = active === id
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-primary/12 ring-1 ring-primary/25" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden sm:inline-flex" onClick={openResume}>
            <FileText className="size-4" />
            Resume
          </Button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[-1] lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-background/85 backdrop-blur-md transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-20 rounded-2xl border border-border glass p-4 transition-all duration-300",
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          )}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "")
              const isActive = active === id
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{ transitionDelay: menuOpen ? `${i * 30}ms` : "0ms" }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary/12 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <span className="font-mono text-xs text-primary/60">
                      0{i + 1}
                    </span>
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
          <Button className="mt-3 w-full" onClick={() => { setMenuOpen(false); openResume() }}>
            <FileText className="size-4" />
            Resume
          </Button>
        </div>
      </div>
    </header>
  )
}
