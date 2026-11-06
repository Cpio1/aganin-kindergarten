"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import type { SiteMedia } from "@/lib/media";
import { SECTION_IDS, siteData } from "@/lib/site-data";
import { InstagramIcon } from "./Icons";
import { useLocale } from "./LocaleProvider";
import { Logo } from "./Logo";

const YEAR = new Date().getFullYear();
const LINK = "underline-offset-4 transition-colors hover:underline decoration-mint-deep decoration-2";

export function SiteFooter({ media }: { media: SiteMedia }) {
  const { t } = useLocale();

  return (
    <footer className="mt-6 bg-paper">
      <div className="kids-stripe" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1180px] gap-6 px-4 pt-7 pb-5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1.1fr] lg:gap-10 lg:px-6 lg:pt-9">
        <div>
          <span className="inline-flex rounded-2xl bg-white p-3 shadow-soft">
            <Logo logo={media.logo} heightClass="h-16" sizes="132px" />
          </span>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.sections}>
          <h2 className="text-sm font-bold">{t.footer.sections}</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 text-sm text-ink-soft">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`inline-block py-1 hover:text-ink ${LINK}`}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-sm font-bold">{t.footer.contacts}</h2>
          <ul className="mt-2 space-y-0.5 text-sm text-ink-soft">
            <li className="flex items-start gap-2 py-1">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteData.address}
            </li>
            <li className="flex items-start gap-2 py-1">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteData.hours}
            </li>
            {siteData.phones.map((phone) => (
              <li key={phone.e164}>
                <a
                  href={`tel:${phone.e164}`}
                  className={`inline-flex items-center gap-2 py-1 whitespace-nowrap hover:text-ink ${LINK}`}
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${siteData.instagram.handle} (${t.a11y.newTab})`}
                className={`inline-flex items-center gap-2 py-1 hover:text-ink ${LINK}`}
              >
                <InstagramIcon className="size-4 shrink-0" />
                {siteData.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] border-t border-ink/10 px-4 py-3 pb-20 text-xs text-ink-soft lg:px-6 lg:pb-3">
        © {YEAR} {t.contacts.legalName}. {t.footer.rights}
      </div>
    </footer>
  );
}
