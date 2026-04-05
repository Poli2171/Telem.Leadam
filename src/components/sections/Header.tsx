'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { id: 'about', label: 'אודות' },
  { id: 'problem', label: 'הבעיה' },
  { id: 'solution', label: 'הגישה שלנו' },
  { id: 'pillars', label: 'מרכיבים' },
  { id: 'activities', label: 'פעילויות' },
  { id: 'process', label: 'התהליך' },
  { id: 'team', label: 'הצוות' },
  { id: 'faq', label: 'שאלות' },
  { id: 'contact', label: 'צרו קשר' },
]

const sectionIds = navLinks.map((l) => l.id)

type Props = {
  donationLink?: string
}

export default function Header({ donationLink }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const donation = donationLink || '#contact'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setIsMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <Image
            src="/images/logo.jpeg"
            alt="תלם לאדם"
            width={48}
            height={48}
            className="rounded-xl transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <div className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              תלם לאדם
            </div>
            <div className={`text-xs transition-colors ${isScrolled ? 'text-secondary-light' : 'text-white/80'}`}>
              מטפלים מהשורש
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? isScrolled
                    ? 'text-primary bg-primary/10'
                    : 'text-white bg-white/20'
                  : isScrolled
                    ? 'text-gray-600 hover:text-primary hover:bg-primary/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={donation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className={`hidden sm:flex items-center gap-2 ${
                !isScrolled ? 'bg-white text-primary hover:bg-white/90' : ''
              }`}
            >
              <Heart className="w-4 h-4" />
              תרומה
            </Button>
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="lg:hidden mobile-nav-enter bg-white border-t shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-3 rounded-xl text-right text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={donation}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                לתרומה
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
