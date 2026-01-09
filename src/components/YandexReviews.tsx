'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Star, ChevronDown, MessageCircle, Footprints } from "lucide-react";
import Link from 'next/link'; // Импортируем Link для перехода между страницами

const AccordionItem = ({ title, subTitle, children, defaultOpen = false }: { title: string, subTitle: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-xl bg-[#141414]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{subTitle}</p>
        </div>
        <ChevronDown 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
        <div className="px-5 pb-5">
           {children}
        </div>
      </div>
    </div>
  );
};

export default function YandexReviewsAndMap() {

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:block">
          <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-[#D4AF37]/10 rounded-full mb-3">
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-white mb-2">
                Отзывы <span className="text-white/50">и</span> Расположение
              </h2>
              <p className="text-gray-400 text-sm">
                Рейтинг 5.0 на Яндекс.Картах. Мы всегда вам рады!
              </p>
          </div>

          <div className="grid grid-cols-2 gap-8 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА: ОТЗЫВЫ */}
            <div className="flex flex-col h-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale : 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[600px] bg-[#141414] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
                >
                  <iframe 
                    src="https://yandex.ru/maps-reviews-widget/13580233451?comments"
                    className="w-full h-full border-0"
                    title="Отзывы Piercing Shine на Яндекс.Картах"
                  />
                </motion.div>
                
                <div className="mt-6 text-center">
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

            {/* ПРАВАЯ КОЛОНКА: КАРТА */}
            <div className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-[600px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative"
                >
                  {/* ИСХОДНАЯ КАРТА С ТОЧКОЙ */}
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.677014%2C55.776614&mode=search&oid=13580233451&ol=biz&z=17"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ display: "block" }}
                  ></iframe>
                </motion.div>

                {/* Кнопка ведет на /contacts с якорем #route-slider */}
                <div className="mt-6 text-center">
                    <Link 
                        href="/contacts#route-slider"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#141414] border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider cursor-pointer"
                    >
                        <Footprints size={18} />
                        Как пройти до нас от Метро
                    </Link>
                </div>
            </div>

          </div>
        </div>

        {/* --- MOBILE/TABLET VIEW --- */}
        <div className="block lg:hidden">
          <div className="space-y-4">
            
            <AccordionItem 
              title="Отзывы Piercingshine"
              subTitle="5,0 • 255 отзывов • 306 оценок"
              defaultOpen={true}
            >
                <div className="h-[500px] -mx-1 -mb-1 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/maps-reviews-widget/13580233451?comments"
                    className="w-full h-full border-0"
                    title="Отзывы Piercing Shine на Яндекс.Картах"
                  />
                </div>
                <div className="mt-6 mb-2 text-center">
                    <a 
                        href="https://yandex.ru/maps/org/piercingshine/13580233451/reviews/?add-review=true" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] border border-[#D4AF37]/30 text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm uppercase tracking-wider w-full justify-center"
                    >
                        <MessageCircle size={18} />
                        Оставить отзыв
                    </a>
                </div>
            </AccordionItem>
            
            <AccordionItem 
              title="Мы на Яндекс Картах"
              subTitle="Москва, Бауманская улица, 9"
              defaultOpen={true}
            >
              <div className="h-[400px] -mx-1 -mb-1 rounded-lg overflow-hidden">
                 {/* ИСХОДНАЯ КАРТА С ТОЧКОЙ */}
                 <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.677014%2C55.776614&mode=search&oid=13580233451&ol=biz&z=17"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ display: "block" }}
                  ></iframe>
              </div>
               <div className="mt-6 mb-2 text-center">
                    <Link 
                        href="/contacts#route-slider"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider w-full justify-center cursor-pointer"
                    >
                        <Footprints size={18} />
                        Как пройти до нас от Метро
                    </Link>
                </div>
            </AccordionItem>

          </div>
        </div>

      </div>
    </section>
  );
}