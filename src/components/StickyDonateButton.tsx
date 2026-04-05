'use client'

import { Heart } from 'lucide-react'

type Props = {
  donationLink?: string
}

export default function StickyDonateButton({ donationLink }: Props) {
  const link = donationLink || process.env.NEXT_PUBLIC_DONATION_LINK || '#contact'

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-primary text-white font-bold text-lg py-4 shadow-2xl border-t border-primary-dark/20 active:bg-primary-dark transition-colors"
    >
      <Heart className="w-5 h-5 fill-white/30" />
      תרומה — עזרו לנו לגדול
    </a>
  )
}
