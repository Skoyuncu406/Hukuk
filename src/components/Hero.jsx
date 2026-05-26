import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-zinc-100 to-red-50 pt-32"
    >
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-red-200 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-zinc-300 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm">
            <ShieldCheck size={17} />
            Güvenilir Hukuki Danışmanlık
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-zinc-950 md:text-6xl">
            Haklarınızı güçlü, hızlı ve şeffaf şekilde savunuyoruz.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Kırmızı Hukuk & Danışmanlık, bireysel ve kurumsal müvekkillerine
            dava takibi, sözleşme yönetimi, icra hukuku, aile hukuku ve ticaret
            hukuku alanlarında profesyonel destek sunar.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-700 px-7 py-4 font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-800"
            >
              Bilgi Almak İstiyorum
              <ArrowRight size={19} />
            </a>

            <a
              href="#alanlar"
              className="inline-flex items-center justify-center rounded-full border border-red-300 bg-white px-7 py-4 font-semibold text-red-700 transition hover:bg-red-50"
            >
              Çalışma Alanları
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-300/50">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-red-700 to-red-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-red-100">
              Hukuk Bürosu
            </p>

            <h2 className="mt-8 text-4xl font-bold">
              Adalet için stratejik yaklaşım
            </h2>

            <p className="mt-5 leading-7 text-red-100">
              Her dosya özelinde detaylı analiz, güncel mevzuat takibi ve sonuç
              odaklı hukuki çözüm süreci.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm text-red-100">Çalışma Alanı</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <h3 className="text-3xl font-bold">7/24</h3>
                <p className="text-sm text-red-100">Ön Başvuru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}