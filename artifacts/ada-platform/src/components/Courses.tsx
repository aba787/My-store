import { useState } from "react";

const categories = [
  "الكل",
  "البرمجة والتطوير",
  "لغات البرمجة",
  "الأمن السيبراني والشبكات",
  "الأدوات والمهارات",
  "التصميم والبيانات",
  "تطوير الويب المتقدم",
  "تجربة المستخدم",
];

const standardBadges = [
  { label: "شرح مكتوب", color: "#818cf8", bg: "rgba(129,140,248,0.12)", border: "rgba(129,140,248,0.25)" },
  { label: "تطبيق عملي", color: "#a855f7", bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.25)" },
  { label: "متابعة معلم", color: "#c084fc", bg: "rgba(192,132,252,0.12)", border: "rgba(192,132,252,0.25)" },
];

// Icon component: colored circle with SVG icon
function CourseIcon({ icon, color, bg }: { icon: React.ReactNode; color: string; bg: string }) {
  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shrink-0"
      style={{ background: bg, border: `1px solid ${color}40` }}
    >
      <span style={{ color, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {icon}
      </span>
    </div>
  );
}

// SVG icons
const Icons = {
  graphic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
    </svg>
  ),
  english: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12a10 10 0 0 0 10 10M2 12A10 10 0 0 1 12 2"/>
    </svg>
  ),
  security: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  network: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-4h14v4M12 8v4"/>
    </svg>
  ),
  js: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  canva: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  data: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  fullstack: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  sql: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  python: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 7 3.5 7 5v3h5v1H5.5C3.5 9 2 10.5 2 12.5s1.5 3.5 3.5 3.5H7v-3h1v3h5v-3h1v3h1.5c2 0 3.5-1.5 3.5-3.5S17.5 9 15.5 9H14V8h3V5c0-1.5-1.5-3-5-3z"/>
    </svg>
  ),
  react: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 7v10M7 12h10"/>
    </svg>
  ),
  git: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
    </svg>
  ),
  flutter: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  ),
  uiux: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  cpp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/><line x1="16" y1="15" x2="20" y2="15"/><line x1="18" y1="13" x2="18" y2="17"/>
    </svg>
  ),
  java: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 17s-1 1 1.5 1.5c3 .5 4.5.5 8-1"/><path d="M9 15s-1.5 1 1 1.5"/><path d="M13 17s3-1 2-4c-.5-1.5-2-3-2-3s3 1 3-2c0-2-2-3-4-4"/><path d="M10 8S8 9 10 11c1.5 1.5 2 2 2 2"/>
    </svg>
  ),
  typescript: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2"/><path d="M8 12h8M12 8v8"/>
    </svg>
  ),
  csharp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 9a4 4 0 0 0 0 6"/><line x1="15" y1="11" x2="19" y2="11"/><line x1="17" y1="9" x2="17" y2="13"/><line x1="21" y1="11" x2="25" y2="11"/>
    </svg>
  ),
};

const courses = [
  // البرمجة والتطوير
  {
    id: 8,
    category: "البرمجة والتطوير",
    icon: Icons.fullstack,
    iconColor: "#a855f7",
    iconBg: "rgba(168,85,247,0.15)",
    title: "تطوير الويب المتكامل (Full-Stack)",
    description: "بناء تطبيقات ويب كاملة من الصفر — Frontend و Backend معاً.",
    features: ["مشروع تخرج حقيقي", "ربط قواعد البيانات", "استضافة المشروع"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Full-Stack",
    isNew: true,
  },
  {
    id: 9,
    category: "البرمجة والتطوير",
    icon: Icons.sql,
    iconColor: "#818cf8",
    iconBg: "rgba(129,140,248,0.15)",
    title: "أساسيات قواعد البيانات (SQL & Supabase)",
    description: "تعلم كيف تبني وتدير بيانات تطبيقك باحترافية وسرعة.",
    features: ["تطبيق على مشاريع قائمة", "إدارة المستخدمين", "Supabase"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة SQL وقواعد البيانات",
    isNew: true,
  },

  // لغات البرمجة
  {
    id: 10,
    category: "لغات البرمجة",
    icon: Icons.python,
    iconColor: "#facc15",
    iconBg: "rgba(250,204,21,0.12)",
    title: "البرمجة بلغة Python",
    description: "مدخلك لعالم الأتمتة والذكاء الاصطناعي بلغة سهلة وقوية.",
    features: ["بناء أدوات ذكية", "حل مشكلات برمجية", "AI & Automation"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Python",
    isNew: true,
  },
  {
    id: 5,
    category: "لغات البرمجة",
    icon: Icons.js,
    iconColor: "#fbbf24",
    iconBg: "rgba(251,191,36,0.12)",
    title: "جافاسكريبت (JavaScript)",
    description: "لغة الويب الأكثر انتشاراً؛ تعلم البرمجة التفاعلية من الصفر.",
    features: ["تطوير ويب", "مشاريع تفاعلية", "التعامل مع DOM"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة JavaScript",
  },
  {
    id: 15,
    category: "لغات البرمجة",
    icon: Icons.typescript,
    iconColor: "#60a5fa",
    iconBg: "rgba(96,165,250,0.12)",
    title: "TypeScript للمطورين",
    description: "ارتقِ بكودك JavaScript إلى مستوى احترافي بالأنواع الثابتة والـ OOP.",
    features: ["تحويل JS إلى TS", "Interfaces & Types", "مشاريع عملية"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة TypeScript",
    isNew: true,
  },
  {
    id: 16,
    category: "لغات البرمجة",
    icon: Icons.cpp,
    iconColor: "#34d399",
    iconBg: "rgba(52,211,153,0.12)",
    title: "البرمجة بلغة C++",
    description: "أساس برمجي متين للأنظمة والتطبيقات عالية الأداء.",
    features: ["هياكل البيانات", "الخوارزميات", "Object-Oriented"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة C++",
    isNew: true,
  },
  {
    id: 17,
    category: "لغات البرمجة",
    icon: Icons.java,
    iconColor: "#f97316",
    iconBg: "rgba(249,115,22,0.12)",
    title: "البرمجة بلغة Java",
    description: "لغة المؤسسات والأندرويد — تعلم البرمجة الكائنية بعمق.",
    features: ["OOP متقدم", "Android أساسيات", "Backend مع Spring"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Java",
    isNew: true,
  },

  // الأمن السيبراني والشبكات
  {
    id: 3,
    category: "الأمن السيبراني والشبكات",
    icon: Icons.security,
    iconColor: "#f43f5e",
    iconBg: "rgba(244,63,94,0.12)",
    title: "الأمن السيبراني",
    description: "من الأساسيات حتى الاحتراف في حماية الأنظمة والشبكات.",
    features: ["اختبار اختراق", "محاكاة هجمات حقيقية", "حماية متقدمة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة الأمن السيبراني",
  },
  {
    id: 4,
    category: "الأمن السيبراني والشبكات",
    icon: Icons.network,
    iconColor: "#06b6d4",
    iconBg: "rgba(6,182,212,0.12)",
    title: "الشبكات (Networking)",
    description: "فهم بنية الشبكات وإدارتها بشكل تقني متقدم.",
    features: ["إعداد السيرفرات", "حماية الشبكات", "إدارة متقدمة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة الشبكات",
  },

  // الأدوات والمهارات
  {
    id: 2,
    category: "الأدوات والمهارات",
    icon: Icons.english,
    iconColor: "#38bdf8",
    iconBg: "rgba(56,189,248,0.12)",
    title: "الإنجليزية للمبرمجين",
    description: "تطوير لغتك لتفهم التوثيق التقني وتتواصل في بيئة العمل.",
    features: ["مصطلحات برمجية", "مهارات البحث التقني", "التواصل المهني"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة الإنجليزية للمبرمجين",
  },

  // التصميم والبيانات
  {
    id: 1,
    category: "التصميم والبيانات",
    icon: Icons.graphic,
    iconColor: "#e879f9",
    iconBg: "rgba(232,121,249,0.12)",
    title: "تصميم الجرافيك",
    description: "اتقان أدوات التصميم لبناء هوية بصرية قوية ومؤثرة.",
    features: ["بناء بورتفوليو", "هوية بصرية", "شهادة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة تصميم الجرافيك",
  },
  {
    id: 6,
    category: "التصميم والبيانات",
    icon: Icons.canva,
    iconColor: "#a78bfa",
    iconBg: "rgba(167,139,250,0.12)",
    title: "التصميم باستخدام كانفا (Canva)",
    description: "إنشاء تصاميم احترافية بسرعة وكفاءة للسوشيال ميديا.",
    features: ["قوالب ذكية", "تصاميم تسويقية", "سرعة الإنجاز"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Canva",
  },
  {
    id: 7,
    category: "التصميم والبيانات",
    icon: Icons.data,
    iconColor: "#4ade80",
    iconBg: "rgba(74,222,128,0.12)",
    title: "تحليل البيانات",
    description: "تحويل الأرقام إلى قرارات باستخدام Excel و Power BI.",
    features: ["Dashboards", "تحليل إحصائي", "Power BI"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة تحليل البيانات",
  },

  // تطوير الويب المتقدم
  {
    id: 11,
    category: "تطوير الويب المتقدم",
    icon: Icons.react,
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.12)",
    title: "تطوير الواجهات باستخدام React",
    description: "انتقل من أساسيات JavaScript إلى بناء واجهات مستخدم احترافية.",
    features: ["Hooks & State", "التعامل مع APIs", "مشاريع كاملة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة React",
  },
  {
    id: 12,
    category: "تطوير الويب المتقدم",
    icon: Icons.git,
    iconColor: "#fb7185",
    iconBg: "rgba(251,113,133,0.12)",
    title: "التحكم بالإصدارات (Git & GitHub)",
    description: "الدورة الأساسية لكل مبرمج للعمل ضمن فريق وإدارة الكود.",
    features: ["رفع المشاريع", "Branches & Merge", "بورتفوليو تقني"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Git وGitHub",
  },
  {
    id: 13,
    category: "تطوير الويب المتقدم",
    icon: Icons.flutter,
    iconColor: "#38bdf8",
    iconBg: "rgba(56,189,248,0.12)",
    title: "بناء تطبيقات الجوال (Flutter)",
    description: "تعلم برمجة تطبيقات تعمل على Android و iOS بكود واحد.",
    features: ["واجهات جذابة", "Firebase", "نشر التطبيقات"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Flutter",
  },

  // تجربة المستخدم
  {
    id: 14,
    category: "تجربة المستخدم",
    icon: Icons.uiux,
    iconColor: "#f472b6",
    iconBg: "rgba(244,114,182,0.12)",
    title: "تصميم تجربة وواجهة المستخدم (UI/UX)",
    description: "تعلم كيف تصمم تطبيقات ومواقع مريحة وسهلة الاستخدام باستخدام Figma.",
    features: ["Wireframes", "Prototypes", "علم نفس الألوان"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة UI/UX",
  },
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filtered =
    activeCategory === "الكل"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="py-24" style={{ background: "hsl(240,10%,4%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(124, 58, 237, 0.1)",
              borderColor: "rgba(124, 58, 237, 0.3)",
              color: "#c4b5fd",
            }}
          >
            <span>📚</span>
            <span>دوراتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            دورات عملية تغطي أهم{" "}
            <span className="gradient-text">المهارات</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: "hsl(240,5%,65%)" }}>
            دورات عملية تغطي أهم المهارات المطلوبة في السوق التقني والرقمي
          </p>

          {/* Standard guarantee badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {standardBadges.map((b) => (
              <span
                key={b.label}
                className="text-xs px-3 py-1.5 rounded-full font-semibold"
                style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
              >
                ✓ {b.label} في كل الدورات
              </span>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, hsl(262,83%,58%), #a855f7)",
                      color: "white",
                      boxShadow: "0 0 16px rgba(124,58,237,0.4)",
                    }
                  : {
                      background: "hsl(240,10%,8%)",
                      border: "1px solid hsl(240,10%,18%)",
                      color: "hsl(240,5%,65%)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl p-5 flex flex-col relative overflow-hidden"
            >
              {course.isNew && (
                <div
                  className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "linear-gradient(135deg, hsl(262,83%,58%), #a855f7)" }}
                >
                  جديد
                </div>
              )}

              <CourseIcon icon={course.icon} color={course.iconColor} bg={course.iconBg} />

              <h3 className="text-base font-bold text-white mb-2">{course.title}</h3>

              <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(240,5%,65%)" }}>
                {course.description}
              </p>

              {/* Course-specific features */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {course.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2 py-1 rounded-lg font-medium"
                    style={{
                      background: `${course.iconColor}15`,
                      color: course.iconColor,
                      border: `1px solid ${course.iconColor}30`,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Standard badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {standardBadges.map((b) => (
                  <span
                    key={b.label}
                    className="text-xs px-2 py-1 rounded-lg"
                    style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
                  >
                    ✓ {b.label}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center justify-between mt-auto pt-4"
                style={{ borderTop: "1px solid hsl(240,10%,15%)" }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-xs line-through" style={{ color: "hsl(240,5%,40%)" }}>
                    {course.originalPrice} ريال
                  </span>
                  <span className="text-lg font-bold gradient-text">
                    {course.price} ريال
                  </span>
                </div>
                <a
                  href={`https://t.me/Ada778877?text=${encodeURIComponent(course.telegramMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-white text-sm font-bold px-4 py-2 rounded-xl"
                >
                  اشترك الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
