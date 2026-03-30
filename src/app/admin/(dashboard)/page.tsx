import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, Users, HelpCircle, FileText, Eye, EyeOff } from 'lucide-react'
export default async function AdminDashboard() {
  const [submissionCount, unreadCount, teamCount, faqCount, sectionCount] = await Promise.all([
    prisma.submission.count(),
    prisma.submission.count({ where: { read: false } }),
    prisma.teamMember.count(),
    prisma.fAQ.count(),
    prisma.section.count(),
  ])

  const recentSubmissions = await prisma.submission.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-dark">סקירה כללית</h1>
        <p className="text-gray-500 mt-1">ברוכים הבאים ללוח הניהול של תלם לאדם</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'פניות חדשות', value: unreadCount, total: submissionCount, icon: MessageSquare, color: 'text-blue-600 bg-blue-100' },
          { label: 'חברי צוות', value: teamCount, icon: Users, color: 'text-primary bg-primary/10' },
          { label: 'שאלות נפוצות', value: faqCount, icon: HelpCircle, color: 'text-amber-600 bg-amber-100' },
          { label: 'סקשנים', value: sectionCount, icon: FileText, color: 'text-purple-600 bg-purple-100' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-secondary-dark mt-1">{stat.value}</p>
                  {'total' in stat && stat.total !== undefined && (
                    <p className="text-xs text-gray-400 mt-1">מתוך {stat.total} סה&quot;כ</p>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            פניות אחרונות
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentSubmissions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">אין פניות עדיין</p>
          ) : (
            <div className="space-y-3">
              {recentSubmissions.map((sub) => (
                <div key={sub.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    {sub.read ? (
                      <Eye className="w-4 h-4 text-gray-400" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-blue-500" />
                    )}
                    <div>
                      <div className="font-medium text-secondary-dark">{sub.name}</div>
                      <div className="text-sm text-gray-500">{sub.email}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(sub.createdAt).toLocaleDateString('he-IL')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
