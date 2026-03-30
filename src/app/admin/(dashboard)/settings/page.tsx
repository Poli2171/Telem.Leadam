'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Settings, Save, Loader2, CheckCircle2 } from 'lucide-react'

interface SiteSettings {
  siteName: string
  seoTitle: string
  seoDescription: string
  ogImage: string | null
  donationLink: string | null
  phone: string | null
  email: string | null
  address: string | null
  whatsapp: string | null
  facebook: string | null
  instagram: string | null
  footerText: string | null
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/settings')
      .then((r) => r.json())
      .then((data) => {
        setSettings(data)
        setLoading(false)
      })
  }, [])

  const handleSave = async () => {
    if (!settings) return
    setSaving(true)
    setSaved(false)
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const update = (key: keyof SiteSettings, value: string) => {
    if (!settings) return
    setSettings({ ...settings, [key]: value || null })
  }

  if (loading || !settings) {
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
          <h1 className="text-3xl font-bold text-secondary-dark">הגדרות אתר</h1>
          <p className="text-gray-500 mt-1">הגדרות כלליות, SEO ופרטי קשר</p>
        </div>
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saved ? 'נשמר!' : 'שמירה'}
        </Button>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Settings className="w-5 h-5 text-primary" />כללי</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2 block">שם האתר</Label>
                <Input value={settings.siteName} onChange={(e) => update('siteName', e.target.value)} />
              </div>
              <div>
                <Label className="mb-2 block">קישור תרומה</Label>
                <Input value={settings.donationLink || ''} onChange={(e) => update('donationLink', e.target.value)} dir="ltr" placeholder="https://..." />
              </div>
            </div>
            <div>
              <Label className="mb-2 block">טקסט פוטר</Label>
              <Textarea value={settings.footerText || ''} onChange={(e) => update('footerText', e.target.value)} rows={2} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>SEO</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-2 block">כותרת SEO</Label>
              <Input value={settings.seoTitle} onChange={(e) => update('seoTitle', e.target.value)} />
            </div>
            <div>
              <Label className="mb-2 block">תיאור SEO</Label>
              <Textarea value={settings.seoDescription} onChange={(e) => update('seoDescription', e.target.value)} rows={3} />
            </div>
            <div>
              <Label className="mb-2 block">OG Image URL</Label>
              <Input value={settings.ogImage || ''} onChange={(e) => update('ogImage', e.target.value)} dir="ltr" placeholder="https://..." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>פרטי קשר</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2 block">טלפון</Label>
                <Input value={settings.phone || ''} onChange={(e) => update('phone', e.target.value)} dir="ltr" />
              </div>
              <div>
                <Label className="mb-2 block">אימייל</Label>
                <Input value={settings.email || ''} onChange={(e) => update('email', e.target.value)} dir="ltr" />
              </div>
              <div>
                <Label className="mb-2 block">כתובת</Label>
                <Input value={settings.address || ''} onChange={(e) => update('address', e.target.value)} />
              </div>
              <div>
                <Label className="mb-2 block">WhatsApp</Label>
                <Input value={settings.whatsapp || ''} onChange={(e) => update('whatsapp', e.target.value)} dir="ltr" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>רשתות חברתיות</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2 block">Facebook</Label>
                <Input value={settings.facebook || ''} onChange={(e) => update('facebook', e.target.value)} dir="ltr" placeholder="https://..." />
              </div>
              <div>
                <Label className="mb-2 block">Instagram</Label>
                <Input value={settings.instagram || ''} onChange={(e) => update('instagram', e.target.value)} dir="ltr" placeholder="https://..." />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
