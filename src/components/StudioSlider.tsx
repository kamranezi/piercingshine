"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Instagram } from "lucide-react";

// Ссылки на фото из твоего HTML (оригиналы высокого качества)
const studioImages = [
  { src: "https://static.tildacdn.com/tild6432-3132-4265-b433-373761653432/_4.png", alt: "Вход в студию" },
  { src: "https://static.tildacdn.com/tild3735-6135-4466-b435-353538363464/_6.png", alt: "Ресепшен" },
  { src: "https://static.tildacdn.com/tild3136-6364-4330-b433-313665393864/_3.png", alt: "Зона ожидания" },
  { src: "https://static.tildacdn.com/tild6362-3139-4030-a237-303639623366/_1.png", alt: "Кабинет мастера" },
  { src: "https://static.tildacdn.com/tild6265-6362-4563-a264-363964623830/_1.png", alt: "Рабочая зона" },
  { src: "https://static.tildacdn.com/tild6639-3635-4237-a162-386238333139/_5.png", alt: "Интерьер" },
  { src: "https://static.tildacdn.com/tild3539-3832-4434-b035-396636386161/_2.png", alt: "Детали интерьера" },
  // Дипломы и сертификаты (можно выделить в отдельный блок, но пока добавим сюда для атмосферы)
  { src: "https://static.tildacdn.com/tild3730-6535-4666-b030-643234653037/_2.jpg", alt: "Грамоты мастеров" },
  { src: "https://static.tildacdn.com/tild6538-3164-4561-b064-383132333762/_1.jpg", alt: "Сертификаты" },
];

export default function StudioSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            АТМОСФЕРА <span className="text-[#D4AF37]">СТУДИИ</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Мы создали пространство, где стерильность медицинской клиники сочетается 
            с уютом премиального салона.
          </p>
        </div>
        
        {/* Декоративная стрелка для скролла */}
        <div className="hidden md:flex items-center text-[#D4AF37] text-sm font-bold uppercase tracking-widest animate-pulse">
          Листайте <ArrowRight className="ml-2" />
        </div>
      </div>

      {/* Горизонтальный скролл контейнер */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto space-x-6 px-4 md:px-8 pb-8 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {studioImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex-shrink-0 w-[300px] h-[400px] md:w-[450px] md:h-[550px] rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 300px, 450px"
            />
            {/* Градиент внизу карточки */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            
            {/* Подпись */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white font-bold text-lg">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}