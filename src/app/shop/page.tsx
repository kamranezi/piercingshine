"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Plus } from 'lucide-react';
import Image from 'next/image';

// Типы данных
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
};

// 9 тестовых товаров (Строго пирсинг украшения)
// Ссылки обновлены на более релевантные для пирсинга
const products: Product[] = [
  {
    id: 1,
    name: "Кликер 'Astra' Gold 1.2мм",
    category: "Золото",
    price: 12500,
    // Ключи: piercing, gold, clicker
    image: "https://loremflickr.com/500/500/piercing,gold?lock=10",
    isNew: true,
  },
  {
    id: 2,
    name: "Лабрет Titanium Opal 8мм",
    category: "Титан",
    price: 2400,
    // Ключи: piercing, labret
    image: "https://loremflickr.com/500/500/piercing,ear?lock=22",
  },
  {
    id: 3,
    name: "Сегментное кольцо Basic",
    category: "Титан",
    price: 1500,
    // Ключи: piercing, ring
    image: "https://loremflickr.com/500/500/piercing,ring?lock=31",
  },
  {
    id: 4,
    name: "Топ 'Trinity' (накрутка)",
    category: "Золото",
    price: 8900,
    // Ключи: piercing, jewelry
    image: "https://loremflickr.com/500/500/piercing,jewelry?lock=45",
  },
  {
    id: 5,
    name: "Банан для пупка Crystal",
    category: "Сталь",
    price: 3200,
    // Ключи: belly, piercing
    image: "https://loremflickr.com/500/500/belly,piercing?lock=55",
  },
  {
    id: 6,
    name: "Штанга Industrial Pro 38мм",
    category: "Титан",
    price: 2800,
    // Ключи: industrial, piercing
    image: "https://loremflickr.com/500/500/industrial,piercing?lock=61",
  },
  {
    id: 7,
    name: "Циркуляр (подкова) Spikes",
    category: "Титан",
    price: 1900,
    // Ключи: septum, piercing
    image: "https://loremflickr.com/500/500/septum,piercing?lock=73",
    isNew: true,
  },
  {
    id: 8,
    name: "Микродермал Topaz 4мм",
    category: "Драгоценные камни",
    price: 5600,
    // Ключи: dermal, piercing
    image: "https://loremflickr.com/500/500/dermal,piercing?lock=82",
  },
  {
    id: 9,
    name: "Кликер Septum 'Queen' Orient",
    category: "Золото",
    price: 15900,
    // Ключи: nose, piercing
    image: "https://loremflickr.com/500/500/nose,piercing?lock=94",
  },
];

// Категории для фильтра
const categories = ["Все", "Золото", "Титан", "Сталь", "Драгоценные камни"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Все");

  // Фильтрация
  const filteredProducts = activeCategory === "Все" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
      
      {/* HEADER СЕКЦИИ */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 border-b border-white/10 pb-8">
          <div>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-block px-3 py-1 mb-4 border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/5"
            >
              Online Shop
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase">
              Витрина <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCEE21]">Украшений</span>
            </h1>
          </div>
          
          {/* Поиск */}
          <div className="relative w-full md:w-auto">
             <input 
               type="text" 
               placeholder="Поиск украшений..." 
               className="w-full md:w-64 bg-[#141414] border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
             />
             <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* ФИЛЬТРЫ */}
        <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* СЕТКА ТОВАРОВ */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              {/* Бейдж "New" */}
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                  New
                </div>
              )}

              {/* Изображение */}
              <div className="relative aspect-square overflow-hidden bg-black">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <button className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#D4AF37] flex items-center gap-2 shadow-lg">
                     <ShoppingBag size={18} />
                     В корзину
                   </button>
                </div>
              </div>

              {/* Информация */}
              <div className="p-6">
                <div className="text-xs text-[#D4AF37] mb-2 uppercase tracking-wide opacity-80">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                  <span className="text-xl font-bold">{product.price.toLocaleString()} ₽</span>
                  <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Если ничего не найдено */}
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                В данной категории пока нет товаров
            </div>
        )}
      </section>
    </main>
  );
}