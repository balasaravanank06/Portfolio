/**
 * ============================================================================
 * EDUCATION HISTORY DATA
 * ----------------------------------------------------------------------------
 * Academic qualifications, specialization, institutions, and CGPA metrics.
 * ============================================================================
 */

export type EducationItem = {
  degree: string
  specialization?: string
  institution: string
  period: string
  scoreLabel: string
  score: string
  level: string
  current?: boolean
}

export const education: EducationItem[] = [
  {
    degree: "B.E. Computer Science and Engineering",
    specialization: "Specialization: Cyber Security",
    institution: "Sri Eshwar College of Engineering",
    period: "2024 – 2028",
    scoreLabel: "CGPA",
    score: "7.62",
    level: "Undergraduate",
    current: true,
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Veveaham Matriculation Higher Secondary School, Dharapuram",
    period: "2022 – 2024",
    scoreLabel: "Percentage",
    score: "92.5%",
    level: "Higher Secondary Education",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Vighneswar Vidhya Mandhir Matriculation Higher Secondary School, Sirukkalandai",
    period: "2021 – 2022",
    scoreLabel: "Percentage",
    score: "82%",
    level: "Secondary Education",
  },
]
