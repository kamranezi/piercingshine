"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { categories, services } from "@/lib/data";
import { Plus } from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("ears");

  const filteredServices = services.filter(
    (item) => item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          СТОИМОСТЬ <span className="text-[#D4AF37]">УСЛУГ</span>
        </motion.h1>

        {/* Фильтр категорий (Скролл на мобильном) */}
        <div className="flex overflow-x-auto space-x-4 pb-8 mb-8 no-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "bg-transparent text-gray-400 border-white/20 hover:border-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Сетка услуг с анимацией */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 transition-colors"
              >
                {/* Картинка */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur px-3 py-1 rounded-lg text-[#D4AF37] font-bold">
                    {service.price}
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6 relative z-20 -mt-10">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  
                  <button className="w-full flex items-center justify-center space-x-2 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all font-semibold uppercase text-xs tracking-widest">
                    <span>Записаться</span>
                    <Plus size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}