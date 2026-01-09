"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Фотографии студии
const studioImages = [
  { src: "https://static.tildacdn.com/tild6432-3132-4265-b433-373761653432/_4.png", alt: "Вход в студию" },
  { src: "https://static.tildacdn.com/tild3735-6135-4466-b435-353538363464/_6.png", alt: "Ресепшен" },
  { src: "https://static.tildacdn.com/tild3136-6364-4330-b433-313665393864/_3.png", alt: "Зона ожидания" },
  { src: "https://static.tildacdn.com/tild6362-3139-4030-a237-303639623366/_1.png", alt: "Кабинет мастера" },
  { src: "https://static.tildacdn.com/tild6265-6362-4563-a264-363964623830/_1.png", alt: "Рабочая зона" },
  { src: "https://static.tildacdn.com/tild6639-3635-4237-a162-386238333139/_5.png", alt: "Интерьер" },
  { src: "https://static.tildacdn.com/tild3539-3832-4434-b035-396636386161/_2.png", alt: "Детали" },
  { src: "https://static.tildacdn.com/tild3730-6535-4666-b030-643234653037/_2.jpg", alt: "Грамоты мастеров" },
  { src: "https://static.tildacdn.com/tild6538-3164-4561-b064-383132333762/_1.jpg", alt: "Сертификаты" },
];

export default function StudioSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Логика автопрокрутки
  useEffect(() => {
    const container = scrollContainerRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (container && !isHovered) {
        // Скорость прокрутки (0.6px за кадр - плавно и спокойно)
        container.scrollLeft += 0.6; 
        
        // Если докрутили до конца, возвращаем в начало
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="pt-4 pb-8 md:pt-4 md:pb-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 1. ВЕРХНЯЯ ЧАСТЬ */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              АТМОСФЕРА <span className="text-[#D4AF37]">СТУДИИ</span>
            </motion.h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Мы создали пространство, где стерильность медицинской клиники сочетается 
              с уютом премиального салона.
            </p>
          </div>
          
          <div className="hidden md:flex items-center text-[#D4AF37] text-sm font-bold uppercase tracking-widest animate-pulse mb-2">
            Листайте <ArrowRight className="ml-2" />
          </div>
        </div>

        {/* 2. СЛАЙДЕР С АВТОПРОКРУТКОЙ */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-8 cursor-grab active:cursor-grabbing scrollbar-thin-gold"
          onMouseEnter={() => setIsHovered(true)} // Пауза при наведении
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)} // Пауза при касании
          onTouchEnd={() => setIsHovered(false)}
        >
          {studioImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative flex-shrink-0 w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 280px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-white font-bold text-lg">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. НИЖНЯЯ ЧАСТЬ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-t border-white/10 pt-8">
          <div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
               Приглашаем на экскурсию
             </h3>
             <p className="text-gray-400 leading-relaxed">
               Наши сотрудники одинаково приветливы как к новым, так и к постоянным посетителям. 
               Мы также предлагаем чай и кофе. Будем рады знакомству!
             </p>
          </div>
          
          <div className="text-gray-400 leading-relaxed border-l-2 border-[#D4AF37] pl-6">
            <p>
              Окунитесь в атмосферу спокойствия и уюта, где Вас с радостью встретят как дорогого гостя. 
              <span className="text-white font-bold"> &quot;PiercingShine&quot;</span> — это место, где можно не только сделать пирсинг на высшем уровне, 
              но и купить украшения для уже имеющихся проколов.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}