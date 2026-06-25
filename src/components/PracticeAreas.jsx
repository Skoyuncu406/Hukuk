import {
  Briefcase,
  FileText,
  Home,
  Landmark,
  Users,
  Building2,
} from "lucide-react";
import Reveal from "./Reveal";
import AnimatedDivider from "./AnimatedDivider";

const areas = [
  {
    icon: Briefcase,
    title: "Ticaret Hukuku",
    desc: "Şirketler, sözleşmeler, ticari uyuşmazlıklar ve kurumsal danışmanlık.",
  },
  {
    icon: Users,
    title: "Aile Hukuku",
    desc: "Boşanma, velayet, nafaka, mal paylaşımı ve aile içi hukuki süreçler.",
  },
  {
    icon: Landmark,
    title: "İcra Hukuku",
    desc: "Alacak takibi, icra dosyaları, itiraz süreçleri ve tahsilat yönetimi.",
  },
  {
    icon: FileText,
    title: "Sözleşmeler Hukuku",
    desc: "Sözleşme hazırlama, inceleme, revizyon ve risk analizi.",
  },
  {
    icon: Home,
    title: "Gayrimenkul Hukuku",
    desc: "Tapu, kira, tahliye, ortaklığın giderilmesi ve taşınmaz uyuşmazlıkları.",
  },
  {
    icon: Building2,
    title: "İş Hukuku",
    desc: "İşçi-işveren uyuşmazlıkları, tazminat, işe iade ve danışmanlık.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="alanlar"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 py-28"
    >
      <AnimatedDivider />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal type="left">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C6A15B]" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
                  Çalışma Alanları
                </p>
              </div>

              <h2 className="font-title text-4xl font-semibold leading-tight text-[#1B1B1B] md:text-6xl">
                Hukuki ihtiyaçlarınıza özel çözümler
              </h2>
            </div>
          </Reveal>

          <Reveal type="right" delay={0.15}>
            <p className="max-w-2xl text-lg leading-8 text-[#555] lg:pt-14">
              Her hukuki süreç farklı dinamikler taşır. Bu nedenle çalışma
              alanlarımızda yalnızca mevzuata dayalı değil; strateji, analiz ve
              süreç yönetimi odaklı bir yaklaşım benimsiyoruz.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-[#C6A15B]/30">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={area.title} type="up" delay={index * 0.06}>
                <div className="group relative grid gap-6 overflow-hidden border-b border-[#C6A15B]/30 py-8 transition-all duration-500 hover:bg-[#1B1B1B] md:grid-cols-[90px_1fr_1.3fr_70px]">
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#C6A15B]/10 transition-all duration-500 group-hover:w-full" />

                  <div className="relative z-10 flex items-start overflow-hidden text-sm font-semibold tracking-[0.25em] text-[#C6A15B] md:pt-2">
                    <span className="transition-transform duration-300 group-hover:-translate-y-1">
                      {number}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center gap-5">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#C6A15B] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    />

                    <h3 className="font-title text-3xl font-semibold text-[#1B1B1B] transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                      {area.title}
                    </h3>
                  </div>

                  <p className="relative z-10 max-w-2xl leading-7 text-[#555] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#B5B5B5]">
                    {area.desc}
                  </p>

                  <div className="relative z-10 hidden items-center justify-end md:flex">
                    <span className="h-px w-10 bg-[#C6A15B] transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}