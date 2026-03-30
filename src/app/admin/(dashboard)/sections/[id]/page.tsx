'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Save, Loader2, CheckCircle2 } from 'lucide-react'

const sectionNames: Record<string, string> = {
  hero: 'Hero — מסך פתיחה',
  about: 'אודות — מי אנחנו',
  problem: 'הבעיה — נשירה',
  solution: 'הגישה שלנו',
  pillars: 'עמודי תווך',
  activities: 'פעילויות וסדנאות',
  process: 'התהליך',
  audiences: 'קהלי יעד',
  impact: 'השפעה ומטרות',
  partners: 'שותפויות',
}

export default function SectionEditorPage() {
  const params = useParams()
  const sectionId = params.id as string
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch(`/api/sections/${sectionId}`)
      .then((r) => r.json())
      .then((data) => {
        setContent(data.content || {})
        setLoading(false)
      })
      .catch(() => {
        setContent({})
        setLoading(false)
      })
  }, [sectionId])

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)
    try {
      await fetch(`/api/sections/${sectionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {
      // handle error
    } finally {
      setSaving(false)
    }
  }

  const updateField = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }))
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
          <h1 className="text-3xl font-bold text-secondary-dark">
            {sectionNames[sectionId] || sectionId}
          </h1>
          <p className="text-gray-500 mt-1">ערוך את תוכן הסקשן</p>
        </div>
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : saved ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saved ? 'נשמר!' : 'שמירה'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>תוכן הסקשן</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(content).map(([key, value]) => (
              <div key={key}>
                <Label className="mb-2 block font-medium text-secondary-dark capitalize">
                  {key.replace(/_/g, ' ')}
                </Label>
                {typeof value === 'string' && value.length > 100 ? (
                  <Textarea
                    value={value}
                    onChange={(e) => updateField(key, e.target.value)}
                    rows={4}
                    dir="rtl"
                  />
                ) : (
                  <Input
                    value={typeof value === 'string' ? value : JSON.stringify(value)}
                    onChange={(e) => updateField(key, e.target.value)}
                    dir="rtl"
                  />
                )}
              </div>
            ))}

            {Object.keys(content).length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <p>אין תוכן עדיין לסקשן זה</p>
                <p className="text-sm mt-2">תוכן ייווצר אוטומטית בעת הזנת נתוני ברירת מחדל</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
