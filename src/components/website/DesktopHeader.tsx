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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/8 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center gap-3 px-4 xl:px-6">
        <a href="#home" aria-label={t.a11y.home} className="flex min-h-11 shrink-0 items-center">
          <Logo logo={media.logo} heightClass="h-12" sizes="100px" priority />
        </a>

        <nav aria-label={t.a11y.mainNav} className="ml-auto min-w-0">
          <ul className="flex items-center">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`font-display block rounded-full px-2 py-1.5 text-[0.84rem] font-medium whitespace-nowrap transition-colors xl:px-3 ${
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
            className="btn btn-green !min-h-10 !px-3 !text-sm"
          >
            <WhatsAppIcon className="size-4.5" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
