"use client";

import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import { useActiveSection } from "@/components/shared/useActiveSection";
import type { SiteMedia } from "@/lib/media";
import { SECTION_IDS, whatsappUrl } from "@/lib/site-data";

export function DesktopHeader({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const active = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-2.5 z-40 px-4">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-3 rounded-full bg-milk/95 pr-2 pl-4 shadow-soft ring-1 ring-ink/5 backdrop-blur-sm">
        <a href="#home" aria-label={t.a11y.home} className="flex min-h-11 shrink-0 items-center">
          <Logo logo={media.logo} heightClass="h-10" priority />
        </a>

        <nav aria-label={t.a11y.mainNav} className="min-w-0">
          <ul className="flex items-center">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`font-display block rounded-full px-2.5 py-1.5 text-[0.84rem] font-medium whitespace-nowrap transition-colors xl:px-3 ${
                    active === id ? "bg-mint" : "hover:bg-mint-soft"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <a
            href={whatsappUrl(t.common.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp (${t.a11y.newTab})`}
            className="btn btn-ink !min-h-10 !px-3 !text-sm"
          >
            <WhatsAppIcon className="size-4.5" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
