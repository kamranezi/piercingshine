"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import Image from "next/image";
import { FaVk } from 'react-icons/fa'; 

// Фото для слайдера
const galleryImages = [
  "https://static.tildacdn.com/tild3063-6130-4231-b237-303965656263/_1.jpg",
  "https://static.tildacdn.com/tild3062-6662-4533-b263-373437633034/_2.jpg",
  "https://static.tildacdn.com/tild3835-3331-4361-a463-636238623734/_3.jpg",
  "https://static.tildacdn.com/tild3861-3066-4365-b238-623466653266/_4.jpg",
  "https://static.tildacdn.com/tild6534-3436-4634-b335-343264646463/_5.jpg",
  "https://static.tildacdn.com/tild3962-3934-4537-a366-383335353663/_6.jpg",
  "https://static.tildacdn.com/tild6533-3138-4335-b963-633135663938/_7.jpg",
  "https://static.tildacdn.com/tild3731-3565-4531-a130-356666626432/_8.jpg",
  "https://static.tildacdn.com/tild6433-3534-4135-b630-613763336161/_9.jpg",
  "https://static.tildacdn.com/tild6235-6335-4631-a165-363235396535/_10.jpg",
];

export default function Contacts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Логика автопрокрутки слайдера
  useEffect(() => {
    const container = scrollContainerRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (container && !isHovered) {
        container.scrollLeft += 0.8; // Скорость прокрутки
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
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* Верхний блок с заголовком */}
      <section className="pt-32 pb-12 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase"
        >
          Наши <span className="text-[#D4AF37]">Контакты</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Мы находимся в центре Москвы, в 5 минутах от метро Бауманская.
          Ждем вас за красотой и стилем.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Левая колонка: Информация */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Карточка адреса */}
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Адрес студии</h3>
                  
                  {/* Точная ссылка на организацию из вашего запроса */}
                  <a 
                    href="https://yandex.ru/maps/org/piercingshine/13580233451/?display-text=Piercing%20shine&from=mapframe&ll=37.666427%2C55.785312&mode=search&sll=37.400988%2C55.670747&source=mapframe&sspn=0.580902%2C0.202181&text=Piercing%20shine&um=constructor%3A0c3866164289456561574545565558&utm_source=share&z=14"
                    target="_blank"
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors text-lg block font-medium leading-relaxed"
                  >
                    105005 г. Москва, <br/>
                    ул. Бауманская, дом 9
                  </a>
                  
                  <p className="text-sm text-gray-500 mt-2">
                    Студия пирсинга и тату &quot;PiercingShine&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Карточка времени работы */}
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                  <Clock size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Режим работы</h3>
                  <p className="text-gray-300 text-lg">Ежедневно: 12:00 — 21:00</p>
                  <p className="text-gray-500 text-sm mt-1">Работаем только по предварительной записи</p>
                </div>
              </div>
            </div>

            {/* Кнопки связи */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://wa.me/79801482386" 
                target="_blank"
                className="flex items-center justify-center p-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="mr-2" /> WhatsApp
              </a>
              <a 
                href="https://t.me/PIERCINGSHINE_BOT" 
                target="_blank"
                className="flex items-center justify-center p-4 bg-[#2AABEE] text-white rounded-xl font-bold hover:bg-[#229ed9] transition-colors"
              >
                <Navigation className="mr-2" /> Telegram
              </a>
              <a 
                href="https://vk.com/piercingshine" 
                target="_blank"
                className="flex items-center justify-center p-4 bg-[#4C75A3] text-white rounded-xl font-bold hover:bg-[#406891] transition-colors"
              >
                <FaVk className="mr-2 text-xl" /> VK
              </a>
            </div>
            
            <div className="bg-[#141414] p-4 rounded-xl border border-white/5 text-center">
                 <Phone className="inline-block text-[#D4AF37] mr-2" size={20}/>
                 <a href="tel:+79801482386" className="text-white font-bold text-xl hover:text-[#D4AF37] transition-colors">
                    8 (980) 148-23-86
                 </a>
            </div>

          </motion.div>

{/* Правая колонка: Карта */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              id="route-slider"
              className="h-[510px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative"
            >
              {/* Яндекс Карта с пешим маршрутом от м. Бауманская до PiercingShine */}
              <iframe
                src="https://yandex.ru/map-widget/v1/?mode=routes&rtext=55.772420%2C37.679031~55.776613%2C37.677014&rtt=pd&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                style={{ display: "block" }}
              ></iframe>
            </motion.div>
          </div>
        </div>
      {/* Слайдер с автопрокруткой */}
      <section className="py-12 border-t border-white/10 mb-8">
        <div className="max-w-7xl mx-auto px-4 mb-8">
           <h2 className="text-2xl font-bold text-white mb-2">Мы составили маршрут для вас</h2>
           <p className="text-gray-400 text-sm">Наведите курсор, чтобы остановить прокрутку</p>
        </div>

        {/* scrollbar-thin-gold - класс из globals.css */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 px-4 pb-6 scrollbar-thin-gold cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          onTouchStart={() => setIsHovered(true)} 
          onTouchEnd={() => setIsHovered(false)}
        >
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-[240px] h-[360px] rounded-xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="240px"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}