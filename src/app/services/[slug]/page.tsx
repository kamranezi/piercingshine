"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, AlertCircle, ShieldCheck, Zap } from "lucide-react";
import { allServices } from "@/lib/data"; // Импортируем наши данные

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  // Ищем услугу по slug
  const foundService = allServices.find((s) => s.slug === params.slug);

  // Если услуга не найдена, используем дефолтные данные (чтобы не было 404/ошибок при разработке)
  const service = foundService || {
    title: `Услуга: ${decodeURIComponent(params.slug)}`,
    price: "по запросу",
    description: "Подробное описание этой услуги уточняйте у администратора.",
    healing: "Индивидуально",
    painLevel: 0,
    jewelry: "Титан ASTM F-136",
    care: ["Следуйте рекомендациям мастера", "Соблюдайте гигиену"],
    image: "https://loremflickr.com/1200/800/piercing/all" // Заглушка
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[60vh] min-h-[350px]">
        {/* Картинка на фон */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-black/30 z-10" />
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Контент поверх картинки */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/services" 
              className="inline-flex items-center text-gray-300 hover:text-white mb-4 md:mb-6 transition-colors text-xs md:text-sm font-bold uppercase tracking-wider bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
            >
              <ArrowLeft size={14} className="mr-2" />
              Назад к услугам
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 shadow-black drop-shadow-lg leading-tight"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          
          {/* Левая колонка (Описание) */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12 order-2 lg:order-1">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">О процедуре</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Иконки характеристик */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#141414] p-5 rounded-xl border border-white/5">
                <div className="text-[#D4AF37] mb-2"><Clock size={24} /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Заживление</div>
                <div className="font-bold text-white text-sm md:text-base">{service.healing}</div>
              </div>
              
              <div className="bg-[#141414] p-5 rounded-xl border border-white/5">
                <div className="text-[#D4AF37] mb-2"><Zap size={24} /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Болевые ощущения</div>
                <div className="flex items-center space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full ${i < (service.painLevel || 0) ? 'bg-[#D4AF37]' : 'bg-gray-700'}`} 
                    />
                  ))}
                </div>
              </div>

              <div className="bg-[#141414] p-5 rounded-xl border border-white/5">
                <div className="text-[#D4AF37] mb-2"><ShieldCheck size={24} /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Украшение</div>
                <div className="font-bold text-white text-sm md:text-base leading-tight">{service.jewelry}</div>
              </div>
            </div>

            {/* Блок правил ухода */}
            <div className="bg-[#141414] p-6 md:p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="text-[#D4AF37] mr-3" />
                Правила ухода
              </h3>
              <ul className="space-y-4">
                {service.care?.map((rule, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-xs font-bold mr-3 md:mr-4 shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Правая колонка (Цена) */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24 bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Стоимость работы</div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">{service.price}</div>
              
              <a 
                href="https://n1607698.yclients.com" 
                target="_blank"
                className="block w-full py-4 bg-[#D4AF37] text-black text-center font-bold rounded-xl hover:bg-white transition-all uppercase text-sm tracking-widest hover:scale-105 transform duration-200"
              >
                Записаться
              </a>
              <p className="mt-4 text-xs text-center text-gray-600">
                Стоимость украшения оплачивается отдельно и зависит от выбранного материала.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}