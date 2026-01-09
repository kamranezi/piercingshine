"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Лет опыта", description: "Квалификации и сертификаты мастеров" },
  { value: "50+", label: "Консультаций", description: "Ежедневно помогаем клиентам онлайн" },
  { value: "20k+", label: "Проколов", description: "Пирсинг любой сложности успешно" },
  { value: "5.0", label: "Рейтинг", description: "Более 200 честных отзывов в Яндексе" }
];

const values = [
  { 
    icon: <Users size={32} className="text-[#D4AF37]" />, 
    title: "Сервис Premium",
    description: "Всегда на связи. Напоминаем о визитах, дарим бонусы и заботимся о вашем комфорте на каждом этапе."
  },
  { 
    icon: <ShieldCheck size={32} className="text-[#D4AF37]" />, 
    title: "Безопасность",
    description: "Мы заботимся о Вашей безопасности. Поэтому тщательно следуем правилам стерилизации ювелирных изделий и инструментов. Применяем только одноразовые иглы и проверенные материалы"
  },
  { 
    icon: <Star size={32} className="text-[#D4AF37]" />, 
    title: "Доверие",
    description: "90% новых клиентов приходят по рекомендации друзей. Мы гордимся тем, что нам доверяют самое ценное."
  }
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Глобальный фоновый градиент для глубины */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 flex items-center justify-center min-h-[60vh] border-b border-white/5">
        {/* Фоновое изображение с затемнением */}
        <div className="absolute inset-0 z-0">
            <Image 
              src="https://static.tildacdn.com/tild6265-6362-4563-a264-363964623830/_1.png" // Можно заменить на фото салона
              alt="Background"
              fill
              className="object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-sm">
             <span className="text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Est. 2020</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold uppercase leading-tight mb-6">
            Искусство <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCEE21]">Пирсинга</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Студия <span className="text-white font-medium">PiercingShine</span> в Москве — это симбиоз медицинской стерильности, премиальных украшений и индивидуального стиля.
          </p>
        </motion.div>
      </section>

      {/* 2. VALUES SECTION (Карточки) */}
      <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                  <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="group bg-[#141414]/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 hover:bg-[#1a1a1a]"
                  >
                      <div className="w-16 h-16 flex items-center justify-center bg-[#D4AF37]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{value.description}</p>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* 3. ABOUT STUDIO (Текст + Картинка) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Текстовый блок */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">
                    О нашей <span className="text-[#D4AF37]">студии</span>
                </h2>
                <div className="space-y-6 text-gray-300 text-base md:text-lg font-light leading-relaxed">
                    <p>
                        <span className="text-white font-semibold">Мы работаем с 2020 года.</span> В нашем пространстве на Бауманской вы не просто делаете прокол — вы воплощаете в жизнь свои творческие идеи под чутким руководством профессионалов.
                    </p>
                    <div className="pl-6 border-l-2 border-[#D4AF37]">
                        <p className="italic text-white/80">
                            "Мы гарантируем не только эстетику, но и абсолютную безопасность процедуры, используя лучшие мировые практики."
                        </p>
                    </div>
                    <p>
                        Наши специалисты — постоянные участники профессиональных конференций. Мы не стоим на месте, постоянно повышая квалификацию, чтобы предложить вам самый современный и безболезненный сервис.
                    </p>
                </div>
            </motion.div>

            {/* Блок с изображением */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 group"
            >
                <Image 
                    src="https://static.tildacdn.com/tild6265-6362-4563-a264-363964623830/_1.png" 
                    alt="Интерьер студии PiercingShine" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Глянцевый блик */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="py-24 bg-[#0f0f0f] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">Цифры говорят <span className="text-[#D4AF37]">за нас</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors"
              >
                <div className="text-4xl md:text-6xl font-black text-[#D4AF37] mb-3 font-sans">
                    {stat.value}
                </div>
                <div className="font-bold text-lg text-white mb-2 uppercase tracking-wider">{stat.label}</div>
                {stat.description && (
                    <p className="text-gray-500 text-xs md:text-sm max-w-[200px]">{stat.description}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-8 border-t border-white/5 text-center"
          >
             <p className="text-gray-600 text-xs uppercase tracking-[0.3em]">
               Piercing Shine Moscow • Бауманская
             </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}