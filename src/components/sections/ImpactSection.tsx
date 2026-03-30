import { Target, TrendingUp, Users, Heart, GraduationCap, Award } from 'lucide-react'

const goals = [
  {
    icon: <Target className="w-7 h-7" />,
    label: 'רתימה לתכנית',
    value: 'רתימת בני ובנות הנוער בתהליך הנשירה לתכנית וסיום התהליך',
  },
  {
    icon: <Users className="w-7 h-7" />,
    label: 'הדרכה הורית',
    value: 'הורי החניכים יסיימו את תהליך ההדרכה ההורית',
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    label: 'חזרה למסגרת',
    value: 'בתום התקופה החניכים ישובו למסגרת חינוכית',
  },
  {
    icon: <Award className="w-7 h-7" />,
    label: 'קבוצת בוגרים',
    value: 'החניכים ישתתפו בקבוצת בוגרים של תלם לאדם',
  },
]

const metrics = [
  { icon: <Heart className="w-6 h-6" />, value: '100%', label: 'מחויבות לכל חניך', color: 'text-primary' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '~6', label: 'חודשי תהליך', color: 'text-secondary' },
  { icon: <Users className="w-6 h-6" />, value: '3', label: 'ממדי טיפול', color: 'text-sky-600' },
  { icon: <Target className="w-6 h-6" />, value: '1', label: 'מטרה — חזרה למסלול', color: 'text-amber-600' },
]

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-gradient-to-b from-warm-bg via-primary/5 to-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">השפעה ומטרות</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            מטרות <span className="text-gradient-green">אופרטיביות</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto" />
        </div>

        {/* Metrics Bar */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-earth/20">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 ${metric.color} mb-3`}>
                {metric.icon}
              </div>
              <div className={`text-3xl font-black ${metric.color} mb-1`}>{metric.value}</div>
              <div className="text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-2">
          {goals.map((goal, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-earth/20 flex flex-col items-center text-center md:flex-row md:items-start md:text-right gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                {goal.icon}
              </div>
              <div>
                <h3 className="font-bold text-secondary-dark mb-2">{goal.label}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Placeholder */}
        <div className="mt-16 reveal reveal-delay-3">
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
            <div className="text-4xl mb-4 opacity-30">&ldquo;</div>
            <p className="text-xl md:text-2xl text-secondary-dark font-medium leading-relaxed max-w-2xl mx-auto mb-4">
              המטרה היא להשיב את הנערים למסלול חיים תפקודי ומיטיב, לתלם חדש, כשהם עומדים זקופים ומאמינים ביכולותיהם.
            </p>
            <p className="text-primary font-bold">— תלם לאדם</p>
          </div>
        </div>
      </div>
    </section>
  )
}
