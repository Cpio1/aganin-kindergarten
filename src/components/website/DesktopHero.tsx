"use client";

import { ArrowDown, Clock, GraduationCap, Smile } from "lucide-react";
import Image from "next/image";
import { Cloud, HeroScene, Squiggle } from "@/components/shared/Art";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

/**
 * Логотип и текст стоят на белом фоне, а фотография занимает отдельный блок справа,
 * поэтому ничего не перекрывает лица детей.
 */
export function DesktopHero({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section id="home" className="relative overflow-hidden pt-[6.25rem] pb-14">
      <Cloud className="anim-drift absolute top-24 left-[44%] w-20 text-mint-soft" />
      <span className="absolute bottom-10 left-[2%] hidden size-4 rounded-full bg-yellow xl:block" aria-hidden="true" />
      <span className="absolute top-24 left-[2%] hidden size-5 rotate-12 rounded-md bg-pink/70 xl:block" aria-hidden="true" />
      <Squiggle className="absolute bottom-6 left-[38%] h-3 w-24 text-blue" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[1.08fr_1fr]">
        <div className="anim-rise">
          <div className="mb-5">
            <Logo logo={media.logo} heightClass="h-24" sizes="200px" large />
          </div>

          <h1 className="brand-title text-[2.3rem] leading-[1.14] xl:text-[2.65rem]">
            {hero.titleBefore}{" "}
            <span className="relative z-0 inline-block whitespace-nowrap">
              <span className="absolute inset-x-[-0.12em] bottom-[0.06em] -z-10 h-[0.4em] rounded-md bg-yellow" />
              {hero.titleAccent}
            </span>{" "}
            {hero.titleAfter}
          </h1>
          <p className="mt-3.5 max-w-[30rem] text-[1.06rem] text-ink-soft">{hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl(t.common.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              <WhatsAppIcon className="size-5" />
              {hero.contact}
            </a>
            <a href="#about" className="btn btn-white">
              {hero.more}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm font-medium">
            <li className="card-soft accent-pink flex items-center gap-1.5 px-3 py-1.5">
              <Smile className="size-4" aria-hidden="true" />
              {hero.chips.age}
            </li>
            <li className="card-soft accent-yellow flex items-center gap-1.5 px-3 py-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {hero.chips.hours}
            </li>
            <li className="card-soft accent-blue flex items-center gap-1.5 px-3 py-1.5">
              <GraduationCap className="size-4" aria-hidden="true" />
              {hero.chips.language}
            </li>
          </ul>
        </div>

        <div className="relative mr-2.5 mb-2.5">
          <span className="anim-drift absolute -top-4 -left-4 z-10 size-12 -rotate-12 rounded-xl bg-green shadow-soft" aria-hidden="true" />
          <span className="anim-drift-slow absolute -right-5 top-16 z-10 size-9 rotate-12 rounded-lg bg-pink shadow-soft" aria-hidden="true" />
          <span className="anim-drift-slow absolute -bottom-5 left-14 z-10 size-10 rotate-6 rounded-xl bg-blue shadow-soft" aria-hidden="true" />
          <span className="anim-drift absolute right-12 -bottom-6 z-10 size-7 rounded-full bg-yellow shadow-soft" aria-hidden="true" />
          <div className="photo-frame relative aspect-[1.12] overflow-hidden bg-mint-soft">
            {media.hero ? (
              <Image
                src={media.hero.src}
                alt={t.a11y.heroPhoto}
                fill
                priority
                sizes="(min-width: 1180px) 580px, 50vw"
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
