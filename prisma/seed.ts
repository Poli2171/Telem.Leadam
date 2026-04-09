import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  await prisma.adminUser.upsert({
    where: { email: 'admin@telem-leadam.org.il' },
    update: {},
    create: {
      email: 'admin@telem-leadam.org.il',
      password: hashedPassword,
      name: 'מנהל מערכת',
    },
  })
  console.log('Admin user created: admin@telem-leadam.org.il / admin123')

  // Site Settings
  await prisma.siteSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      siteName: 'תלם לאדם',
      seoTitle: 'תלם לאדם - מטפלים מהשורש | חווה חקלאית חינוכית-טיפולית',
      seoDescription: 'חווה חקלאית חינוכית-טיפולית למניעת נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17. תהליך של חצי שנה המשלב עבודת אדמה, סדנאות, הדרכה הורית וחזרה למסגרת חינוכית.',
      donationLink: 'https://example.com/donate',
      phone: '054-XXX-XXXX',
      email: 'info@telem-leadam.org.il',
      address: 'ישראל',
      footerText: 'חווה חקלאית חינוכית-טיפולית למניעת נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17. מחזירים לנערים את האמונה בעצמם.',
    },
  })

  // Sections
  const sections = [
    {
      id: 'hero',
      type: 'hero',
      sortOrder: 0,
      content: {
        headline: 'תלם לאדם',
        subheadline: 'מחזירים נערים ונערות לתלם',
        description: 'חווה חינוכית - חקלאית המציעה תכנית ייחודית הוליסטית לבני ובנות נוער בגילאי 13-17, בתהליכי נשירה, שתהווה חממה חצמיחה אישית של החניכים, תוך סיפוק כלים וכישורים משמעותיים להשתלבות במסגרת החינוכית ובחברה תוך כ- 6 חודשים.',
        badge: 'חווה חקלאית חינוכית-טיפולית',
        cta_primary: 'גלו את הסיפור שלנו',
        cta_secondary: 'תרומה',
        quote: 'מטרת העל שלנו היא לא להשאיר את הנערים אצלנו לנצח, אלא להחזיר אותם למסלול כשהם עומדים זקופים, בטוחים ומאמינים.',
      },
    },
    {
      id: 'about',
      type: 'about',
      sortOrder: 1,
      content: {
        label: 'מי אנחנו',
        headline: 'תלם לאדם — מטפלים מהשורש',
        description: '״תלם לאדם״ היא חווה חקלאית חינוכית-טיפולית שנועדה למנוע נשירה ואי תפקוד של בני ובנות נוער בגילאי 13-17. אנחנו מציעים תוכנית ייחודית והוליסטית — מעין ״טירונות לחיים״ — שמשלבת עבודת אדמה, סדנאות חווייתיות, הדרכה הורית ועבודה עם המסגרת החינוכית.',
      },
    },
    {
      id: 'problem',
      type: 'problem',
      sortOrder: 2,
      content: {
        label: 'הבעיה',
        headline: 'נשירה — המשבר השקט',
        stat_number: '90,000',
        stat_label: 'תלמידים ותלמידות נושרים בישראל',
        hidden_dropout: 'על כל תלמיד נושר רשום, ישנם עוד שלושה נושרים סמויים — תלמידים הרשומים במסגרת חינוכית אך נעדרים פיזית או נפשית.',
        consequences: 'תלמיד נושר עלול להידרדר לדפוס עברייני או לאי תפקוד, והתופעה משפיעה על החברה כולה בכל מימד.',
        gap: 'המסגרות הקיימות אינן עוסקות במניעת נשירה והשבת נערים למסגרת החינוכית, אלא מתמקדות במתן חלופה לבית הספר.',
      },
    },
    {
      id: 'solution',
      type: 'solution',
      sortOrder: 3,
      content: {
        label: 'הגישה שלנו',
        headline: 'טירונות לחיים — המודל של תלם לאדם',
        description: 'תוכנית ייחודית והוליסטית שאורכת כחצי שנה, המשלבת נערים, הורים והמסגרת החינוכית — ונועדה להחזיר לנערים בני 13-17 את האמונה בעצמם ולספק להם כלים לחזור לתפקוד.',
        main_message: 'לא להחליף את המסגרת — אלא להחזיר אליה',
        duration: 'תהליך של כחצי שנה',
      },
    },
    {
      id: 'pillars',
      type: 'pillars',
      sortOrder: 4,
      content: {
        label: 'מרכיבי התשתית',
        headline: 'שלושת עמודי התווך',
        description: 'התשתית החינוכית-טיפולית של תלם לאדם מבוססת על שלושה מרכיבים שפועלים יחד',
      },
    },
    {
      id: 'activities',
      type: 'activities',
      sortOrder: 5,
      content: {
        label: 'פעילויות וסדנאות',
        headline: 'חוויות שמשנות מהיסוד',
        description: 'סדנאות חווייתיות ומגוונות המשמשות כאמצעים להקניית והעצמת כישורים אישיים וחברתיים',
      },
    },
    {
      id: 'process',
      type: 'process',
      sortOrder: 6,
      content: {
        label: 'התהליך',
        headline: 'המסע של כל נער ונערה',
        description: 'תהליך מובנה של כחצי שנה — מהאיתור ועד לחזרה מלאה למסגרת החינוכית',
      },
    },
    {
      id: 'audiences',
      type: 'audiences',
      sortOrder: 7,
      content: {
        label: 'למי מיועד',
        headline: 'ביחד — לשינוי אמיתי',
      },
    },
    {
      id: 'impact',
      type: 'impact',
      sortOrder: 8,
      content: {
        label: 'השפעה ומטרות',
        headline: 'מטרות אופרטיביות',
        quote: 'המטרה היא להשיב את הנערים למסלול חיים תפקודי ומיטיב, לתלם חדש, כשהם עומדים זקופים ומאמינים ביכולותיהם.',
      },
    },
    {
      id: 'partners',
      type: 'partners',
      sortOrder: 9,
      content: {
        label: 'שותפויות',
        headline: 'הצטרפו למעגל ההשפעה',
        description: 'השינוי האמיתי קורה כשכולם שותפים. ישנן דרכים רבות להיות חלק מתלם לאדם.',
        cta_headline: 'רוצים להיות חלק מהשינוי?',
        cta_description: 'כל תרומה, כל שיתוף פעולה, כל חיבור — מקרב עוד נער ונערה לתלם חדש ומיטיב',
      },
    },
  ]

  for (const section of sections) {
    await prisma.section.upsert({
      where: { id: section.id },
      update: { content: JSON.stringify(section.content) },
      create: {
        id: section.id,
        type: section.type,
        sortOrder: section.sortOrder,
        content: JSON.stringify(section.content),
      },
    })
  }

  // Team Members
  const teamMembers = [
    {
      name: 'איתי קסטרו',
      role: 'מייסד ומנהל חינוכי',
      bio: 'מורה, מחנך ומדריך הורים. בעל תואר שני בחינוך, תעודת הוראה, ומדריך הורים מוסמך בגישת ה"סמכות החדשה". בעל ניסיון עשיר של 12 שנים בעבודה עם נוער במצבי סיכון. בעבר ניהל את התכנית החינוכית "בשביל" בהרצליה ואת מכינת נחשון בקיבוץ שובל. לאחר מספר שנים כמחנך כיתות אומץ, איתי החליט ליזום תכנית חינוכית-טיפולית הוליסטית וחדשנית למניעת נשירה.',
      sortOrder: 0,
    },
    {
      name: 'עידו פוליצר',
      role: 'מייסד ומנכ"ל העמותה',
      bio: 'בעל רקע עשיר בניהול פרויקטים, קרנות נדל"ן וייעוץ אסטרטגי לתשתיות. בוגר תואר ראשון בכלכלה עם התמחות במימון. האיש שמתרגם את החזון החינוכי למציאות בת-קיימא. אמון על הקמת התשתית הפיזית ובניית המודל הכלכלי, מתוך תפיסה שיציבות תפעולית ופיננסית היא הבסיס לביטחון הרגשי של בני הנוער.',
      sortOrder: 1,
    },
    {
      name: 'חנוך טיאר',
      role: 'מייסד ורכז פדגוגי',
      bio: 'מורה ומוזיקאי-יוצר. בעל תואר ראשון בחינוך ומקרא ותעודת הוראה. ניסיון של כ-15 שנה בחינוך פורמאלי ובלתי פורמאלי, עם התמחות בחטיבת הביניים. יוצר ומנחה סדנאות כתיבה יוצרת בנושא זהות, המהוות נדבך רגשי וחינוכי משמעותי בתכנית החווה.',
      sortOrder: 2,
    },
  ]

  for (const member of teamMembers) {
    const existing = await prisma.teamMember.findFirst({ where: { name: member.name } })
    if (!existing) {
      await prisma.teamMember.create({ data: member })
    }
  }

  // FAQs
  const faqs = [
    { question: 'לאיזה גילאים מיועדת התוכנית?', answer: 'התוכנית מיועדת לבני ובנות נוער בגילאי 13-17, הנמצאים בתהליך נשירה גלויה או סמויה מהמערכת החינוכית.', sortOrder: 0 },
    { question: 'כמה זמן נמשך התהליך?', answer: 'התהליך בתלם לאדם אורך כחצי שנה — מעין "טירונות לחיים". לאחר מכן, החניכים מצטרפים לקבוצת בוגרים להמשך ליווי ותמיכה.', sortOrder: 1 },
    { question: 'האם התוכנית מחליפה את בית הספר?', answer: 'לא. המטרה המרכזית היא להחזיר את הנערים למסגרת החינוכית הרגילה. אנחנו לא מחליפים את בית הספר, אלא מכינים את הנער לחזור אליו — עם כלים, ביטחון ותמיכה.', sortOrder: 2 },
    { question: 'מה התפקיד של ההורים בתהליך?', answer: 'ההורים הם חלק אינטגרלי מהתהליך. הם עוברים הדרכה הורית מקצועית בגישת ה"סמכות החדשה", ומלווים לאורך כל הדרך — כולל לאחר חזרת הנער למסגרת.', sortOrder: 3 },
    { question: 'אילו פעילויות מתקיימות בחווה?', answer: 'בחווה מתקיימות סדנאות מגוונות: חקלאות ועבודת אדמה, סדנת כלבים טיפולית, נגרות, בישול, אפייה, ומסעות שטח אתגריים. כל הפעילויות מתוכננות כאמצעים טיפוליים לחיזוק הביטחון, המסוגלות והערך העצמי.', sortOrder: 4 },
    { question: 'איך מתקבלים לתוכנית?', answer: 'ההפניה יכולה להגיע ממסגרות חינוכיות, רשויות מקומיות, גורמי רווחה או ישירות מהמשפחה. צרו איתנו קשר ונשמח ללוות אתכם בתהליך הקבלה.', sortOrder: 5 },
    { question: 'האם ניתן לתרום או לתמוך בפרויקט?', answer: 'בהחלט! תלם לאדם פועל כעמותה וכל תרומה מסייעת בהרחבת הפעילות וקבלת עוד נערים ונערות. ניתן לתרום, להיות שותפים עסקיים, או לסייע בהתנדבות.', sortOrder: 6 },
    { question: 'מה קורה אחרי סיום התוכנית?', answer: 'לאחר סיום התהליך בחווה, החניכים חוזרים למסגרת החינוכית עם ליווי צמוד. הם מצטרפים לקבוצת בוגרים של תלם לאדם לשמירה על הקשר, התמיכה והתפקוד לאורך זמן.', sortOrder: 7 },
  ]

  for (const faq of faqs) {
    const existing = await prisma.fAQ.findFirst({ where: { question: faq.question } })
    if (!existing) {
      await prisma.fAQ.create({ data: faq })
    }
  }

  // Pillars
  const pillars = [
    { title: 'לימודי', description: 'הקניית מיומנויות ואסטרטגיות למידה, צמצום פערים לימודיים, וכן חוויה מתקנת בתפישתם את עצמם כלומדים.', icon: 'BookOpen', sortOrder: 0 },
    { title: 'רגשי-חברתי', description: 'שגרה ושיטת עבודה המושתתות על יחס אישי, חוויות הצלחה בסדנאות חווייתיות ומגוונות, כאמצעים להקניית והעצמת כישורים אישיים וחברתיים.', icon: 'Heart', sortOrder: 1 },
    { title: 'קהילתי', description: 'עבודה בסימביוזה עם המסגרת החינוכית משלב האיתור עד סוף יב\', ושילוב הנחייה הורית כחלק אינטגרלי מהתהליך.', icon: 'Users', sortOrder: 2 },
  ]

  for (const pillar of pillars) {
    const existing = await prisma.pillar.findFirst({ where: { title: pillar.title } })
    if (!existing) {
      await prisma.pillar.create({ data: pillar })
    }
  }

  // Activities
  const activities = [
    { title: 'חקלאות', description: 'עבודת אדמה, גידול ירקות, טיפול בצמחים — חיבור ישיר לטבע ולמעגלי הצמיחה', icon: 'Sprout', sortOrder: 0 },
    { title: 'סדנת כלבים', description: 'עבודה עם כלבים כאמצעי טיפולי לפיתוח אחריות, אמפתיה וקשר רגשי', icon: 'Dog', sortOrder: 1 },
    { title: 'נגרות', description: 'יצירה מעץ — פיתוח סבלנות, דיוק, ותחושת הישג מוחשית', icon: 'Hammer', sortOrder: 2 },
    { title: 'בישול', description: 'הכנת ארוחות מתוצרת החווה — למידה של עבודת צוות ותכנון', icon: 'CookingPot', sortOrder: 3 },
    { title: 'אפייה', description: 'סדנאות אפייה כביטוי יצירתי ולמידה של תהליכים מדויקים', icon: 'Croissant', sortOrder: 4 },
    { title: 'מסעות שטח', description: 'מסעות שטח אתגריים להתגברות על קשיים, בניית חוסן ועבודת צוות', icon: 'Mountain', sortOrder: 5 },
  ]

  for (const activity of activities) {
    const existing = await prisma.activity.findFirst({ where: { title: activity.title } })
    if (!existing) {
      await prisma.activity.create({ data: activity })
    }
  }

  // Process Steps
  const steps = [
    { title: 'איתור והצטרפות', description: 'זיהוי נערים ונערות בתהליך נשירה בשיתוף עם מסגרות חינוכיות, רשויות ומשפחות', stepNumber: 1, icon: 'Search', sortOrder: 0 },
    { title: 'תהליך אישי וקבוצתי', description: 'תוכנית מותאמת אישית הכוללת סדנאות, עבודת אדמה, ליווי רגשי ופיתוח כישורים', stepNumber: 2, icon: 'UserPlus', sortOrder: 1 },
    { title: 'ליווי הורים', description: 'הדרכה הורית בגישת הסמכות החדשה לחיזוק הקשר המשפחתי והתמיכה בתהליך', stepNumber: 3, icon: 'Users', sortOrder: 2 },
    { title: 'עבודה עם המסגרת החינוכית', description: 'שיתוף פעולה צמוד עם בית הספר להכנת הקרקע לחזרה מוצלחת', stepNumber: 4, icon: 'School', sortOrder: 3 },
    { title: 'חזרה לתפקוד במסגרת', description: 'חזרה הדרגתית למסגרת החינוכית עם ליווי צמוד ותמיכה מותאמת', stepNumber: 5, icon: 'RotateCcw', sortOrder: 4 },
    { title: 'ליווי המשך וקבוצת בוגרים', description: 'המשך ליווי ושייכות לקהילת בוגרי תלם לאדם לשמירה על התפקוד לאורך זמן', stepNumber: 6, icon: 'Award', sortOrder: 5 },
  ]

  for (const step of steps) {
    const existing = await prisma.processStep.findFirst({ where: { title: step.title } })
    if (!existing) {
      await prisma.processStep.create({ data: step })
    }
  }

  // Impact Metrics
  const metrics = [
    { label: 'מחויבות לכל חניך', value: '100%', icon: 'Heart', sortOrder: 0 },
    { label: 'חודשי תהליך', value: '~6', icon: 'TrendingUp', sortOrder: 1 },
    { label: 'ממדי טיפול', value: '3', icon: 'Users', sortOrder: 2 },
    { label: 'מטרה — חזרה למסלול', value: '1', icon: 'Target', sortOrder: 3 },
  ]

  for (const metric of metrics) {
    const existing = await prisma.impactMetric.findFirst({ where: { label: metric.label } })
    if (!existing) {
      await prisma.impactMetric.create({ data: metric })
    }
  }

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
