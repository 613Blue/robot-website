import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartnersSection } from "@/components/partners-section"
import { AboutSection } from "@/components/about-section"
import { HardwareSection } from "@/components/hardware-section"
import { ControlSection } from "@/components/control-section"
import { ModelSection } from "@/components/model-section"
import { SpecsSection } from "@/components/specs-section"
import { VisionSection } from "@/components/vision-section"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <HardwareSection />
      <ControlSection />
      <ModelSection />
      <SpecsSection />
      <VisionSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
