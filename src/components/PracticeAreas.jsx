import {
  Briefcase,
  FileText,
  Home,
  Landmark,
  Users,
  Building2,
} from "lucide-react";

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
    <section id="alanlar" className="bg-zinc-100 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            Çalışma Alanları
          </p>

          <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl">
            Hukuki ihtiyaçlarınıza özel çözümler
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-lg shadow-zinc-200/70 transition hover:-translate-y-2 hover:border-red-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-950">
                  {area.title}
                </h3>

                <p className="leading-7 text-zinc-600">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}