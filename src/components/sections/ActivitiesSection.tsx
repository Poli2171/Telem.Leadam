import Image from 'next/image'

const activities = [
  {
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    title: 'חקלאות',
    description: 'עבודת אדמה, גידול ירקות, טיפול בצמחים — חיבור ישיר לטבע ולמעגלי הצמיחה',
    color: 'bg-primary',
  },
  {
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    title: 'סדנת כלבים',
    description: 'עבודה עם כלבים כאמצעי טיפולי לפיתוח אחריות, אמפתיה וקשר רגשי',
    color: 'bg-secondary',
  },
  {
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    title: 'נגרות',
    description: 'יצירה מעץ — פיתוח סבלנות, דיוק, ותחושת הישג מוחשית',
    color: 'bg-amber-600',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    title: 'בישול',
    description: 'הכנת ארוחות מתוצרת החווה — למידה של עבודת צוות ותכנון',
    color: 'bg-orange-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    title: 'אפייה',
    description: 'סדנאות אפייה כביטוי יצירתי ולמידה של תהליכים מדויקים',
    color: 'bg-rose-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
    title: 'מסעות שטח',
    description: 'מסעות שטח אתגריים להתגברות על קשיים, בניית חוסן ועבודת צוות',
    color: 'bg-sky-600',
  },
]

export default function ActivitiesSection() {
  return (
    <section id="activities" className="section-padding bg-warm-bg nature-pattern">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">פעילויות וסדנאות</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            חוויות שמשנות <span className="text-gradient-green">מהיסוד</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            סדנאות חווייתיות ומגוונות המשמשות כאמצעים להקניית והעצמת כישורים אישיים וחברתיים
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group bg-white rounded-2xl overflow-hidden shadow-sm border border-earth/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute bottom-3 right-3 ${activity.color} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                  {activity.title}
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-dark mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
