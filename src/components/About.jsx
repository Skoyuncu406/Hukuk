export default function About() {
  return (
    <section id="hakkimizda" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            Hakkımızda
          </p>

          <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl">
            Müvekkil odaklı, şeffaf ve güçlü hukuki temsil.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            Kırmızı Hukuk & Danışmanlık, müvekkillerinin hukuki süreçlerini
            anlaşılır, güvenilir ve sonuç odaklı şekilde yönetmek amacıyla
            faaliyet gösterir.
          </p>

          <p>
            Dava, arabuluculuk, sözleşme, icra ve danışmanlık süreçlerinde
            güncel mevzuat ve içtihatlar doğrultusunda stratejik yol haritası
            oluşturur.
          </p>

          <p>
            Amacımız yalnızca hukuki problemi çözmek değil; aynı zamanda
            müvekkillerimizin süreci doğru anlamasını ve güvenle ilerlemesini
            sağlamaktır.
          </p>
        </div>
      </div>
    </section>
  );
}