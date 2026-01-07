"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Временные данные (потом заменим на реальные фото из папки public)
const works = [
  { id: 1, src: "https://images.unsplash.com/photo-1606907636173-979929944062?q=80&w=1000", tag: "Уши" },
  { id: 2, src: "https://images.unsplash.com/photo-1535585090626-47b29a246830?q=80&w=1000", tag: "Лицо" },
  { id: 3, src: "https://images.unsplash.com/photo-1629831518167-975540306e93?q=80&w=1000", tag: "Септум" },
  { id: 4, src: "https://images.unsplash.com/photo-1599557404285-b152737604f5?q=80&w=1000", tag: "Микродермал" },
  { id: 5, src: "https://images.unsplash.com/photo-1615715566373-c1573c77d61b?q=80&w=1000", tag: "Пупок" },
  { id: 6, src: "https://images.unsplash.com/photo-1574315042622-44dfb676442c?q=80&w=1000", tag: "Микродермал" },
  { id: 7, src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000", tag: "Уши" },
  { id: 8, src: "https://images.unsplash.com/photo-1596489397626-d245453675ec?q=80&w=1000", tag: "Лицо" },
];

const filters = ["Все", "Уши", "Лицо", "Тело", "Микродермал"];

export default function Gallery() {
  const [filter, setFilter] = useState("Все");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredWorks = filter === "Все" 
    ? works 
    : works.filter(w => w.tag === filter || (filter === "Лицо" && w.tag === "Септум"));

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            НАШИ <span className="text-[#D4AF37]">РАБОТЫ</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Идеальная симметрия, правильная анатомия и полное заживление.
            Смотрите результаты нашей работы.
          </p>
        </motion.div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all border ${
                filter === item
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "bg-transparent text-gray-500 border-white/10 hover:border-white hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Masonry Grid (CSS Columns) */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredWorks.map((work) => (
            <motion.div
              layout
              key={work.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="break-inside-avoid relative group cursor-zoom-in"
              onClick={() => setSelectedImage(work.src)}
            >
              <div className="rounded-xl overflow-hidden border border-white/5 bg-[#141414]">
                <img
                  src={work.src}
                  alt={work.tag}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay при наведении */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold tracking-widest border border-[#D4AF37] px-4 py-2 rounded uppercase text-xs">
                    Посмотреть
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox (Модальное окно просмотра) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl shadow-[#D4AF37]/10" 
          />
        </div>
      )}

      <Footer />
    </main>
  );
}