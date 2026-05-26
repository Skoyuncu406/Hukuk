"use client";

import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

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

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* LOGO */}
        <a href="#anasayfa" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-700 text-white">
            <Scale size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-zinc-900">
              Kırmızı Hukuk
            </h1>

            <p className="text-xs text-red-700">
              Avukatlık & Danışmanlık
            </p>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-zinc-700 transition hover:text-red-700"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#iletisim"
          className="hidden rounded-full bg-red-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-800 md:inline-block"
        >
          Bilgi Al
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-zinc-900 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-zinc-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-zinc-700 transition hover:text-red-700"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="rounded-full bg-red-700 px-5 py-3 text-center font-semibold text-white"
            >
              Bilgi Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}