import Link from "next/link";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { contacts } from "@/lib/data";
import { FaVk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Колонка 1: Лого и Описание */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-widest text-white">
              PIERCING<span className="text-[#D4AF37]">SHINE</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Студия пирсинга и тату Premium класса. 
              Безопасность, стерильность и лучшие украшения в Москве.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Меню</h3>
            <ul className="space-y-3">
              {['Услуги', 'Обучение', 'Галерея', 'Отзывы'].map((item) => (
                <li key={item}>
                  <Link href={`/${item === 'Услуги' ? 'services' : ''}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-[#D4AF37]" />
                <span>{contacts.address}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
                <a href={`tel:${contacts.phone}`} className="hover:text-white transition-colors">
                  {contacts.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Соцсети / Кнопка */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Мы на связи</h3>
            <div className="flex space-x-4 mb-6">
              <a href={contacts.tg} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#2AABEE] hover:text-white transition-all text-gray-400">
                <MessageCircle size={20} />
              </a>
              <a href={contacts.wa} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#25D366] hover:text-white transition-all text-gray-400">
                <Phone size={20} />
              </a>
              <a href={contacts.vk} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#4C75A3] hover:text-white transition-all text-gray-400">
                <FaVk size={20} />
              </a>
            </div>
            <a 
              href="https://n1607698.yclients.com" 
              target="_blank"
              className="block w-full py-3 text-center bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-white transition-colors"
            >
              ОНЛАЙН ЗАПИСЬ
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Piercing Shine. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-400">Политика конфиденциальности</Link>
            <Link href="#" className="hover:text-gray-400">Договор оферты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
