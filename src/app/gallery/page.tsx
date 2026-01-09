"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react"; // Импортируем иконку крестика

// Типы данных
type Category = "Уши" | "Брови" | "Нос" | "Губы" | "Микродермал" | "Пупок" | "Язык" | "Интимка";

interface PortfolioItem {
  id: number;
  category: Category;
  src: string;
  alt: string;
}

// Данные галереи
const portfolioData: Record<Category, string[]> = {
  "Уши": [
    "https://static.tildacdn.com/tild6362-3837-4963-b464-353539623231/__6.png",
    "https://static.tildacdn.com/tild3534-6564-4139-b336-383737313933/__3.png",
    "https://static.tildacdn.com/tild3335-3366-4336-a138-353963333534/photo_2025-04-28_22-.png",
    "https://static.tildacdn.com/tild3734-6639-4033-b231-636334666337/__18.png",
  ],
  "Брови": [
    "https://static.tildacdn.com/tild6338-3835-4861-a163-663963636365/__3.png",
    "https://static.tildacdn.com/tild6463-3830-4432-b362-623730366131/__4.png",
    "https://static.tildacdn.com/tild3863-3638-4362-b534-313064363534/noroot.png",
    "https://static.tildacdn.com/tild3335-3137-4664-b336-363734323430/__1.png",
  ],
  "Нос": [
    "http://googleusercontent.com/image_collection/image_retrieval/18103269175223194961_0",
    "http://googleusercontent.com/image_collection/image_retrieval/18103269175223194961_1",
    "http://googleusercontent.com/image_collection/image_retrieval/18103269175223194961_2",
    "http://googleusercontent.com/image_collection/image_retrieval/18103269175223194961_3",
  ],
  "Губы": [
    "http://googleusercontent.com/image_collection/image_retrieval/6717800357961279375_0",
    "http://googleusercontent.com/image_collection/image_retrieval/6717800357961279375_1",
    "http://googleusercontent.com/image_collection/image_retrieval/6717800357961279375_2",
    "http://googleusercontent.com/image_collection/image_retrieval/6717800357961279375_3",
  ],
  "Микродермал": [
    "http://googleusercontent.com/image_collection/image_retrieval/2339881237055348158_0",
    "http://googleusercontent.com/image_collection/image_retrieval/2339881237055348158_1",
    "http://googleusercontent.com/image_collection/image_retrieval/2339881237055348158_2",
    "http://googleusercontent.com/image_collection/image_retrieval/2339881237055348158_3",
  ],
  "Пупок": [
    "http://googleusercontent.com/image_collection/image_retrieval/13585882876831550884_0",
    "http://googleusercontent.com/image_collection/image_retrieval/13585882876831550884_1",
    "http://googleusercontent.com/image_collection/image_retrieval/13585882876831550884_2",
    "http://googleusercontent.com/image_collection/image_retrieval/13585882876831550884_3",
  ],
  "Язык": [
    "http://googleusercontent.com/image_collection/image_retrieval/13901998214114560618_0",
    "http://googleusercontent.com/image_collection/image_retrieval/13901998214114560618_1",
    "http://googleusercontent.com/image_collection/image_retrieval/13901998214114560618_2",
    "http://googleusercontent.com/image_collection/image_retrieval/13901998214114560618_3",
  ],
  "Интимка": [
    "http://googleusercontent.com/image_collection/image_retrieval/15295484526714072574_0",
    "http://googleusercontent.com/image_collection/image_retrieval/15295484526714072574_1",
    "http://googleusercontent.com/image_collection/image_retrieval/15295484526714072574_2",
    "http://googleusercontent.com/image_collection/image_retrieval/15295484526714072574_3",
  ],
};

const categories = Object.keys(portfolioData) as Category[];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Уши");
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Состояние для открытого фото

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <section className="min-h-screen bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок и описание */}
        <div className="text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider"
          >
            Фото наших <span className="text-[#D4AF37]">работ</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Предлагаем Вам портфолио, выполненное нашими мастерами. Это всего лишь небольшая часть работ, 
            список которых ежедневно пополняется новыми. Сайт не может вместить все из них, поэтому приглашаем вас в гости — 
            в студии доступен расширенный каталог проколов, который поможет подобрать идеальный для себя вариант.
          </motion.p>
        </div>

        {/* Навигация по категориям (Табы) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Сетка изображений */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {portfolioData[activeCategory].map((src, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(src)} // Открываем фото при клике
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[#141414] border border-white/5 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`${activeCategory} работа ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#D4AF37] text-lg font-bold uppercase tracking-widest border border-[#D4AF37] px-4 py-2 rounded-lg">
                    {activeCategory}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Модальное окно (Лайтбокс) */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Чтобы клик по фото не закрывал окно
              >
                <Image
                  src={selectedImage}
                  alt="Full screen view"
                  fill
                  className="object-contain"
                  quality={100}
                />
                
                {/* Кнопка закрытия */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 md:-top-6 md:-right-6 text-white/70 hover:text-[#D4AF37] transition-colors bg-black/50 md:bg-transparent rounded-full p-2"
                >
                  <X size={32} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}