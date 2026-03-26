import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الدورات", href: "#courses" },
  { label: "من نحن", href: "#why-ada" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(240,10%,4%)]/90 backdrop-blur-xl border-b border-[hsl(240,10%,15%)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold gradient-text tracking-wide">
            آدا
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[hsl(240,5%,65%)] hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/Ada778877"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-5 py-2 rounded-xl text-sm font-bold"
            >
              ابدأ الآن
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-[hsl(240,5%,65%)] hover:text-white hover:bg-[hsl(240,10%,10%)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="تبديل القائمة"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[hsl(240,10%,6%)]/95 backdrop-blur-xl border-t border-[hsl(240,10%,15%)] px-4 py-4 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[hsl(240,5%,65%)] hover:text-white py-2.5 font-medium transition-colors border-b border-[hsl(240,10%,12%)] last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/Ada778877"
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-gradient text-white px-4 py-3 rounded-xl text-center font-bold mt-2"
          >
            ابدأ الآن
          </a>
        </div>
      )}
    </nav>
  );
}
