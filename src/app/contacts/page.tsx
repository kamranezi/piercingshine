"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation } from "lucide-react";
import { contacts } from "@/lib/data";
import { FaVk } from 'react-icons/fa';

export default function Contacts() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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
                  <p className="text-gray-300 mb-2">{contacts.address}</p>
                  <p className="text-sm text-gray-500">Ул. Бауманская, д. 33/2, стр. 1 (Ориентир: вывеска Piercing Shine)</p>
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
                  <p className="text-gray-300">Ежедневно: 12:00 — 21:00</p>
                  <p className="text-gray-500 text-sm mt-1">Работаем только по предварительной записи</p>
                </div>
              </div>
            </div>

            {/* Кнопки связи */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href={contacts.wa} 
                target="_blank"
                className="flex items-center justify-center p-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="mr-2" /> WhatsApp
              </a>
              <a 
                href={contacts.tg} 
                target="_blank"
                className="flex items-center justify-center p-4 bg-[#2AABEE] text-white rounded-xl font-bold hover:bg-[#229ed9] transition-colors"
              >
                <Navigation className="mr-2" /> Telegram
              </a>
              <a 
                href={contacts.vk} 
                target="_blank"
                className="flex items-center justify-center p-4 bg-[#4C75A3] text-white rounded-xl font-bold hover:bg-[#406891] transition-colors"
              >
                <FaVk className="mr-2" /> VK
              </a>
            </div>
          </motion.div>

          {/* Правая колонка: Карта */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[500px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative"
          >
            {/* Яндекс Карта (iframe) с фильтром для темной темы */}
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c3866164289456561574545565558&amp;source=constructor" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              className="grayscale invert-[0.9] contrast-125 brightness-75"
              style={{ filter: "grayscale(100%) invert(92%) contrast(83%)" }} // Хак для темной карты
            ></iframe>
            
            {/* Оверлей, если карта не прогрузится или для стиля */}
            <div className="absolute inset-0 pointer-events-none border-4 border-[#141414] rounded-2xl z-10" />
          </motion.div>
        </div>
      </div>

    </main>
  );
}