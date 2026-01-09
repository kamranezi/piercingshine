'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories, servicesData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import AdditionalServices from './AdditionalServices';

// Define the type for a service, based on the structure in data.ts
type Service = {
  id: string;
  slug: string;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
  healing: string;
  painLevel: number;
  jewelry: string;
  care: string[];
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('ears');

  const activeServices = servicesData[activeCategory] || [];

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши <span className="text-[#D4AF37]">Услуги</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Откройте для себя мир профессионального пирсинга. Мы предлагаем широкий спектр услуг, используя только лучшие материалы и стерильное оборудование.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#D4AF37] text-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Table */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
             viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5"
        >
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4 md:p-5 text-sm font-bold tracking-wider">Прокол</th>
                <th className="p-4 md:p-5 text-sm font-bold tracking-wider hidden md:table-cell">Описание</th>
                <th className="p-4 md:p-5 text-sm font-bold tracking-wider">Стоимость</th>
                <th className="p-4 md:p-5 text-sm font-bold tracking-wider text-right hidden md:table-cell">
                   Смотреть
                </th>
              </tr>
            </thead>
            <tbody>
              {activeServices.map((service: Service) => (
                <tr key={service.id} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 md:p-5 font-bold">
                     <Link href={`/services/${service.slug}`} className="flex items-center justify-between gap-4 group transition-colors">
                        <span className="group-hover:text-[#D4AF37] transition-colors">{service.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0 md:hidden" />
                    </Link>
                  </td>
                  <td className="p-4 md:p-5 text-gray-400 text-sm hidden md:table-cell">
                    {service.description.split('.')[0] + '.'}
                  </td>
                  <td className="p-4 md:p-5 text-[#D4AF37] font-semibold whitespace-nowrap">{service.price}</td>
                  <td className="p-4 md:p-5 text-right hidden md:table-cell">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center w-9 h-9 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 rounded-full text-[#D4AF37] transition-colors"
                      aria-label={`Выбрать ${service.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-8">
            <Link href="/services" className="text-[#D4AF37] font-bold hover:underline">
                Смотреть все услуги &rarr;
            </Link>
        </div>

        <AdditionalServices />
      </div>
    </section>
  );
}
