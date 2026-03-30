import { Leaf, Clock, RotateCcw, Shield, ArrowLeftRight } from 'lucide-react'

export default function SolutionSection() {
  return (
    <section id="solution" className="section-padding bg-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">הגישה שלנו</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            <span className="text-gradient-green">טירונות לחיים</span> — המודל של תלם לאדם
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            תוכנית ייחודית והוליסטית שאורכת כחצי שנה, המשלבת נערים, הורים והמסגרת החינוכית — ונועדה להחזיר לנערים בני 13-17 את האמונה בעצמם ולספק להם כלים לחזור לתפקוד.
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="reveal bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">תהליך של כחצי שנה</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                לא להחליף את המסגרת — אלא להחזיר אליה
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                בניגוד למסגרות הקיימות המתמקדות במתן חלופה לבית הספר, אנחנו מאמינים שהמטרה היא להחזיר את הנערים למסלול חיים תפקודי. כולל ליווי תהליכי שלהם ושל הוריהם גם לאחר ההשתלבות חזרה.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Leaf className="w-6 h-6" />, label: 'עבודת אדמה', desc: 'חיבור לטבע ולשורשים' },
                { icon: <Shield className="w-6 h-6" />, label: 'ביטחון עצמי', desc: 'חיזוק תחושת המסוגלות' },
                { icon: <ArrowLeftRight className="w-6 h-6" />, label: 'שיתוף מלא', desc: 'נערים, הורים ומסגרת' },
                { icon: <RotateCcw className="w-6 h-6" />, label: 'ליווי המשך', desc: 'גם אחרי החזרה' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.label}</h4>
                  <p className="text-white/70 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
