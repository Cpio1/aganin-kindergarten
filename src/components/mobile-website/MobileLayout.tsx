"use client";

import { useLocale } from "@/components/shared/LocaleProvider";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { WhatsAppIcon } from "@/components/shared/Icons";
import type { SiteMedia } from "@/lib/media";
import { whatsappUrl } from "@/lib/site-data";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";
import { MobileAbout, MobileGroups } from "./MobileAboutGroups";
import { MobileActivities, MobileNutrition } from "./MobileActivitiesNutrition";
import { MobileContacts, MobileDocuments, MobileGallery } from "./MobileGalleryContacts";

export function MobileLayout({ media }: { media: SiteMedia }) {
  const { t } = useLocale();

  return (
    <>
      <a
        href="#main"
        className="btn btn-sun fixed top-2 left-2 z-50 -translate-y-20 focus-visible:translate-y-0"
      >
        {t.a11y.skip}
      </a>
      <MobileHeader media={media} />
      <main id="main">
        <MobileHero media={media} />
        <MobileAbout media={media} />
        <MobileGroups />
        <MobileActivities />
        <MobileNutrition />
        <MobileGallery media={media} />
        <MobileDocuments />
        <MobileContacts />
      </main>
      <SiteFooter media={media} />
      <a
        href={whatsappUrl(t.common.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.contacts.whatsapp} (${t.a11y.newTab})`}
        className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-30 flex size-13 items-center justify-center rounded-full bg-mint text-ink shadow-lift ring-3 ring-milk transition-transform active:scale-95"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
