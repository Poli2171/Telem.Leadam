import Image from 'next/image'

type Activity = {
  id: string
  title: string
  description: string
  icon: string
}

type SectionContent = {
  label?: string
  headline?: string
  description?: string
}

type Props = {
  activities?: Activity[]
  content?: SectionContent
}

// Hardcoded images per activity title (fallback by index)
const activityImages = [
  { title: 'חקלאות', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', color: 'bg-primary' },
  { title: 'סדנת כלבים', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80', color: 'bg-secondary' },
  { title: 'נגרות', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80', color: 'bg-amber-600' },
  { title: 'בישול', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', color: 'bg-orange-500' },
  { title: 'אפייה', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', color: 'bg-rose-500' },
  { title: 'מסעות שטח', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80', color: 'bg-sky-600' },
]

const fallbackColors = ['bg-primary', 'bg-secondary', 'bg-amber-600', 'bg-orange-500', 'bg-rose-500', 'bg-sky-600']

function getActivityImage(title: string, index: number) {
  const match = activityImages.find(a => a.title === title)
  if (match) return match
  return { title, image: activityImages[index % activityImages.length].image, color: fallbackColors[index % fallbackColors.length] }
}

const defaultActivities: Activity[] = [
  { id: '1', title: 'חקלאות', description: 'עבודת אדמה, גידול ירקות, טיפול בצמחים — חיבור ישיר לטבע ולמעגלי הצמיחה', icon: 'Sprout' },
  { id: '2', title: 'סדנת כלבים', description: 'עבודה עם כלבים כאמצעי טיפולי לפיתוח אחריות, אמפתיה וקשר רגשי', icon: 'Dog' },
  { id: '3', title: 'נגרות', description: 'יצירה מעץ — פיתוח סבלנות, דיוק, ותחושת הישג מוחשית', icon: 'Hammer' },
  { id: '4', title: 'בישול', description: 'הכנת ארוחות מתוצרת החווה — למידה של עבודת צוות ותכנון', icon: 'CookingPot' },
  { id: '5', title: 'אפייה', description: 'סדנאות אפייה כביטוי יצירתי ולמידה של תהליכים מדויקים', icon: 'Croissant' },
  { id: '6', title: 'מסעות שטח', description: 'מסעות שטח אתגריים להתגברות על קשיים, בניית חוסן ועבודת צוות', icon: 'Mountain' },
]

export default function ActivitiesSection({ activities, content }: Props) {
  const displayActivities = activities && activities.length > 0 ? activities : defaultActivities
  const label = content?.label || 'פעילויות וסדנאות'
  const headline = content?.headline || 'חוויות שמשנות מהיסוד'
  const description = content?.description || 'סדנאות חווייתיות ומגוונות המשמשות כאמצעים להקניית והעצמת כישורים אישיים וחברתיים'

  return (
    <section id="activities" className="section-padding bg-warm-bg nature-pattern">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">{label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            <span className="text-gradient-green">{headline}</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayActivities.map((activity, i) => {
            const visual = getActivityImage(activity.title, i)
            return (
              <div
                key={activity.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} group bg-white rounded-2xl overflow-hidden shadow-sm border border-earth/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={visual.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute bottom-3 right-3 ${visual.color} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                    {activity.title}
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 text-center md:text-right">
                  <h3 className="text-xl font-bold text-secondary-dark mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
