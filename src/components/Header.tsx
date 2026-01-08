
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-around items-center p-4 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="text-2xl font-bold text-white">
          <Link href="/">Piercing Shine</Link>
        </div>
        <div className="flex gap-8 text-lg">
          <Link href="/" className="text-white hover:text-yellow-400 transition-colors">Главная</Link>
          <Link href="/services" className="text-white hover:text-yellow-400 transition-colors">Услуги</Link>
          <Link href="/shop" className="text-white hover:text-yellow-400 transition-colors">Магазин</Link>
          <Link href="/academy" className="text-white hover:text-yellow-400 transition-colors">Академия</Link>
          <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors">Галерея</Link>
          <Link href="/contacts" className="text-white hover:text-yellow-400 transition-colors">Контакты</Link>
        </div>
      </nav>
    </header>
  );
}
