/**
 * One-time seed script to populate Sanity with existing hardcoded content.
 *
 * Usage:
 *   cd sanity && pnpm install && pnpm seed
 *
 * Requires env vars: SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_TOKEN
 * (SANITY_TOKEN needs write access — create at sanity.io/manage → API → Tokens)
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN!,
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity...");

  // --- Service Categories ---
  const serviceCategories = [
    {
      _type: "serviceCategory" as const,
      _id: "serviceCategory-planning",
      category: "תכנון ובקרה",
      categoryEn: "Planning & Control",
      items: [
        "הקמה ושיפור של מערכי תכנון (S&OP) לסנכרון מלא בין מכירות, תפעול ורכש",
        "שיפור מדדי שירות (OTD/OTIF) וצמצום פערים בין התכנון לביצוע",
        "בניית תחזיות ביקוש מדויקות יותר למניעת חוסרים או עודפים",
        "ייעול תהליכי חיזוי ותכנון ביקושים",
      ],
      order: 1,
    },
    {
      _type: "serviceCategory" as const,
      _id: "serviceCategory-inventory",
      category: "ניהול מלאי ורכש",
      categoryEn: "Inventory & Procurement",
      items: [
        "אופטימיזציה של רמות מלאי: צמצום מלאי מת ושיפור תזרים המזומנים",
        "הטמעת מודלים אנליטיים לניהול מלאי חכם במערכות המידע",
        "ניהול ספקים, רכש ומשלוחי ייבוא/ייצוא",
        "קיצור זמני אספקה (Lead Time) ושיפור אמינות מלאי",
      ],
      order: 2,
    },
    {
      _type: "serviceCategory" as const,
      _id: "serviceCategory-excellence",
      category: "מצוינות תפעולית",
      categoryEn: "Operational Excellence",
      items: [
        "הגדרת KPIs ומדדי ליבה לניהול ביצועים שוטף",
        "אבחון 'צווארי בקבוק' בתהליך ומתן פתרונות להתייעלות מיידית",
        "ליווי טרנספורמציה דיגיטלית והטמעת מערכות תומכות החלטה",
        "עיצוב מבנה ארגוני והגדרות תפקיד התומכים בצרכים העסקיים",
      ],
      order: 3,
    },
  ];

  // --- FAQs ---
  const faqs = [
    {
      _type: "faq" as const,
      _id: "faq-sop",
      question: "מה זה S&OP ולמה זה חשוב לארגון שלי?",
      answer:
        "S&OP (Sales & Operations Planning) הוא תהליך ניהולי מובנה שמסנכרן בין תחזיות המכירות, תכנון הייצור, ניהול המלאי והרכש. המטרה היא ליצור תוכנית עבודה אחת מתואמת שכל הגורמים בארגון פועלים לפיה. ארגונים שמטמיעים S&OP בצורה נכונה רואים בדרך כלל שיפור של 10%-25% במדדי שירות (OTD), צמצום מלאי עודף, והפחתה משמעותית בחוסרים. התהליך מתאים במיוחד לחברות ייצור, יבואנים, ועסקים עם שרשרת אספקה מורכבת.",
      order: 1,
    },
    {
      _type: "faq" as const,
      _id: "faq-timeline",
      question: "כמה זמן לוקח תהליך ייעוץ שרשרת אספקה?",
      answer:
        "משך הייעוץ תלוי בהיקף ובמורכבות הארגון. פרויקט אבחון ממוקד נמשך בדרך כלל 4-6 שבועות. הקמת מערך S&OP מלא או אופטימיזציה של ניהול מלאי נמשכים 3-6 חודשים. פרויקט טרנספורמציה מקיף שכולל שינוי תהליכים, הטמעת מערכות ומבנה ארגוני יכול להימשך 6-18 חודשים. אני מציעה תמיד להתחיל בשלב אבחון קצר שמאפשר להגדיר יעדים מדידים ולבנות תוכנית עבודה מדויקת.",
      order: 2,
    },
    {
      _type: "faq" as const,
      _id: "faq-otd-otif",
      question: "מהם מדדי OTD ו-OTIF ואיך משפרים אותם?",
      answer:
        "OTD (On-Time Delivery) מודד את אחוז ההזמנות שסופקו בזמן שהובטח ללקוח. OTIF (On-Time In-Full) מחמיר יותר ומודד הזמנות שסופקו גם בזמן וגם בכמות המלאה. בתעשייה, יעד סביר הוא OTD מעל 95% ו-OTIF מעל 90%. שיפור המדדים דורש עבודה על מספר חזיתות: דיוק תחזיות ביקוש, אמינות מלאי, זמני ייצור יציבים, וניהול ספקים אפקטיבי. הגישה שלי מתחילה במיפוי הנקודות שגורמות לכשלים ומתמקדת בפתרונות שנותנים תוצאות מהירות.",
      order: 3,
    },
    {
      _type: "faq" as const,
      _id: "faq-industries",
      question: "באילו תעשיות את מתמחה?",
      answer:
        "הניסיון שלי מגיע בעיקר מתעשיית הפארמה (טבע תעשיות פרמצבטיות) ותעשיית הכימיקלים (פיברו). עם זאת, העקרונות של ניהול שרשרת אספקה — תכנון ביקוש, אופטימיזציה של מלאי, ניהול ספקים, ומצוינות תפעולית — רלוונטיים לכל חברת ייצור, יבואנות או הפצה. עבדתי עם ארגונים בתחומי המזון, הקוסמטיקה, הציוד הרפואי, והתעשייה הכללית. הגישה שלי מותאמת תמיד לגודל הארגון, למשאביו ולאתגרים הספציפיים שלו.",
      order: 4,
    },
    {
      _type: "faq" as const,
      _id: "faq-difference",
      question: "מה ההבדל בין יועץ שרשרת אספקה לבין מנהל פרויקטים?",
      answer:
        "מנהל פרויקטים מתמקד בהובלת פרויקט מוגדר — לוחות זמנים, משימות ותקציב. יועץ שרשרת אספקה מביא מומחיות מקצועית עמוקה בתחום עצמו: הוא יודע לאבחן בעיות, לזהות הזדמנויות, ולעצב פתרונות שמבוססים על ניסיון בתעשייה. אני משלבת את שני התפקידים — מביאה ידע מקצועי בשרשרת אספקה יחד עם יכולת הובלת שינוי ארגוני. היתרון הוא שהפתרונות לא רק מתוכננים אלא גם מיושמים בשטח ומשתרשים בארגון.",
      order: 5,
    },
    {
      _type: "faq" as const,
      _id: "faq-start",
      question: "איך מתחילים תהליך ייעוץ?",
      answer:
        "השלב הראשון הוא פגישת היכרות ללא עלות, שבה אני מקשיבה לאתגרים שלכם ומבינה את ההקשר הארגוני. בהמשך, אני מבצעת אבחון מקצועי שכולל מיפוי תהליכים, ניתוח נתונים, וראיונות עם בעלי תפקידים מרכזיים. בסיום האבחון מוגשת תוכנית עבודה מפורטת עם יעדים מדידים, לוחות זמנים וסדרי עדיפויות. כל שלב מותאם לקצב הארגון ולמשאביו. צרו קשר דרך וואטסאפ, טלפון או מייל ונקבע פגישה ראשונית.",
      order: 6,
    },
  ];

  // --- About (singleton) ---
  const about = {
    _type: "about" as const,
    _id: "about-singleton",
    bio: [
      {
        _type: "block",
        _key: "bio1",
        style: "normal",
        markDefs: [
          { _key: "bold1", _type: "strong" },
          { _key: "bold2", _type: "strong" },
        ],
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "עם רקע של 15 שנים בתפקידי ניהול בכירים בשרשראות אספקה גלובליות ומקומיות, כולל תפקיד אחרון כ-",
            marks: [],
          },
          {
            _type: "span",
            _key: "s2",
            text: "Supply Chain Director & Head of IL Supply Chain",
            marks: ["strong"],
          },
          { _type: "span", _key: "s3", text: " בטבע וכ-", marks: [] },
          {
            _type: "span",
            _key: "s4",
            text: "Head of Plant Supply Chain",
            marks: ["strong"],
          },
          {
            _type: "span",
            _key: "s5",
            text: " בפיברו, אני מביאה לשולחן ראייה מערכתית רחבה לצד יכולת ירידה לפרטים הקטנים.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        _key: "bio2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s6",
            text: "המומחיות שלי היא בחיבור בין העולם האסטרטגי לרצפת הייצור: תרגום מטרות עסקיות לתהליכים מדידים, בניית תוכניות עבודה פרקטיות, והובלת שינויים ארגוניים שמחזיקים מעמד לאורך זמן.",
            marks: [],
          },
        ],
      },
    ],
    caseStudy: {
      _type: "object",
      title: "דוגמת פרויקט: חיסכון של 50% בעלויות תפעול",
      description:
        "במסגרת תפקידי כ-Head of Plant Supply Chain, הובלתי פרויקט אופטימיזציה מקיף במפעל ייצור פרמצבטי. האתגר: עלויות תפעול גבוהות, מלאי עודף שתפס הון חוזר משמעותי, וזמני אספקה ארוכים שפגעו ברמת השירות ללקוחות.\n\nהפרויקט כלל אבחון מעמיק של שרשרת האספקה, עיצוב מחדש של תהליכי התכנון והרכש, הטמעת מודלים אנליטיים לניהול מלאי חכם, ואופטימיזציה של בסיס הספקים. במקביל, הגדרנו KPIs ברורים ושגרות ניהול שבועיות למעקב ביצועים.",
      metrics: [
        { _key: "m1", value: "50%", label: "חיסכון בעלויות תפעול" },
        { _key: "m2", value: "18", label: "חודשים עד תוצאות מלאות" },
        { _key: "m3", value: "95%+", label: "מדד OTD לאחר הפרויקט" },
      ],
    },
    badges: [
      { _key: "b1", label: "B.Sc הנדסת תעשייה וניהול" },
      { _key: "b2", label: "15+ שנות ניסיון" },
      { _key: "b3", label: "טבע תעשיות פרמצבטיות" },
      { _key: "b4", label: "פיברו" },
    ],
  };

  // Create or replace all documents
  const transaction = client.transaction();

  for (const doc of [...serviceCategories, ...faqs, about]) {
    transaction.createOrReplace(doc);
  }

  const result = await transaction.commit();
  console.log(`Seeded ${result.documentIds.length} documents.`);
  console.log("Done!");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
