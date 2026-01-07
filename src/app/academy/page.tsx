"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp, Award, Users, BookOpen } from "lucide-react";

// Данные курсов (можно вынести в lib/data.ts)
const courses = [
  {
    id: "basic",
    title: "Базовый курс",
    price: "45 000 ₽",
    duration: "5 дней / 40 часов",
    description: "Идеальный старт для новичков. Анатомия, безопасность, базовые проколы (уши, нос, пупок).",
    features: ["Теория и санитарные нормы", "Отработка на латексе", "5 моделей для практики", "Сертификат об окончании"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "pro",
    title: "Пирсинг PRO",
    price: "65 000 ₽",
    duration: "10 дней / 80 часов",
    description: "Полное погружение. Сложные проколы, интимный пирсинг, микродермалы и основы бизнеса.",
    features: ["Все виды проколов", "Микродермалы", "Психология работы с клиентом", "Портфолио работ", "Диплом мастера"],
    image: "https://images.unsplash.com/photo-1599557404285-b152737604f5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "workshop",
    title: "Повышение (Workshop)",
    price: "15 000 ₽",
    duration: "1 день",
    description: "Индивидуальный разбор сложных случаев для действующих мастеров. Анодирование, даунсайз.",
    features: ["Разбор ваших ошибок", "Работа со сложной анатомией", "Стерилизация и ПСО", "Сертификат участника"],
    image: "https://images.unsplash.com/photo-1629831518167-975540306e93?q=80&w=1000&auto=format&fit=crop"
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
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a] z-10" />
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000" 
          alt="Academy"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Академия <span className="text-[#D4AF37]">Piercing Shine</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Освой прибыльную профессию под руководством топ-мастеров Москвы.
          </p>
        </div>
      </section>

      {/* Почему мы */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Award size={40} />, title: "Официальный сертификат", desc: "Документ, подтверждающий вашу квалификацию." },
            { icon: <Users size={40} />, title: "Живые модели", desc: "90% времени — это практика на реальных людях." },
            { icon: <BookOpen size={40} />, title: "Авторская методика", desc: "Программа, отточенная за 10 лет работы студии." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/5 rounded-xl bg-[#111] hover:border-[#D4AF37] transition-colors group">
              <div className="flex justify-center mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Курсы */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase">
            Программы <span className="text-[#D4AF37]">обучения</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div 
                key={course.id}
                whileHover={{ y: -10 }}
                className="bg-[#141414] rounded-2xl overflow-hidden border border-white/5 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 z-20 font-bold text-white text-lg">{course.duration}</div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <div className="text-2xl font-bold text-[#D4AF37] mb-6">{course.price}</div>
                  <p className="text-gray-400 mb-6 flex-1">{course.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-[#D4AF37] mr-2 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://t.me/PIERCINGSHINE_BOT" 
                    target="_blank"
                    className="block w-full py-3 text-center border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-wider transition-all"
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
      <section className="py-20 px-4 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase">Частые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-lg bg-[#111] overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left text-white font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  {faq.question}
                  {activeAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeAccordion === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}