"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface SafetyProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Safety({ isOpen, setIsOpen }: SafetyProps) {
  
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-16 pt-8">
      {/* Контейнер с эффектом стекла и золотой обводкой */}
      <motion.div 
        animate={{ 
          borderColor: isOpen ? "rgba(212, 175, 55, 0.5)" : "rgba(255, 255, 255, 0.1)",
          backgroundColor: isOpen ? "rgba(20, 20, 20, 0.95)" : "rgba(20, 20, 20, 0.6)"
        }}
        className="relative rounded-3xl overflow-hidden border border-white/10 transition-colors duration-500 backdrop-blur-md"
      >
        
        {/* Фоновый градиент (акцент) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

        {/* Кнопка-заголовок (Header) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
        >
          <div className="flex items-center gap-5">
            <div className={`
              p-4 rounded-full transition-all duration-300
              ${isOpen ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black'}
            `}>
              <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
                Безопасность <span className="text-[#D4AF37]">Premium</span> уровня
              </h2>
              {!isOpen && (
                <p className="text-gray-400 text-sm mt-1 group-hover:text-white transition-colors">
                  Нажмите, чтобы узнать о стандартах стерильности
                </p>
              )}
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className={`p-2 rounded-full border border-white/10 ${isOpen ? 'bg-white text-black' : 'text-gray-400'}`}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>

        {/* Раскрывающийся контент */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Плавная easing-функция
            >
              <div className="p-6 md:p-10 pt-0 border-t border-white/5 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 mt-6">
                  
                  {/* Левая колонка: Изображение */}
                  <div className="w-full lg:w-5/12 shrink-0">
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                      <Image
                        src="https://static.tildacdn.com/tild6335-6638-4535-a261-373835326330/_3.png"
                        alt="Стерилизация инструментов"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Бейдж на фото */}
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border-l-2 border-[#D4AF37]">
                        <span className="text-white text-xs font-bold uppercase tracking-widest">SanPiN Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка: Текст и пункты */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Стандарты медицинских учреждений
                    </h3>
                    
                    <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
                      <p>
                        Мы строго ограничиваем выполнение процедур: не работаем с лицами до 14 лет (с 14 до 18 — только в присутствии родителей) и клиентами в измененном состоянии сознания.
                      </p>
                      
                      {/* Список преимуществ с галочками */}
                      <ul className="space-y-4 my-6">
                        {[
                          "Автоклав класса B (высший стандарт стерилизации)",
                          "Одноразовые иглы, вскрываемые при вас",
                          "Трехступенчатая обработка инструментов",
                          "Очистка воздуха озонатором"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                            <span className="text-white font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl text-sm text-[#D4AF37]/90">
                        В нашей студии безопасность — это не просто правило, это философия, гарантирующая ваше спокойствие и здоровье.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}