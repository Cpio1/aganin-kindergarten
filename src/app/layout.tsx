import type { Metadata, Viewport } from "next";
import { Onest, Rubik } from "next/font/google";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { siteData, siteUrl } from "@/lib/site-data";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, translations } from "@/lib/translations";
import "./globals.css";

/* Обе гарнитуры проверены по таблице символов: Ә Ғ Қ Ң Ө Ұ Ү Һ І есть (подмножество cyrillic-ext). */
const display = Rubik({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

const body = Onest({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});

const { meta } = translations[DEFAULT_LOCALE];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: meta.title,
  description: meta.description,
  applicationName: siteData.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: "ru_RU",
    url: "/",
    siteName: siteData.name,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

/* Только подтверждённые сведения: без рейтингов, лицензий и выдуманных дней работы. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: siteData.name,
  legalName: "ТОО «AGANIN KIDS»",
  url: siteUrl(),
  telephone: siteData.phones.map((phone) => phone.e164),
  sameAs: [siteData.instagram.url],
  address: {
    "@type": "PostalAddress",
    addressCountry: "KZ",
    addressLocality: siteData.city.ru,
    streetAddress: siteData.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteData.twoGis.lat,
    longitude: siteData.twoGis.lon,
  },
};

const localeBootstrap = `try{if(localStorage.getItem(${JSON.stringify(
  LOCALE_STORAGE_KEY,
)})==="ru"){var d=document.documentElement;d.lang="ru";d.classList.add("locale-pending")}}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={DEFAULT_LOCALE}
      className={`${display.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootstrap }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
