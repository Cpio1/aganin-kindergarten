"use client";

import Image from "next/image";
import type { SecondaryMedia } from "@/lib/media";
import { siteData } from "@/lib/site-data";
import { BlocksScene } from "./Art";
import { useLocale } from "./LocaleProvider";

/** Рамка получает пропорции снимка, но в разумных пределах: сильно вытянутые фото чуть подрезаются. */
function frameRatio(width: number, height: number): number {
  return Math.min(1.5, Math.max(0.85, width / height));
}

/** Фото или видео main-page2. Пока файла нет, вместо него иллюстрация с казахскими буквами. */
export function AboutMedia({
  media,
  sizes,
  className = "",
}: {
  media: SecondaryMedia | null;
  sizes: string;
  className?: string;
}) {
  const { t } = useLocale();
  const frame = `relative w-full overflow-hidden bg-mint-soft shadow-lift ${className}`;

  if (media?.kind === "video") {
    return (
      <div className={frame} style={{ aspectRatio: "4 / 3" }}>
        <video
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={t.a11y.aboutVideo}
          className="absolute inset-0 size-full object-contain"
        >
          <source src={`${media.src}#t=0.1`} type={media.type} />
        </video>
      </div>
    );
  }

  if (media?.kind === "image") {
    return (
      <div className={frame} style={{ aspectRatio: frameRatio(media.width, media.height) }}>
        <Image
          src={media.src}
          alt={t.a11y.aboutPhoto}
          fill
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: siteData.aboutFocus }}
        />
      </div>
    );
  }

  return (
    <div className={frame} style={{ aspectRatio: "6 / 5" }}>
      <BlocksScene className="absolute inset-0 size-full" />
    </div>
  );
}
