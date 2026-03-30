import { Briefcase } from 'lucide-react'

const founders = [
  {
    name: 'איתי קסטרו',
    age: '37',
    role: 'מייסד ומנהל חינוכי',
    bio: 'מורה, מחנך ומדריך הורים. בעל תואר שני בחינוך, תעודת הוראה, ומדריך הורים מוסמך בגישת ה"סמכות החדשה". בעל ניסיון עשיר של 12 שנים בעבודה עם נוער במצבי סיכון. בעבר ניהל את התכנית החינוכית "בשביל" בהרצליה ואת מכינת נחשון בקיבוץ שובל. לאחר מספר שנים כמחנך כיתות אומץ, איתי החליט ליזום תכנית חינוכית-טיפולית הוליסטית וחדשנית למניעת נשירה.',
    initials: 'א.ק',
    gradient: 'from-primary to-primary-dark',
  },
  {
    name: 'עידו פוליצר',
    age: '35',
    role: 'מייסד ומנכ"ל העמותה',
    bio: 'בעל רקע עשיר בניהול פרויקטים, קרנות נדל"ן וייעוץ אסטרטגי לתשתיות. בוגר תואר ראשון בכלכלה עם התמחות במימון. האיש שמתרגם את החזון החינוכי למציאות בת-קיימא. אמון על הקמת התשתית הפיזית ובניית המודל הכלכלי, מתוך תפיסה שיציבות תפעולית ופיננסית היא הבסיס לביטחון הרגשי של בני הנוער.',
    initials: 'ע.פ',
    gradient: 'from-secondary to-secondary-dark',
  },
  {
    name: 'חנוך טיאר',
    age: '42',
    role: 'מייסד ורכז פדגוגי',
    bio: 'מורה ומוזיקאי-יוצר. בעל תואר ראשון בחינוך ומקרא ותעודת הוראה. ניסיון של כ-15 שנה בחינוך פורמאלי ובלתי פורמאלי, עם התמחות בחטיבת הביניים. יוצר ומנחה סדנאות כתיבה יוצרת בנושא זהות, המהוות נדבך רגשי וחינוכי משמעותי בתכנית החווה.',
    initials: 'ח.ט',
    gradient: 'from-accent-dark to-primary',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-gradient-to-b from-warm-bg to-earth-light/30">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">הצוות</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            צוות <span className="text-gradient-green">המייסדים</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            שלושה אנשי חינוך וניהול עם חזון משותף — להחזיר לנערים את האמונה בעצמם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-earth/20 group`}
            >
              {/* Avatar Header */}
              <div className={`bg-gradient-to-br ${founder.gradient} p-8 text-center relative`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10" />
                </div>
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center border-3 border-white/30 mb-4">
                    <span className="text-3xl font-black text-white">{founder.initials}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Briefcase className="w-4 h-4 text-white/70" />
                    <span className="text-white/80 text-sm">{founder.role}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
