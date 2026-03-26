export default function Quote() {
  return (
    <section className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(258,80%,20%) 0%, hsl(258,80%,35%) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, white 0%, transparent 50%), radial-gradient(circle at 90% 50%, white 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-5xl mb-6 opacity-60">"</div>
        <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-6">
          العلم الحقيقي لا يُقاس بكم تحفظ، بل بقدرتك على تطبيق ما تعلمت في
          الواقع.
        </blockquote>
        <div className="text-white/60 text-sm">— مبدأ آدا في التعليم</div>
      </div>
    </section>
  );
}
