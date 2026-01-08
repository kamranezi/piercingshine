"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Данные для карусели услуг
const heroServices = [
  { name: "Ухо", img: "https://static.tildacdn.com/tild6434-3363-4134-a332-623266343136/_1.png", slug: "helix" },
  { name: "Губы", img: "https://static.tildacdn.com/tild3338-6334-4865-b261-393830623636/_1.png", slug: "lip" },
  { name: "Нос", img: "https://static.tildacdn.com/tild6131-3639-4432-a566-393630373166/noroot.png", slug: "nostril" },
  { name: "Бровь", img: "https://static.tildacdn.com/tild6238-3733-4032-a437-393337316237/_1.png", slug: "eyebrow" },
  // Для остальных используем заглушки или повторы (ссылок в запросе было 4)
  { name: "Язык", img: "https://static.tildacdn.com/tild3338-6334-4865-b261-393830623636/_1.png", slug: "tongue" },
  { name: "Пупок", img: "https://static.tildacdn.com/tild6434-3363-4134-a332-623266343136/_1.png", slug: "navel" },
  { name: "Интимный", img: "https://static.tildacdn.com/tild6238-3733-4032-a437-393337316237/_1.png", slug: "intimate" },
];

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* 1. ФОН */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#0a0a0a]/60 z-10" />
        <Image
          src="https://loremflickr.com/1920/1080/piercing,studio/all?lock=1"
          alt="Piercing Studio Background"
          fill
          className="object-cover grayscale opacity-50"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* 2. ЛЕВАЯ КОЛОНКА: ТЕКСТ (Заполняет пустоту) */}
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
              <Link
                href="https://n1607698.yclients.com" 
                target="_blank"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#D4AF37] text-black font-bold text-base md:text-lg rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Записаться онлайн
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Текст про стоимость (мелкий, как просили) */}
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

          {/* 3. ПРАВАЯ КОЛОНКА: КАРУСЕЛЬ УСЛУГ (Сразу на первом экране) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-[#D4AF37] mr-3"></span>
              Услуги студии
            </h2>
            
            {/* Горизонтальный скролл */}
            <div className="flex overflow-x-auto space-x-4 pb-6 scrollbar-thin-gold snap-x snap-mandatory">
              {heroServices.map((service, index) => (
                <Link 
                  key={index} 
                  href={`/services/${service.slug}`}
                  className="relative flex-shrink-0 w-[140px] h-[180px] md:w-[180px] md:h-[240px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer snap-start bg-[#141414]"
                >
                  {/* Картинка */}
                  <div className="absolute inset-0 p-2">
                     <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={service.img}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 140px, 180px"
                        />
                     </div>
                  </div>
                  
                  {/* Градиент и Текст */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="text-white font-bold text-sm md:text-lg uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Подсказка для свайпа на мобильном */}
            <div className="flex md:hidden justify-center mt-2 text-[#D4AF37] text-xs font-bold animate-pulse">
              ← Свайпайте услуги →
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}