"use client";

import { Clock, GraduationCap, UtensilsCrossed } from "lucide-react";
import { AboutMedia } from "@/components/shared/AboutMedia";
import { GroupCharacter } from "@/components/shared/Art";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

type Stat = { before?: string; value: string; after?: string };

function MiniStat({ stat, className, wide = false }: { stat: Stat; className: string; wide?: boolean }) {
  return (
    <Reveal className={wide ? "col-span-2" : ""}>
      <p
        className={`flex h-full flex-col justify-center px-3 py-2.5 text-[0.82rem] leading-tight font-medium ${className}`}
      >
        {stat.before && <span>{stat.before}</span>}
        <span className={`font-display font-bold ${wide ? "text-lg" : "text-[1.85rem] leading-[1.1]"}`}>
          {stat.value}
        </span>
        {stat.after && <span>{stat.after}</span>}
      </p>
    </Reveal>
  );
}

export function MobileAbout({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { cards } = t.about;

  return (
    <section id="about" className="mx-auto max-w-2xl px-4 py-6">
      <Reveal>
        <SectionHeading kicker={t.about.kicker} title={t.about.title} lead={t.about.lead} />
      </Reveal>
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <MiniStat stat={cards.groups} className="shape-a bg-mint" />
        <MiniStat stat={cards.age} className="shape-b bg-sun" />
        <MiniStat stat={cards.meals} className="shape-d bg-peach" />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Reveal>
          <p className="shape-b flex h-full flex-col justify-center bg-mint-soft px-3 py-2.5 text-[0.82rem] leading-tight font-medium">
            {cards.language.before && <span>{cards.language.before}</span>}
            <span className="font-display text-[1.02rem] leading-tight font-bold">{cards.language.value}</span>
            {cards.language.after && <span>{cards.language.after}</span>}
          </p>
        </Reveal>
        <MiniStat stat={cards.clubs} className="shape-a bg-sun-soft" />
      </div>
      <Reveal className="mx-auto mt-4 sm:max-w-md">
        <AboutMedia media={media.about} sizes="(min-width: 640px) 448px, 100vw" className="shape-c" />
      </Reveal>
    </section>
  );
}

const ARCH_BG = ["bg-mint", "bg-sun", "bg-peach-soft"];

/** Три маленьких окошка в ряд: вся группа умещается на одном экране без прокрутки вбок. */
export function MobileGroups() {
  const { t, locale } = useLocale();

  return (
    <section id="groups" className="bg-mint-soft/60 py-6">
      <div className="mx-auto max-w-2xl px-4">
        <Reveal>
          <SectionHeading
            kicker={t.groups.kicker}
            title={t.groups.title}
            lead={t.groups.lead}
            squiggleClass="text-mint-deep"
          />
        </Reveal>
        <ul className="mt-3.5 grid grid-cols-3 gap-2">
          {siteData.groups.map((group, index) => {
            const name = group.name[locale];
            return (
              <li key={group.id}>
                <Reveal delay={index * 0.07} className="h-full">
                  <a
                    href={whatsappUrl(t.groups.askMessage(name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.groups.ask}: ${name} (${t.a11y.newTab})`}
                    className="shape-arch block h-full bg-milk p-1.5 pb-2.5 text-center shadow-soft active:scale-[0.98]"
                  >
                    <span
                      className={`shape-arch flex aspect-square items-end justify-center overflow-hidden ${ARCH_BG[index]}`}
                    >
                      <GroupCharacter art={group.art} className="mb-[8%] w-[70%]" />
                    </span>
                    <span className="font-display mt-1.5 block text-[0.95rem] leading-tight font-bold">{name}</span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <ul className="mt-3 flex flex-wrap gap-1.5 text-[0.8rem] font-medium">
          <li className="flex items-center gap-1 rounded-full bg-milk px-2.5 py-1 shadow-soft">
            <GraduationCap className="size-3.5" aria-hidden="true" />
            {t.groups.shared.language}
          </li>
          <li className="flex items-center gap-1 rounded-full bg-milk px-2.5 py-1 shadow-soft">
            <UtensilsCrossed className="size-3.5" aria-hidden="true" />
            {t.groups.shared.meals}
          </li>
          <li className="flex items-center gap-1 rounded-full bg-milk px-2.5 py-1 shadow-soft">
            <Clock className="size-3.5" aria-hidden="true" />
            {siteData.hours}
          </li>
        </ul>
      </div>
    </section>
  );
}
