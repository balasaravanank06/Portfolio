/**
 * ============================================================================
 * CYBERSECURITY LABS & RESEARCH TOPICS DATA
 * ----------------------------------------------------------------------------
 * Practical security exercises, lab environments, and research topics.
 * ============================================================================
 */

export type CyberLab = {
  id: string
  title: string
  environment?: string
  tools: string[]
  description: string
  activities: string[]
}

export const cybersecurityLabs: CyberLab[] = [
  {
    id: "lab-web-app-security",
    title: "Web Application Security Testing",
    environment: "DVWA (Damn Vulnerable Web Application)",
    tools: ["Kali Linux", "Burp Suite", "SQLMap", "Chrome Developer Tools"],
    description:
      "Performed controlled web application security testing using DVWA as a deliberately vulnerable training environment.",
    activities: [
      "SQL Injection",
      "Blind SQL Injection",
      "Database Enumeration",
      "Cookie Analysis",
      "HTTP Request Analysis",
      "HTTP Response Analysis",
      "Burp Suite Interception",
      "Security-Level Testing",
    ],
  },
  {
    id: "lab-network-recon",
    title: "Network Reconnaissance and Traffic Analysis",
    tools: ["Nmap", "Wireshark", "Kali Linux"],
    description:
      "Conducted network discovery scanning and packet analysis to map network topology, enumerate open services, and evaluate protocol security.",
    activities: [
      "Host Discovery",
      "Port Scanning",
      "Service Enumeration",
      "Packet Capture",
      "Traffic Analysis",
      "Protocol Analysis",
    ],
  },
  {
    id: "lab-dependency-assessment",
    title: "Software Dependency Vulnerability Assessment",
    tools: ["OWASP Dependency-Check", "Java", "Maven"],
    description:
      "Analyzed open-source libraries and build configurations in Java projects to detect publicly disclosed vulnerabilities (CVEs) and recommend remediations.",
    activities: [
      "Dependency Scanning",
      "CVE Identification",
      "Vulnerability Analysis",
      "Security Report Generation",
      "Remediation Review",
    ],
  },
]

export type SecurityResearchTopic = {
  title: string
  description: string
  tag: string
  icon: string
}

export const securityResearchTopics: SecurityResearchTopic[] = [
  {
    title: "Malware Analysis",
    description: "Static and dynamic investigation of suspicious binaries, feature extraction, and behavioral classification.",
    tag: "Analysis",
    icon: "Bug",
  },
  {
    title: "Penetration Testing",
    description: "Methodical assessment of targets through reconnaissance, vulnerability scanning, and controlled exploit testing.",
    tag: "Offensive Security",
    icon: "Target",
  },
  {
    title: "Web Application Security",
    description: "Deep-dive testing of authentication, session management, input validation, and OWASP Top 10 vulnerabilities.",
    tag: "AppSec",
    icon: "Globe",
  },
  {
    title: "Network Security",
    description: "Protocol inspection, packet analysis, network enumeration, and traffic monitoring for anomaly detection.",
    tag: "Infrastructure",
    icon: "Network",
  },
  {
    title: "Vulnerability Assessment",
    description: "Systematic auditing of software dependencies, system misconfigurations, and known CVE exposures.",
    tag: "Auditing",
    icon: "SearchCheck",
  },
  {
    title: "Incident Response",
    description: "Structured workflow for alert triage, evidence collection, IOC tracking, containment, and post-incident reporting.",
    tag: "Defensive Security",
    icon: "AlertTriangle",
  },
  {
    title: "Threat Analysis",
    description: "Evaluating threat actors, attack vectors, indicators of compromise, and adversary tactics.",
    tag: "Threat Intel",
    icon: "Eye",
  },
  {
    title: "Secure Coding",
    description: "Applying defensive software practices, sanitized input parsing, and secure architecture patterns in Java and Python.",
    tag: "Development",
    icon: "FileCode",
  },
  {
    title: "Machine Learning for Cybersecurity",
    description: "Leveraging machine learning models for anomaly detection, malware classification, and threat pattern recognition.",
    tag: "AI / ML",
    icon: "BrainCircuit",
  },
]
