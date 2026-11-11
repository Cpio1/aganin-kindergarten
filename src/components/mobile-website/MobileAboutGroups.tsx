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

function MiniStat({ stat, accent }: { stat: Stat; accent: string }) {
  return (
    <Reveal>
      <p
        className={`card-soft flex h-full flex-col justify-center px-3 py-2.5 text-[0.82rem] leading-tight font-medium ${accent}`}
      >
        {stat.before && <span>{stat.before}</span>}
        <span className="font-display text-[1.85rem] leading-[1.1] font-extrabold">{stat.value}</span>
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
        <MiniStat stat={cards.groups} accent="accent-green" />
        <MiniStat stat={cards.age} accent="accent-yellow" />
        <MiniStat stat={cards.meals} accent="accent-blue" />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Reveal>
          <p className="card-soft accent-pink flex h-full flex-col justify-center px-3 py-2.5 text-[0.82rem] leading-tight font-medium">
            {cards.language.before && <span>{cards.language.before}</span>}
            <span className="font-display text-[1.02rem] leading-tight font-bold">{cards.language.value}</span>
            {cards.language.after && <span>{cards.language.after}</span>}
          </p>
        </Reveal>
        <MiniStat stat={cards.clubs} accent="accent-mint" />
      </div>
      <Reveal className="mx-auto mt-4 mr-1.5 mb-1.5 sm:mx-auto sm:max-w-md">
        <AboutMedia media={media.about} sizes="(min-width: 640px) 448px, 100vw" className="photo-frame-sm" />
      </Reveal>
    </section>
  );
}

const GROUP_STYLE = [
  { accent: "accent-blue", window: "bg-blue" },
  { accent: "accent-pink", window: "bg-pink-soft" },
  { accent: "accent-yellow", window: "bg-yellow-soft" },
];

/** Три маленькие карточки в ряд: вся группа умещается на одном экране без прокрутки вбок. */
export function MobileGroups() {
  const { t, locale } = useLocale();

  return (
    <section id="groups" className="bg-paper py-6">
      <div className="mx-auto max-w-2xl px-4">
        <Reveal>
          <SectionHeading
            kicker={t.groups.kicker}
            title={t.groups.title}
            lead={t.groups.lead}
          />
        </Reveal>
        <ul className="mt-3.5 grid grid-cols-3 gap-2">
          {siteData.groups.map((group, index) => {
            const name = group.name[locale];
            const style = GROUP_STYLE[index % GROUP_STYLE.length];
            return (
              <li key={group.id}>
                <Reveal delay={index * 0.07} className="h-full">
                  <a
                    href={whatsappUrl(t.groups.askMessage(name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.groups.ask}: ${name} (${t.a11y.newTab})`}
                    className={`card block h-full !rounded-2xl p-1.5 pb-2.5 text-center active:scale-[0.98] ${style.accent}`}
                  >
                    <span
                      className={`flex aspect-square items-center justify-center overflow-hidden rounded-xl ${style.window}`}
                    >
                      <GroupCharacter art={group.art} className="w-[70%]" />
                    </span>
                    <span className="font-display mt-1.5 block text-[0.95rem] leading-tight font-bold">{name}</span>
                    <span className="mt-0.5 block text-[0.75rem] leading-tight text-ink/70">{group.age[locale]}</span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <ul className="mt-3 flex flex-wrap gap-1.5 text-[0.8rem] font-medium">
          <li className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-ink/8">
            <GraduationCap className="size-3.5" aria-hidden="true" />
            {t.groups.shared.language}
          </li>
          <li className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-ink/8">
            <UtensilsCrossed className="size-3.5" aria-hidden="true" />
            {t.groups.shared.meals}
          </li>
          <li className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-ink/8">
            <Clock className="size-3.5" aria-hidden="true" />
            {siteData.hours}
          </li>
        </ul>
      </div>
    </section>
  );
}
