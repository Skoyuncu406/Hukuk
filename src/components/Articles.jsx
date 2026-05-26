"use client";

import { useState } from "react";
import { X } from "lucide-react";

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

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="makaleler" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
              Makaleler
            </p>

            <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl">
              Güncel hukuki içerikler
            </h2>
          </div>

          <a
            href="#iletisim"
            className="rounded-full border border-red-300 bg-white px-6 py-3 font-semibold text-red-700 transition hover:bg-red-50"
          >
            Danışmanlık Al
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-lg shadow-zinc-200/50 transition hover:-translate-y-2 hover:border-red-300"
            >
              <p className="mb-4 text-sm font-semibold text-red-700">
                Hukuk Rehberi
              </p>

              <h3 className="mb-4 text-xl font-bold text-zinc-950">
                {article.title}
              </h3>

              <p className="mb-6 leading-7 text-zinc-600">{article.desc}</p>

              <button
                onClick={() => setSelectedArticle(article)}
                className="font-semibold text-red-700 transition hover:text-red-900"
              >
                Devamını oku →
              </button>
            </article>
          ))}
        </div>

        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
            <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl">
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
                    Makale
                  </p>

                  <h3 className="text-2xl font-bold text-zinc-950 md:text-3xl">
                    {selectedArticle.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-full bg-zinc-100 p-3 text-zinc-700 transition hover:bg-red-100 hover:text-red-700"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-5 text-lg leading-8 text-zinc-600">
                {selectedArticle.content
                  .trim()
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              <div className="mt-8">
                <a
                  href="#iletisim"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex rounded-full bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
                >
                  Bu Konuda Danışmanlık Al
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}