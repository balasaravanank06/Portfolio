/**
 * ============================================================================
 * PROFILE & PERSONAL CONFIGURATION
 * ----------------------------------------------------------------------------
 * Central source of truth for personal info, bio, links, and social accounts.
 * ============================================================================
 */

export const personal = {
  name: "Balasaravanan K",
  initials: "BK",
  shortName: "Balasaravanan",
  role: "Security Engineer",
  secondaryRole: "Cyber Security Student",
  degree: "B.E. Computer Science and Engineering",
  specialization: "Cyber Security",
  college: "Sri Eshwar College of Engineering",
  cgpa: "7.62",
  graduationYear: "2028",
  location: "Coimbatore, Tamil Nadu, India",
  email: "balasaravanan.k2024csecs@sece.ac.in",
  availability: "Open to Security Engineer Opportunities and Cyber Security Internships",
  summary:
    "I am a Computer Science and Engineering student specializing in Cyber Security with a strong interest in secure software development, penetration testing, web application security, network security, vulnerability assessment, incident response, and modern cybersecurity technologies.\n\nI enjoy building practical software solutions while continuously improving my cybersecurity knowledge through hands-on laboratories, secure coding practices, and problem-solving platforms.",
  objective:
    "To become a Security Engineer capable of developing secure applications, identifying vulnerabilities, analyzing threats, and building resilient systems.",

  // ---- Social & Profile Links ----
  GITHUB_PROFILE_URL: "https://github.com/balasaravanank06",
  LINKEDIN_PROFILE_URL: "https://www.linkedin.com/in/bala-saravanank-912a1a333",
  LEETCODE_PROFILE_URL: "https://leetcode.com/u/BalasaravananK/",
  SKILLRACK_PROFILE_URL:
    "https://www.skillrack.com/faces/resume.xhtml?id=515133&key=90b636388d80bd07b8b946ff373bfd75a50d5354",
  RESUME_REPO_URL: "https://github.com/balasaravanank06/Resume",

  // ---- Resume Metadata ----
  resumePath: "/Balasaravanan-K-Resume.pdf",
  resumeUpdated: "August 2026",
}

export const heroRoles = [
  "Security Engineer",
  "Cyber Security Student",
  "Security Research Enthusiast",
  "Java Developer",
  "Problem Solver",
]

export const heroDescription =
  "I am a Computer Science and Engineering student specializing in Cyber Security with a strong interest in secure software development, penetration testing, web application security, network security, vulnerability assessment, incident response, and modern cybersecurity technologies."

export const floatingTags = [
  "Cyber Security",
  "Penetration Testing",
  "Secure Coding",
  "Java",
  "Python",
]

export const aboutParagraphs = [
  "I am a Computer Science and Engineering student specializing in Cyber Security at Sri Eshwar College of Engineering (CGPA: 7.62, Class of 2028).",
  "My primary passion lies in Security Engineering—developing secure applications, identifying software and web vulnerabilities, performing threat analysis, and understanding modern attack vectors.",
  "Alongside cybersecurity labs and security research, I build software solutions using Java, Python, JavaScript, Spring Boot, and modern web technologies as supporting skills for my security work.",
  "I continuously sharpen my problem-solving capabilities through 110+ LeetCode problems, 700+ SkillRack problems, and 140+ SkillRack bronze badges while staying engaged with hands-on security laboratories.",
  "Career Objective: To become a Security Engineer capable of developing secure applications, identifying vulnerabilities, analyzing threats, and building resilient systems.",
]

export const aboutHighlights = [
  { label: "Primary Role", value: "Security Engineer" },
  { label: "Specialization", value: "Cyber Security" },
  { label: "Degree", value: "B.E. Computer Science and Engineering" },
  { label: "College", value: "Sri Eshwar College of Engineering" },
  { label: "CGPA", value: "7.62" },
  { label: "Graduation Year", value: "2028" },
  { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
]

export const codingProfiles = [
  {
    name: "GitHub",
    icon: "Github",
    stats: [
      { label: "Projects", value: "6 Total" },
      { label: "Repositories", value: "Public & Active" },
    ],
    url: personal.GITHUB_PROFILE_URL,
    accent: "emerald",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    stats: [
      { label: "Network", value: "Professional" },
      { label: "Opportunities", value: "Open" },
    ],
    url: personal.LINKEDIN_PROFILE_URL,
    accent: "blue",
  },
  {
    name: "LeetCode",
    icon: "Code2",
    stats: [
      { label: "Problems Solved", value: "110+" },
      { label: "Algorithmic Focus", value: "Active" },
    ],
    url: personal.LEETCODE_PROFILE_URL,
    accent: "cyan",
  },
  {
    name: "SkillRack",
    icon: "Trophy",
    stats: [
      { label: "Problems Solved", value: "700+" },
      { label: "Bronze Badges", value: "140+" },
    ],
    url: personal.SKILLRACK_PROFILE_URL,
    accent: "indigo",
  },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Security Labs", href: "#labs" },
  { label: "Security Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]
