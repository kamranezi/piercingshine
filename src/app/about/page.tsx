"use client";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Star, Award, MessageSquare, TrendingUp, CheckCircle } from "lucide-react";
import Image from "next/image";

const stats = [
    { value: "12+", label: "Опыта наших мастеров", description: "Квалификации, сертификаты, свидетельства" },
    { value: "50+", label: "Онлайн консультаций в день!", description: "" },
    { value: "20 000+", label: "Сделанных проколов", description: "Пирсинг любой сложности!" },
    { value: "5+", label: "Рейтинг в Яндексе-5!", description: "Более 200 реальных отзывов от наших клиентов" }
];

const values = [
    { 
        icon: <Users size={32} className="text-[#D4AF37]" />, 
        title: "Сервис",
        description: "Всегда на связи, чтобы помочь вам. Мы Напоминаем о предстоящих встречах, дарим бонусы за посещение и заботимся о вас. И это лишь часть наших услуг."
    },
    { 
        icon: <ShieldCheck size={32} className="text-[#D4AF37]" />, 
        title: "Безопасность",
        description: "Мы заботимся о Вашей безопасности. Поэтому тщательно следуем правилам стерилизации ювелирных изделий и инструментов. Применяем только одноразовые иглы и проверенные материалы."
    },
    { 
        icon: <Star size={32} className="text-[#D4AF37]" />, 
        title: "Реальные отзывы",
        description: "Более 90% наших новых клиентов приходят по отзывам и рекомендациям, они навсегда становятся частыми гостями нашей студии."
    }
]

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center bg-[#111] border-b border-white/10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Нас выбрали <span className="text-[#D4AF37]">тысячи</span> клиентов
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Наша студия пирсинга в Москве «PiercingShine», обеспечивает индивидуальный подход и сервис premium класса на все услуги с возможностью выбора украшений премиум сегмента для вашего нового образа.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                  <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-[#141414] p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center"
                  >
                      <div className="p-4 bg-[#D4AF37]/10 rounded-full mb-6">
                          {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* About Studio Section */}
      <section className="py-20 bg-[#111] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-[#D4AF37] uppercase">О нашей студии</h2>
                <div className="space-y-4 text-gray-300">
                    <p>Наша студия работает с 2020 года. В нашем салоне вы можете получить профессиональную консультацию и воплотить в жизнь свои творческие идеи.</p>
                    <p>Мы гарантируем безопасность и эстетичность процедуры, а также высокое качество исполнения и эксплуатации.</p>
                    <p>Наши специалисты постоянно совершенствуют свои навыки: участвуют в профессиональных конференциях в качестве слушателей и спикеров, а также посещают различные мастер-классы.</p>
                    <p>Мы стремимся сделать график работы и стоимость услуг максимально удобными для наших клиентов. Все процедуры проводятся в условиях высокой стерильности, а процесс пирсинга проходит быстро и безболезненно.</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="relative h-80 w-full rounded-2xl overflow-hidden border border-white/10"
            >
                <Image src="https://static.tildacdn.com/tild3063-6130-4231-b237-303965656263/_1.jpg" alt="Интерьер студии PiercingShine" layout="fill" objectFit="cover" />
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-bold text-center mb-12 uppercase text-[#D4AF37]"
          >
            Результаты работы студии
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#141414] p-8 rounded-2xl border border-white/10 text-center"
              >
                <h3 className="text-5xl font-bold text-[#D4AF37] mb-2">{stat.value}</h3>
                <p className="font-semibold text-lg text-white">{stat.label}</p>
                {stat.description && <p className="text-gray-500 text-sm mt-1">{stat.description}</p>}
              </motion.div>
            ))}
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-gray-500 mt-12 max-w-3xl mx-auto"
          >
            Пирсинг Москва, Пирсинг салон Москва, Пирсинг студия Москва. Пирсинг студия Бауманская. Пирсинг салон Бауманская.
          </motion.p>
        </div>
      </section>
    </main>
  );
}