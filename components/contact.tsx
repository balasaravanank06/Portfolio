"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import {
  CheckCircle2,
  Loader2,
  Mail,
  Send,
} from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import { personal } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", string>
>

type Status = "idle" | "loading" | "success" | "error"

const inputClass =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/40"

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>("idle")

  const update =
    (field: keyof typeof values) =>
    (e: { target: { value: string } }) => {
      setValues((v) => ({
        ...v,
        [field]: e.target.value,
      }))

      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }))
    }

  const validate = (): FieldErrors => {
    const next: FieldErrors = {}

    if (!values.name.trim()) {
      next.name = "Please enter your name."
    }

    if (!values.email.trim()) {
      next.email = "Please enter your email."
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      next.email = "Please enter a valid email address."
    }

    if (!values.subject.trim()) {
      next.subject = "Please add a subject."
    }

    if (!values.message.trim()) {
      next.message = "Please write a message."
    } else if (values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters."
    }

    return next
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const validation = validate()

    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setStatus("loading")

    try {
      /*
       * Placeholder submission handler.
       * This form is not connected to a real email service yet.
       */
      await new Promise((resolve) => setTimeout(resolve, 1200))

      setStatus("success")

      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch {
      setStatus("error")
    }
  }

  const socials = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: personal.GITHUB_PROFILE_URL,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personal.LINKEDIN_PROFILE_URL,
    },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Say hello"
          title="Let's Connect"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side: Message and social links */}

          <Reveal className="flex flex-col gap-6">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              I&apos;m always interested in learning opportunities,
              meaningful projects, internships, and conversations about
              software development and cybersecurity. If you&apos;d like
              to connect or discuss an opportunity, feel free to reach out.
            </p>

            <div className="flex flex-col gap-3">
              {socials.map(
                ({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="card-hover group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="size-5" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {label}
                      </p>

                      <p className="truncate text-xs text-muted-foreground">
                        {value}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>
          </Reveal>

          {/* Right side: Contact form */}

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  error={errors.name}
                  htmlFor="name"
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className={inputClass}
                  />
                </Field>

                <Field
                  label="Email"
                  error={errors.email}
                  htmlFor="email"
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field
                  label="Subject"
                  error={errors.subject}
                  htmlFor="subject"
                >
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={update("subject")}
                    placeholder="What's this about?"
                    aria-invalid={!!errors.subject}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field
                  label="Message"
                  error={errors.message}
                  htmlFor="message"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={update("message")}
                    placeholder="Tell me a little about it..."
                    aria-invalid={!!errors.message}
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  size="lg"
                  className="h-11 px-5"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p className="inline-flex items-center gap-1.5 text-sm text-[oklch(0.75_0.14_150)]">
                    <CheckCircle2 className="size-4" />
                    Thanks! Your message has been captured.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string
  error?: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>

      {children}

      {error && (
        <p className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}