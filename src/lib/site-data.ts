/**
 * Единый источник фактов о садике. Названия групп, ссылка на документы,
 * контакты и карта меняются только здесь.
 */

export const siteData = {
  name: "AGANIN KIDS",
  address: "ст. Алмалы, 3/66",
  city: { kk: "Алматы", ru: "Алматы" },
  phones: [
    { display: "+7 777 452 22 55", e164: "+77774522255" },
    { display: "+7 777 548 54 45", e164: "+77775485445" },
  ],
  /** WhatsApp подключён к первому номеру. */
  whatsapp: "77774522255",
  hours: "08:00–18:00",
  instagram: {
    handle: "@aganin_kids",
    url: "https://www.instagram.com/aganin_kids/",
  },

  /**
   * Ссылка на папку с документами (Облако Mail.ru).
   * Если поставить null, вместо кнопки просмотра покажется пояснение и кнопка WhatsApp.
   */
  documentsUrl: "https://cloud.mail.ru/home/Документы%20(aganin%20kids)" as string | null,

  /** Карточка «Aganin kids» в 2ГИС: сверены телефон, Instagram, часы и номер дома. */
  twoGis: {
    city: "almaty",
    firmId: "70000001079748476",
    lat: 43.189162,
    lon: 76.819928,
  },

  /** Группы детского сада: название и возраст на двух языках. */
  groups: [
    { id: "group-1", name: { kk: "Сұңқар тобы", ru: "Сұңқар" }, age: { kk: "3–4 жас", ru: "3–4 года" }, art: "cloud" },
    { id: "group-2", name: { kk: "Дарын тобы", ru: "Дарын" }, age: { kk: "4–5 жас", ru: "4–5 лет" }, art: "star" },
    { id: "group-3", name: { kk: "Эврика тобы", ru: "Эврика" }, age: { kk: "5–6 жас", ru: "5–6 лет" }, art: "sun" },
  ],

  /**
   * Фото первого экрана: файл из public/images. Сейчас main-page.jpeg содержит логотип,
   * поэтому здесь указан снимок класса. Когда появится настоящее фото main-page,
   * поставьте null, и сайт возьмёт его автоматически.
   */
  heroImage: "image6.jpeg" as string | null,

  /**
   * Точка кадрирования фото (object-position). Подбирается по лицам на снимке,
   * когда фотографии загружены. В полноэкранном просмотре снимок виден целиком.
   */
  heroFocus: "50% 50%",
  aboutFocus: "50% 50%",
} as const;

export type GroupArt = (typeof siteData.groups)[number]["art"];

export const SECTION_IDS = [
  "home",
  "about",
  "groups",
  "activities",
  "nutrition",
  "gallery",
  "documents",
  "contacts",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const ACTIVITY_IDS = [
  "chess",
  "speech",
  "dance",
  "music",
  "mental",
  "english",
  "aikido",
] as const;
export type ActivityId = (typeof ACTIVITY_IDS)[number];

export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const twoGisFirmUrl = `https://2gis.kz/${siteData.twoGis.city}/firm/${siteData.twoGis.firmId}`;

export function twoGisEmbedUrl(): string {
  const { lat, lon, city, firmId } = siteData.twoGis;
  const options = {
    pos: { lat, lon, zoom: 16 },
    opt: { city },
    org: firmId,
  };
  return `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
    JSON.stringify(options),
  )}`;
}

/**
 * Адрес сайта для canonical и Open Graph. Для домена .edu.kz задайте
 * NEXT_PUBLIC_SITE_URL, иначе на Vercel используется production-адрес проекта.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
