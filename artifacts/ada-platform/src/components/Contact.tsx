import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <span>💬</span>
          <span>تواصل معنا</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          تواصل معنا
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          إذا عندك أي استفسار أو تحتاج مساعدة، تواصل معنا مباشرة عبر التليجرام
          وبنرد عليك بأسرع وقت.
        </p>

        <div className="bg-white border border-border rounded-3xl p-8 sm:p-12 shadow-sm">
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, hsl(258,80%,57%) 0%, hsl(220,80%,60%) 100%)" }}
          >
            <Send size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            نحن هنا لمساعدتك
          </h3>
          <p className="text-muted-foreground mb-8">
            اضغط الزر أدناه وهتنفتح التليجرام مباشرة ونبدأ نتكلم
          </p>
          <a
            href="https://t.me/Ada778877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-bold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Send size={20} />
            تواصل عبر التليجرام
          </a>
        </div>
      </div>
    </section>
  );
}
