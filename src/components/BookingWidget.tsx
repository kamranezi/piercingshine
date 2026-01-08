"use client";

import React from 'react';
import { CalendarCheck } from "lucide-react";

export default function BookingWidget() {
  return (
    <div className="flex justify-center py-8">
      <a 
        href="https://n1607698.yclients.com" 
        target="_blank"
        className="flex items-center space-x-2 bg-[#D4AF37] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
      >
        <CalendarCheck size={20} />
        <span>Онлайн запись</span>
      </a>
    </div>
  );
}