"use client";

import Hero from '@/components/Hero';
import InteractiveEar from '@/components/InteractiveEar';
import StudioSlider from '@/components/StudioSlider';
import SpecialOffers from '@/components/SpecialOffers'; // <-- Импорт
import ServicesSection from '@/components/ServicesSection';
import BookingWidget from '@/components/BookingWidget';

import { motion } from "framer-motion";
import { ShieldCheck, Gem, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Главный экран */}
      <Hero />

      {/* 2. Карта уха */}
      <InteractiveEar />

      {/* 3. Акции и скидки (НОВОЕ) - ставим повыше, это продающий блок */}
      <SpecialOffers />

      <ServicesSection />

      {/* 4. Слайдер студии */}
      <StudioSlider />

      {/* 5. Преимущества */}
      <section className="py-8 md:py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* ... код преимуществ ... */}
             {[
            {
              icon: <ShieldCheck className="w-12 h-12 text-[#D4AF37]" />,
              title: "Стерильность",
              desc: "Используем автоклав класса B и одноразовые иглы.",
            },
            {
              icon: <Gem className="w-12 h-12 text-[#D4AF37]" />,
              title: "Украшения",
              desc: "Только титан ASTM F-136 и золото. Никакой стали.",
            },
            {
              icon: <GraduationCap className="w-12 h-12 text-[#D4AF37]" />,
              title: "Обучение",
              desc: "Собственная академия пирсинга. Базовые и PRO курсы.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Кнопка записи */}
      <BookingWidget />
    </div>
  );
}