"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("ears");

  const filteredServices = services.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Адаптация отступов: 
         pt-28 для мобильных (чтобы не наезжало на хедер), 
         md:pt-32 для ПК 
      */}
      <div className="pt-28 pb-16 md:pt-32 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center"
        >
          СТОИМОСТЬ <span className="text-[#D4AF37]">УСЛУГ</span>
        </motion.h1>

        {/* Фильтр категорий (Скролл бар скрыт, отступы адаптированы) */}
        <div className="flex overflow-x-auto space-x-2 md:space-x-4 pb-4 md:pb-8 mb-6 md:mb-8 no-scrollbar justify-start md:justify-center px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "bg-transparent text-gray-400 border-white/20 hover:border-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Сетка услуг */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Оборачиваем карточку в Link */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="group block relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-2 h-full flex flex-col"
                >
                  {/* Картинка с использованием Next.js Image */}
                  <div className="h-56 md:h-64 overflow-hidden relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 opacity-60" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur px-3 py-1 rounded-lg text-[#D4AF37] font-bold shadow-lg text-sm md:text-base">
                      {service.price}
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="p-6 relative z-20 -mt-6 flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                      Подробнее 
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}