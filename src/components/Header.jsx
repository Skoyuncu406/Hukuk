"use client";

import { useEffect, useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import PremiumButton from "./PremiumButton";

const navItems = [
  { name: "Anasayfa", href: "#anasayfa" },
  { name: "Kurucu", href: "#kurucu" },
  { name: "Hakkımızda", href: "#hakkimizda" },
  { name: "Çalışma Alanları", href: "#alanlar" },
  { name: "Makaleler", href: "#makaleler" },
  { name: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("anasayfa");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 140;
      let currentSection = "anasayfa";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = item.href.replace("#", "");
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "border-[#C6A15B]/25 bg-[#1B1B1B]/95 shadow-lg shadow-black/20"
          : "border-[#C6A15B]/15 bg-[#1B1B1B]/90"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#anasayfa" className="group flex items-center gap-4">
          <div
            className={`logo-spin flex items-center justify-center border border-[#C6A15B]/40 text-[#C6A15B] transition-all duration-500 group-hover:border-[#C6A15B] ${
              scrolled ? "h-10 w-10" : "h-11 w-11"
            }`}
          >
            <Scale size={scrolled ? 20 : 22} strokeWidth={1.6} />
          </div>

          <div className="leading-none">
            <h1
              className={`font-title font-semibold tracking-[0.18em] text-[#F8F8F8] transition-all duration-500 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              KIRMIZI
            </h1>

            <p
              className={`mt-2 uppercase tracking-[0.22em] text-[#C6A15B] transition-all duration-500 ${
                scrolled ? "text-[10px]" : "text-[11px]"
              }`}
            >
              Hukuk & Danışmanlık
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative text-[13px] font-medium uppercase tracking-[0.16em] transition duration-300 ${
                  isActive ? "text-[#F8F8F8]" : "text-[#B5B5B5]"
                } hover:text-[#F8F8F8]`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-1/2 h-px bg-[#C6A15B] transition-all duration-300 ${
                    isActive
                      ? "w-full -translate-x-1/2"
                      : "w-0 -translate-x-1/2 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <PremiumButton
            href="#iletisim"
            variant="outlineGold"
            className={`text-[12px] tracking-[0.18em] ${
              scrolled ? "px-5 py-2.5" : "px-6 py-3"
            }`}
          >
            Bilgi Al
          </PremiumButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç/kapat"
          className={`border border-[#C6A15B]/30 p-2 text-[#C6A15B] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B]/10 md:hidden ${
            open ? "bg-[#C6A15B]/10" : ""
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#C6A15B]/15 bg-[#1B1B1B] transition-all duration-500 md:hidden ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-6">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group relative overflow-hidden border-b border-[#C6A15B]/10 py-4 text-sm font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                  isActive ? "text-[#C6A15B]" : "text-[#B5B5B5]"
                } hover:text-[#C6A15B]`}
                style={{
                  transitionDelay: open ? `${index * 45}ms` : "0ms",
                }}
              >
                <span
                  className={`absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#C6A15B] transition-all duration-300 ${
                    isActive ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />

                <span
                  className={`block transition-all duration-300 ${
                    isActive ? "translate-x-8" : "group-hover:translate-x-8"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            );
          })}

          <PremiumButton
            href="#iletisim"
            onClick={() => setOpen(false)}
            variant="outlineGold"
            className="mt-6 w-full px-5 py-4 text-sm tracking-[0.18em]"
          >
            Bilgi Al
          </PremiumButton>
        </div>
      </div>
    </header>
  );
}