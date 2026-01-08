"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';

// Координаты точек и данные
const points = [
  { id: 'helix', x: 210, y: 90, label: 'Helix', slug: 'helix' },
  { id: 'tragus', x: 85, y: 190, label: 'Tragus', slug: 'tragus' },
  { id: 'lobe', x: 155, y: 310, label: 'Мочка (Lobe)', slug: 'lobe' }, // slug можно поменять на реальный
  { id: 'conch', x: 160, y: 180, label: 'Conch', slug: 'conch' },
];

export default function InteractiveEar() {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white/5 p-6 md:p-12 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть: Текст */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Интерактивная <span className="text-[#D4AF37]">карта</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Не знаете, как называется прокол? <br />
              Нажмите на точку на схеме, чтобы узнать подробности, цену и посмотреть примеры работ.
            </p>
            
            {/* Подсказка для мобильных */}
            <div className="md:hidden flex items-center justify-center text-[#D4AF37] text-sm font-bold animate-pulse">
              <MousePointer2 size={16} className="mr-2" />
              Коснитесь точки
            </div>

            <Link 
              href="/services" 
              className="hidden md:inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-1"
            >
              Смотреть весь каталог <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Правая часть: SVG Уха */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[3/4]">
              <svg 
                className="w-full h-full drop-shadow-2xl" 
                viewBox="0 0 300 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Контур уха (Стилизованный) */}
                <path 
                  d="M100 40C160 40 250 80 250 200C250 320 180 380 140 380C100 380 80 340 80 300C80 280 90 260 100 250C70 240 60 210 60 190C60 170 80 160 90 160C85 140 85 100 100 40Z" 
                  stroke="#333" 
                  strokeWidth="3"
                  className="fill-black/40"
                />
                <path 
                  d="M110 60C140 60 220 90 220 190C220 280 180 330 150 330" 
                  stroke="#333" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className="opacity-50"
                />

                {/* Точки */}
                {points.map((point) => (
                  <Link key={point.id} href={`/services/${point.slug}`}>
                    <g 
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredPoint(point.id)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      {/* Пульсирующий круг (анимация) */}
                      <circle cx={point.x} cy={point.y} r="15" fill="#D4AF37" fillOpacity="0.2">
                        <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Основная точка */}
                      <circle 
                        cx={point.x} 
                        cy={point.y} 
                        r="6" 
                        fill="#D4AF37" 
                        className="transition-all duration-300 group-hover:fill-white group-hover:r-8"
                      />
                    </g>
                  </Link>
                ))}
              </svg>

              {/* Всплывающие подсказки (Tooltips) */}
              <AnimatePresence>
                {hoveredPoint && (
                  <>
                    {points.filter(p => p.id === hoveredPoint).map(point => (
                      <motion.div
                        key={point.id}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bg-white text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl z-10 pointer-events-none whitespace-nowrap"
                        style={{ 
                          // Позиционируем подсказку рядом с точкой.
                          // Переводим координаты SVG (300x400) в проценты
                          left: `${(point.x / 300) * 100}%`, 
                          top: `${(point.y / 400) * 100}%`,
                          transform: 'translate(-50%, -150%)', // Сдвигаем вверх над точкой
                          marginTop: '-20px'
                        }}
                      >
                        {point.label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}