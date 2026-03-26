import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "كيف أسجل في الدورات؟",
    a: "بمجرد اختيار الدورة، تقدر تسجل مباشرة وتبدأ فورًا عبر التواصل معنا على التليجرام.",
  },
  {
    q: "هل الشهادات معتمدة؟",
    a: "نعم، نساعدك تحصل شهادات من منصات عالمية معتمدة.",
  },
  {
    q: "هل أقدر أتعلم بأي وقت؟",
    a: "نعم، التعلم مرن بالكامل. تقدر تتعلم من أي مكان وفي أي وقت يناسبك.",
  },
  {
    q: "وش طرق الدفع؟",
    a: "نوفر طرق دفع متعددة تناسب الجميع. تواصل معنا لمعرفة الخيارات المتاحة.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>❓</span>
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-primary/30 shadow-md shadow-primary/5"
                  : "border-border"
              }`}
            >
              <button
                className="w-full text-right flex items-center justify-between px-5 py-4 font-semibold text-foreground hover:bg-muted/30 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary transition-transform duration-200 shrink-0 mr-3 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
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
