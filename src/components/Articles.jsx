"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";
import PremiumButton from "./PremiumButton";

const articles = [
  {
    id: 1,
    title: "Boşanma Davalarında Süreç Nasıl İlerler?",
    desc: "Anlaşmalı ve çekişmeli boşanma davalarında dikkat edilmesi gereken temel aşamalar.",
    content: `
Boşanma davaları, anlaşmalı ve çekişmeli olmak üzere iki temel şekilde ilerler. Anlaşmalı boşanma davalarında tarafların boşanma, velayet, nafaka, tazminat ve mal paylaşımı gibi temel konularda uzlaşmış olması gerekir.

Çekişmeli boşanma davalarında ise taraflar arasında uyuşmazlık bulunduğundan süreç daha uzun ve detaylı ilerleyebilir. Bu davalarda delillerin doğru şekilde sunulması, tanıkların hazırlanması ve hukuki taleplerin açıkça belirtilmesi oldukça önemlidir.

Boşanma sürecinde en sık karşılaşılan konular velayet, iştirak nafakası, yoksulluk nafakası, maddi-manevi tazminat ve mal rejiminin tasfiyesidir. Her dosya kendi şartlarına göre değerlendirilmelidir.

Profesyonel hukuki destek almak, tarafların hak kaybı yaşamaması ve sürecin daha sağlıklı yönetilmesi açısından büyük önem taşır.
    `,
  },
  {
    id: 2,
    title: "İcra Takibine İtiraz Edildiğinde Ne Yapılır?",
    desc: "Alacaklı ve borçlu açısından icra takibine itiraz sürecinin hukuki sonuçları.",
    content: `
İcra takibine itiraz edilmesi halinde takip, itiraz edilen kısım bakımından durur. Bu durumda alacaklının takibe devam edebilmesi için hukuki yollara başvurması gerekir.

Alacaklı, elindeki belgelere ve dosyanın durumuna göre itirazın kaldırılması veya itirazın iptali davası açabilir. Hangi yolun tercih edileceği, alacağın dayanağına ve mevcut delillere göre belirlenmelidir.

Borçlu açısından ise itiraz süresi ve itirazın gerekçesi oldukça önemlidir. Süresinde yapılmayan itirazlar hak kaybına neden olabilir. Ayrıca haksız itiraz halinde icra inkâr tazminatı gündeme gelebilir.

İcra takiplerinde süreler kısa olduğu için hem alacaklı hem de borçlu tarafın hızlı hareket etmesi gerekir.
    `,
  },
  {
    id: 3,
    title: "Şirketler İçin Sözleşme İncelemenin Önemi",
    desc: "Ticari risklerin azaltılması için sözleşme hazırlama ve denetim süreçleri.",
    content: `
Şirketler açısından sözleşmeler, ticari ilişkilerin temelini oluşturur. Eksik, belirsiz veya tek taraflı hazırlanmış sözleşmeler ileride ciddi hukuki ve mali risklere yol açabilir.

Sözleşme incelemesi yapılırken tarafların yükümlülükleri, ödeme şartları, teslim süreleri, cezai şartlar, fesih hükümleri ve uyuşmazlık çözüm yolları detaylı şekilde değerlendirilmelidir.

Özellikle hizmet, satış, bayilik, distribütörlük, kira, iş ortaklığı ve gizlilik sözleşmelerinde profesyonel hukuki inceleme yapılması şirketin menfaatlerini korur.

Doğru hazırlanmış bir sözleşme yalnızca uyuşmazlık halinde değil, ticari ilişkinin başından itibaren taraflar arasında güvenli bir zemin oluşturur.
    `,
  },
];

function ArticleModal({ selectedArticle, onClose }) {
  if (!selectedArticle) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1B1B1B]/85 px-5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto border border-[#C6A15B]/30 bg-[#F8F6F1] p-7 shadow-2xl md:p-10"
          initial={{ opacity: 0, scale: 0.96, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.96, y: 18, filter: "blur(8px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-8 flex items-start justify-between gap-5 border-b border-[#C6A15B]/30 pb-7">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
                Makale
              </p>

              <h3 className="font-title text-3xl font-semibold leading-tight text-[#1B1B1B] md:text-5xl">
                {selectedArticle.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Makaleyi kapat"
              className="border border-[#1B1B1B]/20 p-3 text-[#1B1B1B] transition duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B]"
            >
              <X size={22} />
            </button>
          </div>

          <div className="space-y-6 text-lg leading-9 text-[#555]">
            {selectedArticle.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>

          <div className="mt-10">
            <PremiumButton href="#iletisim" onClick={onClose} variant="dark">
              Bu Konuda Danışmanlık Al
            </PremiumButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (!selectedArticle) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedArticle(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle]);

  return (
    <section
      id="makaleler"
      className="relative overflow-hidden bg-[#1B1B1B] px-5 py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[#C6A15B]/20" />

      <div className="mx-auto max-w-7xl">
        <Reveal type="up">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C6A15B]" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
                  Makaleler
                </p>
              </div>

              <h2 className="font-title text-4xl font-semibold leading-tight text-white md:text-6xl">
                Güncel hukuki içerikler
              </h2>
            </div>

            <PremiumButton
              href="#iletisim"
              variant="outlineGold"
              className="w-fit px-6 py-3"
            >
              Danışmanlık Al
            </PremiumButton>
          </div>
        </Reveal>

        <div className="border-t border-[#C6A15B]/25">
          {articles.map((article, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={article.id} type="up" delay={index * 0.08}>
                <article className="group grid gap-6 border-b border-[#C6A15B]/25 py-9 transition duration-300 hover:bg-[#242424] md:grid-cols-[90px_1fr_1.2fr_120px]">
                  <div className="text-sm font-semibold tracking-[0.25em] text-[#C6A15B] md:pt-1">
                    {number}
                  </div>

                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A15B]">
                      Hukuk Rehberi
                    </p>

                    <h3 className="font-title text-3xl font-semibold leading-tight text-white">
                      {article.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl leading-7 text-[#B5B5B5]">
                    {article.desc}
                  </p>

                  <div className="md:text-right">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="border-b border-[#C6A15B] pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A15B] transition duration-300 hover:text-white"
                    >
                      Devamını oku
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ArticleModal
        selectedArticle={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}