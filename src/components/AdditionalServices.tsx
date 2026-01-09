'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { additionalServicesData } from "@/lib/data";

export default function AdditionalServices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-white/5 rounded-2xl text-left font-bold text-lg hover:bg-white/10 transition-colors"
      >
        <span>Дополнительные услуги</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown className="w-6 h-6 text-[#D4AF37]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-2 overflow-hidden"
          >
             <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-2">
                 <table className="w-full text-left">
                    <thead className="bg-white/10">
                        <tr>
                            <th className="p-4 text-sm font-bold tracking-wider">Услуга</th>
                            <th className="p-4 text-sm font-bold tracking-wider hidden md:table-cell">Описание</th>
                            <th className="p-4 text-sm font-bold tracking-wider">Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                    {additionalServicesData.map((service) => (
                        <tr key={service.id} className="border-b border-white/5 last:border-none">
                            <td className="p-4 font-semibold">{service.title}</td>
                            <td className="p-4 text-gray-400 text-sm hidden md:table-cell">{service.description}</td>
                            <td className="p-4 text-[#D4AF37] font-bold whitespace-nowrap">{service.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
