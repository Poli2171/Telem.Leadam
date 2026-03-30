import { AlertTriangle, Eye, EyeOff, TrendingDown } from 'lucide-react'

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-gradient-to-b from-earth-light/50 to-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-secondary font-bold text-sm tracking-wide mb-3">הבעיה</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            נשירה — <span className="text-gradient-earth">המשבר השקט</span>
          </h2>
          <div className="w-20 h-1 bg-secondary/30 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Side */}
          <div className="reveal">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-earth/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <div className="text-4xl font-black text-secondary-dark">90,000</div>
                  <div className="text-gray-500 text-sm">תלמידים ותלמידות נושרים בישראל</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream/50">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <EyeOff className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-dark mb-1">נושרים סמויים</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      על כל תלמיד נושר רשום, ישנם עוד <strong className="text-secondary">שלושה נושרים סמויים</strong> — תלמידים הרשומים במסגרת חינוכית אך נעדרים פיזית או נפשית.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream/50">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-dark mb-1">הסכנות ברורות</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      תלמיד נושר עלול להידרדר לדפוס עברייני או לאי תפקוד, והתופעה משפיעה על החברה כולה בכל מימד.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream/50">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-dark mb-1">החלופה הקיימת אינה מספקת</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      המסגרות הקיימות אינן עוסקות במניעת נשירה והשבת נערים למסגרת החינוכית, אלא מתמקדות במתן חלופה לבית הספר.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Side */}
          <div className="reveal reveal-delay-2">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 md:p-10 border border-primary/10">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-6 leading-tight">
                מאחורי כל מספר יש נער, נערה, משפחה שלמה
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                נשירה מהמערכת החינוכית היא לא רק נתון סטטיסטי. היא סיפור של ילד שאיבד את הדרך, של הורים שמרגישים חסרי אונים, של מורים שרוצים לעזור אך לא מצליחים.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                הבעיה רחבה יותר ממה שהנתונים מראים: מעבר לנושרים הרשומים, ישנם אלפי נערים ונערות שנמצאים פיזית בכיתה אך נפשית — במקום אחר.
              </p>

              {/* Visual stat */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-500">על כל נושר רשום</span>
                </div>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-red-600">1</span>
                  </div>
                  <span className="text-2xl text-gray-300 rotate-90 sm:rotate-0">→</span>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center border-2 border-dashed border-secondary/30">
                        <span className="text-lg font-bold text-secondary/60">?</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-sm font-medium text-secondary">3 נושרים סמויים נוספים</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
