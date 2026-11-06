"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Cloud, HeroScene } from "@/components/shared/Art";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

/** Компактный первый экран: логотип, текст и кнопки видны сразу, фото идёт под ними. */
export function MobileHero({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section id="home" className="relative overflow-hidden pt-[4.5rem] pb-6">
      <Cloud className="anim-drift absolute top-20 -right-4 w-16 text-mint-soft" />

      <div className="anim-rise relative mx-auto max-w-2xl px-4">
        <div className="mb-3">
          <Logo logo={media.logo} heightClass="h-16" sizes="132px" large />
        </div>
        <h1 className="brand-title text-[1.72rem] leading-[1.14] min-[390px]:text-[1.95rem] sm:text-[2.3rem]">
          {hero.titleBefore}{" "}
          <span className="relative z-0 inline-block whitespace-nowrap">
            <span className="absolute inset-x-[-0.1em] bottom-[0.05em] -z-10 h-[0.4em] rounded-[4px] bg-yellow" />
            {hero.titleAccent}
          </span>{" "}
          {hero.titleAfter}
        </h1>
        <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">{hero.subtitle}</p>

        <div className="mt-3.5 grid grid-cols-[1.6fr_1fr] gap-2 sm:flex">
          <a
            href={whatsappUrl(t.common.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green !px-2 !text-[0.875rem]"
          >
            <WhatsAppIcon className="size-4.5 shrink-0" />
            {hero.contact}
          </a>
          <a href="#about" className="btn btn-white !px-2 !text-[0.875rem]">
            {hero.more}
            <ArrowDown className="hidden size-4 shrink-0 min-[375px]:block" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-5 max-w-2xl px-4">
        <div className="relative mr-1.5 mb-1.5">
          <span className="absolute -top-2.5 -left-2 z-10 size-8 -rotate-12 rounded-lg bg-green shadow-soft" aria-hidden="true" />
          <span className="absolute -right-2 -bottom-2.5 z-10 size-7 rotate-12 rounded-lg bg-blue shadow-soft" aria-hidden="true" />
          <div className="photo-frame-sm relative aspect-[16/10] overflow-hidden bg-mint-soft">
            {media.hero ? (
              <Image
                src={media.hero.src}
                alt={t.a11y.heroPhoto}
                fill
                priority
                sizes="(min-width: 672px) 640px, 100vw"
                className="object-cover"
                style={{ objectPosition: siteData.heroFocus }}
              />
            ) : (
              <HeroScene className="absolute inset-0 size-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
