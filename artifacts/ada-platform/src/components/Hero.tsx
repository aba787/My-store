export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(258,80%,97%) 0%, hsl(220,20%,97%) 40%, hsl(258,60%,94%) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, hsl(258,80%,70%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(220,80%,70%) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <span>🚀</span>
          <span>منصة التعلم الرقمي الأولى</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          منصة{" "}
          <span className="text-primary relative">
            آدا
            <span
              className="absolute -bottom-1 right-0 left-0 h-1 rounded-full bg-primary/30"
            />
          </span>{" "}
          للتعلم الرقمي
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
          طوّر مهاراتك التقنية والمهنية بطريقة عملية واحترافية
        </p>

        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10">
          نوفر دورات تدريبية مصممة بعناية لتأهيلك لسوق العمل، مع تركيز على
          التطبيق العملي والفهم الحقيقي، مو مجرد محتوى نظري.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#courses"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-bold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            استكشف الدورات
          </a>
          <a
            href="#why-ada"
            className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-primary/5 transition-all duration-200"
          >
            ليش تختار آدا؟
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { num: "١٣+", label: "دورة متخصصة" },
            { num: "١٠٠٪", label: "تطبيق عملي" },
            { num: "مرن", label: "تعلم بالسرعة التي تناسبك" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary">{stat.num}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 left-0 h-24"
        style={{
          background:
            "linear-gradient(to top, hsl(220,20%,97%), transparent)",
        }}
      />
    </section>
  );
}
