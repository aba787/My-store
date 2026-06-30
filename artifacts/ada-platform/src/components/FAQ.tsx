import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "كيف أسجل في الدورات؟",
    a: "بمجرد اختيار الدورة، اضغط على 'اشترك الآن' وهتنفتح التليجرام مباشرة. تواصل معنا وبنبدأ معك فوراً.",
  },
  {
    q: "هل الشهادات معتمدة؟",
    a: "نعم، نساعدك تحصل شهادات من منصات عالمية معتمدة بعد إتمام الدورة بنجاح.",
  },
  {
    q: "هل أقدر أتعلم بأي وقت؟",
    a: "نعم، التعلم مرن بالكامل. تقدر تتعلم من أي مكان وفي أي وقت يناسبك والمحتوى متاح دائماً.",
  },
  {
    q: "وش طرق الدفع؟",
    a: "نوفر طرق دفع متعددة تناسب الجميع. تواصل معنا على التليجرام لمعرفة الخيارات المتاحة.",
  },
  {
    q: "هل يوجد متابعة من معلم؟",
    a: "نعم، في كل دورة يوجد متابعة شخصية من المعلم. يقيّم مشاريعك ويساعدك تتجاوز أي تحدي تقني تواجهه خطوة بخطوة.",
  },
  {
    q: "كيف يتم شرح الدورات؟",
    a: "كل دورة تحتوي على شرح مكتوب مفصّل + تطبيق عملي على مشاريع حقيقية. المحتوى مبني بطريقة تضمن الفهم الحقيقي وليس الحفظ فقط.",
  },
  {
    q: "هل المبلغ يُسترجع بعد الدفع؟",
    a: "لا، المبلغ المدفوع غير قابل للاسترجاع بعد الاشتراك والحصول على الوصول للمحتوى. يُرجى التأكد من اختيار الدورة المناسبة قبل الاشتراك، ونحن هنا للمساعدة في الاختيار.",
    isWarning: true,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ background: "hsl(240,10%,5%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(124, 58, 237, 0.1)",
              borderColor: "rgba(124, 58, 237, 0.3)",
              color: "#c4b5fd",
            }}
          >
            <span>❓</span>
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            الأسئلة{" "}
            <span className="gradient-text">الشائعة</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: faq.isWarning && open === i
                  ? "rgba(251,113,133,0.05)"
                  : "hsl(240,10%,6%)",
                border: open === i
                  ? faq.isWarning
                    ? "1px solid rgba(251,113,133,0.35)"
                    : "1px solid rgba(124,58,237,0.4)"
                  : "1px solid hsl(240,10%,15%)",
                boxShadow: open === i
                  ? faq.isWarning
                    ? "0 0 20px rgba(251,113,133,0.06)"
                    : "0 0 20px rgba(124,58,237,0.08)"
                  : "none",
              }}
            >
              <button
                className="w-full text-right flex items-center justify-between px-5 py-4 font-semibold text-white transition-colors hover:bg-white/[0.02]"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="flex items-center gap-2">
                  {faq.isWarning && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ background: "rgba(251,113,133,0.15)", color: "#fb7185" }}>
                      مهم
                    </span>
                  )}
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 mr-3 transition-transform duration-200"
                  style={{
                    color: faq.isWarning ? "#fb7185" : "#a855f7",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === i && (
                <div
                  className="px-5 pb-5 text-sm leading-relaxed pt-4"
                  style={{
                    color: faq.isWarning ? "#fda4af" : "hsl(240,5%,65%)",
                    borderTop: `1px solid ${faq.isWarning ? "rgba(251,113,133,0.15)" : "hsl(240,10%,12%)"}`,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
