"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, AlertCircle, ShieldCheck, Zap } from "lucide-react";

// В реальном проекте эти данные лучше вынести в отдельный файл или базу данных.
// Здесь мы имитируем базу данных с подробной информацией для каждой услуги.
const detailedServices: Record<string, any> = {
  "helix": {
    title: "Хеликс (Helix)",
    price: "2 000 ₽",
    description: "Один из самых популярных видов пирсинга ушного хряща. Смотрится стильно как с кольцом, так и с лабретом. Прокол выполняется в верхней части завитка ушной раковины.",
    healing: "3-6 месяцев",
    painLevel: 4, // из 10
    jewelry: "Лабрет, Кольцо (после заживления)",
    care: [
      "Не спать на стороне прокола минимум 1 месяц",
      "Обрабатывать мирамистином 2 раза в день",
      "Не прокручивать украшение",
      "Даунсайз (замена ножки на более короткую) через 3-4 недели"
    ],
    image: "https://images.unsplash.com/photo-1617112920202-60ba8564273c?q=80&w=2000"
  },
  "septum": {
    title: "Септум",
    price: "2 500 ₽",
    description: "Прокол носовой перегородки. Это единственный вид пирсинга, который можно спрятать внутрь носа сразу после процедуры (с циркуляром). Заживает быстро и безболезненно.",
    healing: "4-8 недель",
    painLevel: 3,
    jewelry: "Циркуляр, Кликер, Банан",
    care: [
      "Не трогать грязными руками",
      "Делать ванночки с физраствором",
      "Можно прятать внутрь (флип)",
      "Менять украшение можно через 1.5 месяца"
    ],
    image: "https://images.unsplash.com/photo-1597241226786-444360e22709?q=80&w=2000"
  },
  // Дефолтные данные, если slug не найден или для других услуг
  "default": {
    title: "Классический пирсинг",
    price: "2 000 ₽",
    description: "Профессиональный прокол с использованием одноразовой иглы и титанового украшения. Мы гарантируем стерильность и безопасность процедуры.",
    healing: "Индивидуально",
    painLevel: 5,
    jewelry: "Титан ASTM F-136",
    care: [
      "Соблюдать гигиену",
      "Исключить бани и сауны на 2 недели",
      "Обрабатывать согласно инструкции мастера"
    ],
    image: "https://images.unsplash.com/photo-1535585090626-47b29a246830?q=80&w=2000"
  }
};

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  // Пытаемся найти данные по slug, если нет - берем дефолтные
  // (В реальной жизни slug должен совпадать с ID или полем slug в базе)
  // Для теста мы просто проверяем наличие ключа, иначе отдаем default
  const serviceKey = Object.keys(detailedServices).includes(params.slug) ? params.slug : "default";
  const service = detailedServices[serviceKey];

  // Если это дефолтный шаблон, подставим slug в название для наглядности, 
  // если вдруг перешли на неизвестную страницу
  if (serviceKey === "default") {
    service.title = `Пирсинг: ${decodeURIComponent(params.slug)}`;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Section с картинкой */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/services" 
              className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Назад к услугам
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Левая колонка: Описание и инфо */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Описание */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">О процедуре</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Характеристики (Сетка) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#141414] p-6 rounded-xl border border-white/5">
                <div className="text-[#D4AF37] mb-3"><Clock size={28} /></div>
                <div className="text-sm text-gray-500 mb-1">Заживление</div>
                <div className="font-bold text-white">{service.healing}</div>
              </div>
              
              <div className="bg-[#141414] p-6 rounded-xl border border-white/5">
                <div className="text-[#D4AF37] mb-3"><Zap size={28} /></div>
                <div className="text-sm text-gray-500 mb-1">Болевые ощущения</div>
                <div className="flex items-center space-x-1">
                  {/* Рендерим точки боли */}
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${i < service.painLevel ? 'bg-[#D4AF37]' : 'bg-gray-700'}`} 
                    />
                  ))}
                  <span className="ml-2 text-white font-bold">{service.painLevel}/10</span>
                </div>
              </div>

              <div className="bg-[#141414] p-6 rounded-xl border border-white/5">
                <div className="text-[#D4AF37] mb-3"><ShieldCheck size={28} /></div>
                <div className="text-sm text-gray-500 mb-1">Украшение</div>
                <div className="font-bold text-white">{service.jewelry}</div>
              </div>
            </div>

            {/* Правила ухода */}
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="text-[#D4AF37] mr-3" />
                Правила ухода
              </h3>
              <ul className="space-y-4">
                {service.care.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-xs font-bold mr-4 shrink-0">
                      {index + 1}
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Правая колонка: Sticky карточка с ценой */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#141414] border border-white/10 rounded-2xl p-8">
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Стоимость процедуры</div>
              <div className="text-4xl font-bold text-white mb-8">{service.price}</div>
              
              <div className="space-y-4">
                <a 
                  href="https://n1607698.yclients.com" 
                  target="_blank"
                  className="block w-full py-4 bg-[#D4AF37] text-black text-center font-bold rounded-xl hover:bg-white transition-all uppercase tracking-widest"
                >
                  Записаться
                </a>
                <p className="text-xs text-center text-gray-500">
                  В стоимость входит прокол и базовая консультация. 
                  Украшение оплачивается отдельно.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="text-white font-bold mb-4">Что входит:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><ShieldCheck size={16} className="mr-2 text-[#D4AF37]" /> Стерильные инструменты</li>
                  <li className="flex items-center"><ShieldCheck size={16} className="mr-2 text-[#D4AF37]" /> Одноразовая игла</li>
                  <li className="flex items-center"><ShieldCheck size={16} className="mr-2 text-[#D4AF37]" /> Анестезия (по желанию)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}