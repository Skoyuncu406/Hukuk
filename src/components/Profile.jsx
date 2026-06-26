import Image from "next/image";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import PremiumButton from "./PremiumButton";
import AnimatedDivider from "./AnimatedDivider";

export default function Profile() {
  const stats = [
    {
      icon: Award,
      type: "count",
      end: 10,
      suffix: "+",
      label: "Yıllık Hukuk Deneyimi",
    },
    {
      icon: BriefcaseBusiness,
      type: "count",
      end: 500,
      suffix: "+",
      label: "Başarılı Dosya Yönetimi",
    },
    {
      icon: GraduationCap,
      type: "text",
      value: "Uzmanlık",
      label: "Ticaret ve Aile Hukuku",
    },
  ];

  return (
    <section
      id="kurucu"
      className="relative overflow-hidden bg-[#FAF8F3] px-5 py-10"
    >
      <AnimatedDivider />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal type="left">
          <div className="group relative">
            <div className="absolute -left-5 -top-5 h-full w-full border border-[#C6A15B]/30 transition-all duration-500 group-hover:-left-7 group-hover:-top-7 group-hover:border-[#C6A15B]/60" />

            <div className="relative overflow-hidden bg-[#1B1B1B] p-3">
              <span className="pointer-events-none absolute inset-3 z-10 border border-[#C6A15B]/10 transition-all duration-500 group-hover:border-[#C6A15B]/35" />

              <span className="pointer-events-none absolute -left-[80%] top-0 z-20 h-full w-1/2 rotate-[18deg] bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[130%]" />

              <span className="pointer-events-none absolute inset-3 z-10 bg-gradient-to-t from-[#1B1B1B]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

              <Image
                src="/lawyer.jpg"
                alt="Avukat Profil"
                width={550}
                height={700}
                className="h-[560px] w-full object-cover grayscale-[18%] transition-all duration-700 group-hover:scale-[1.045] group-hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal type="right" delay={0.15}>
          <div>
            <div className="mb-6 flex items-center gap-4 text-[#C6A15B]">
              <span className="h-px w-12 bg-[#C6A15B]" />
              <p className="text-xs font-semibold uppercase tracking-[0.32em]">
                Kurucu Avukat
              </p>
            </div>

            <h2 className="font-title max-w-4xl text-4xl font-semibold leading-tight text-[#1B1B1B] md:text-6xl">
              Güçlü hukuki temsil, şeffaf süreç yönetimi ve profesyonel danışmanlık.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#555] md:text-lg">
              <p>
                Av. Ahmet Yılmaz, bireysel ve kurumsal müvekkillerine ticaret
                hukuku, aile hukuku, icra hukuku ve sözleşmeler hukuku alanlarında
                profesyonel danışmanlık sunmaktadır.
              </p>

              <p>
                Her dosyayı özel olarak analiz ederek stratejik çözümler üretmeyi
                hedefleyen yaklaşımı sayesinde müvekkillerine güvenilir ve etkili
                hukuki destek sağlamaktadır.
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#C6A15B]/30 sm:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`py-7 ${
                      index !== 2 ? "sm:border-r sm:border-[#C6A15B]/30" : ""
                    } ${index !== 0 ? "sm:pl-7" : ""} ${
                      index !== 2 ? "sm:pr-7" : ""
                    }`}
                  >
                    <Icon
                      className="mb-5 text-[#C6A15B]"
                      size={28}
                      strokeWidth={1.6}
                    />

                    <h3 className="font-title text-3xl font-semibold text-[#1B1B1B]">
                      {item.type === "count" ? (
                        <CountUp end={item.end} suffix={item.suffix} />
                      ) : (
                        item.value
                      )}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#666]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PremiumButton href="#iletisim" variant="dark">
                İletişime Geç
              </PremiumButton>

              <PremiumButton href="#makaleler" variant="outline">
                Makaleleri İncele
              </PremiumButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}