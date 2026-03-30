import { BookOpen, Heart, Users } from 'lucide-react'

const pillars = [
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'לימודי',
    subtitle: 'חוויה מתקנת של למידה',
    description: 'הקניית מיומנויות ואסטרטגיות למידה, צמצום פערים לימודיים, וכן חוויה מתקנת בתפישתם את עצמם כלומדים. אנחנו מאמינים שכל נער ונערה יכולים ללמוד — רק צריך למצוא את הדרך הנכונה.',
    color: 'primary',
    bgGradient: 'from-primary/5 to-accent/10',
    borderColor: 'border-primary/20',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: 'רגשי-חברתי',
    subtitle: 'חיזוק הביטחון והמסוגלות',
    description: 'שגרה ושיטת עבודה המושתתות על יחס אישי, חוויות הצלחה בסדנאות חווייתיות ומגוונות, כאמצעים להקניית והעצמת כישורים אישיים וחברתיים, חיזוק תחושת הביטחון והעצמת תחושת מסוגלות וערך עצמי.',
    color: 'rose',
    bgGradient: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'קהילתי',
    subtitle: 'שותפות עם הסביבה',
    description: 'עבודה בסימביוזה עם המסגרת החינוכית משלב האיתור עד סוף יב\', ושילוב הנחייה הורית כחלק אינטגרלי מהתהליך. שיתוף פעולה מלא בין כל הגורמים הרלוונטיים בחיי הנער.',
    color: 'sky',
    bgGradient: 'from-sky-50 to-blue-50',
    borderColor: 'border-sky-200',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
]

export default function PillarsSection() {
  return (
    <section id="pillars" className="section-padding bg-gradient-to-b from-warm-bg to-earth-light/30">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">מרכיבי התשתית</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            שלושת <span className="text-gradient-green">עמודי התווך</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            התשתית החינוכית-טיפולית של תלם לאדם מבוססת על שלושה מרכיבים שפועלים יחד
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative bg-gradient-to-br ${pillar.bgGradient} rounded-3xl p-8 md:p-10 border ${pillar.borderColor} hover:shadow-xl transition-all duration-500`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full ${
                i === 0 ? 'bg-primary' : i === 1 ? 'bg-rose-400' : 'bg-sky-400'
              }`} />

              <div className={`w-20 h-20 rounded-2xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>

              <div className="text-center md:text-right">
                <h3 className="text-2xl font-black text-secondary-dark mb-2">{pillar.title}</h3>
                <p className={`text-sm font-medium mb-4 ${
                  i === 0 ? 'text-primary' : i === 1 ? 'text-rose-500' : 'text-sky-600'
                }`}>
                  {pillar.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
