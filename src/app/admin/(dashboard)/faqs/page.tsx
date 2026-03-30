'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { HelpCircle, Plus, Save, Trash2, Loader2, CheckCircle2 } from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
  sortOrder: number
  visible: boolean
}

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<FAQ | null>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchFaqs = async () => {
    const res = await fetch('/api/faqs')
    const data = await res.json()
    setFaqs(data)
    setLoading(false)
  }

  useEffect(() => { fetchFaqs() }, [])

  const handleSave = async () => {
    if (!editing) return
    setSaving(true)
    setSaved(false)

    const isNew = !editing.id
    const url = isNew ? '/api/faqs' : `/api/faqs/${editing.id}`
    const method = isNew ? 'POST' : 'PUT'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: editing.question,
        answer: editing.answer,
        sortOrder: editing.sortOrder,
        visible: editing.visible,
      }),
    })

    await fetchFaqs()
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    setEditing(null)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('האם למחוק את השאלה?')) return
    await fetch(`/api/faqs/${id}`, { method: 'DELETE' })
    await fetchFaqs()
    if (editing?.id === id) setEditing(null)
  }

  const startNew = () => {
    setEditing({ id: '', question: '', answer: '', sortOrder: faqs.length, visible: true })
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-dark">שאלות נפוצות</h1>
          <p className="text-gray-500 mt-1">ניהול שאלות ותשובות</p>
        </div>
        <Button onClick={startNew} className="gap-2">
          <Plus className="w-4 h-4" />
          הוספת שאלה
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <HelpCircle className="w-5 h-5 text-primary" />
                שאלות ({faqs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                      editing?.id === faq.id ? 'bg-primary/10 border border-primary/20' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setEditing(faq)}
                  >
                    <div className="font-medium text-secondary-dark text-sm line-clamp-1 flex-1">{faq.question}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-600 hover:bg-red-50 h-8 w-8 flex-shrink-0"
                      onClick={(e) => { e.stopPropagation(); handleDelete(faq.id) }}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {editing ? (
            <Card>
              <CardHeader>
                <CardTitle>{editing.id ? 'עריכת שאלה' : 'שאלה חדשה'}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <Label className="mb-2 block">שאלה</Label>
                    <Input
                      value={editing.question}
                      onChange={(e) => setEditing({ ...editing, question: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">תשובה</Label>
                    <Textarea
                      value={editing.answer}
                      onChange={(e) => setEditing({ ...editing, answer: e.target.value })}
                      rows={6}
                    />
                  </div>
                  <div className="w-32">
                    <Label className="mb-2 block">סדר</Label>
                    <Input
                      type="number"
                      value={editing.sortOrder}
                      onChange={(e) => setEditing({ ...editing, sortOrder: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={handleSave} disabled={saving} className="gap-2">
                      {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                      {saved ? 'נשמר!' : 'שמירה'}
                    </Button>
                    <Button variant="ghost" onClick={() => setEditing(null)}>ביטול</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-20 text-center text-gray-400">
                <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>בחרו שאלה מהרשימה או הוסיפו חדשה</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
