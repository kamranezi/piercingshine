import Link from "next/link";
import { contacts } from "@/lib/data";
import { FaVk, FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { MapPin, Phone } from "lucide-react";

const menuLinks = [
  { name: "О нас", href: "/about" },
  { name: "Услуги", href: "/services" },
  { name: "Мастера", href: "/masters"},
  { name: "Украшения", href: "/shop" },
  { name: "Академия", href: "/academy" },
  { name: "Галерея", href: "/gallery" },
  { name: "Контакты", href: "/contacts" },
];

export default function Footer() {
  const yandexMapUrl = "https://yandex.ru/maps/org/piercingshine/13580233451/?from=mapframe&ll=37.677014%2C55.776614&z=17";

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-8 pb-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <a 
          href="https://n1607698.yclients.com" 
          target="_blank"
          className="inline-block mb-6 px-12 py-3 text-center bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-white transition-colors uppercase tracking-wider text-sm"
        >
          Онлайн запись
        </a>

        {/* Лого и соцсети */}
        <div className="mb-8">
          <Link href="/" className="inline-block mb-6">
            <h2 className="text-2xl font-bold tracking-widest text-white uppercase">
              Piercing<span className="text-[#D4AF37]">Shine</span>
            </h2>
          </Link>
          <div className="flex justify-center space-x-5">
            <a href={contacts.tg} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2AABEE] transition-colors"><TbBrandTelegram size={24} /></a>
            <a href={contacts.wa} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors"><FaWhatsapp size={24} /></a>
            <a href={contacts.vk} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4C75A3] transition-colors"><FaVk size={24} /></a>
          </div>
        </div>

        {/* Навигация */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-300">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#D4AF37] transition-colors tracking-wider uppercase">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Контакты */}
        <div className="mb-10 flex flex-col items-center space-y-4 text-gray-400 text-sm">
          <a href={yandexMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 hover:text-white transition-colors">
            <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <span className="text-left">
              г. Москва, м. Бауманская,
              <br className="sm:hidden" />
              {' '}
              ул. Бауманская 33/2
            </span>
          </a>
          <a href={`tel:${contacts.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>{contacts.phone}</span>
          </a>
        </div>

        {/* Копирайт и доп. ссылки */}
        <div className="border-t border-white/5 pt-8 text-xs text-gray-600">
          <p className="mb-2">© {new Date().getFullYear()} Piercing Shine. Все права защищены.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</Link>
            <Link href="/oferta" className="hover:text-gray-400 transition-colors">Договор оферты</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
