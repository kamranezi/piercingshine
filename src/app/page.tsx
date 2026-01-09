"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { ShieldCheck, Gem, GraduationCap } from "lucide-react";

// Импорт всех компонентов
import Hero from '@/components/Hero';
import InteractiveEar from '@/components/InteractiveEar';
import StudioSlider from '@/components/StudioSlider';
import SpecialOffers from '@/components/SpecialOffers';
import ServicesSection from '@/components/ServicesSection';
import BookingWidget from '@/components/BookingWidget';
import Safety from '@/components/Safety';
import Payments from '@/components/Payments';
import FAQ from '@/components/FAQ'; // <--- 1. Импорт FAQ
import YandexReviews from '@/components/YandexReviews'; // <--- 1. Импорт

export default function Home() {
  const safetyRef = useRef<HTMLDivElement>(null);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);

  const handleSafetyClick = () => {
    setIsSafetyOpen(true);
    setTimeout(() => {
      safetyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const advantages = [
    {
      id: 1,
      icon: <Gem className="w-12 h-12 text-[#D4AF37]" />,
      title: "Украшения",
      desc: "Только титан ASTM F-136 и золото. Никакой стали.",
      href: "/shop",
    },
    {
      id: 2,
      icon: <GraduationCap className="w-12 h-12 text-[#D4AF37]" />,
      title: "Обучение",
      desc: "Собственная академия пирсинга. Базовые и PRO курсы.",
      href: "/academy",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-12 h-12 text-[#D4AF37]" />,
      title: "Стерильность",
      desc: "Используем автоклав класса B и одноразовые иглы.",
      action: "safety",
    },
  ];

  return (
    <div className="w-full bg-[#0a0a0a]">
      <Hero />
      <InteractiveEar />
      <SpecialOffers />
      <ServicesSection />
      {/* ОТЗЫВЫ ЯНДЕКС (Новый блок) */}
      <YandexReviews />
      <StudioSlider />
      
      {/* Преимущества */}
      <section className="py-8 md:py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {advantages.map((item, index) => {
            const CardInner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-colors h-full flex flex-col group cursor-pointer"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );

            if (item.href) {
              return (
                <Link key={item.id} href={item.href} className="block h-full">
                  {CardInner}
                </Link>
              );
            }
            
            if (item.action === "safety") {
              return (
                <div key={item.id} onClick={handleSafetyClick} className="block h-full">
                   {CardInner}
                </div>
              );
            }
            
            return <div key={item.id}>{CardInner}</div>;
          })}
        </div>
      </section>
      
      {/* Блок Безопасности */}
      <div ref={safetyRef}>
        <Safety isOpen={isSafetyOpen} setIsOpen={setIsSafetyOpen} />
      </div>

      {/* Оплата */}
      <Payments />

      {/* FAQ (Вопрос-Ответ) */}
      <FAQ />

      {/* Виджет записи */}
      <BookingWidget />
    </div>
  );
}