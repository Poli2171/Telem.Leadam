import { Target, TrendingUp, Users, Heart, GraduationCap, Award } from 'lucide-react'
import type { ReactNode } from 'react'

type ImpactMetric = {
  id: string
  label: string
  value: string
  icon?: string | null
}

type SectionContent = {
  label?: string
  headline?: string
  quote?: string
}

type Props = {
  metrics?: ImpactMetric[]
  content?: SectionContent
}

const iconMap: Record<string, ReactNode> = {
  Heart: <Heart className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Target: <Target className="w-7 h-7" />,
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
}

const metricColors = ['text-primary', 'text-secondary', 'text-sky-600', 'text-amber-600']

const defaultMetrics: ImpactMetric[] = [
  { id: '1', label: 'מחויבות לכל חניך', value: '100%', icon: 'Heart' },
  { id: '2', label: 'חודשי תהליך', value: '~6', icon: 'TrendingUp' },
  { id: '3', label: 'ממדי טיפול', value: '3', icon: 'Users' },
  { id: '4', label: 'מטרה — חזרה למסלול', value: '1', icon: 'Target' },
]

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

export default function ImpactSection({ metrics, content }: Props) {
  const displayMetrics = metrics && metrics.length > 0 ? metrics : defaultMetrics
  const label = content?.label || 'השפעה ומטרות'
  const headline = content?.headline || 'מטרות אופרטיביות'
  const quote = content?.quote || 'המטרה היא להשיב את הנערים למסלול חיים תפקודי ומיטיב, לתלם חדש, כשהם עומדים זקופים ומאמינים ביכולותיהם.'

  return (
    <section id="impact" className="section-padding bg-gradient-to-b from-warm-bg via-primary/5 to-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">{label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            <span className="text-gradient-green">{headline}</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto" />
        </div>

        {/* Metrics Bar */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {displayMetrics.map((metric, i) => {
            const color = metricColors[i % metricColors.length]
            const icon = (metric.icon && iconMap[metric.icon]) || <Heart className="w-6 h-6" />
            return (
              <div key={metric.id} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-earth/20">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 ${color} mb-3`}>
                  {icon}
                </div>
                <div className={`text-3xl font-black ${color} mb-1`}>{metric.value}</div>
                <div className="text-sm text-gray-500">{metric.label}</div>
              </div>
            )
          })}
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

        {/* Quote */}
        <div className="mt-16 reveal reveal-delay-3">
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
            <div className="text-4xl mb-4 opacity-30">&ldquo;</div>
            <p className="text-xl md:text-2xl text-secondary-dark font-medium leading-relaxed max-w-2xl mx-auto mb-4">
              {quote}
            </p>
            <p className="text-primary font-bold">— תלם לאדם</p>
          </div>
        </div>
      </div>
    </section>
  )
}
