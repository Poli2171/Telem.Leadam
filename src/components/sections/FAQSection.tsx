'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: 'לאיזה גילאים מיועדת התוכנית?',
    a: 'התוכנית מיועדת לבני ובנות נוער בגילאי 13-17, הנמצאים בתהליך נשירה גלויה או סמויה מהמערכת החינוכית.',
  },
  {
    q: 'כמה זמן נמשך התהליך?',
    a: 'התהליך בתלם לאדם אורך כחצי שנה — מעין "טירונות לחיים". לאחר מכן, החניכים מצטרפים לקבוצת בוגרים להמשך ליווי ותמיכה.',
  },
  {
    q: 'האם התוכנית מחליפה את בית הספר?',
    a: 'לא. המטרה המרכזית היא להחזיר את הנערים למסגרת החינוכית הרגילה. אנחנו לא מחליפים את בית הספר, אלא מכינים את הנער לחזור אליו — עם כלים, ביטחון ותמיכה.',
  },
  {
    q: 'מה התפקיד של ההורים בתהליך?',
    a: 'ההורים הם חלק אינטגרלי מהתהליך. הם עוברים הדרכה הורית מקצועית בגישת ה"סמכות החדשה", ומלווים לאורך כל הדרך — כולל לאחר חזרת הנער למסגרת.',
  },
  {
    q: 'אילו פעילויות מתקיימות בחווה?',
    a: 'בחווה מתקיימות סדנאות מגוונות: חקלאות ועבודת אדמה, סדנת כלבים טיפולית, נגרות, בישול, אפייה, ומסעות שטח אתגריים. כל הפעילויות מתוכננות כאמצעים טיפוליים לחיזוק הביטחון, המסוגלות והערך העצמי.',
  },
  {
    q: 'איך מתקבלים לתוכנית?',
    a: 'ההפניה יכולה להגיע ממסגרות חינוכיות, רשויות מקומיות, גורמי רווחה או ישירות מהמשפחה. צרו איתנו קשר ונשמח ללוות אתכם בתהליך הקבלה.',
  },
  {
    q: 'האם ניתן לתרום או לתמוך בפרויקט?',
    a: 'בהחלט! תלם לאדם פועל כעמותה וכל תרומה מסייעת בהרחבת הפעילות וקבלת עוד נערים ונערות. ניתן לתרום, להיות שותפים עסקיים, או לסייע בהתנדבות.',
  },
  {
    q: 'מה קורה אחרי סיום התוכנית?',
    a: 'לאחר סיום התהליך בחווה, החניכים חוזרים למסגרת החינוכית עם ליווי צמוד. הם מצטרפים לקבוצת בוגרים של תלם לאדם לשמירה על הקשר, התמיכה והתפקוד לאורך זמן.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-earth-light/30 to-warm-bg">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary font-bold text-sm tracking-wide mb-3">שאלות נפוצות</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary-dark mb-6">
            שאלות <span className="text-gradient-green">ותשובות</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full mx-auto" />
        </div>

        <div className="reveal bg-white rounded-3xl shadow-sm border border-earth/20 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-right text-secondary-dark hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
