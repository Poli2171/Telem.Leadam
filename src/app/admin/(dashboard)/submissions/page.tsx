'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Eye, Trash2, Phone, Mail, Loader2 } from 'lucide-react'

interface Submission {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  read: boolean
  createdAt: string
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Submission | null>(null)

  useEffect(() => {
    fetch('/api/submissions')
      .then((r) => r.json())
      .then((data) => {
        setSubmissions(data)
        setLoading(false)
      })
  }, [])

  const markRead = async (id: string) => {
    await fetch(`/api/submissions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read: true }),
    })
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, read: true } : s))
    )
  }

  const deleteSubmission = async (id: string) => {
    await fetch(`/api/submissions/${id}`, { method: 'DELETE' })
    setSubmissions((prev) => prev.filter((s) => s.id !== id))
    if (selected?.id === id) setSelected(null)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-dark">פניות</h1>
        <p className="text-gray-500 mt-1">{submissions.length} פניות סה&quot;כ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MessageSquare className="w-5 h-5 text-primary" />
                רשימת פניות
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submissions.length === 0 ? (
                <p className="text-gray-400 text-center py-8">אין פניות</p>
              ) : (
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {submissions.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSelected(sub)
                        if (!sub.read) markRead(sub.id)
                      }}
                      className={`w-full text-right p-4 rounded-xl transition-all ${
                        selected?.id === sub.id
                          ? 'bg-primary/10 border border-primary/20'
                          : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-secondary-dark">{sub.name}</span>
                        {!sub.read && <Badge variant="default" className="text-[10px] px-2 py-0.5">חדש</Badge>}
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(sub.createdAt).toLocaleDateString('he-IL')} — {sub.email}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{selected.name}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:bg-red-50"
                    onClick={() => deleteSubmission(selected.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail className="w-4 h-4" />
                      {selected.email}
                    </div>
                    {selected.phone && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone className="w-4 h-4" />
                        <span dir="ltr">{selected.phone}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(selected.createdAt).toLocaleString('he-IL')}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-secondary-dark leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${selected.email}`}>
                        <Mail className="w-4 h-4 ml-2" />
                        שליחת מייל
                      </a>
                    </Button>
                    {selected.phone && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${selected.phone}`}>
                          <Phone className="w-4 h-4 ml-2" />
                          התקשרות
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-20 text-center text-gray-400">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>בחרו פנייה מהרשימה לצפייה</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
