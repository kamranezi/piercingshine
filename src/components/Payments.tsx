"use client";

import { motion } from "framer-motion";
import { CreditCard, QrCode, Percent, Globe, Banknote } from "lucide-react";

const paymentMethods = [
  {
    icon: <Banknote size={40} />,
    title: "Наличные",
    desc: "Классическая оплата наличными на кассе."
  },
  {
    icon: <CreditCard size={40} />,
    title: "Банковские карты",
    desc: "Принимаем все основные типы карт."
  },
  {
    icon: <QrCode size={40} />,
    title: "QR-код / СБП",
    desc: "Быстрая оплата смартфоном без карты."
  },
  {
    icon: <Globe size={40} />,
    title: "Онлайн оплата",
    desc: "Предварительная оплата на сайте."
  },
  {
    icon: <Percent size={40} />,
    title: "Рассрочка / Кредит",
    desc: "Возможность оплаты частями."
  }
];

export default function Payments() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Заголовок */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-6">
            Оплата услуг <span className="text-[#D4AF37]">Салона</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            В нашем салоне вы можете выбрать наиболее удобный для вас способ оплаты. 
            Мы стремимся сделать ваш визит максимально комфортным!
          </p>
        </motion.div>

        {/* Сетка методов оплаты */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {paymentMethods.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Нижний текст */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
             <p className="text-gray-400 text-sm md:text-base">
               <span className="text-[#D4AF37] font-bold">Важно: </span>
               Уточните подробности условий рассрочки и кредитования у наших администраторов или мастеров перед процедурой.
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}