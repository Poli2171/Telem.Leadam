import { User, Users, GraduationCap, Building2 } from 'lucide-react'

const audiences = [
  {
    icon: <User className="w-8 h-8" />,
    title: 'בני ובנות נוער',
    subtitle: 'גילאי 13-17',
    description: 'נערים ונערות בתהליכי נשירה גלויה או סמויה, שזקוקים למסגרת שונה שתחזיר להם את האמונה בעצמם ותכין אותם לחזרה לתפקוד.',
    gradient: 'from-primary/10 to-accent/5',
    iconColor: 'text-primary bg-primary/10',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'הורים',
    subtitle: 'חלק מהתהליך',
    description: 'הורים שמרגישים חסרי אונים מול תהליך הנשירה של ילדיהם. אנחנו מציעים הדרכה הורית מקצועית ותמיכה לאורך כל הדרך.',
    gradient: 'from-rose-50 to-pink-50',
    iconColor: 'text-rose-600 bg-rose-100',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'מוסדות חינוך ומחנכים',
    subtitle: 'שותפים לדרך',
    description: 'בתי ספר, מחנכים ויועצים שרוצים פתרון אמיתי לתלמידים שנמצאים בסיכון — שותפות מלאה מהאיתור ועד החזרה.',
    gradient: 'from-sky-50 to-blue-50',
    iconColor: 'text-sky-600 bg-sky-100',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'רשויות ושותפים',
    subtitle: 'מגזר ציבורי ועסקי',
    description: 'רשויות מקומיות, ארגונים חברתיים ושותפים עסקיים שמאמינים בהשפעה חברתית אמיתית ורוצים להיות חלק מהשינוי.',
    gradient: 'from-amber-50 to-orange-50',
    iconColor: 'text-amber-600 bg-amber-100',
  },
]

export default function AudiencesSection() {
  return (
    <section id="audiences" className="section-padding bg-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">למי מיועד</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            <span className="text-gradient-green">ביחד</span> — לשינוי אמיתי
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-earth/10 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-2xl ${item.iconColor} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-dark mb-1">{item.title}</h3>
                  <p className="text-sm font-medium text-primary/70 mb-3">{item.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
