"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10" />
        <Image
          src="https://loremflickr.com/1920/1080/piercing,studio/all?lock=1"
          alt="Piercing Studio Background"
          fill
          className="object-cover grayscale opacity-60"
          priority
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-3xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          ИСКУССТВО <span className="text-[#D4AF37]">БЕЗОПАСНОГО</span> ПИРСИНГА
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Профессиональная студия в Москве. Имплантационный титан, 
          стерильность класса B и опытные мастера.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Записаться
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}