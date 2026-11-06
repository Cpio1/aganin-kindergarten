"use client";

import { Clock, GraduationCap, MessageCircle, UtensilsCrossed } from "lucide-react";
import { AboutMedia } from "@/components/shared/AboutMedia";
import { Cloud, GroupCharacter, Star } from "@/components/shared/Art";
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
    <Reveal delay={delay} className={`transition-transform duration-300 ease-gentle hover:-translate-y-1 ${className}`}>
      <p className="flex h-full flex-col justify-center p-4 text-[0.92rem] leading-snug font-medium">
        {stat.before && <span>{stat.before}</span>}
        <span className={`font-display ${valueClass} leading-[1.1] font-bold`}>{stat.value}</span>
        {stat.after && <span>{stat.after}</span>}
      </p>
    </Reveal>
  );
}

export function DesktopAbout({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const { cards } = t.about;

  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[0.82fr_1fr]">
        <Reveal className="relative">
          <div className="absolute -inset-3 -z-10 rotate-[-3deg] shape-c bg-peach-soft" aria-hidden="true" />
          <AboutMedia
            media={media.about}
            sizes="(min-width: 1180px) 500px, 42vw"
            className="shape-c"
          />
          <Star className="anim-twinkle absolute -top-3 -right-2 size-8 text-sun-deep" />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading kicker={t.about.kicker} title={t.about.title} lead={t.about.lead} />
          </Reveal>
          <div className="mt-5 grid grid-cols-6 gap-3">
            <StatCard stat={cards.groups} delay={0} className="shape-a col-span-2 bg-mint" />
            <StatCard stat={cards.age} delay={0.06} className="shape-b col-span-2 bg-sun" />
            <StatCard stat={cards.meals} delay={0.12} className="shape-d col-span-2 bg-peach" />
            <StatCard
              stat={cards.language}
              delay={0.18}
              valueClass="text-[1.3rem]"
              className="shape-b col-span-3 bg-mint-soft"
            />
            <StatCard stat={cards.clubs} delay={0.24} className="shape-a col-span-3 bg-sun-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}

const ARCH_BG = ["bg-mint", "bg-sun", "bg-peach-soft"];
const ARCH_OFFSET = ["", "mt-7", "mt-2"];

export function DesktopGroups() {
  const { t, locale } = useLocale();

  return (
    <section id="groups" className="relative overflow-hidden bg-mint-soft/60 py-12">
      <Cloud className="anim-drift-slow absolute top-5 left-[38%] w-24 text-milk" />
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[0.72fr_1fr]">
        <Reveal>
          <SectionHeading
            kicker={t.groups.kicker}
            title={t.groups.title}
            lead={t.groups.lead}
            squiggleClass="text-mint-deep"
          />
          <p className="font-display mt-4 text-sm font-semibold">{t.groups.sharedTitle}:</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm font-medium">
            <li className="flex items-center gap-1.5 rounded-full bg-milk px-3 py-1.5 shadow-soft">
              <GraduationCap className="size-4" aria-hidden="true" />
              {t.groups.shared.language}
            </li>
            <li className="flex items-center gap-1.5 rounded-full bg-milk px-3 py-1.5 shadow-soft">
              <UtensilsCrossed className="size-4" aria-hidden="true" />
              {t.groups.shared.meals}
            </li>
            <li className="flex items-center gap-1.5 rounded-full bg-milk px-3 py-1.5 shadow-soft">
              <Clock className="size-4" aria-hidden="true" />
              {siteData.hours}
            </li>
          </ul>
        </Reveal>

        <ul className="grid grid-cols-3 gap-4 pb-6">
          {siteData.groups.map((group, index) => {
            const name = group.name[locale];
            return (
              <li key={group.id} className={ARCH_OFFSET[index]}>
                <Reveal delay={index * 0.08}>
                  <article className="shape-arch group bg-milk p-2.5 shadow-soft transition-transform duration-300 ease-gentle hover:-translate-y-1.5">
                    <div
                      className={`shape-arch flex aspect-[1/1.05] items-end justify-center overflow-hidden ${ARCH_BG[index]}`}
                    >
                      <GroupCharacter
                        art={group.art}
                        className="mb-[10%] w-[66%] transition-transform duration-500 ease-gentle group-hover:scale-105 group-hover:-rotate-3"
                      />
                    </div>
                    <div className="px-1.5 pt-2.5 pb-1.5 text-center">
                      <h3 className="text-lg leading-tight font-bold">{name}</h3>
                      <a
                        href={whatsappUrl(t.groups.askMessage(name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.groups.ask}: ${name} (${t.a11y.newTab})`}
                        className="mt-1 inline-flex min-h-9 items-center gap-1.5 text-[0.82rem] font-medium underline decoration-mint-deep decoration-2 underline-offset-4 hover:decoration-ink"
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
