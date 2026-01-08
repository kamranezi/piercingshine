"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Чтобы подсвечивать активную ссылку
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Магазин", href: "/shop" },
  { name: "Академия", href: "/academy" },
  { name: "Галерея", href: "/gallery" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ЛОГОТИП */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-widest text-white uppercase" onClick={() => setIsOpen(false)}>
              Piercing<span className="text-[#D4AF37]">Shine</span>
            </Link>
          </div>

          {/* ДЕСКТОП МЕНЮ (Скрыто на мобильном) */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isActive 
                      ? "text-[#D4AF37]" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* МОБИЛЬНАЯ КНОПКА (Бургер) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ (Выезжает при нажатии) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Закрываем меню при клике
                    className={`block text-lg font-bold uppercase tracking-widest py-2 transition-colors ${
                      isActive 
                        ? "text-[#D4AF37]" 
                        : "text-white hover:text-[#D4AF37]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Кнопка записи в мобильном меню */}
              <a 
                href="https://n1607698.yclients.com" 
                target="_blank"
                className="mt-4 px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase text-sm tracking-widest rounded-full"
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}