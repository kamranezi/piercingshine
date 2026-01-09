"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

export default function YandexReviews() {
  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      {/* 1. Вернули широкую сетку max-w-7xl, чтобы заполнить экран */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Заголовок */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
           <div className="inline-flex items-center justify-center p-3 bg-[#D4AF37]/10 rounded-full mb-3">
              <Star className="text-[#D4AF37]" size={20} fill="#D4AF37" />
           </div>
           <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-2">
             Живые <span className="text-[#D4AF37]">отзывы</span>
           </h2>
           <p className="text-gray-400 text-sm max-w-lg mx-auto">
             Рейтинг 5.0 на Яндекс.Картах. Читайте мнения наших клиентов.
           </p>
        </motion.div>

        {/* 2. Контейнер виджета
           overflow-hidden обрезает всё лишнее.
        */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-[600px] bg-[#141414] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
        >
          {/* Хитрость с масштабом (Zoom Out):
             - scale-[0.85]: уменьшаем содержимое до 85% от реального размера.
             - w-[117.65%] h-[117.65%]: увеличиваем физический размер iframe, 
               чтобы после уменьшения он заполнил ровно 100% контейнера.
               (Формула: 100 / 0.85 ≈ 117.65)
          */}
          <div className="w-[117.65%] h-[117.65%] origin-top-left transform scale-[0.85]">
            <iframe 
                src="https://yandex.ru/maps-reviews-widget/13580233451?comments"
                className="w-full h-full border-0"
                title="Отзывы Piercing Shine на Яндекс.Картах"
            />
          </div>

          {/* Ссылка для SEO */}
          <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none z-0 opacity-0">
             <a href="https://yandex.ru/maps/org/piercingshine/13580233451/" target="_blank" rel="noopener noreferrer">
               Студия пирсинга Piercing Shine на карте Москвы — Яндекс Карты
             </a>
          </div>
        </motion.div>

        {/* Кнопка */}
        <div className="mt-8 text-center">
            <a 
                href="https://yandex.ru/maps/org/piercingshine/13580233451/reviews/?add-review=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#141414] border border-[#D4AF37]/30 text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
            >
                <MessageCircle size={18} />
                Оставить отзыв
            </a>
        </div>

      </div>
    </section>
  );
}