'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      })
      if (res.ok) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      }
    } catch {
      // silently fail
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-warm-bg">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">צרו קשר</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            <span className="text-gradient-green">דברו איתנו</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            נשמח לשמוע מכם — בין אם אתם הורים, מחנכים, נציגי רשות, או כל מי שרוצה להיות חלק מהשינוי
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 reveal">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">טלפון</div>
                      <div className="font-medium" dir="ltr">054-XXX-XXXX</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">אימייל</div>
                      <div className="font-medium">info@telem-leadam.org.il</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">כתובת</div>
                      <div className="font-medium">ישראל</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">WhatsApp</div>
                      <div className="font-medium">שלחו לנו הודעה</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/15">
                  <p className="text-white/70 text-sm leading-relaxed">
                    אנחנו כאן עבורכם. אל תהססו ליצור קשר בכל שאלה, בקשה, או רצון להצטרף למעגל ההשפעה של תלם לאדם.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-earth/20">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-dark mb-3">ההודעה נשלחה בהצלחה!</h3>
                  <p className="text-gray-600 mb-6">תודה שפניתם אלינו. נחזור אליכם בהקדם.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">
                    שליחת הודעה נוספת
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="mb-2 block text-secondary-dark">שם מלא *</Label>
                      <Input id="name" name="name" required placeholder="השם שלכם" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2 block text-secondary-dark">טלפון</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="050-0000000" dir="ltr" className="text-right" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2 block text-secondary-dark">אימייל *</Label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" dir="ltr" className="text-right" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block text-secondary-dark">הודעה *</Label>
                    <Textarea id="message" name="message" required placeholder="ספרו לנו כיצד נוכל לעזור..." rows={5} />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-5 h-5 ml-2" />
                    {isSubmitting ? 'שולח...' : 'שליחת הודעה'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
