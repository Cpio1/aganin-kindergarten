"use client";

import type { SiteMedia } from "@/lib/media";
import { SECTION_IDS, siteData } from "@/lib/site-data";
import { FooterHills } from "./Art";
import { InstagramIcon } from "./Icons";
import { useLocale } from "./LocaleProvider";
import { Logo } from "./Logo";

const YEAR = new Date().getFullYear();

export function SiteFooter({ media }: { media: SiteMedia }) {
  const { t } = useLocale();

  return (
    <footer>
      <FooterHills className="block h-12 w-full lg:h-20" />
      <div className="bg-ink text-milk">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-4 pt-5 pb-24 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_1fr] lg:gap-10 lg:px-6 lg:pb-8">
          <div>
            {media.logo ? (
              <span className="shape-b inline-flex bg-milk p-2.5">
                <Logo logo={media.logo} heightClass="h-14" />
              </span>
            ) : (
              <Logo logo={null} light />
            )}
            <p className="mt-3 max-w-xs text-sm text-milk/85">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.sections}>
            <h2 className="text-sm font-semibold text-mint">{t.footer.sections}</h2>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-block py-1 transition-colors hover:text-sun">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-mint">{t.footer.contacts}</h2>
            <ul className="mt-2 space-y-0.5 text-sm">
              <li className="py-1">{siteData.address}</li>
              {siteData.phones.map((phone) => (
                <li key={phone.e164}>
                  <a href={`tel:${phone.e164}`} className="inline-block py-1 whitespace-nowrap hover:text-sun">
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
                  className="inline-flex items-center gap-1.5 py-1 hover:text-sun"
                >
                  <InstagramIcon className="size-4" />
                  {siteData.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-[1180px] border-t border-milk/15 px-4 py-3 pb-20 text-xs text-milk/80 lg:px-6 lg:pb-3">
          © {YEAR} {t.contacts.legalName}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
