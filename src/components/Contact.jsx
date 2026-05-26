import { Mail, MapPin, Phone, Navigation } from "lucide-react";

export default function Contact() {
  const address = "Çankaya Ankara";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section id="iletisim" className="bg-zinc-100 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            İletişim
          </p>

          <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl">
            Hukuki destek için bizimle iletişime geçin.
          </h2>

          <p className="mt-6 leading-8 text-zinc-600">
            Dava, danışmanlık veya sözleşme süreçleriniz için formu doldurarak
            bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-xl shadow-zinc-200/70">
              <div className="space-y-5">
                <div className="flex gap-4 text-zinc-700">
                  <Phone className="text-red-700" />
                  <span>0 (312) 000 00 00</span>
                </div>

                <div className="flex gap-4 text-zinc-700">
                  <Mail className="text-red-700" />
                  <span>info@kirmizihukuk.com</span>
                </div>

                <div className="flex gap-4 text-zinc-700">
                  <MapPin className="text-red-700" />
                  <span>Çankaya / Ankara</span>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-700 px-7 py-4 font-semibold text-white transition hover:bg-red-800"
              >
                <Navigation size={20} />
                Yol Tarifi Al
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/70">
              <iframe
                title="Kırmızı Hukuk Konum"
                src="https://www.google.com/maps?q=Çankaya%20Ankara&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-xl shadow-zinc-200/70">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-600"
              />

              <input
                type="tel"
                placeholder="Telefon Numaranız"
                className="rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-600"
              />

              <input
                type="text"
                placeholder="Konu"
                className="rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-600"
              />

              <textarea
                rows="8"
                placeholder="Mesajınız"
                className="rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-600"
              />

              <button
                type="button"
                className="rounded-full bg-red-700 px-7 py-4 font-semibold text-white transition hover:bg-red-800"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}