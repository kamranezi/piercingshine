"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gift, ChevronLeft, ChevronRight } from "lucide-react";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      
      // Определяем текущий индекс карточки
      const cardWidth = sliderRef.current.querySelector('div')?.offsetWidth || 0;
      const index = Math.round(scrollLeft / (cardWidth + 24)); // 24 = gap-6
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('div')?.offsetWidth || 0;
      const scrollAmount = cardWidth + 24; // карточка + gap
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('div')?.offsetWidth || 0;
      sliderRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="pt-4 pb-8 md:pt-4 md:pb-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-8">
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

        {/* Навигация: Стрелки по краям, точки посередине */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          {/* Левая стрелка */}
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border border-white/10 bg-[#141414] transition-colors ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-black cursor-pointer'}`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Точки индикаторов по центру */}
          <div className="flex gap-2">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-[#D4AF37] w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Правая стрелка */}
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border border-white/10 bg-[#141414] transition-colors ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-black cursor-pointer'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Сетка карточек */}
        <div 
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[85vw] md:w-auto h-[400px] rounded-2xl overflow-hidden group border border-white/10 snap-center"
            >
              {/* Картинка на фоне */}
              <img
                src={offer.image}
                alt={offer.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                   rel="noopener noreferrer"
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

      </div>
    </section>
  );
}