import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import { prisma } from '@/lib/prisma'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heebo',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'main' } })

  return {
    title: settings?.seoTitle || 'תלם לאדם - מטפלים מהשורש | חווה חקלאית חינוכית-טיפולית',
    description: settings?.seoDescription || 'חווה חקלאית חינוכית-טיפולית למניעת נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17. תהליך של חצי שנה המשלב עבודת אדמה, סדנאות, הדרכה הורית וחזרה למסגרת חינוכית.',
    keywords: ['תלם לאדם', 'נשירה', 'נוער', 'חווה חקלאית', 'טיפולי', 'חינוכי', 'הורים', 'מטפלים מהשורש'],
    openGraph: {
      title: settings?.seoTitle || 'תלם לאדם - מטפלים מהשורש',
      description: settings?.seoDescription || 'חווה חקלאית חינוכית-טיפולית למניעת נשירה ואי תפקוד של בני ובנות נוער',
      ...(settings?.ogImage ? { images: [settings.ogImage] } : {}),
      type: 'website',
      locale: 'he_IL',
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-hebrew antialiased">
        {children}
      </body>
    </html>
  )
}
