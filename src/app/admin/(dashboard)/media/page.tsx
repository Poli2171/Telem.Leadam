'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Image as ImageIcon } from 'lucide-react'

export default function MediaPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-dark">ספריית מדיה</h1>
        <p className="text-gray-500 mt-1">ניהול תמונות וקבצים</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-primary" />
            מדיה
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-16 text-gray-400">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <h3 className="text-lg font-medium mb-2">ספריית המדיה</h3>
            <p className="text-sm">העלאת תמונות וקבצים תהיה זמינה בקרוב.</p>
            <p className="text-sm mt-1">כרגע ניתן להשתמש ב-URL חיצוני לתמונות.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
