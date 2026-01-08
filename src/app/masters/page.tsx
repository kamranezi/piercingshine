"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Star, BadgeRussianRuble, Award } from "lucide-react";

// Данные мастеров
const masters = [
  {
    id: 1,
    name: "Валентина Атман",
    role: "Директор студии. Мастер пирсинга.",
    image: "https://static.tildacdn.com/tild6562-6438-4961-b862-396138343834/photo.png",
    price: "от 4 000 ₽",
    experience: "10 лет",
    description: "Все типы пирсинга, кроме мужского интимного пирсинга. Обучение пирсингу.",
    schedule: "ПТ — ВСК",
    hours: "12:00 — 20:00",
  },
  {
    id: 2,
    name: "Яна Строгова",
    role: "Топ-мастер пирсинга",
    // Ссылка-заглушка. Замените на реальное фото Яны, когда оно будет
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", 
    price: "от 3 500 ₽",
    experience: "17 лет",
    description: "Все типы пирсинга. Эксперт по сложным проколам.",
    schedule: "ПН — ВСК",
    hours: "12:00 — 20:00",
  },
];

export default function Masters() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок и описание */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-8"
          >
            Наши <span className="text-[#D4AF37]">Мастера</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-gray-400 text-lg space-y-4 leading-relaxed"
          >
            <p>
              У каждого специалиста по пирсингу есть своя область, в которой он достигает выдающихся результатов. 
              Именно в этой сфере его портфолио наиболее полное.
            </p>
            <p>
              Чтобы найти мастера, который выполнит процедуру, обратитесь к администратору и уточните, какая услуга вас интересует. 
              Это поможет вам встретиться с тем, кто специализируется именно на этом виде модификации.
            </p>
            <p className="text-white font-medium pt-2 border-t border-white/10 mt-4 inline-block">
              Все наши мастера — профессионалы высокого уровня и готовы выполнить прокол любого типа и в любом месте.
            </p>
          </motion.div>
        </div>

        {/* Сетка мастеров */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {masters.map((master, index) => (
            <motion.div
              key={master.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 group flex flex-col"
            >
              {/* Верхняя часть с фото */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
                
                {/* Бейдж стажа на фото */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/50 flex items-center gap-2">
                  <Award size={16} className="text-[#D4AF37]" />
                  <span className="text-white text-sm font-medium">Стаж {master.experience}</span>
                </div>
              </div>

              {/* Информация */}
              <div className="p-8 flex-1 flex flex-col relative z-10 -mt-12">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {master.name}
                  </h3>
                  <p className="text-[#D4AF37] font-medium tracking-wide text-sm uppercase">
                    {master.role}
                  </p>
                </div>

                <div className="space-y-4 flex-1">
                  <p className="text-gray-300 leading-relaxed min-h-[3rem]">
                    {master.description}
                  </p>

                  <div className="bg-black/30 rounded-xl p-4 space-y-3 border border-white/5">
                    <div className="flex items-center text-gray-400">
                      <Clock size={18} className="text-[#D4AF37] mr-3" />
                      <span className="text-sm">
                        Прием: <span className="text-white ml-1">{master.schedule}</span>
                        <span className="mx-2">|</span>
                        {master.hours}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <BadgeRussianRuble size={18} className="text-[#D4AF37] mr-3" />
                      <span className="text-sm">
                        Стоимость: <span className="text-white font-bold ml-1 text-lg">{master.price}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <a 
                  href="#contacts"
                  className="mt-8 w-full block bg-white text-black font-bold text-center py-4 rounded-xl hover:bg-[#D4AF37] transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Записаться к мастеру
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}