import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

const siteUrl = "https://bbasid39sv0htst18ktg.containers.yandexcloud.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: "Piercing Shine | Студия безопасного пирсинга Премиум класса на Бауманской",
  description: "Салон пирсинга Валентины Атман, специалиста с огромным опытом работы и собственной программой обучения пирсингу. Премиум пирсинг и украшения в Москве. Безопасно. Стерильно. Стильно. Запишись онлайн на сайте!",
  
  keywords: ["пирсинг москва", "студия пирсинга", "прокол ушей", "пирсинг носа", "микродермал", "удаление тату", "piercing shine"],
  
  authors: [{ name: "Valentina Atman Team" }],
  creator: "Valentina Atman",
  publisher: "Valentina Atman",
  
  icons: {
    icon: '/favicon.svg',
  },

  openGraph: {
    title: "Piercing Shine | Студия безопасного пирсинга Премиум класса в Москве на Бауманской",
    description: "Салон пирсинга Валентины Атман, специалиста с огромным опытом работы и собственной программой обучения пирсингу. Премиум пирсинг и украшения в Москве. Безопасно. Стерильно. Стильно. Запишись онлайн прямо на сайте!",
    url: siteUrl,
    siteName: "Piercing Shine",
    images: [
      {
        url: "/og-image.jpg", // относительный путь, т.к. есть metadataBase
        width: 1200,
        height: 630,
        alt: "Интерьер и работы студии Piercing Shine",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Piercing Shine | Пирсинг в Москве",
    description: "Студия безопасного пирсинга и профессионального обучения. Украшения из титана и золота.",
    images: ["/og-image.jpg"], // относительный путь
    creator: "@piercingshine", // опционально, если есть Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} flex flex-col min-h-screen bg-[#0a0a0a] text-white`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}