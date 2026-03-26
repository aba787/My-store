const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الدورات", href: "#courses" },
  { label: "من نحن", href: "#why-ada" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">آدا</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
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
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} منصة آدا للتعلم الرقمي. جميع الحقوق محفوظة.
          </p>
          <a
            href="https://t.me/Ada778877"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            @Ada778877
          </a>
        </div>
      </div>
    </footer>
  );
}
