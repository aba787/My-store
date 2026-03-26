export default function Quote() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "hsl(240,10%,5%)" }}
    >
      {/* Glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.12), transparent)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative quote mark */}
        <div className="gradient-text text-7xl font-serif leading-none mb-4 opacity-60 select-none">"</div>

        <blockquote
          className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-6"
          style={{
            background: "linear-gradient(135deg, hsl(262,83%,78%), #a855f7, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          العلم الحقيقي لا يُقاس بكم تحفظ، بل بقدرتك على تطبيق ما تعلمت في
          الواقع.
        </blockquote>

        <div className="flex items-center justify-center gap-3">
          <div
            className="h-px w-12"
            style={{ background: "rgba(124,58,237,0.4)" }}
          />
          <span className="text-sm font-medium" style={{ color: "hsl(240,5%,55%)" }}>
            — مبدأ آدا في التعليم
          </span>
          <div
            className="h-px w-12"
            style={{ background: "rgba(124,58,237,0.4)" }}
          />
        </div>
      </div>
    </section>
  );
}
