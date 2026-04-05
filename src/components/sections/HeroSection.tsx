'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Heart, Sprout } from 'lucide-react'

type SectionContent = {
  badge?: string
  headline?: string
  subheadline?: string
  description?: string
  cta_primary?: string
  cta_secondary?: string
  quote?: string
}

type Props = {
  content?: SectionContent
  donationLink?: string
}

export default function HeroSection({ content, donationLink }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const badge = content?.badge || 'חווה חקלאית חינוכית-טיפולית'
  const headline = content?.headline || 'מטפלים מהשורש'
  const subheadline = content?.subheadline || 'מחזירים לנערים ונערות את האמונה בעצמם'
  const description = content?.description || 'חווה למניעת נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17, באמצעות עבודת אדמה, סדנאות מגוונות, הדרכה הורית וחזרה למסגרת חינוכית'
  const ctaPrimary = content?.cta_primary || 'גלו את הסיפור שלנו'
  const ctaSecondary = content?.cta_secondary || 'תרומה'
  const quote = content?.quote || 'מטרת העל שלנו היא לא להשאיר את הנערים אצלנו לנצח, אלא להחזיר אותם למסלול כשהם עומדים זקופים, בטוחים ומאמינים.'
  const donation = donationLink || '#contact'

  return (
    <section id="hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80"
        alt="שדות ירוקים"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-secondary/85" />

      {/* Decorative blur blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-sky/10 blur-2xl" />

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 md:pt-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
          <Sprout className="w-4 h-4 text-accent-light" />
          <span className="text-white/90 text-sm font-medium">{badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          {headline.includes('מהשורש') ? (
            <>
              {headline.replace('מהשורש', '').trim()}{' '}
              <span className="relative inline-block">
                מהשורש
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent rounded-full opacity-70" />
              </span>
            </>
          ) : headline}
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 leading-relaxed max-w-3xl mx-auto">
          {subheadline}
        </p>

        <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#about">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-10">
              {ctaPrimary}
            </Button>
          </a>
          <a href={donation} target="_blank" rel="noopener noreferrer">
            <Button size="xl" variant="outline" className="border-white/40 text-white hover:bg-white/10 text-lg px-10">
              <Heart className="w-5 h-5 ml-2" />
              {ctaSecondary}
            </Button>
          </a>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <p className="text-white/90 text-lg italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <a href="#about">
            <ArrowDown className="w-6 h-6 text-white/50 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  )
}
