"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp, Award, Users, BookOpen } from "lucide-react";
import Image from "next/image";

// Данные курсов
const courses = [
  {
    id: "basic",
    title: "Базовый курс",
    price: "45 000 ₽",
    duration: "5 дней / 40 часов",
    description: "Идеальный старт для новичков. Анатомия, безопасность, базовые проколы (уши, нос, пупок).",
    features: ["Теория и санитарные нормы", "Отработка на латексе", "5 моделей для практики", "Сертификат об окончании"],
    image: "https://loremflickr.com/800/600/classroom,medical/all?lock=10"
  },
  {
    id: "pro",
    title: "Пирсинг PRO",
    price: "65 000 ₽",
    duration: "10 дней / 80 часов",
    description: "Полное погружение. Сложные проколы, интимный пирсинг, микродермалы и основы бизнеса.",
    features: ["Все виды проколов", "Микродермалы", "Психология работы с клиентом", "Портфолио работ", "Диплом мастера"],
    image: "https://loremflickr.com/800/600/piercing,professional/all?lock=11"
  },
  {
    id: "workshop",
    title: "Повышение (Workshop)",
    price: "15 000 ₽",
    duration: "1 день",
    description: "Индивидуальный разбор сложных случаев для действующих мастеров. Анодирование, даунсайз.",
    features: ["Разбор ваших ошибок", "Работа со сложной анатомией", "Стерилизация и ПСО", "Сертификат участника"],
    image: "https://loremflickr.com/800/600/surgery,tools/all?lock=12"
  }
];

const faqs = [
  { question: "Нужно ли медицинское образование?", answer: "Для работы пирсером медицинское образование является преимуществом, но не строгим требованием закона во всех случаях. Мы обучаем всем необходимым основам анатомии и санитарии." },
  { question: "Предоставляете ли вы инструменты?", answer: "Да, на время обучения мы предоставляем полностью оборудованное рабочее место, расходники и украшения." },
  { question: "Как проходит практика?", answer: "Сначала теория и латекс, затем работа с живыми моделями под строгим контролем преподавателя." }
];

export default function Academy() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a] z-10" />
            <Image
              src="https://loremflickr.com/1920/1080/laboratory/all?lock=13" 
              alt="Academy Background"
              fill
              className="object-cover grayscale opacity-50"
              priority
            />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight"
          >
            Академия <span className="text-[#D4AF37]">Piercing Shine</span>
          </motion.h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Освой прибыльную профессию под руководством топ-мастеров Москвы.
          </p>
        </div>
      </section>

      {/* Почему мы */}
      <section className="py-12 md:py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[
            { 
              // ИСПРАВЛЕНО: используем className для адаптивного размера
              icon: <Award className="w-8 h-8 md:w-10 md:h-10" />, 
              title: "Официальный сертификат", 
              desc: "Документ, подтверждающий вашу квалификацию." 
            },
            { 
              icon: <Users className="w-8 h-8 md:w-10 md:h-10" />, 
              title: "Живые модели", 
              desc: "90% времени — это практика на реальных людях." 
            },
            { 
              icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />, 
              title: "Авторская методика", 
              desc: "Программа, отточенная за 10 лет работы студии." 
            }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/5 rounded-xl bg-[#111] hover:border-[#D4AF37] transition-colors group">
              <div className="flex justify-center mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Курсы */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center uppercase">
            Программы <span className="text-[#D4AF37]">обучения</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div 
                key={course.id}
                whileHover={{ y: -5 }}
                className="bg-[#141414] rounded-2xl overflow-hidden border border-white/5 flex flex-col"
              >
                <div className="h-48 md:h-56 overflow-hidden relative w-full">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <Image 
                    src={course.image} 
                    alt={course.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4 z-20 font-bold text-white text-base md:text-lg bg-black/50 px-2 py-1 rounded">
                    {course.duration}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <div className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 md:mb-6">{course.price}</div>
                  <p className="text-sm md:text-base text-gray-400 mb-6 flex-1">{course.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs md:text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-[#D4AF37] mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://t.me/PIERCINGSHINE_BOT" 
                    target="_blank"
                    className="block w-full py-3 md:py-4 text-center border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-wider transition-all text-sm md:text-base"
                  >
                    Записаться на курс
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center uppercase">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-lg bg-[#111] overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 flex justify-between items-center text-left text-white font-semibold hover:text-[#D4AF37] transition-colors text-sm md:text-base"
                >
                  {faq.question}
                  {activeAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-400 text-xs md:text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}