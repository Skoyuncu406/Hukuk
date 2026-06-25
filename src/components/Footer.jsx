import { Scale } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedDivider from "./AnimatedDivider";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1B1B1B] text-white">
      <AnimatedDivider />

      <Reveal type="up">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex items-center gap-5">
                <div className="logo-spin flex h-14 w-14 items-center justify-center border border-[#C6A15B]/40 text-[#C6A15B] transition duration-300 hover:border-[#C6A15B]">
                  <Scale size={28} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="font-title text-3xl font-semibold">
                    Kırmızı Hukuk
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#C6A15B]">
                    Avukatlık & Danışmanlık
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-xl leading-8 text-[#B5B5B5]">
                Müvekkillerimize hukuki süreçlerin her aşamasında güvenilir,
                şeffaf ve profesyonel danışmanlık sunuyor; haklarının etkin
                şekilde korunması için stratejik çözümler üretiyoruz.
              </p>
            </div>

            <div className="border-l border-[#C6A15B]/20 pl-0 lg:pl-10">
              <h4 className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A15B]">
                İletişim
              </h4>

              <div className="space-y-5 text-[#B5B5B5]">
                <p>Çankaya / Ankara</p>
                <p>0 (312) 000 00 00</p>
                <p>info@kirmizihukuk.com</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-[#C6A15B]/20 pt-8 text-sm text-[#8D8D8D] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Kırmızı Hukuk & Danışmanlık. Tüm Hakları Saklıdır.</p>

            <div className="flex flex-wrap gap-8 uppercase tracking-[0.18em]">
              <a href="#hakkimizda" className="transition hover:text-[#C6A15B]">
                Hakkımızda
              </a>

              <a href="#alanlar" className="transition hover:text-[#C6A15B]">
                Çalışma Alanları
              </a>

              <a href="#iletisim" className="transition hover:text-[#C6A15B]">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}