'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQ = {
  id: string
  question: string
  answer: string
}

const defaultFaqs: FAQ[] = [
  {
    id: '1',
    question: 'לאיזה גילאים מיועדת התוכנית?',
    answer: 'התוכנית מיועדת לבני ובנות נוער בגילאי 13-17, הנמצאים בתהליך נשירה גלויה או סמויה מהמערכת החינוכית.',
  },
  {
    id: '2',
    question: 'כמה זמן נמשך התהליך?',
    answer: 'התהליך בתלם לאדם אורך כחצי שנה — מעין "טירונות לחיים". לאחר מכן, החניכים מצטרפים לקבוצת בוגרים להמשך ליווי ותמיכה.',
  },
  {
    id: '3',
    question: 'האם התוכנית מחליפה את בית הספר?',
    answer: 'לא. המטרה המרכזית היא להחזיר את הנערים למסגרת החינוכית הרגילה. אנחנו לא מחליפים את בית הספר, אלא מכינים את הנער לחזור אליו — עם כלים, ביטחון ותמיכה.',
  },
  {
    id: '4',
    question: 'מה התפקיד של ההורים בתהליך?',
    answer: 'ההורים הם חלק אינטגרלי מהתהליך. הם עוברים הדרכה הורית מקצועית בגישת ה"סמכות החדשה", ומלווים לאורך כל הדרך — כולל לאחר חזרת הנער למסגרת.',
  },
  {
    id: '5',
    question: 'אילו פעילויות מתקיימות בחווה?',
    answer: 'בחווה מתקיימות סדנאות מגוונות: חקלאות ועבודת אדמה, סדנת כלבים טיפולית, נגרות, בישול, אפייה, ומסעות שטח אתגריים. כל הפעילויות מתוכננות כאמצעים טיפוליים לחיזוק הביטחון, המסוגלות והערך העצמי.',
  },
  {
    id: '6',
    question: 'איך מתקבלים לתוכנית?',
    answer: 'ההפניה יכולה להגיע ממסגרות חינוכיות, רשויות מקומיות, גורמי רווחה או ישירות מהמשפחה. צרו איתנו קשר ונשמח ללוות אתכם בתהליך הקבלה.',
  },
  {
    id: '7',
    question: 'האם ניתן לתרום או לתמוך בפרויקט?',
    answer: 'בהחלט! תלם לאדם פועל כעמותה וכל תרומה מסייעת בהרחבת הפעילות וקבלת עוד נערים ונערות. ניתן לתרום, להיות שותפים עסקיים, או לסייע בהתנדבות.',
  },
  {
    id: '8',
    question: 'מה קורה אחרי סיום התוכנית?',
    answer: 'לאחר סיום התהליך בחווה, החניכים חוזרים למסגרת החינוכית עם ליווי צמוד. הם מצטרפים לקבוצת בוגרים של תלם לאדם לשמירה על הקשר, התמיכה והתפקוד לאורך זמן.',
  },
]

type Props = {
  faqs?: FAQ[]
}

export default function FAQSection({ faqs }: Props) {
  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs

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
            {displayFaqs.map((faq, i) => (
              <AccordionItem key={faq.id} value={`faq-${i}`}>
                <AccordionTrigger className="text-right text-secondary-dark hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
