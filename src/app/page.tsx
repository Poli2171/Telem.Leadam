import { prisma } from '@/lib/prisma'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'
import StickyDonateButton from '@/components/StickyDonateButton'
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

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  // Fetch all data in parallel
  const [
    settings,
    sections,
    teamMembers,
    faqs,
    pillars,
    activities,
    steps,
    metrics,
  ] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: 'main' } }),
    prisma.section.findMany({ where: { visible: true } }),
    prisma.teamMember.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }),
    prisma.fAQ.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }),
    prisma.pillar.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }),
    prisma.activity.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }),
    prisma.processStep.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }),
    prisma.impactMetric.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }),
  ])

  // Parse section JSON content
  const sectionMap: Record<string, Record<string, string>> = {}
  for (const section of sections) {
    try {
      sectionMap[section.id] = JSON.parse(section.content as string)
    } catch {
      sectionMap[section.id] = {}
    }
  }

  const donationLink = settings?.donationLink || process.env.NEXT_PUBLIC_DONATION_LINK || '#contact'

  return (
    <ScrollRevealProvider>
      <Header donationLink={donationLink} />
      <main>
        <HeroSection content={sectionMap['hero']} donationLink={donationLink} />
        <AboutSection content={sectionMap['about']} />
        <ProblemSection content={sectionMap['problem']} />
        <SolutionSection content={sectionMap['solution']} />
        <PillarsSection pillars={pillars} content={sectionMap['pillars']} />
        <ActivitiesSection activities={activities} content={sectionMap['activities']} />
        <ProcessSection steps={steps} content={sectionMap['process']} />
        <AudiencesSection />
        <ImpactSection metrics={metrics} content={sectionMap['impact']} />
        <TeamSection members={teamMembers} />
        <PartnersSection />
        <FAQSection faqs={faqs} />
        <ContactSection settings={settings} />
      </main>
      <Footer settings={settings} donationLink={donationLink} />
      <StickyDonateButton donationLink={donationLink} />
      {/* Bottom padding on mobile so sticky button doesn't cover content */}
      <div className="md:hidden h-16" />
    </ScrollRevealProvider>
  )
}
