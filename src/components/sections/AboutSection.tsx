import Image from 'next/image'
import { Sprout, Users, GraduationCap, HeartHandshake } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-warm-bg nature-pattern">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">מי אנחנו</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            תלם לאדם — <span className="text-gradient-green">מטפלים מהשורש</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            &ldquo;תלם לאדם&rdquo; היא חווה חקלאית חינוכית-טיפולית שנועדה למנוע נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17. אנחנו מציעים תוכנית ייחודית והוליסטית — מעין &ldquo;טירונות לחיים&rdquo; — שמשלבת עבודת אדמה, סדנאות חווייתיות, הדרכה הורית ועבודה עם המסגרת החינוכית.
          </p>
        </div>

        {/* Photo + Values split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 reveal">
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&q=80"
              alt="נוער עובד בחווה החקלאית"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-primary font-bold text-sm">חווה חקלאית חינוכית-טיפולית</p>
              <p className="text-gray-500 text-xs">גילאי 13–17</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-secondary-dark leading-tight">
              מחזירים לנערים את האמונה בעצמם — מהשורש
            </h3>
            <p className="text-gray-600 leading-relaxed">
              בתלם לאדם אנחנו מאמינים שכל נער ונערה יכולים לשוב למסלול. התהליך שלנו משלב עבודה חקלאית מעשית, סדנאות רגשיות, הדרכת הורים וקשר עם המסגרת החינוכית — כל אלה יחד יוצרים שינוי אמיתי ומתמשך.
            </p>
            <p className="text-gray-600 leading-relaxed">
              למעלה מ-12 שנות ניסיון בעבודה עם נוער במצבי סיכון הובילו אותנו להקים את החווה — מקום שבו אדמה, אנשים ותהליך נפגשים.
            </p>
            <div className="flex justify-center md:justify-start gap-8 pt-2">
              <div className="text-center md:text-right">
                <p className="text-3xl font-black text-primary">6</p>
                <p className="text-sm text-gray-500">חודשי תהליך</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-black text-primary">13–17</p>
                <p className="text-sm text-gray-500">גילאי הנוער</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-black text-primary">3</p>
                <p className="text-sm text-gray-500">מייסדים מנוסים</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              icon: <Sprout className="w-8 h-8" />,
              title: 'צמיחה מהאדמה',
              desc: 'עבודה חקלאית כבסיס לתהליך ריפוי והעצמה אישית',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'יחס אישי',
              desc: 'ליווי צמוד של כל נער ונערה לאורך כל התהליך',
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: 'חזרה למסגרת',
              desc: 'המטרה היא לא להחליף את בית הספר, אלא להחזיר אליו',
            },
            {
              icon: <HeartHandshake className="w-8 h-8" />,
              title: 'שיתוף הורים',
              desc: 'הדרכה הורית כחלק אינטגרלי מהתהליך הטיפולי',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-earth/30 hover:border-primary/20`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
