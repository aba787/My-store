import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24" style={{ background: "hsl(240,10%,4%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div
          className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold mb-4"
          style={{
            background: "rgba(124, 58, 237, 0.1)",
            borderColor: "rgba(124, 58, 237, 0.3)",
            color: "#c4b5fd",
          }}
        >
          <span>💬</span>
          <span>تواصل معنا</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          تواصل{" "}
          <span className="gradient-text">معنا</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "hsl(240,5%,65%)" }}>
          إذا عندك أي استفسار أو تحتاج مساعدة، تواصل معنا مباشرة عبر التليجرام
          وبنرد عليك بأسرع وقت.
        </p>

        <div
          className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          style={{
            background: "hsl(240,10%,6%)",
            border: "1px solid hsl(240,10%,15%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(124,58,237,0.08), transparent)",
            }}
          />

          <div className="relative z-10">
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center glow-primary"
              style={{
                background: "linear-gradient(135deg, hsl(262,83%,58%), #a855f7)",
              }}
            >
              <Send size={30} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              نحن هنا لمساعدتك
            </h3>
            <p className="mb-8" style={{ color: "hsl(240,5%,65%)" }}>
              اضغط الزر أدناه وهتنفتح التليجرام مباشرة ونبدأ نتكلم
            </p>
            <a
              href="https://t.me/Ada778877"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl text-lg font-bold"
            >
              <Send size={20} />
              تواصل عبر التليجرام
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
