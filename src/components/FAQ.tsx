"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Как выглядит пирсинг?",
    answer: "Пирсинг может выглядеть по-разному в зависимости от вида прокола и украшения. Важно тщательно подходить к выбору места и специалиста для проведения процедуры, а также строго следовать рекомендациям по уходу после пирсинга, чтобы обеспечить быстрое и безболезненное заживление."
  },
  {
    question: "Со скольких лет можно делать пирсинг?",
    answer: "С разрешения родителей и в их присутствии, а также с письменного согласия или видео-звонка, процедура может быть проведена и в более раннем возрасте, часто начиная с 14–16 лет. Для детей младшего возраста (например, мочки ушей) возраст может быть меньше, но только под строгим наблюдением и с одобрения родителей. Необходима предварительная консультация."
  },
  {
    question: "Сколько заживает пирсинг?",
    answer: "Скорость заживления зависит от расположения. В разных частях тела ткани отличаются: для одних проколов срок 2-3 месяца, для других — 8-12 месяцев. Если процесс кажется слишком медленным, лучше обратиться к специалисту."
  },
  {
    question: "Можно ли снимать пирсинг?",
    answer: "После полного заживления можно снять или заменить украшение. Лучше всего сделать это у специалиста. Опытный мастер всегда даёт инструкции по уходу, следование которым поможет сохранить украшение и здоровье в идеальном состоянии."
  },
  {
    question: "Больно ли делать пирсинг?",
    answer: "Каждый человек имеет свой болевой порог. Наши мастера используют современные техники, самые острые иглы и профессиональное оборудование, чтобы свести дискомфорт к минимуму."
  },
  {
    question: "Как ухаживать за пирсингом после процедуры?",
    answer: "Мы предоставляем подробные печатные и устные инструкции по уходу (памятку). Критически важно следовать рекомендациям мастера и использовать рекомендованные антисептические средства."
  },
  {
    question: "Какие украшения вы предлагаете?",
    answer: "В нашем ассортименте представлены только украшения премиум-сегмента от ведущих мировых производителей из имплантационного титана (ASTM F-136) и безникелевого золота."
  },
  {
    question: "Есть ли особые требования или правила студии?",
    answer: "Да, мы имеем ряд правил для обеспечения безопасности: мы не принимаем клиентов в состоянии опьянения, строго следим за стерильностью и возрастными ограничениями."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-8 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-[#D4AF37]/10 rounded-full mb-4">
              <HelpCircle className="text-[#D4AF37]" size={24} />
           </div>
           <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-4">
             Частые <span className="text-[#D4AF37]">вопросы</span>
           </h2>
           <p className="text-gray-400">Всё, что вы хотели знать перед визитом</p>
        </div>

        {/* Список вопросов */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-[#1a1a1a] border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg font-bold pr-8 transition-colors ${activeIndex === index ? 'text-[#D4AF37]' : 'text-white group-hover:text-gray-200'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${activeIndex === index ? 'bg-[#D4AF37] border-[#D4AF37] text-black rotate-180' : 'border-white/20 text-[#D4AF37] group-hover:border-[#D4AF37]'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-[1px] w-full bg-white/5 mb-4" />
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}