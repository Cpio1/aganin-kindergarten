"use client";

import type { SiteMedia } from "@/lib/media";
import { useLocale } from "@/components/shared/LocaleProvider";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopHero } from "./DesktopHero";
import { DesktopAbout, DesktopGroups } from "./DesktopAboutGroups";
import { DesktopActivities, DesktopNutrition } from "./DesktopActivitiesNutrition";
import { DesktopContacts, DesktopDocuments, DesktopGallery } from "./DesktopGalleryContacts";

export function DesktopLayout({ media }: { media: SiteMedia }) {
  const { t } = useLocale();

  return (
    <>
      <a
        href="#main"
        className="btn btn-sun fixed top-2 left-2 z-50 -translate-y-20 focus-visible:translate-y-0"
      >
        {t.a11y.skip}
      </a>
      <DesktopHeader media={media} />
      <main id="main">
        <DesktopHero media={media} />
        <DesktopAbout media={media} />
        <DesktopGroups />
        <DesktopActivities />
        <DesktopNutrition />
        <DesktopGallery media={media} />
        <DesktopDocuments />
        <DesktopContacts />
      </main>
      <SiteFooter media={media} />
    </>
  );
}
