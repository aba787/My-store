import { useState } from "react";

const categories = [
  "الكل",
  "البرمجة والتطوير",
  "الأمن السيبراني والشبكات",
  "الأدوات والمهارات",
  "التصميم والبيانات",
  "تطوير الويب المتقدم",
  "تجربة المستخدم",
];

const courses = [
  {
    id: 1,
    category: "التصميم والبيانات",
    icon: "🎨",
    title: "تصميم الجرافيك",
    description: "اتقان أدوات التصميم لبناء هوية بصرية قوية.",
    features: ["تطبيق عملي", "بناء بورتفوليو", "شهادة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة تصميم الجرافيك",
  },
  {
    id: 2,
    category: "الأدوات والمهارات",
    icon: "🇬🇧",
    title: "الإنجليزية للمبرمجين",
    description: "تطوير لغتك لتفهم التوثيق التقني وتتواصل في بيئة العمل.",
    features: ["مصطلحات برمجية", "مهارات البحث التقني"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة الإنجليزية للمبرمجين",
  },
  {
    id: 3,
    category: "الأمن السيبراني والشبكات",
    icon: "🛡️",
    title: "الأمن السيبراني",
    description: "من الأساسيات حتى الاحتراف في حماية الأنظمة.",
    features: ["حماية", "اختبار اختراق", "محاكاة هجمات حقيقية"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة الأمن السيبراني",
  },
  {
    id: 4,
    category: "الأمن السيبراني والشبكات",
    icon: "🌐",
    title: "الشبكات (Networking)",
    description: "فهم بنية الشبكات وإدارتها بشكل تقني متقدم.",
    features: ["إعداد السيرفرات", "حماية الشبكات", "إدارة متقدمة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة الشبكات",
  },
  {
    id: 5,
    category: "الأدوات والمهارات",
    icon: "⚡",
    title: "جافاسكريبت (JavaScript)",
    description: "لغة الويب الأكثر انتشاراً؛ تعلم البرمجة التفاعلية.",
    features: ["تطوير ويب", "بناء مشاريع تفاعلية", "التعامل مع DOM"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة JavaScript",
  },
  {
    id: 6,
    category: "التصميم والبيانات",
    icon: "✏️",
    title: "التصميم باستخدام كانفا (Canva)",
    description: "إنشاء تصاميم احترافية بسرعة وكفاءة للسوشيال ميديا.",
    features: ["قوالب ذكية", "سرعة الإنجاز", "تصاميم تسويقية"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Canva",
  },
  {
    id: 7,
    category: "التصميم والبيانات",
    icon: "📊",
    title: "تحليل البيانات",
    description: "تحويل الأرقام إلى قرارات باستخدام Excel و Power BI.",
    features: ["لوحات تحكم (Dashboards)", "مهارات التحليل الإحصائي"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة تحليل البيانات",
  },
  {
    id: 8,
    category: "البرمجة والتطوير",
    icon: "🖥️",
    title: "تطوير الويب المتكامل (Full-Stack)",
    description: "بناء تطبيقات ويب كاملة من الصفر (Frontend & Backend).",
    features: ["مشروع تخرج حقيقي", "ربط قواعد البيانات", "استضافة المشروع"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Full-Stack",
    isNew: true,
  },
  {
    id: 9,
    category: "البرمجة والتطوير",
    icon: "🗄️",
    title: "أساسيات قواعد البيانات (SQL & Supabase)",
    description: "تعلم كيف تبني وتدير بيانات تطبيقك باحترافية وسرعة.",
    features: ["تطبيق عملي على مشاريع قائمة", "إدارة المستخدمين"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة SQL وقواعد البيانات",
    isNew: true,
  },
  {
    id: 10,
    category: "البرمجة والتطوير",
    icon: "🐍",
    title: "البرمجة بلغة Python",
    description: "مدخلك لعالم الأتمتة والذكاء الاصطناعي بلغة سهلة وقوية.",
    features: ["بناء أدوات ذكية", "حل مشكلات برمجية معقدة"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Python",
    isNew: true,
  },
  {
    id: 11,
    category: "تطوير الويب المتقدم",
    icon: "⚛️",
    title: "تطوير الواجهات باستخدام React",
    description: "انتقل من أساسيات جافاسكريبت إلى بناء واجهات مستخدم احترافية وسريعة.",
    features: ["بناء تطبيقات React", "التعامل مع الـ APIs", "Hooks & State Management"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة React",
  },
  {
    id: 12,
    category: "تطوير الويب المتقدم",
    icon: "🌿",
    title: "التحكم بالإصدارات باستخدام Git & GitHub",
    description: "الدورة الأساسية لكل مبرمج للعمل ضمن فريق وإدارة كوده باحترافية.",
    features: ["رفع المشاريع على GitHub", "التعامل مع الـ Branches", "بناء بورتفوليو تقني"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Git وGitHub",
  },
  {
    id: 13,
    category: "تطوير الويب المتقدم",
    icon: "📱",
    title: "بناء تطبيقات الجوال (Flutter)",
    description: "تعلم برمجة تطبيقات تعمل على Android و iOS بكود واحد.",
    features: ["تصميم واجهات جذابة", "التعامل مع Firebase", "نشر التطبيقات"],
    originalPrice: "299",
    price: "189",
    telegramMsg: "أنا مهتم بدورة Flutter",
  },
  {
    id: 14,
    category: "تجربة المستخدم",
    icon: "🎯",
    title: "تصميم تجربة وواجهة المستخدم (UI/UX)",
    description: "تعلم كيف تصمم تطبيقات ومواقع مريحة وسهلة الاستخدام باستخدام Figma.",
    features: ["رسم الـ Wireframes", "النماذج التفاعلية (Prototypes)", "علم نفس الألوان"],
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
    <section id="courses" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>📚</span>
            <span>دوراتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            دورات عملية تغطي أهم المهارات
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            دورات عملية تغطي أهم المهارات المطلوبة في السوق التقني والرقمي
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white border border-border text-foreground/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="group bg-white border border-border rounded-2xl p-5 flex flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {course.isNew && (
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  جديد
                </div>
              )}

              <div className="text-3xl mb-3">{course.icon}</div>

              <h3 className="text-base font-bold text-foreground mb-2">
                {course.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {course.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-primary/8 text-primary px-2 py-1 rounded-lg font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex items-baseline gap-2">
                  {course.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {course.originalPrice} ريال
                    </span>
                  )}
                  {course.price && (
                    <span className="text-lg font-bold text-primary">
                      {course.price} ريال
                    </span>
                  )}
                </div>
                <a
                  href={`https://t.me/Ada778877?text=${encodeURIComponent(course.telegramMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
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
