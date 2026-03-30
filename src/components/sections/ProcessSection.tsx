import { Search, UserPlus, Users, School, RotateCcw, Award } from 'lucide-react'

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'איתור והצטרפות',
    description: 'זיהוי נערים ונערות בתהליך נשירה בשיתוף עם מסגרות חינוכיות, רשויות ומשפחות',
    num: '01',
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: 'תהליך אישי וקבוצתי',
    description: 'תוכנית מותאמת אישית הכוללת סדנאות, עבודת אדמה, ליווי רגשי ופיתוח כישורים',
    num: '02',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'ליווי הורים',
    description: 'הדרכה הורית בגישת הסמכות החדשה לחיזוק הקשר המשפחתי והתמיכה בתהליך',
    num: '03',
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'עבודה עם המסגרת החינוכית',
    description: 'שיתוף פעולה צמוד עם בית הספר להכנת הקרקע לחזרה מוצלחת',
    num: '04',
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: 'חזרה לתפקוד במסגרת',
    description: 'חזרה הדרגתית למסגרת החינוכית עם ליווי צמוד ותמיכה מותאמת',
    num: '05',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'ליווי המשך וקבוצת בוגרים',
    description: 'המשך ליווי ושייכות לקהילת בוגרי תלם לאדם לשמירה על התפקוד לאורך זמן',
    num: '06',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-gradient-to-b from-earth-light/30 to-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">התהליך</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            המסע של <span className="text-gradient-green">כל נער ונערה</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            תהליך מובנה של כחצי שנה — מהאיתור ועד לחזרה מלאה למסגרת החינוכית
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} md:flex items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:gap-8 mb-8`}
              >
                {/* Content */}
                <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth/20 hover:shadow-md transition-shadow group">
                    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-right gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary/50 mb-1">שלב {step.num}</div>
                        <h3 className="text-lg font-bold text-secondary-dark mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot - desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-md z-10">
                    {step.num}
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
