"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Gift } from "lucide-react";

const offers = [
  {
    title: "Скидка за отзыв",
    desc: "Оставляйте отзыв на Яндекс Картах и получите приятный бонус — скидку 300 ₽.",
    image: "https://static.tildacdn.com/tild3161-3337-4165-a439-383435316266/_.png"
  },
  {
    title: "Скидка 50%",
    desc: "Сделай 2 прокола и получи скидку 50% на третий!",
    image: "https://static.tildacdn.com/tild3537-3935-4234-b033-633562356231/__.png"
  },
  {
    title: "Скидка 15% именинникам",
    desc: "Всем именинникам дарим скидку на любые виды пирсинга.",
    image: "https://static.tildacdn.com/tild3636-3465-4438-b433-633431666362/_.png"
  },
  {
    title: "Счастливые часы",
    desc: "Скидка 10% на все виды пирсинга по будням с 12 до 14 часов.",
    image: "https://static.tildacdn.com/tild3337-6164-4461-a336-626465623836/photo.png"
  },
  {
    title: "Скидка 15% за обучение",
    desc: "Участникам вебинаров и марафонов по искусству пирсинга и тату.",
    image: "https://static.tildacdn.com/tild6437-6135-4332-a636-353034323836/_.png"
  },
  {
    title: "Подарочный сертификат",
    desc: "3000₽, 6000₽ и 9000₽ на пирсинг и украшения. Красота тела и души для любимых.",
    image: "https://static.tildacdn.com/tild6235-3133-4963-b034-353563656166/photo.png"
  }
];

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase"
          >
            Акции и <span className="text-[#D4AF37]">Скидки</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Хотите сэкономить? Мы регулярно проводим акции и предлагаем специальные предложения. 
            Обратите внимание: скидки не суммируются.
          </p>
        </div>

        {/* Сетка карточек:
            На мобильных: flex + overflow-x-auto (горизонтальный скролл)
            На ПК: grid grid-cols-3 (обычная сетка)
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[85vw] md:w-auto h-[400px] rounded-2xl overflow-hidden group border border-white/10 snap-center"
            >
              {/* Картинка на фоне */}
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 85vw, 33vw"
              />
              
              {/* Темный градиент для читаемости текста */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

              {/* Контент карточки */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                    {offer.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
                
                <a 
                   href="https://n1607698.yclients.com" 
                   target="_blank"
                   className="inline-flex items-center justify-center w-full py-3 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-white transition-colors uppercase text-sm tracking-widest"
                >
                  Получить
                </a>
              </div>

              {/* Бейдж "Акция" */}
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-black p-2 rounded-full">
                <Gift size={20} />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Подсказка для скролла на мобильном */}
        <div className="md:hidden text-center mt-4 text-[#D4AF37] text-xs font-bold uppercase tracking-widest animate-pulse opacity-70">
          ← Листайте акции →
        </div>

      </div>
    </section>
  );
}