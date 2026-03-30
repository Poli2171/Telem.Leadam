import Image from 'next/image'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'הגישה שלנו', href: '#solution' },
  { label: 'פעילויות', href: '#activities' },
  { label: 'התהליך', href: '#process' },
  { label: 'הצוות', href: '#team' },
  { label: 'שאלות נפוצות', href: '#faq' },
  { label: 'צרו קשר', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.jpeg" alt="תלם לאדם" width={48} height={48} className="rounded-xl" />
              <div>
                <div className="font-bold text-xl">תלם לאדם</div>
                <div className="text-white/60 text-sm">מטפלים מהשורש</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              חווה חקלאית חינוכית-טיפולית למניעת נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17. מחזירים לנערים את האמונה בעצמם.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_DONATION_LINK || '#contact'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              <Heart className="w-4 h-4" />
              תרומה
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">ניווט מהיר</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">צרו קשר</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span dir="ltr">054-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@telem-leadam.org.il</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>ישראל</span>
              </div>
            </div>

            {/* Social Placeholders */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-white/50">עקבו אחרינו</h5>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/50 text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    {social[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>&copy; {new Date().getFullYear()} תלם לאדם — כל הזכויות שמורות</div>
            <div className="flex gap-6">
              <span className="hover:text-white/70 cursor-pointer">תנאי שימוש</span>
              <span className="hover:text-white/70 cursor-pointer">מדיניות פרטיות</span>
              <span className="hover:text-white/70 cursor-pointer">נגישות</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
