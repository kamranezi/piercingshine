import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

// URL вашего сайта (замените на реальный домен, когда он будет, например https://piercingshine.ru)
// Это нужно, чтобы картинки корректно отображались в соцсетях
const siteUrl = "https://bbabm8b1degf8gj4rrss.containers.yandexcloud.net"; 

export const metadata: Metadata = {
  // Базовый URL для разрешения относительных путей картинок
  metadataBase: new URL(siteUrl),
  
  title: "Piercing Shine | Студия безопасного пирсинга на Бауманской",
  description: "Салон пирсинга Валентины Атман, специалиста с огромным опытом работы и собственной программой обучения пирсингу. Премиум пирсинг и украшения в Москве. Безопасно. Стерильно. Стильно. Запишись онлайн!",
  keywords: ["пирсинг москва", "студия пирсинга", "прокол ушей", "пирсинг носа", "микродермал", "удаление тату", "piercing shine"],
  
  icons: {
    icon: '/favicon.svg',
  },

  // Настройки для Facebook, VK, WhatsApp, Telegram и др.
  openGraph: {
    title: "Piercing Shine | Студия безопасного пирсинга в Москве на Бауманской",
    description: "Салон пирсинга Валентины Атман, специалиста с огромным опытом работы и собственной программой обучения пирсингу. Премиум пирсинг и украшения в Москве. Безопасно. Стерильно. Стильно. Запишись онлайн!",
    url: siteUrl,
    siteName: "Piercing Shine",
    images: [
      {
        url: "/prev.png", // Ваша картинка из public
        width: 1200,
        height: 630,
        alt: "Интерьер и работы студии Piercing Shine",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  // Настройки для Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Piercing Shine | Пирсинг в Москве",
    description: "Студия безопасного пирсинга и профессионального обучения. Украшения из титана и золота.",
    images: ["/prev.png"], // Та же картинка
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