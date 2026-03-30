'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Users, Plus, Save, Trash2, Loader2, CheckCircle2 } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string | null
  sortOrder: number
  visible: boolean
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<TeamMember | null>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchMembers = async () => {
    const res = await fetch('/api/team')
    const data = await res.json()
    setMembers(data)
    setLoading(false)
  }

  useEffect(() => { fetchMembers() }, [])

  const handleSave = async () => {
    if (!editing) return
    setSaving(true)
    setSaved(false)

    const isNew = !editing.id
    const url = isNew ? '/api/team' : `/api/team/${editing.id}`
    const method = isNew ? 'POST' : 'PUT'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: editing.name,
        role: editing.role,
        bio: editing.bio,
        image: editing.image,
        sortOrder: editing.sortOrder,
        visible: editing.visible,
      }),
    })

    await fetchMembers()
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    setEditing(null)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('האם למחוק את חבר הצוות?')) return
    await fetch(`/api/team/${id}`, { method: 'DELETE' })
    await fetchMembers()
    if (editing?.id === id) setEditing(null)
  }

  const startNew = () => {
    setEditing({
      id: '',
      name: '',
      role: '',
      bio: '',
      image: null,
      sortOrder: members.length,
      visible: true,
    })
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
          <h1 className="text-3xl font-bold text-secondary-dark">צוות</h1>
          <p className="text-gray-500 mt-1">ניהול חברי הצוות והמייסדים</p>
        </div>
        <Button onClick={startNew} className="gap-2">
          <Plus className="w-4 h-4" />
          הוספת חבר צוות
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="w-5 h-5 text-primary" />
                חברי צוות ({members.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                      editing?.id === member.id ? 'bg-primary/10 border border-primary/20' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setEditing(member)}
                  >
                    <div>
                      <div className="font-medium text-secondary-dark">{member.name}</div>
                      <div className="text-xs text-gray-400">{member.role}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-600 hover:bg-red-50 h-8 w-8"
                      onClick={(e) => { e.stopPropagation(); handleDelete(member.id) }}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Editor */}
        <div className="lg:col-span-2">
          {editing ? (
            <Card>
              <CardHeader>
                <CardTitle>{editing.id ? 'עריכה' : 'חבר צוות חדש'}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 block">שם</Label>
                      <Input
                        value={editing.name}
                        onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">תפקיד</Label>
                      <Input
                        value={editing.role}
                        onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="mb-2 block">ביוגרפיה</Label>
                    <Textarea
                      value={editing.bio}
                      onChange={(e) => setEditing({ ...editing, bio: e.target.value })}
                      rows={6}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 block">סדר תצוגה</Label>
                      <Input
                        type="number"
                        value={editing.sortOrder}
                        onChange={(e) => setEditing({ ...editing, sortOrder: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">URL תמונה</Label>
                      <Input
                        value={editing.image || ''}
                        onChange={(e) => setEditing({ ...editing, image: e.target.value || null })}
                        placeholder="https://..."
                        dir="ltr"
                      />
                    </div>
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
                <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>בחרו חבר צוות מהרשימה או הוסיפו חדש</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
