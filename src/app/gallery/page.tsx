"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image"; // <-- Импорт Image

// Данные с работающими ссылками (LoremFlickr)
const works = [
  { id: 1, src: "https://loremflickr.com/600/800/ear,piercing/all?lock=1", tag: "Уши" },
  { id: 2, src: "https://loremflickr.com/600/800/face,piercing/all?lock=2", tag: "Лицо" },
  { id: 3, src: "https://loremflickr.com/600/800/nose,piercing/all?lock=3", tag: "Септум" },
  { id: 4, src: "https://loremflickr.com/600/800/microdermal/all?lock=4", tag: "Микродермал" },
  { id: 5, src: "https://loremflickr.com/600/800/belly,piercing/all?lock=5", tag: "Пупок" },
  { id: 6, src: "https://loremflickr.com/600/800/skin,piercing/all?lock=6", tag: "Микродермал" },
  { id: 7, src: "https://loremflickr.com/600/800/earring/all?lock=7", tag: "Уши" },
  { id: 8, src: "https://loremflickr.com/600/800/girl,piercing/all?lock=8", tag: "Лицо" },
];

const filters = ["Все", "Уши", "Лицо", "Тело", "Микродермал"];

export default function Gallery() {
  const [filter, setFilter] = useState("Все");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredWorks = filter === "Все" 
    ? works 
    : works.filter(w => w.tag === filter || (filter === "Лицо" && w.tag === "Септум"));

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 md:pt-32 md:pb-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 uppercase">
            Наши <span className="text-[#D4AF37]">Работы</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Идеальная симметрия, правильная анатомия и полное заживление.
            Смотрите результаты нашей работы.
          </p>
        </motion.div>

        {/* Фильтры (скролл на мобильном) */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center gap-2 md:gap-4 mb-8 md:mb-12 no-scrollbar px-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all border whitespace-nowrap ${
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
                {/* Для Masonry лучше использовать width/height + style: auto, 
                   чтобы браузер понимал высоту блока 
                */}
                <Image
                  src={work.src}
                  alt={work.tag}
                  width={600}
                  height={800}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto' }} 
                />
                
                {/* Overlay при наведении (скрываем на мобильном, чтобы не мешал) */}
                <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
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
          <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-50">
            <X size={32} />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[85vh] h-full flex items-center justify-center">
             <Image 
                src={selectedImage} 
                alt="Full size"
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
             />
          </div>
        </div>
      )}

    </div>
  );
}