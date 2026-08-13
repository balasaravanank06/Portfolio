import { ResumeProvider } from "@/components/resume-viewer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorGlow } from "@/components/cursor-glow"
import { BackToTop } from "@/components/back-to-top"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Skills } from "@/components/skills"
import { CyberLabs } from "@/components/cyber-labs"
import { SecurityResearch } from "@/components/security-research"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { CodingProfiles } from "@/components/coding-profiles"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <ResumeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <CyberLabs />
        <SecurityResearch />
        <Projects />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ResumeProvider>
  )
}
