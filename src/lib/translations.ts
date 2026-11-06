import type { ActivityId } from "./site-data";

export type Locale = "kk" | "ru";
export const DEFAULT_LOCALE: Locale = "kk";
export const LOCALE_STORAGE_KEY = "aganin-locale";

type StatCard = { before?: string; value: string; after?: string };

export type Translation = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    groups: string;
    activities: string;
    nutrition: string;
    gallery: string;
    documents: string;
    contacts: string;
  };
  hero: {
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    subtitle: string;
    contact: string;
    more: string;
    chips: { age: string; hours: string; language: string };
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    cards: { groups: StatCard; age: StatCard; language: StatCard; meals: StatCard; clubs: StatCard };
  };
  groups: {
    kicker: string;
    title: string;
    lead: string;
    ask: string;
    askMessage: (name: string) => string;
    sharedTitle: string;
    shared: { language: string; meals: string };
  };
  activities: {
    kicker: string;
    title: string;
    lead: string;
    items: Record<ActivityId, { name: string; text: string }>;
    ctaTitle: string;
    cta: string;
    ctaMessage: string;
  };
  nutrition: {
    kicker: string;
    title: string;
    text: string;
    cta: string;
    ctaMessage: string;
  };
  gallery: {
    kicker: string;
    title: string;
    showAll: string;
    showLess: string;
    empty: string;
    emptyCta: string;
    alt: (index: number) => string;
  };
  documents: {
    kicker: string;
    title: string;
    text: string;
    open: string;
    pending: string;
    pendingCta: string;
    pendingMessage: string;
  };
  contacts: {
    kicker: string;
    title: string;
    legalName: string;
    address: string;
    phone: string;
    hours: string;
    call: string;
    whatsapp: string;
    openMap: string;
  };
  footer: { tagline: string; sections: string; contacts: string; rights: string };
  common: { whatsappMessage: string };
  a11y: {
    skip: string;
    mainNav: string;
    menuOpen: string;
    menuClose: string;
    language: string;
    close: string;
    previous: string;
    next: string;
    photoCounter: (current: number, total: number) => string;
    enlarge: (index: number) => string;
    newTab: string;
    mapTitle: string;
    home: string;
    aboutVideo: string;
    aboutPhoto: string;
    heroPhoto: string;
  };
};

const kk: Translation = {
  meta: {
    title: "AGANIN KIDS — Алматыдағы жеке балабақша, 3–6 жас",
    description:
      "3–6 жас аралығындағы балаларға арналған балабақша: 3 топ, қазақ тілінде тәрбие мен оқыту, күніне 5 мезгіл тамақтану және 7 қосымша үйірме. Жұмыс уақыты 08:00–18:00.",
  },
  nav: {
    home: "Басты бет",
    about: "Біз туралы",
    groups: "Топтар",
    activities: "Үйірмелер",
    nutrition: "Тамақтану",
    gallery: "Галерея",
    documents: "Құжаттар",
    contacts: "Байланыс",
  },
  hero: {
    titleBefore: "AGANIN KIDS — балаңыздың",
    titleAccent: "бақытты",
    titleAfter: "балалық шағы",
    subtitle: "3–6 жас аралығындағы балаларға арналған жайлы әрі қызықты орта",
    contact: "Бізбен байланысу",
    more: "Толығырақ",
    chips: { age: "3–6 жас", hours: "08:00–18:00", language: "Қазақ тілінде" },
  },
  about: {
    kicker: "Біз туралы",
    title: "Бала қуана баратын балабақша",
    lead: "AGANIN KIDS — 3–6 жас аралығындағы балаларға арналған жеке балабақша. Тәрбие мен оқыту қазақ тілінде жүргізіледі. Жұмыс уақыты — 08:00–18:00.",
    cards: {
      groups: { value: "3", after: "топ" },
      age: { value: "3–6", after: "жас" },
      language: { value: "Қазақ тілінде", after: "тәрбие мен оқыту" },
      meals: { before: "Күніне", value: "5", after: "мезгіл тамақтану" },
      clubs: { value: "7", after: "қосымша үйірме" },
    },
  },
  groups: {
    kicker: "Біздің топтар",
    title: "Үш топ — бір үлкен отбасы",
    lead: "Балабақшада 3–6 жас аралығындағы балаларға арналған 3 топ бар.",
    ask: "Топ туралы сұрау",
    askMessage: (name) => `Сәлеметсіз бе! ${name} туралы білгім келеді.`,
    sharedTitle: "Балабақшада",
    shared: { language: "Қазақ тілінде оқыту", meals: "Күніне 5 мезгіл тамақ" },
  },
  activities: {
    kicker: "Қосымша үйірмелер",
    title: "Әр балаға өз қызығы",
    lead: "Шахматтан айкидоға дейін: балабақшада 7 қосымша үйірме бар.",
    items: {
      chess: { name: "Шахмат", text: "Логика мен зейінді дамытады" },
      speech: { name: "Логопед", text: "Анық әрі дұрыс сөйлеуге көмектеседі" },
      dance: { name: "Хореография", text: "Ырғақ сезімі мен икемділікті дамытады" },
      music: { name: "Музыка", text: "Әуенді сезінуге және ән айтуға баулиды" },
      mental: { name: "Менталды арифметика", text: "Есептеу мен есте сақтауды жаттықтырады" },
      english: { name: "Ағылшын тілі", text: "Алғашқы сөздер мен жаңа тілге қызығушылық" },
      aikido: { name: "Айкидо", text: "Төзімділік пен өзіне сенімділікке тәрбиелейді" },
    },
    ctaTitle: "Үйірмелер туралы сұрағыңыз бар ма?",
    cta: "Бізге жазыңыз",
    ctaMessage: "Сәлеметсіз бе! Қосымша үйірмелер туралы білгім келеді.",
  },
  nutrition: {
    kicker: "Тамақтану",
    title: "Күніне 5 мезгіл тамақтану",
    text: "Балабақшада балалар күніне 5 рет тамақтанады. Тамақтану туралы сұрағыңыз болса, бізге жазыңыз.",
    cta: "Тамақтану туралы сұрау",
    ctaMessage: "Сәлеметсіз бе! Балабақшадағы тамақтану туралы білгім келеді.",
  },
  gallery: {
    kicker: "Галерея",
    title: "Балабақша өмірінен сәттер",
    showAll: "Барлық фотосуреттерді көру",
    showLess: "Жасыру",
    empty: "Фотосуреттер жақында осы жерде жарияланады. Әзірге балабақша өмірін Instagram парақшамыздан көре аласыз.",
    emptyCta: "Instagram-ға өту",
    alt: (index) => `AGANIN KIDS балабақшасының ${index}-фотосуреті`,
  },
  documents: {
    kicker: "Құжаттар",
    title: "Балабақша құжаттары",
    text: "Балабақша құжаттарымен онлайн таныса аласыз.",
    open: "Құжаттарды қарау",
    pending: "Құжаттар жақында осы жерде жарияланады. Қажет болса, бізге WhatsApp арқылы жазыңыз.",
    pendingCta: "WhatsApp арқылы сұрау",
    pendingMessage: "Сәлеметсіз бе! Балабақша құжаттары туралы білгім келеді.",
  },
  contacts: {
    kicker: "Байланыс",
    title: "Бізге хабарласыңыз",
    legalName: "«AGANIN KIDS» ЖШС",
    address: "Мекенжай",
    phone: "Телефон",
    hours: "Жұмыс уақыты",
    call: "Қоңырау шалу",
    whatsapp: "WhatsApp-қа жазу",
    openMap: "2ГИС-те ашу",
  },
  footer: {
    tagline: "3–6 жас аралығындағы балаларға арналған жайлы әрі қызықты орта",
    sections: "Бөлімдер",
    contacts: "Байланыс",
    rights: "Барлық құқықтар қорғалған.",
  },
  common: { whatsappMessage: "Сәлеметсіз бе! AGANIN KIDS балабақшасы туралы білгім келеді." },
  a11y: {
    skip: "Негізгі мазмұнға өту",
    mainNav: "Негізгі мәзір",
    menuOpen: "Мәзірді ашу",
    menuClose: "Мәзірді жабу",
    language: "Тілді таңдау",
    close: "Жабу",
    previous: "Алдыңғы фотосурет",
    next: "Келесі фотосурет",
    photoCounter: (current, total) => `${current} / ${total}`,
    enlarge: (index) => `${index}-фотосуретті үлкейту`,
    newTab: "жаңа бетте ашылады",
    mapTitle: "AGANIN KIDS балабақшасының 2ГИС картасындағы орны",
    home: "AGANIN KIDS — басты бет",
    aboutVideo: "AGANIN KIDS балабақшасы туралы бейне",
    aboutPhoto: "AGANIN KIDS балабақшасының фотосуреті",
    heroPhoto: "AGANIN KIDS балабақшасы",
  },
};

const ru: Translation = {
  meta: {
    title: "AGANIN KIDS — частный детский сад в Алматы, 3–6 лет",
    description:
      "Детский сад для детей 3–6 лет: 3 группы, воспитание и обучение на казахском языке, питание 5 раз в день и 7 дополнительных кружков. Часы работы 08:00–18:00.",
  },
  nav: {
    home: "Главная",
    about: "О нас",
    groups: "Группы",
    activities: "Кружки",
    nutrition: "Питание",
    gallery: "Галерея",
    documents: "Документы",
    contacts: "Контакты",
  },
  hero: {
    titleBefore: "AGANIN KIDS —",
    titleAccent: "счастливое",
    titleAfter: "детство вашего ребёнка",
    subtitle: "Уютная и интересная среда для детей от 3 до 6 лет",
    contact: "Связаться с нами",
    more: "Подробнее",
    chips: { age: "3–6 лет", hours: "08:00–18:00", language: "На казахском" },
  },
  about: {
    kicker: "О нас",
    title: "Детский сад, куда хочется идти",
    lead: "AGANIN KIDS — частный детский сад для детей от 3 до 6 лет. Воспитание и обучение проходят на казахском языке. Часы работы — 08:00–18:00.",
    cards: {
      groups: { value: "3", after: "группы" },
      age: { value: "3–6", after: "лет" },
      language: { before: "Воспитание и обучение", value: "на казахском" },
      meals: { before: "Питание", value: "5", after: "раз в день" },
      clubs: { value: "7", after: "дополнительных кружков" },
    },
  },
  groups: {
    kicker: "Наши группы",
    title: "Три группы — одна большая семья",
    lead: "В детском саду 3 группы для детей от 3 до 6 лет.",
    ask: "Узнать о группе",
    askMessage: (name) => `Здравствуйте! Хочу узнать подробнее: ${name}.`,
    sharedTitle: "В детском саду",
    shared: { language: "Обучение на казахском", meals: "Питание 5 раз в день" },
  },
  activities: {
    kicker: "Дополнительные кружки",
    title: "У каждого ребёнка — своё увлечение",
    lead: "От шахмат до айкидо: в детском саду 7 дополнительных кружков.",
    items: {
      chess: { name: "Шахматы", text: "Развивают логику и внимание" },
      speech: { name: "Логопед", text: "Помогает говорить чётко и правильно" },
      dance: { name: "Хореография", text: "Развивает чувство ритма и гибкость" },
      music: { name: "Музыка", text: "Учит чувствовать мелодию и петь" },
      mental: { name: "Ментальная арифметика", text: "Тренирует счёт и память" },
      english: { name: "Английский язык", text: "Первые слова и интерес к новому языку" },
      aikido: { name: "Айкидо", text: "Воспитывает выдержку и уверенность в себе" },
    },
    ctaTitle: "Есть вопросы о кружках?",
    cta: "Напишите нам",
    ctaMessage: "Здравствуйте! Хочу узнать о дополнительных кружках.",
  },
  nutrition: {
    kicker: "Питание",
    title: "Питание 5 раз в день",
    text: "В детском саду дети питаются 5 раз в день. Если у вас есть вопросы о питании, напишите нам.",
    cta: "Спросить о питании",
    ctaMessage: "Здравствуйте! Хочу узнать о питании в детском саду.",
  },
  gallery: {
    kicker: "Галерея",
    title: "Моменты из жизни сада",
    showAll: "Посмотреть все фотографии",
    showLess: "Свернуть",
    empty: "Фотографии скоро появятся здесь. А пока жизнь детского сада можно посмотреть на нашей странице в Instagram.",
    emptyCta: "Перейти в Instagram",
    alt: (index) => `Фотография детского сада AGANIN KIDS, №${index}`,
  },
  documents: {
    kicker: "Документы",
    title: "Документы детского сада",
    text: "С документами детского сада можно ознакомиться онлайн.",
    open: "Посмотреть документы",
    pending: "Документы скоро появятся здесь. Если они нужны сейчас, напишите нам в WhatsApp.",
    pendingCta: "Спросить в WhatsApp",
    pendingMessage: "Здравствуйте! Хочу узнать о документах детского сада.",
  },
  contacts: {
    kicker: "Контакты",
    title: "Свяжитесь с нами",
    legalName: "ТОО «AGANIN KIDS»",
    address: "Адрес",
    phone: "Телефон",
    hours: "Часы работы",
    call: "Позвонить",
    whatsapp: "Написать в WhatsApp",
    openMap: "Открыть в 2ГИС",
  },
  footer: {
    tagline: "Уютная и интересная среда для детей от 3 до 6 лет",
    sections: "Разделы",
    contacts: "Контакты",
    rights: "Все права защищены.",
  },
  common: { whatsappMessage: "Здравствуйте! Хочу узнать о детском саде AGANIN KIDS." },
  a11y: {
    skip: "Перейти к основному содержанию",
    mainNav: "Основное меню",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    language: "Выбор языка",
    close: "Закрыть",
    previous: "Предыдущая фотография",
    next: "Следующая фотография",
    photoCounter: (current, total) => `${current} / ${total}`,
    enlarge: (index) => `Увеличить фотографию ${index}`,
    newTab: "откроется в новой вкладке",
    mapTitle: "Детский сад AGANIN KIDS на карте 2ГИС",
    home: "AGANIN KIDS — главная",
    aboutVideo: "Видео о детском саде AGANIN KIDS",
    aboutPhoto: "Фотография детского сада AGANIN KIDS",
    heroPhoto: "Детский сад AGANIN KIDS",
  },
};

export const translations: Record<Locale, Translation> = { kk, ru };
