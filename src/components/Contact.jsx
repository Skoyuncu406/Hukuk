import { Mail, MapPin, Phone, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import PremiumButton from "./PremiumButton";

export default function Contact() {
  const address = "Çankaya Ankara";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const inputClass =
    "w-full border-b border-[#1B1B1B]/20 bg-transparent px-0 py-4 text-[#1B1B1B] outline-none transition placeholder:text-[#777] focus:border-[#C6A15B]";

  return (
    <section
      id="iletisim"
      className="relative min-h-screen overflow-hidden bg-[#F8F6F1] px-5 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal type="up">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C6A15B]" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
                  İletişim
                </p>
              </div>

              <h2 className="font-title text-4xl font-semibold leading-tight text-[#1B1B1B] md:text-6xl">
                Hukuki destek için bizimle iletişime geçin.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#555] lg:pt-14">
              Dava, danışmanlık veya sözleşme süreçleriniz için formu doldurarak
              bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal type="left" delay={0.1}>
            <div>
              <div className="border-y border-[#C6A15B]/30 py-8">
                <div className="space-y-7">
                  <div className="flex gap-5 text-[#1B1B1B]">
                    <Phone className="mt-1 text-[#C6A15B]" size={22} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#777]">
                        Telefon
                      </p>
                      <span className="mt-2 block text-lg">
                        0 (312) 000 00 00
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-5 text-[#1B1B1B]">
                    <Mail className="mt-1 text-[#C6A15B]" size={22} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#777]">
                        E-posta
                      </p>
                      <span className="mt-2 block text-lg">
                        info@kirmizihukuk.com
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-5 text-[#1B1B1B]">
                    <MapPin className="mt-1 text-[#C6A15B]" size={22} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#777]">
                        Adres
                      </p>
                      <span className="mt-2 block text-lg">
                        Çankaya / Ankara
                      </span>
                    </div>
                  </div>
                </div>

                <PremiumButton
                  href={mapsUrl}
                  variant="dark"
                  className="mt-10 w-full"
                >
                  <Navigation size={18} />
                  Yol Tarifi Al
                </PremiumButton>
              </div>

              <div className="mt-8 overflow-hidden border border-[#C6A15B]/30">
                <iframe
                  title="Kırmızı Hukuk Konum"
                  src="https://www.google.com/maps?q=Çankaya%20Ankara&output=embed"
                  className="h-[360px] w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal type="right" delay={0.2}>
            <form className="border-l border-[#C6A15B]/30 pl-0 lg:pl-10">
              <div className="grid gap-6">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className={inputClass}
                />

                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className={inputClass}
                />

                <input type="text" placeholder="Konu" className={inputClass} />

                <textarea
                  rows="8"
                  placeholder="Mesajınız"
                  className={`${inputClass} resize-none`}
                />

                <PremiumButton
                  type="button"
                  variant="dark"
                  className="mt-4 w-full"
                >
                  Gönder
                </PremiumButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}