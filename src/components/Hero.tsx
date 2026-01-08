"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

// Популярные проколы с ценами
const popularPiercings = [
  {
    id: 1,
    title: "Пирсинг Уха",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild3264-6336-4765-a137-656135633163/__1.png",
    link: "/services/ear"
  },
  {
    id: 2,
    title: "Пирсинг губ",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild3939-3833-4661-a539-653833343261/_.png",
    link: "/services/lips"
  },
  {
    id: 3,
    title: "Пирсинг языка",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild3463-6132-4836-a262-646565326336/_.png",
    link: "/services/tongue"
  },
  {
    id: 4,
    title: "Пирсинг носа",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild3234-3334-4266-a631-356264336338/_.png",
    link: "/services/nose"
  },
  {
    id: 5,
    title: "Пирсинг брови",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild3865-3237-4238-a466-353234326362/_.png",
    link: "/services/eyebrow"
  },
  {
    id: 6,
    title: "Пирсинг пупка",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild6133-6535-4564-b231-323332653737/_.png",
    link: "/services/navel"
  },
  {
    id: 7,
    title: "Пирсинг соска",
    price: "от 3500 ₽",
    image: "https://static.tildacdn.com/tild3635-3534-4933-b831-636134653635/_.png",
    link: "/services/nipple"
  },
];

export default function Hero() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Проверка возможности скролла для стрелок
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* ФОН */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#0a0a0a]/60 z-10" />
        <img
          src="https://loremflickr.com/1920/1080/piercing,studio/all?lock=1"
          alt="Piercing Studio Background"
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* ЛЕВАЯ КОЛОНКА: ТЕКСТ */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <div className="inline-block px-3 py-1 mb-4 border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm">
                Нас выбрали уже тысячи клиентов
              </div>
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                СТУДИЯ <span className="text-[#D4AF37]">PIERCING SHINE</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl bg-black/30 p-4 rounded-xl border-l-2 border-[#D4AF37] backdrop-blur-sm">
                Наша студия пирсинга в Москве обеспечивает индивидуальный подход и сервис 
                <span className="text-white font-bold"> Premium</span> класса на все услуги 
                с возможностью выбора украшений премиум сегмента для вашего нового образа.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://n1607698.yclients.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#D4AF37] text-black font-bold text-base md:text-lg rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Записаться онлайн
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>

            {/* Текст про стоимость */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               variants={fadeInUp}
               className="pt-4"
            >
               <p className="text-[10px] md:text-xs text-gray-500 leading-tight max-w-lg">
                 Стоимость пирсинга определяется множеством факторов: тип прокола, квалификация мастера, материалы и украшения. 
                 На сайте указаны базовые цены. Для точного расчёта рекомендуем обратиться в нашу студию.
               </p>
            </motion.div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: СЛАЙДЕР С ПОПУЛЯРНЫМИ ПРОКОЛАМИ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-[#D4AF37] mr-3"></span>
              Популярные проколы
            </h2>

            {/* Кнопки навигации */}
            <div className="absolute -top-2 right-0 flex space-x-2 z-10">
              <button 
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm transition-colors ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-black cursor-pointer'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm transition-colors ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-black cursor-pointer'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Контейнер карточек */}
            <div 
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {popularPiercings.map((item) => (
                <a 
                  href={item.link} 
                  key={item.id}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] h-[420px] snap-center group"
                >
                  <div className="w-full h-full bg-[#141414] rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-300 relative">
                    
                    {/* Изображение - Убраны отступы (padding), высота h-full, object-cover для заполнения */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Градиент за картинкой */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(212,175,55,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={item.image}
                          alt={item.title}
                          // Используем object-cover, чтобы заполнить всю карточку, либо object-contain, если важно не обрезать детали
                          // В данном случае лучше object-cover для стиля "без отступов", но с учетом прозрачности PNG может быть лучше contain
                          // Если картинки с прозрачным фоном, оставим contain но на всю высоту
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>

                    {/* Текст снизу - градиент для читаемости */}
                    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/80 to-transparent pt-16">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">{item.price}</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                          <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </a>
              ))}
            </div>

            {/* Подсказка для свайпа на мобильном */}
            <div className="flex md:hidden justify-center mt-2 text-[#D4AF37] text-xs font-bold animate-pulse">
              ← Свайпайте проколы →
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}