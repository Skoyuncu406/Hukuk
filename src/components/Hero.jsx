"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import PremiumButton from "./PremiumButton";
import SplitText from "./SplitText";
import GoldParticles from "./GoldParticles";

export default function Hero() {
  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    setMove({ x, y });
  };

  const softMove = {
    transform: `translate(${move.x * 10}px, ${move.y * 10}px)`,
  };

  const mediumMove = {
    transform: `translate(${move.x * -16}px, ${move.y * -16}px)`,
  };

  const strongMove = {
    transform: `translate(${move.x * 22}px, ${move.y * 22}px)`,
  };

  return (
    <section
      id="anasayfa"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMove({ x: 0, y: 0 })}
      className="relative min-h-screen scroll-mt-0 overflow-hidden bg-[#F8F6F1] pt-15"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,27,27,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,27,27,0.045)_1px,transparent_1px)] bg-[size:72px_72px] transition-transform duration-500 ease-out"
        style={softMove}
      />

      <div
        className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#C6A15B]/10 blur-3xl transition-transform duration-700 ease-out"
        style={mediumMove}
      />

      <div
        className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#1B1B1B]/5 blur-3xl transition-transform duration-700 ease-out"
        style={strongMove}
      />

      <GoldParticles />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal type="left">
          <div>
            <div
              className="mb-8 flex items-center gap-4 text-[#C6A15B] transition-transform duration-500 ease-out"
              style={mediumMove}
            >
              <span className="h-px w-12 bg-[#C6A15B]" />

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]">
                <ShieldCheck size={16} strokeWidth={1.6} />
                Güvenilir Hukuki Danışmanlık
              </div>
            </div>

            <h1 className="font-title max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#1B1B1B] md:text-7xl">
              <SplitText
                text="Haklarınızı güçlü, hızlı ve şeffaf şekilde savunuyoruz."
                delay={0.15}
              />
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#555] md:text-lg">
              Kırmızı Hukuk & Danışmanlık, bireysel ve kurumsal müvekkillerine
              dava takibi, sözleşme yönetimi, icra hukuku, aile hukuku ve
              ticaret hukuku alanlarında profesyonel destek sunar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PremiumButton href="#iletisim" variant="dark">
                Bilgi Almak İstiyorum
                <ArrowRight size={18} />
              </PremiumButton>

              <PremiumButton href="#alanlar" variant="outline">
                Çalışma Alanları
              </PremiumButton>
            </div>
          </div>
        </Reveal>

        <Reveal type="right" delay={0.2}>
          <div
            className="relative transition-transform duration-500 ease-out"
            style={mediumMove}
          >
            <div
              className="absolute -right-8 -top-8 h-full w-full border border-[#C6A15B]/25 transition-transform duration-700 ease-out max-md:hidden"
              style={strongMove}
            />

            <div className="relative bg-[#1B1B1B] px-8 py-10 md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#C6A15B]">
                Hukuk Bürosu
              </p>

              <h2 className="font-title mt-8 text-4xl font-semibold leading-tight text-[#F8F8F8] md:text-5xl">
                Adalet için stratejik yaklaşım
              </h2>

              <p className="mt-6 leading-8 text-[#B5B5B5]">
                Her dosya özelinde detaylı analiz, güncel mevzuat takibi ve
                sonuç odaklı hukuki çözüm süreci.
              </p>

              <div className="mt-12 grid grid-cols-2 border-y border-[#C6A15B]/25">
                <div className="border-r border-[#C6A15B]/25 py-7 pr-6">
                  <h3 className="font-title text-5xl font-semibold text-[#F8F8F8]">
                    <CountUp end={10} suffix="+" />
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#B5B5B5]">
                    Çalışma Alanı
                  </p>
                </div>

                <div className="py-7 pl-6">
                  <h3 className="font-title text-5xl font-semibold text-[#F8F8F8]">
                    7/24
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#B5B5B5]">
                    Ön Başvuru
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-20 bg-[#C6A15B]" />

                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B]">
                  Güven • Strateji • Şeffaflık
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}