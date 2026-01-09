// src/lib/data.ts

export const categories = [
  { id: "ears", name: "Ухо" },
  { id: "lips", name: "Губы" },
  { id: "nose", name: "Нос" },
  { id: "tongue", name: "Язык" },
  { id: "eyebrow", name: "Бровь" },
  { id: "navel", name: "Пупок" },
  { id: "intimate", name: "Интимный" },
];

export const contacts = {
  phone: "8 (980) 148-23-86",
  address: "г. Москва, м. Бауманская, ул. Бауманская 33/2",
  tg: "https://t.me/PIERCINGSHINE_BOT",
  wa: "https://wa.me/79801482386",
  vk: "https://vk.com/piercingshine"
};

// Полный список услуг с детализацией для страницы [slug]
export const allServices = [
  // --- УШИ ---
  {
    id: "lobe",
    slug: "lobe",
    category: "ears",
    title: "Мочка уха",
    price: "2 500 ₽",
    description: "Прокол мочки уха - самый распространенный тип пирсинга в мире. Период заживления 2-3 месяца.",
    image: "https://static.tildacdn.com/tild6434-3363-4134-a332-623266343136/_1.png",
    healing: "2-3 месяца",
    painLevel: 2,
    jewelry: "Лабрет, Штанга, Кольцо (после заживления)",
    care: ["Не проворачивать украшение", "Обрабатывать физраствором 2 раза в день", "Избегать распаривания в первый месяц"]
  },
  {
    id: "double-lobe",
    slug: "double-lobe",
    category: "ears",
    title: "Мочки уха (два прокола)",
    price: "5 000 ₽",
    description: "Пара проколов мочек - самый популярный пирсинг в мире. Срок заживления - 2-3 месяца.",
    image: "https://static.tildacdn.com/tild6434-3363-4134-a332-623266343136/_1.png",
    healing: "2-3 месяца",
    painLevel: 2,
    jewelry: "Лабрет, Штанга",
    care: ["Обрабатывать физраствором 2 раза в день", "Соблюдать гигиену"]
  },
    {
    id: "cartilage",
    slug: "cartilage",
    category: "ears",
    title: "Пирсинг хряща",
    price: "3 500 ₽/3 800 ₽",
    description: "Прокол хряща уха - это популярный вид пирсинга ушной раковины. Сроки заживления варьируются от 6 до 9 месяцев и более.",
    image: "https://loremflickr.com/800/600/ear,piercing/all",
    healing: "6-9 месяцев",
    painLevel: 5,
    jewelry: "Лабрет, кольцо",
    care: ["Не спать на ухе", "Регулярная обработка", "Даунсайз через месяц"]
  },
  {
    id: "helix",
    slug: "helix",
    category: "ears",
    title: "Хеликс (helix)",
    price: "3 500 ₽/3 800 ₽",
    description: "Пирсинг хеликс - это прокол верхней части ушной раковины (завиток уха). Может быть одиночным или частью композиции с другими проколами. Период заживления: от 6 месяцев.",
    image: "https://static.tildacdn.com/tild3264-6336-4765-a137-656135633163/__1.png",
    healing: "6-9 месяцев",
    painLevel: 4,
    jewelry: "Лабрет (первичное), Кольцо, Кликер",
    care: ["Не спать на проколе", "Избегать травмирования волосами", "Даунсайз (замена ножки) через 3-4 недели"]
  },
    {
    id: "forward-helix",
    slug: "forward-helix",
    category: "ears",
    title: "Форвард хеликс (forward helix)",
    price: "3 500 ₽/3 800 ₽",
    description: "Форвард хеликс (Forward Helix) - это пирсинг верхней части завитка ушной раковины. Период заживления от 6-8 месяцев.",
    image: "https://loremflickr.com/800/600/forward-helix,piercing/all",
    healing: "6-8 месяцев",
    painLevel: 6,
    jewelry: "Лабрет",
    care: ["Не спать на проколе", "Аккуратная чистка", "Не использовать наушники-вкладыши"]
  },
  {
    id: "flat",
    slug: "flat",
    category: "ears",
    title: "Флэт «flat»",
    price: "3 500 ₽/3 800 ₽",
    description: "Пирсинг флэт - это особый вид прокола плоской области хряща. Можно комбинировать с другими проколами на одном ухе.",
    image: "https://loremflickr.com/800/600/flat-piercing,ear/all",
    healing: "6-9 месяцев",
    painLevel: 6,
    jewelry: "Лабрет",
    care: ["Не спать на проколе", "Регулярная обработка", "Избегать давления на ухо"]
  },
  {
    id: "tragus",
    slug: "tragus",
    category: "ears",
    title: "Трагус (козелок)",
    price: "3 500 ₽/3 800 ₽",
    description: "Пирсинг козелка (трагус) - это прокол хряща, расположенного у входа в слуховой канал. Практически безболезненный из-за малого количества нервных окончаний. Важно: для этого пирсинга необходимо на 2-3 месяца отказаться от наушников-вкладышей.",
    image: "https://loremflickr.com/800/600/earring,piercing/all",
    healing: "4-6 месяцев",
    painLevel: 5,
    jewelry: "Лабрет (прямой)",
    care: ["Отказ от наушников-вкладышей на 2-3 месяца", "Аккуратная чистка ватной палочкой", "Не травмировать телефоном"]
  },
    {
    id: "conch",
    slug: "conch",
    category: "ears",
    title: "Конч (conch)",
    price: "3 500 ₽/3 800 ₽",
    description: "Пирсинг Конч (Conch) - это прокол внутреннего хряща ушной раковины. Название происходит от латинского слова '''раковина'''. Период заживления от 6 месяцев и более.",
    image: "https://loremflickr.com/800/600/conch-piercing,ear/all",
    healing: "6-12 месяцев",
    painLevel: 6,
    jewelry: "Лабрет, кольцо (после заживления)",
    care: ["Не спать на проколе", "Регулярная обработка", "Даунсайз"]
  },
  {
    id: "rook",
    slug: "rook",
    category: "ears",
    title: "Руук (rook)/Пирсинг ладьи",
    price: "3 500 ₽/3 800 ₽",
    description: "Пирсинг Руук (Rook) - это прокол, расположенный в хряще ушной раковины. Срок заживления от 6 месяцев и более. Первичное украшение - банан, микробанан.",
    image: "https://loremflickr.com/800/600/rook-piercing,ear/all",
    healing: "6-12 месяцев",
    painLevel: 7,
    jewelry: "Микробанан",
    care: ["Сложный в уходе", "Регулярная обработка", "Не спать на ухе"]
  },
    {
    id: "daith",
    slug: "daith",
    category: "ears",
    title: "Дэйс (daith)",
    price: "3 500 ₽/3800 —",
    description: "Пирсинг Дэйс (Daith) - это прекрасный, относительно безболезненный прокол. Период его заживления - от 6 месяцев. Это единственный прокол хряща уха, в который сразу можно устанавливать красивые украшения в форме кольца.",
    image: "https://loremflickr.com/800/600/daith-piercing,ear/all",
    healing: "6-9 месяцев",
    painLevel: 5,
    jewelry: "Кольцо, кликер",
    care: ["Следить за чистотой", "Не использовать наушники-вкладыши", "Обработка физраствором"]
  },
  {
    id: "industrial",
    slug: "industrial",
    category: "ears",
    title: "Индастриал",
    price: "3 700 ₽/ 4 000 ₽",
    description: "Пирсинг Индастриал - это два прокола, соединенных одним украшением (штангой). Не часто и не всем подходит к выполнению анатомически. Перед проколом необходим осмотр. Из-за особенностей расположения, срок заживления этого пирсинга от 9 месяцев и более.",
    image: "https://static.tildacdn.com/tild3264-6336-4765-a137-656135633163/__1.png",
    healing: "9-12 месяцев",
    painLevel: 7,
    jewelry: "Длинная штанга (титан)",
    care: ["Строго не спать на ухе", "Не носить шапки, давящие на ухо", "Следить за углами проколов"]
  },

  // --- ГУБЫ ---
  {
    id: "lips-labret",
    slug: "lips",
    category: "lips",
    title: "Пирсинг губ (Лабрет/Монро)",
    price: "3 500 ₽",
    description: "Классический прокол нижней или верхней губы. Быстро заживает благодаря хорошему кровоснабжению.",
    image: "https://static.tildacdn.com/tild3939-3833-4661-a539-653833343261/_.png",
    healing: "2-3 месяца",
    painLevel: 4,
    jewelry: "Лабрет",
    care: ["Полоскать рот после еды", "Не играть украшением", "Даунсайз через 2 недели"]
  },

  // --- НОС ---
  {
    id: "septum",
    slug: "septum",
    category: "nose",
    title: "Септум",
    price: "2 500 ₽",
    description: "Прокол центральной носовой перегородки. Один из самых модных проколов, который легко спрятать при необходимости.",
    image: "https://static.tildacdn.com/tild3234-3334-4266-a631-356264336338/_.png",
    healing: "4-8 недель",
    painLevel: 3,
    jewelry: "Циркуляр, Кликер, Банан",
    care: ["Не трогать грязными руками", "Ванночки с физраствором", "Можно заворачивать внутрь (аккуратно)"]
  },
  {
    id: "nostril",
    slug: "nose", // Для общего раздела "Нос" или конкретно крыла
    category: "nose",
    title: "Крыло носа (Nostril)",
    price: "2 500 ₽",
    description: "Классический прокол крыла носа. Элегантно и подходит практически всем.",
    image: "https://static.tildacdn.com/tild6131-3639-4432-a566-393630373166/noroot.png",
    healing: "3-4 месяца",
    painLevel: 3,
    jewelry: "Нострил (улитка), Лабрет",
    care: ["Не вынимать украшение до заживления", "Аккуратно умываться", "Не использовать косметику в зоне прокола"]
  },

  // --- ЯЗЫК ---
  {
    id: "tongue",
    slug: "tongue",
    category: "tongue",
    title: "Пирсинг языка",
    price: "3 500 ₽",
    description: "Вертикальный прокол центра языка. Заживает очень быстро, но требует терпения в первую неделю из-за отека.",
    image: "https://static.tildacdn.com/tild3463-6132-4836-a262-646565326336/_.png",
    healing: "4-6 недель",
    painLevel: 3,
    jewelry: "Штанга",
    care: ["Диета в первую неделю (без острого/горячего)", "Полоскание антисептиком", "Замена штанги на более короткую после схода отека"]
  },

  // --- БРОВЬ ---
  {
    id: "eyebrow",
    slug: "eyebrow",
    category: "eyebrow",
    title: "Пирсинг брови",
    price: "3 500 ₽",
    description: "Вертикальный прокол мягких тканей брови. Добавляет взгляду выразительности.",
    image: "https://static.tildacdn.com/tild3865-3237-4238-a466-353234326362/_.png",
    healing: "3-5 месяцев",
    painLevel: 3,
    jewelry: "Микробанан",
    care: ["Осторожно надевать одежду через голову", "Не задевать расческой", "Избегать попадания косметики"]
  },

  // --- ПУПОК ---
  {
    id: "navel",
    slug: "navel",
    category: "navel",
    title: "Пирсинг пупка",
    price: "3 500 ₽",
    description: "Классический пирсинг складки над пупком. Огромный выбор украшений с кристаллами.",
    image: "https://static.tildacdn.com/tild6133-6535-4564-b231-323332653737/_.png",
    healing: "6-9 месяцев",
    painLevel: 3,
    jewelry: "Банан",
    care: ["Исключить качание пресса в первый месяц", "Не носить одежду с высокой талией", "Регулярная обработка"]
  },
  
  // --- ИНТИМНЫЙ ---
  {
    id: "nipple",
    slug: "nipple",
    category: "intimate",
    title: "Пирсинг соска",
    price: "3 500 ₽",
    description: "Эстетический прокол, повышающий чувствительность.",
    image: "https://static.tildacdn.com/tild3635-3534-4933-b831-636134653635/_.png",
    healing: "4-8 месяцев",
    painLevel: 6,
    jewelry: "Штанга, Кольцо",
    care: ["Носить хлопковое белье", "Избегать трения", "Ежедневная гигиена"]
  }
];

// Вспомогательная функция для Services component (фильтрация по категориям)
export const servicesData = categories.reduce((acc, cat) => {
  acc[cat.id] = allServices.filter(s => s.category === cat.id);
  return acc;
}, {} as Record<string, typeof allServices>);


// Данные для дополнительных услуг
export const additionalServicesData = [
  {
    id: "consultation",
    title: "Очный Осмотр/Консультация (Первичная)",
    description: "Стоимость осмотра будет зависеть от сложности и количества манипуляций мастера",
    price: "800 ₽/ 2000₽",
  },
  {
    id: "jewelry-selection",
    title: "Подбор украшения",
    description: "Бесплатно при покупке украшения в нашей студии!",
    price: "1 000 ₽/ —",
  },
  {
    id: "replacement-1-2",
    title: "Замена/Установка 1-2 украшений",
    description: "Замена 1-2 украшений за 1 раз, в том числе и даунсайз",
    price: "1 000 ₽/ —",
  },
  {
    id: "replacement-3-4",
    title: "Замена/Установка 3-4 украшений",
    description: "—",
    price: "2 000 ₽/ —",
  },
  {
    id: "replacement-5-6",
    title: "Замена/Установка 5-6 украшений",
    description: "—",
    price: "3 000 ₽/ —",
  },
    {
    id: "restoration",
    title: "Восстановление прокола",
    description: "—",
    price: "1 700 ₽/ —",
  },
  {
    id: "microdermal-cleaning",
    title: "Чистка микродермала",
    description: "—",
    price: "1 500 ₽/2000 ₽ —",
  },
  {
    id: "microdermal-replacement",
    title: "Замена накрутки микродермала",
    description: "—",
    price: "1 000 ₽ —",
  },
  {
    id: "microdermal-removal",
    title: "Удаление микродермала",
    description: "—",
    price: "1 700 ₽/3 000 ₽",
  },
  {
    id: "anodizing",
    title: "Анодирование (изменение цвета украшения)",
    description: "—",
    price: "700 ₽/ —",
  },
  {
    id: "cleaning",
    title: "Чистка украшений (ультразвук, стерилизация)",
    description: "—",
    price: "700 ₽/ —",
  },
];
