const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الدورات", href: "#courses" },
  { label: "من نحن", href: "#why-ada" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "hsl(240,10%,3%)", borderTop: "1px solid hsl(240,10%,12%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-4">آدا</h3>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(240,5%,50%)" }}>
              منصة تعلم رقمي تقدم دورات احترافية تركز على التطبيق العملي
              وتطوير المهارات المطلوبة في سوق العمل.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "hsl(240,5%,50%)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid hsl(240,10%,12%)" }}
        >
          <p className="text-sm" style={{ color: "hsl(240,5%,35%)" }}>
            © {new Date().getFullYear()} منصة آدا للتعلم الرقمي. جميع الحقوق محفوظة.
          </p>
          <a
            href="https://t.me/Ada778877"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-white"
            style={{ color: "hsl(240,5%,40%)" }}
          >
            @Ada778877
          </a>
        </div>
      </div>
    </footer>
  );
}
