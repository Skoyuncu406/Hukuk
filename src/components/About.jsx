import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden bg-[#1B1B1B] px-5 py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[#C6A15B]/20" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal type="left">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C6A15B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
                  Hakkımızda
                </p>
              </div>

              <h2 className="font-title text-4xl font-semibold leading-tight text-white md:text-6xl">
                Müvekkil odaklı,
                <br />
                şeffaf ve güçlü
                <br />
                hukuki temsil.
              </h2>
            </div>
          </Reveal>

          <Reveal type="right" delay={0.15}>
            <div>
              <div className="border-l border-[#C6A15B]/25 pl-8 md:pl-10">
                <div className="space-y-7 text-lg leading-9 text-[#B8B8B8]">
                  <p>
                    Kırmızı Hukuk & Danışmanlık, müvekkillerinin hukuki
                    süreçlerini anlaşılır, güvenilir ve sonuç odaklı şekilde
                    yönetmek amacıyla faaliyet göstermektedir.
                  </p>

                  <p>
                    Dava, arabuluculuk, sözleşme, icra ve danışmanlık
                    süreçlerinde güncel mevzuat ve içtihatlar doğrultusunda
                    stratejik yol haritası oluşturur.
                  </p>

                  <p>
                    Amacımız yalnızca hukuki problemi çözmek değil; aynı zamanda
                    müvekkillerimizin süreci doğru anlamasını ve güven içerisinde
                    ilerlemesini sağlamaktır.
                  </p>
                </div>

                <div className="mt-14 grid grid-cols-3 border-t border-[#C6A15B]/20 pt-8">
                  <div>
                    <h3 className="font-title text-4xl text-white">
                      <CountUp end={100} suffix="%" />
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#B5B5B5]">
                      Şeffaflık
                    </p>
                  </div>

                  <div>
                    <h3 className="font-title text-4xl text-white">
                      Etik
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#B5B5B5]">
                      Yaklaşım
                    </p>
                  </div>

                  <div>
                    <h3 className="font-title text-4xl text-white">
                      Güven
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#B5B5B5]">
                      Odaklı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}