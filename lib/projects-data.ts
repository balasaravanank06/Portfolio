/**
 * ============================================================================
 * PROJECTS DATA CONFIGURATION
 * ----------------------------------------------------------------------------
 * Developed applications, security implementations, and repository metadata.
 * ============================================================================
 */

export type Project = {
  id: string
  title: string
  year?: string
  category: string
  filters: string[]
  description: string
  technologies: string[]
  features: string[]
  workflow?: string[]
  image: string
  repoUrl: string
  demoUrl?: string
  featured?: boolean
  isCybersecurity?: boolean
  badges?: string[]
}

export const projects: Project[] = [
  {
    id: "fake-antivirus-popup-detector",
    title: "Fake Antivirus Popup Detector",
    year: "2025",
    category: "Machine Learning | Cybersecurity",
    filters: ["Cybersecurity", "Machine Learning", "Python"],
    description:
      "An educational machine-learning project that identifies and classifies fake antivirus popups using feature extraction and classification techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    badges: ["Cybersecurity", "Machine Learning", "Malware Detection", "Python"],
    features: [
      "Data preprocessing",
      "Feature extraction",
      "Dataset cleaning",
      "Machine-learning classification",
      "Accuracy evaluation",
      "Precision",
      "Recall",
      "F1-score",
      "Confusion matrix",
      "Prediction interface",
    ],
    image: "/projects/fake-antivirus-popup-detector.webp",
    repoUrl: "https://github.com/balasaravanank06/ML-Project---Fake-Antivirus-popup-detector",
    featured: true,
    isCybersecurity: true,
  },
  {
    id: "awirp-incident-response",
    title: "AWIRP (Autonomous Windows Incident Response Agent)",
    year: "2025",
    category: "Cybersecurity | Incident Response",
    filters: ["Cybersecurity", "Python"],
    description:
      "An educational autonomous incident-response project that assists with threat investigation, evidence collection, alert organization, and response planning in Windows environments.",
    technologies: ["Python", "Windows", "Cybersecurity", "Incident Response", "Threat Analysis", "Log Analysis"],
    badges: ["Cybersecurity", "Incident Response", "Threat Analysis", "Windows Security", "Python"],
    features: [
      "Security alert processing",
      "Incident severity classification",
      "Evidence collection",
      "IOC tracking",
      "IP tracking",
      "Domain tracking",
      "Hash tracking",
      "Event timelines",
      "Investigation notes",
      "Response recommendations",
      "Incident report generation",
    ],
    workflow: [
      "Detection",
      "Initial Analysis",
      "Evidence Collection",
      "Threat Identification",
      "Severity Classification",
      "Containment",
      "Eradication",
      "Recovery",
      "Lessons Learned",
      "Incident Reporting",
    ],
    image: "/projects/awirp-incident-response.webp",
    repoUrl: "https://github.com/balasaravanank06/Agent-Verse",
    featured: true,
    isCybersecurity: true,
  },
  {
    id: "energy-consumption-logger",
    title: "Energy Consumption Logger",
    year: "2025",
    category: "Java Desktop Application",
    filters: ["Development", "Java"],
    description:
      "Desktop application to monitor electricity usage, calculate energy consumption and estimate electricity costs.",
    technologies: ["Java", "JavaFX", "Maven"],
    features: [
      "Energy usage tracking",
      "Usage-duration monitoring",
      "Cost calculation",
      "User-friendly desktop interface",
      "Expandable data storage support",
      "Report generation and export",
    ],
    image: "/projects/energy-consumption-logger.webp",
    repoUrl: "https://github.com/balasaravanank06/energy-consumption-logger",
    featured: true,
  },
  {
    id: "mentor-mentee-allocation",
    title: "Mentor Mentee Allocation System",
    year: "2025",
    category: "Full-Stack Java Application",
    filters: ["Development", "Java"],
    description:
      "Mentorship management application for assigning mentors and mentees, monitoring progress, managing tasks and discussions.",
    technologies: ["Java", "Spring Boot", "MySQL", "Maven"],
    features: [
      "Mentor and mentee registration",
      "Structured allocation workflow",
      "Task assignment and monitoring",
      "Active discussion forum",
      "Progress tracking dashboard",
    ],
    image: "/projects/mentor-mentee-system.webp",
    repoUrl: "https://github.com/balasaravanank06/mentor-mentee-allocation",
    featured: true,
  },
  {
    id: "event-management-system",
    title: "Event Management System",
    year: "2025",
    category: "MERN Full-Stack Application",
    filters: ["Development"],
    description:
      "Modern MERN application for event creation, authentication, event management and user profiles.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    features: [
      "User authentication and profile management",
      "Dynamic event creation and editing",
      "Event discovery and detailed view pages",
      "Real-time event administration capabilities",
      "RESTful API endpoints integration",
    ],
    image: "/projects/event-management-system.webp",
    repoUrl: "https://github.com/balasaravanank06/event-management-system",
    featured: true,
  },
  {
    id: "online-auction-system",
    title: "Online Auction System",
    year: "2025",
    category: "Python Web Application",
    filters: ["Development", "Python"],
    description:
      "Auction platform supporting product listing, bidding workflow and user management.",
    technologies: ["Python", "Django"],
    features: [
      "User account creation and security profile",
      "Interactive bidding workflows",
      "Comprehensive product listing dashboard",
      "Auction administration dashboard",
    ],
    image: "/projects/online-auctions-system.webp",
    repoUrl: "https://github.com/balasaravanank06/online-auctions-system",
    featured: true,
  },
]

export const projectFilters = [
  "All",
  "Development",
  "Cybersecurity",
  "Machine Learning",
  "Java",
  "Python",
  "Labs",
]
