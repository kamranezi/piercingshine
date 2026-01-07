
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';


export default function InteractiveEar() {
  return (
    <div className="relative bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-colors mt-16">
      <h3 className="text-3xl font-bold text-center mb-6 text-white">Интерактивная карта проколов</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="relative w-[300px] h-[400px]">
          <svg className="w-full h-full" viewBox="0 0 300 400">
            <path d="M150 50 C 50 150, 50 250, 150 350 C 250 250, 250 150, 150 50 Z" fill="#333" />
            <circle cx="150" cy="120" r="10" fill="#D4AF37" className="cursor-pointer hover:fill-white" />
            <text x="170" y="125" fill="white">Helix</text>
            <circle cx="120" cy="200" r="10" fill="#D4AF37" className="cursor-pointer hover:fill-white" />
            <text x="70" y="205" fill="white">Tragus</text>
            <circle cx="150" cy="280" r="10" fill="#D4AF37" className="cursor-pointer hover:fill-white" />
            <text x="170" y="285" fill="white">Lobe</text>
          </svg>
          <motion.div
            className="absolute top-1/2 left-1/2"
            animate={{ scale: [1, 1.2, 1], x: '-50%', y: '-50%' }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <MousePointer2 className="text-[#D4AF37]" size={32} />
          </motion.div>
        </div>
        <p className="max-w-xs text-gray-300 text-center md:text-left">
          Наведите курсор на точки, чтобы узнать название прокола. Кликните, чтобы увидеть примеры работ и стоимость.
        </p>
      </div>
    </div>
  );
}
