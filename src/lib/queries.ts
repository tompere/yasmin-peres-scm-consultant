import { getSanityClient } from "./sanity";
import { toHTML } from "@portabletext/to-html";

// --- Types matching existing frontmatter shape ---

export interface ServiceCategory {
  category: string;
  categoryEn: string;
  items: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AboutMetric {
  value: string;
  label: string;
}

export interface AboutBadge {
  label: string;
}

export interface About {
  bioHtml: string;
  caseStudy: {
    title: string;
    description: string;
    metrics: AboutMetric[];
  };
  badges: AboutBadge[];
}

// --- Hardcoded fallbacks (current content) ---

const fallbackServiceCategories: ServiceCategory[] = [
  {
    category: "תכנון ובקרה",
    categoryEn: "Planning & Control",
    items: [
      "הקמה ושיפור של מערכי תכנון (S&OP) לסנכרון מלא בין מכירות, תפעול ורכש",
      "שיפור מדדי שירות (OTD/OTIF) וצמצום פערים בין התכנון לביצוע",
      "בניית תחזיות ביקוש מדויקות יותר למניעת חוסרים או עודפים",
      "ייעול תהליכי חיזוי ותכנון ביקושים",
    ],
  },
  {
    category: "ניהול מלאי ורכש",
    categoryEn: "Inventory & Procurement",
    items: [
      "אופטימיזציה של רמות מלאי: צמצום מלאי מת ושיפור תזרים המזומנים",
      "הטמעת מודלים אנליטיים לניהול מלאי חכם במערכות המידע",
      "ניהול ספקים, רכש ומשלוחי ייבוא/ייצוא",
      "קיצור זמני אספקה (Lead Time) ושיפור אמינות מלאי",
    ],
  },
  {
    category: "מצוינות תפעולית",
    categoryEn: "Operational Excellence",
    items: [
      "הגדרת KPIs ומדדי ליבה לניהול ביצועים שוטף",
      "אבחון 'צווארי בקבוק' בתהליך ומתן פתרונות להתייעלות מיידית",
      "ליווי טרנספורמציה דיגיטלית והטמעת מערכות תומכות החלטה",
      "עיצוב מבנה ארגוני והגדרות תפקיד התומכים בצרכים העסקיים",
    ],
  },
];

const fallbackFaqs: FAQ[] = [
  {
    question: "מה זה S&OP ולמה זה חשוב לארגון שלי?",
    answer:
      "S&OP (Sales & Operations Planning) הוא תהליך ניהולי מובנה שמסנכרן בין תחזיות המכירות, תכנון הייצור, ניהול המלאי והרכש. המטרה היא ליצור תוכנית עבודה אחת מתואמת שכל הגורמים בארגון פועלים לפיה. ארגונים שמטמיעים S&OP בצורה נכונה רואים בדרך כלל שיפור של 10%-25% במדדי שירות (OTD), צמצום מלאי עודף, והפחתה משמעותית בחוסרים. התהליך מתאים במיוחד לחברות ייצור, יבואנים, ועסקים עם שרשרת אספקה מורכבת.",
  },
  {
    question: "כמה זמן לוקח תהליך ייעוץ שרשרת אספקה?",
    answer:
      "משך הייעוץ תלוי בהיקף ובמורכבות הארגון. פרויקט אבחון ממוקד נמשך בדרך כלל 4-6 שבועות. הקמת מערך S&OP מלא או אופטימיזציה של ניהול מלאי נמשכים 3-6 חודשים. פרויקט טרנספורמציה מקיף שכולל שינוי תהליכים, הטמעת מערכות ומבנה ארגוני יכול להימשך 6-18 חודשים. אני מציעה תמיד להתחיל בשלב אבחון קצר שמאפשר להגדיר יעדים מדידים ולבנות תוכנית עבודה מדויקת.",
  },
  {
    question: "מהם מדדי OTD ו-OTIF ואיך משפרים אותם?",
    answer:
      "OTD (On-Time Delivery) מודד את אחוז ההזמנות שסופקו בזמן שהובטח ללקוח. OTIF (On-Time In-Full) מחמיר יותר ומודד הזמנות שסופקו גם בזמן וגם בכמות המלאה. בתעשייה, יעד סביר הוא OTD מעל 95% ו-OTIF מעל 90%. שיפור המדדים דורש עבודה על מספר חזיתות: דיוק תחזיות ביקוש, אמינות מלאי, זמני ייצור יציבים, וניהול ספקים אפקטיבי. הגישה שלי מתחילה במיפוי הנקודות שגורמות לכשלים ומתמקדת בפתרונות שנותנים תוצאות מהירות.",
  },
  {
    question: "באילו תעשיות את מתמחה?",
    answer:
      "הניסיון שלי מגיע בעיקר מתעשיית הפארמה (טבע תעשיות פרמצבטיות) ותעשיית הכימיקלים (פיברו). עם זאת, העקרונות של ניהול שרשרת אספקה — תכנון ביקוש, אופטימיזציה של מלאי, ניהול ספקים, ומצוינות תפעולית — רלוונטיים לכל חברת ייצור, יבואנות או הפצה. עבדתי עם ארגונים בתחומי המזון, הקוסמטיקה, הציוד הרפואי, והתעשייה הכללית. הגישה שלי מותאמת תמיד לגודל הארגון, למשאביו ולאתגרים הספציפיים שלו.",
  },
  {
    question: "מה ההבדל בין יועץ שרשרת אספקה לבין מנהל פרויקטים?",
    answer:
      "מנהל פרויקטים מתמקד בהובלת פרויקט מוגדר — לוחות זמנים, משימות ותקציב. יועץ שרשרת אספקה מביא מומחיות מקצועית עמוקה בתחום עצמו: הוא יודע לאבחן בעיות, לזהות הזדמנויות, ולעצב פתרונות שמבוססים על ניסיון בתעשייה. אני משלבת את שני התפקידים — מביאה ידע מקצועי בשרשרת אספקה יחד עם יכולת הובלת שינוי ארגוני. היתרון הוא שהפתרונות לא רק מתוכננים אלא גם מיושמים בשטח ומשתרשים בארגון.",
  },
  {
    question: "איך מתחילים תהליך ייעוץ?",
    answer:
      "השלב הראשון הוא פגישת היכרות ללא עלות, שבה אני מקשיבה לאתגרים שלכם ומבינה את ההקשר הארגוני. בהמשך, אני מבצעת אבחון מקצועי שכולל מיפוי תהליכים, ניתוח נתונים, וראיונות עם בעלי תפקידים מרכזיים. בסיום האבחון מוגשת תוכנית עבודה מפורטת עם יעדים מדידים, לוחות זמנים וסדרי עדיפויות. כל שלב מותאם לקצב הארגון ולמשאביו. צרו קשר דרך וואטסאפ, טלפון או מייל ונקבע פגישה ראשונית.",
  },
];

const fallbackAbout: About = {
  bioHtml: `<p>עם רקע של 15 שנים בתפקידי ניהול בכירים בשרשראות אספקה גלובליות ומקומיות, כולל תפקיד אחרון כ-<span class="font-bold text-navy-700">Supply Chain Director &amp; Head of IL Supply Chain</span> בטבע וכ-<span class="font-bold text-navy-700">Head of Plant Supply Chain</span> בפיברו, אני מביאה לשולחן ראייה מערכתית רחבה לצד יכולת ירידה לפרטים הקטנים.</p><p>המומחיות שלי היא בחיבור בין העולם האסטרטגי לרצפת הייצור: תרגום מטרות עסקיות לתהליכים מדידים, בניית תוכניות עבודה פרקטיות, והובלת שינויים ארגוניים שמחזיקים מעמד לאורך זמן.</p>`,
  caseStudy: {
    title: "דוגמת פרויקט: חיסכון של 50% בעלויות תפעול",
    description:
      "במסגרת תפקידי כ-Head of Plant Supply Chain, הובלתי פרויקט אופטימיזציה מקיף במפעל ייצור פרמצבטי. האתגר: עלויות תפעול גבוהות, מלאי עודף שתפס הון חוזר משמעותי, וזמני אספקה ארוכים שפגעו ברמת השירות ללקוחות.\n\nהפרויקט כלל אבחון מעמיק של שרשרת האספקה, עיצוב מחדש של תהליכי התכנון והרכש, הטמעת מודלים אנליטיים לניהול מלאי חכם, ואופטימיזציה של בסיס הספקים. במקביל, הגדרנו KPIs ברורים ושגרות ניהול שבועיות למעקב ביצועים.",
    metrics: [
      { value: "50%", label: "חיסכון בעלויות תפעול" },
      { value: "18", label: "חודשים עד תוצאות מלאות" },
      { value: "95%+", label: "מדד OTD לאחר הפרויקט" },
    ],
  },
  badges: [
    { label: "B.Sc הנדסת תעשייה וניהול" },
    { label: "15+ שנות ניסיון" },
    { label: "טבע תעשיות פרמצבטיות" },
    { label: "פיברו" },
  ],
};

// --- Fetch functions ---

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  const client = getSanityClient();
  if (!client) return fallbackServiceCategories;

  try {
    const data = await client.fetch<
      Array<{ category: string; categoryEn: string; items: string[] }>
    >(`*[_type == "serviceCategory"] | order(order asc) { category, categoryEn, items }`);

    if (!data || data.length === 0) return fallbackServiceCategories;
    return data;
  } catch {
    return fallbackServiceCategories;
  }
}

export async function getFaqs(): Promise<FAQ[]> {
  const client = getSanityClient();
  if (!client) return fallbackFaqs;

  try {
    const data = await client.fetch<Array<{ question: string; answer: string }>>(
      `*[_type == "faq"] | order(order asc) { question, answer }`
    );

    if (!data || data.length === 0) return fallbackFaqs;
    return data;
  } catch {
    return fallbackFaqs;
  }
}

export async function getAbout(): Promise<About> {
  const client = getSanityClient();
  if (!client) return fallbackAbout;

  try {
    const data = await client.fetch<{
      bio: any[];
      caseStudy: { title: string; description: string; metrics: AboutMetric[] };
      badges: AboutBadge[];
    } | null>(
      `*[_type == "about"][0] { bio, caseStudy { title, description, metrics[] { value, label } }, badges[] { label } }`
    );

    if (!data) return fallbackAbout;

    const bioHtml = data.bio ? toHTML(data.bio) : fallbackAbout.bioHtml;

    return {
      bioHtml,
      caseStudy: data.caseStudy || fallbackAbout.caseStudy,
      badges: data.badges || fallbackAbout.badges,
    };
  } catch {
    return fallbackAbout;
  }
}
