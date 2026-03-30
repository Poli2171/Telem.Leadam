import ScrollRevealProvider from '@/components/ScrollRevealProvider'
import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import PillarsSection from '@/components/sections/PillarsSection'
import ActivitiesSection from '@/components/sections/ActivitiesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import AudiencesSection from '@/components/sections/AudiencesSection'
import ImpactSection from '@/components/sections/ImpactSection'
import TeamSection from '@/components/sections/TeamSection'
import PartnersSection from '@/components/sections/PartnersSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <ScrollRevealProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <SolutionSection />
        <PillarsSection />
        <ActivitiesSection />
        <ProcessSection />
        <AudiencesSection />
        <ImpactSection />
        <TeamSection />
        <PartnersSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </ScrollRevealProvider>
  )
}
