/**
 * ============================================================================
 * CERTIFICATIONS DATA
 * ----------------------------------------------------------------------------
 * Credentials, professional certifications, issuers, year, and verification URLs.
 * ============================================================================
 */

export type Certification = {
  title: string
  issuer: string
  year: string
  icon: string
  url: string
}

export const CERTIFICATES_DRIVE_URL =
  "https://drive.google.com/drive/folders/1tEdffoHnxpMq0xb53CeLFJzNkzW47_kB?usp=drive_link"

export const certifications: Certification[] = [
  {
    title: "Mastering DSA in C/C++",
    issuer: "Udemy",
    year: "2025",
    icon: "Binary",
    url: CERTIFICATES_DRIVE_URL,
  },
  {
    title: "Introduction to Java on Azure",
    issuer: "Microsoft",
    year: "2025",
    icon: "Coffee",
    url: CERTIFICATES_DRIVE_URL,
  },
  {
    title: "Getting Started with Agent on Azure",
    issuer: "Microsoft",
    year: "2025",
    icon: "Bot",
    url: CERTIFICATES_DRIVE_URL,
  },
  {
    title: "Java Foundations",
    issuer: "Oracle",
    year: "2025",
    icon: "Code2",
    url: CERTIFICATES_DRIVE_URL,
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    year: "2025",
    icon: "Cloud",
    url: CERTIFICATES_DRIVE_URL,
  },
]
