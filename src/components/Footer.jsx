import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-700 text-white">
            <Scale size={23} />
          </div>

          <div>
            <h3 className="font-bold text-zinc-950">
              Kırmızı Hukuk & Danışmanlık
            </h3>
            <p className="text-sm text-zinc-500">Profesyonel hukuki destek</p>
          </div>
        </div>

        <p className="text-sm text-zinc-500">© 2026 Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}