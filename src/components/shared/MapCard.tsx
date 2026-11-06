"use client";

import { ExternalLink } from "lucide-react";
import { twoGisEmbedUrl, twoGisFirmUrl } from "@/lib/site-data";
import { useLocale } from "./LocaleProvider";

/** Интерактивная карта 2ГИС с подтверждённой карточкой организации. */
export function MapCard({ className = "" }: { className?: string }) {
  const { t } = useLocale();

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-mint-soft shadow-soft ring-1 ring-ink/8 ${className}`}>
      <iframe
        src={twoGisEmbedUrl()}
        title={t.a11y.mapTitle}
        loading="lazy"
        className="absolute inset-0 size-full border-0"
      />
      <a
        href={twoGisFirmUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.contacts.openMap} (${t.a11y.newTab})`}
        className="btn btn-yellow absolute top-2.5 right-2.5 !min-h-10 !px-3 !text-sm"
      >
        {t.contacts.openMap}
        <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
