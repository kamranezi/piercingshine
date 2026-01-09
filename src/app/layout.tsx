import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

// URL вашего сайта (замените на реальный домен, когда он будет, например https://piercingshine.ru)
// Это нужно, чтобы картинки корректно отображались в соцсетях
const siteUrl = "https://bbatm80c3pebr2enpr6q.containers.yandexcloud.net"; 

export const metadata: Metadata = {
  // Базовый URL для разрешения относительных путей картинок
  metadataBase: new URL(siteUrl),
  
  title: "Piercing Shine | Студия безопасного пирсинга в Москве",
  description: "Профессиональный салон пирсинга любой сложности. Стерильность 100%, титановые украшения ASTM F-136, обучение мастеров.",
  keywords: ["пирсинг москва", "студия пирсинга", "прокол ушей", "пирсинг носа", "микродермал", "удаление тату", "piercing shine"],
  
  icons: {
    icon: '/favicon.svg',
  },

  // Настройки для Facebook, VK, WhatsApp, Telegram и др.
  openGraph: {
    title: "Piercing Shine | Студия безопасного пирсинга",
    description: "Премиум пирсинг и украшения в Москве. Безопасно. Стерильно. Стильно. Запишись онлайн!",
    url: siteUrl,
    siteName: "Piercing Shine",
    images: [
      {
        url: "/pre.png", // Ваша картинка из public
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
    images: ["/pre.png"], // Та же картинка
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