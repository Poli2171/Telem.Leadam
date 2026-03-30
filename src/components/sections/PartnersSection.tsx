import { Button } from '@/components/ui/button'
import { Handshake, Building2, GraduationCap, Heart, TrendingUp } from 'lucide-react'

const partnerTypes = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'תורמים ומשפיעים',
    description: 'תרומתכם מאפשרת לנו לקבל עוד נערים ונערות לתוכנית ולהרחיב את ההשפעה החברתית',
    cta: 'לתרומה',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'רשויות מקומיות',
    description: 'שיתוף פעולה עם רשויות מאפשר איתור מוקדם ושילוב אפקטיבי של נערים בתוכנית',
    cta: 'ליצירת קשר',
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'מוסדות חינוך',
    description: 'עובדים ביחד מרגע האיתור ועד החזרה המלאה למסגרת — שותפות אמיתית לטובת התלמיד',
    cta: 'למידע נוסף',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'המגזר העסקי',
    description: 'שותפות עסקית שמשלבת אחריות חברתית עם השפעה אמיתית ומדידה על חיי נערים',
    cta: 'לשותפות',
  },
]

export default function PartnersSection() {
  return (
    <section id="partners" className="section-padding bg-warm-bg nature-pattern">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">שותפויות</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            <span className="text-gradient-green">הצטרפו</span> למעגל ההשפעה
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            השינוי האמיתי קורה כשכולם שותפים. ישנן דרכים רבות להיות חלק מתלם לאדם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partnerTypes.map((partner, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-8 shadow-sm border border-earth/20 hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              <div className="flex items-start gap-5 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {partner.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary-dark mb-2">{partner.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>
                </div>
              </div>
              <a href="#contact">
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Handshake className="w-4 h-4 ml-2" />
                  {partner.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-3 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">רוצים להיות חלק מהשינוי?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              כל תרומה, כל שיתוף פעולה, כל חיבור — מקרב עוד נער ונערה לתלם חדש ומיטיב
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={process.env.NEXT_PUBLIC_DONATION_LINK || '#contact'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  <Heart className="w-5 h-5 ml-2" />
                  תרמו עכשיו
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  צרו קשר
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
