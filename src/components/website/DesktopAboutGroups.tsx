"use client";

import { Clock, GraduationCap, MessageCircle, UtensilsCrossed } from "lucide-react";
import { AboutMedia } from "@/components/shared/AboutMedia";
import { GroupCharacter } from "@/components/shared/Art";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

type Stat = { before?: string; value: string; after?: string };

function StatCard({
  stat,
  className,
  valueClass = "text-[2.6rem]",
  delay,
}: {
  stat: Stat;
  className: string;
  valueClass?: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="card card-hover h-full">
        <span className="absolute top-3 right-3 size-3.5 rotate-12 rounded-[4px] bg-(--accent)" aria-hidden="true" />
        <p className="flex h-full flex-col justify-center p-4 text-[0.92rem] leading-snug font-medium">
          {stat.before && <span>{stat.before}</span>}
          <span className={`font-display ${valueClass} leading-[1.1] font-extrabold`}>{stat.value}</span>
          {stat.after && <span>{stat.after}</span>}
        </p>
      </div>
    </Reveal>
  );
}

export function DesktopAbout({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { cards } = t.about;

  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-[0.82fr_1fr]">
        <Reveal className="relative mr-2.5 mb-2.5">
          <AboutMedia
            media={media.about}
            sizes="(min-width: 1180px) 500px, 42vw"
            className="photo-frame"
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading kicker={t.about.kicker} title={t.about.title} lead={t.about.lead} />
          </Reveal>
          <div className="mt-5 grid grid-cols-6 gap-3">
            <StatCard stat={cards.groups} delay={0} className="accent-green col-span-2" />
            <StatCard stat={cards.age} delay={0.06} className="accent-yellow col-span-2" />
            <StatCard stat={cards.meals} delay={0.12} className="accent-blue col-span-2" />
            <StatCard
              stat={cards.language}
              delay={0.18}
              valueClass="text-[1.3rem]"
              className="accent-pink col-span-3"
            />
            <StatCard stat={cards.clubs} delay={0.24} className="accent-mint col-span-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

const GROUP_STYLE = [
  { accent: "accent-blue", window: "bg-blue" },
  { accent: "accent-pink", window: "bg-pink-soft" },
  { accent: "accent-yellow", window: "bg-yellow-soft" },
];
const SHARED_CHIP = "flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-ink/8";

export function DesktopGroups() {
  const { t, locale } = useLocale();

  return (
    <section id="groups" className="relative bg-paper py-12">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[0.72fr_1fr]">
        <Reveal>
          <SectionHeading kicker={t.groups.kicker} title={t.groups.title} lead={t.groups.lead} />
          <p className="font-display mt-4 text-sm font-semibold">{t.groups.sharedTitle}:</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm font-medium">
            <li className={SHARED_CHIP}>
              <GraduationCap className="size-4" aria-hidden="true" />
              {t.groups.shared.language}
            </li>
            <li className={SHARED_CHIP}>
              <UtensilsCrossed className="size-4" aria-hidden="true" />
              {t.groups.shared.meals}
            </li>
            <li className={SHARED_CHIP}>
              <Clock className="size-4" aria-hidden="true" />
              {siteData.hours}
            </li>
          </ul>
        </Reveal>

        <ul className="grid grid-cols-3 gap-4">
          {siteData.groups.map((group, index) => {
            const name = group.name[locale];
            const style = GROUP_STYLE[index % GROUP_STYLE.length];
            return (
              <li key={group.id}>
                <Reveal delay={index * 0.08} className="h-full">
                  <article className={`card card-hover group h-full p-2.5 ${style.accent}`}>
                    <div
                      className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl ${style.window}`}
                    >
                      <GroupCharacter
                        art={group.art}
                        className="w-[66%] transition-transform duration-500 ease-gentle group-hover:scale-105 group-hover:-rotate-3"
                      />
                    </div>
                    <div className="px-1.5 pt-2.5 pb-1.5 text-center">
                      <h3 className="text-lg leading-tight font-bold">{name}</h3>
                      <p className="mt-0.5 text-[0.85rem] text-ink/70">{group.age[locale]}</p>
                      <a
                        href={whatsappUrl(t.groups.askMessage(name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.groups.ask}: ${name} (${t.a11y.newTab})`}
                        className="mt-1 inline-flex min-h-9 items-center gap-1.5 text-[0.82rem] font-medium underline decoration-(--accent) decoration-2 underline-offset-4 hover:decoration-ink"
                      >
                        <MessageCircle className="size-3.5 shrink-0" aria-hidden="true" />
                        {t.groups.ask}
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
