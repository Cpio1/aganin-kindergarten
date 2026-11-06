"use client";

import { ArrowDown, Clock, GraduationCap, Smile } from "lucide-react";
import Image from "next/image";
import { Cloud, HeroScene, Star, Sun } from "@/components/shared/Art";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

/**
 * Фотография занимает отдельную органичную форму справа и служит фоном композиции,
 * поэтому текст и логотип никогда не перекрывают лица детей.
 */
export function DesktopHero({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-10">
      <div className="absolute -top-28 -left-24 size-96 rounded-full bg-sun-soft" aria-hidden="true" />
      <Cloud className="anim-drift absolute top-28 left-[43%] w-20 text-mint-soft" />
      <Star className="anim-twinkle absolute top-24 left-[6%] size-5 text-peach" />
      <Star className="anim-twinkle absolute bottom-16 left-[46%] size-6 text-sun-deep [animation-delay:-2s]" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-8 px-6 lg:grid-cols-[1fr_1.02fr]">
        <div className="anim-rise">
          {media.logo && (
            <span className="shape-b mb-4 inline-flex bg-milk px-3 py-2 shadow-soft">
              <Logo logo={media.logo} heightClass="h-16" sizes="220px" />
            </span>
          )}

          <h1 className="text-[2.5rem] leading-[1.1] font-bold xl:text-[2.85rem]">
            {hero.titleBefore}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute inset-x-[-0.15em] bottom-[0.06em] -z-10 h-[0.42em] rounded-full bg-sun" />
              {hero.titleAccent}
            </span>{" "}
            {hero.titleAfter}
          </h1>
          <p className="mt-3 max-w-[30rem] text-[1.06rem] text-ink-soft">{hero.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl(t.common.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mint"
            >
              <WhatsAppIcon className="size-5" />
              {hero.contact}
            </a>
            <a href="#about" className="btn btn-milk ring-1 ring-ink/10">
              {hero.more}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
            <li className="flex items-center gap-1.5 rounded-full bg-peach-soft px-3 py-1.5">
              <Smile className="size-4" aria-hidden="true" />
              {hero.chips.age}
            </li>
            <li className="flex items-center gap-1.5 rounded-full bg-sun-soft px-3 py-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {hero.chips.hours}
            </li>
            <li className="flex items-center gap-1.5 rounded-full bg-mint-soft px-3 py-1.5">
              <GraduationCap className="size-4" aria-hidden="true" />
              {hero.chips.language}
            </li>
          </ul>
        </div>

        <div className="relative">
          <Sun className="anim-twinkle absolute -top-8 -right-5 z-10 w-24" />
          <div className="shape-hero relative aspect-[1.08] overflow-hidden bg-mint-soft shadow-lift">
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
          <Cloud className="anim-drift-slow absolute -bottom-3 -left-8 w-32 text-sun" />
        </div>
      </div>
    </section>
  );
}
