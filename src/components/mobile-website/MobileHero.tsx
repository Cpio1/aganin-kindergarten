"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Cloud, HeroScene, Star, Sun } from "@/components/shared/Art";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

/** Компактный первый экран: текст и кнопки видны сразу, фото идёт под ними. */
export function MobileHero({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section id="home" className="relative overflow-hidden pt-[4.25rem] pb-5">
      <div className="absolute -top-16 -right-20 size-60 rounded-full bg-sun-soft" aria-hidden="true" />
      <Star className="anim-twinkle absolute top-20 right-5 size-4 text-peach" />
      <Cloud className="anim-drift absolute top-36 -right-3 w-14 text-mint-soft" />

      <div className="anim-rise relative mx-auto max-w-2xl px-4">
        {media.logo && (
          <span className="shape-b mb-2.5 inline-flex bg-milk px-2.5 py-1.5 shadow-soft">
            <Logo logo={media.logo} heightClass="h-12" sizes="170px" />
          </span>
        )}
        <h1 className="text-[1.72rem] leading-[1.14] font-bold min-[390px]:text-[1.95rem] sm:text-[2.3rem]">
          {hero.titleBefore}{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="absolute inset-x-[-0.12em] bottom-[0.05em] -z-10 h-[0.42em] rounded-full bg-sun" />
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
            className="btn btn-mint !px-2 !text-[0.875rem]"
          >
            <WhatsAppIcon className="size-4.5 shrink-0" />
            {hero.contact}
          </a>
          <a href="#about" className="btn btn-milk !px-2 !text-[0.875rem] ring-1 ring-ink/10">
            {hero.more}
            <ArrowDown className="hidden size-4 shrink-0 min-[375px]:block" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-4 max-w-2xl px-4">
        <Sun className="anim-twinkle absolute -top-4 right-2 z-10 w-14" />
        <div className="shape-a relative aspect-[16/10] overflow-hidden rounded-[2.5rem_1.25rem_2.5rem_1.25rem] bg-mint-soft shadow-soft">
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
    </section>
  );
}
