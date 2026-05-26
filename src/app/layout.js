import "./globals.css";

export const metadata = {
  title: "Kırmızı Hukuk & Danışmanlık",
  description: "Profesyonel avukatlık ve hukuki danışmanlık hizmetleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
