import Image from "next/image";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Profile() {
  return (
    <section  id="kurucu" className="relative overflow-hidden bg-white px-5 py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-zinc-200 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* FOTOĞRAF */}
        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-2xl shadow-zinc-300/50">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-red-100/40 to-transparent" />

            <Image
              src="/lawyer.jpg"
              alt="Avukat Profil"
              width={550}
              height={700}
              className="relative h-[600px] w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>

        {/* İÇERİK */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            Kurucu Avukat
          </p>

          <h2 className="text-4xl font-bold leading-tight text-zinc-950 md:text-5xl">
            Güçlü hukuki temsil, şeffaf süreç yönetimi ve profesyonel danışmanlık.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Av. Ahmet Yılmaz, bireysel ve kurumsal müvekkillerine ticaret
            hukuku, aile hukuku, icra hukuku ve sözleşmeler hukuku alanlarında
            profesyonel danışmanlık sunmaktadır.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Her dosyayı özel olarak analiz ederek stratejik çözümler üretmeyi
            hedefleyen yaklaşımı sayesinde müvekkillerine güvenilir ve etkili
            hukuki destek sağlamaktadır.
          </p>

          {/* BİLGİ KARTLARI */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-lg shadow-zinc-200/50">
              <Award className="mb-4 text-red-700" size={32} />

              <h3 className="text-2xl font-bold text-zinc-950">10+</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Yıllık Hukuk Deneyimi
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-lg shadow-zinc-200/50">
              <BriefcaseBusiness
                className="mb-4 text-red-700"
                size={32}
              />

              <h3 className="text-2xl font-bold text-zinc-950">500+</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Başarılı Dosya Yönetimi
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-lg shadow-zinc-200/50">
              <GraduationCap className="mb-4 text-red-700" size={32} />

              <h3 className="text-2xl font-bold text-zinc-950">
                Uzmanlık
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Ticaret ve Aile Hukuku
              </p>
            </div>
          </div>

          {/* BUTONLAR */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-7 py-4 font-semibold text-white transition hover:bg-red-800"
            >
              İletişime Geç
            </a>

            <a
              href="#makaleler"
              className="inline-flex items-center justify-center rounded-full border border-red-300 bg-white px-7 py-4 font-semibold text-red-700 transition hover:bg-red-50"
            >
              Makaleleri İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}