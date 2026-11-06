"use client";

import { Cloud, Star } from "@/components/shared/Art";
import { PlateRing } from "@/components/shared/FoodArt";
import { ActivityIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ACTIVITY_IDS, whatsappUrl } from "@/lib/site-data";

const ICON_BG = ["bg-sun", "bg-peach", "bg-mint", "bg-sun-soft", "bg-peach-soft", "bg-mint-soft", "bg-sun"];
const SHAPES = ["shape-a", "shape-b", "shape-d", "shape-c"];

export function DesktopActivities() {
  const { t } = useLocale();

  return (
    <section id="activities" className="relative mt-7">
      <span className="cloud-edge absolute inset-x-0 -top-[25px] text-mint" aria-hidden="true" />
      <div className="relative overflow-hidden bg-mint py-11">
        <Star className="anim-twinkle absolute top-10 left-[8%] size-6 text-milk" />
        <Cloud className="anim-drift absolute top-9 right-[10%] w-24 text-mint-soft" />
        <div className="relative mx-auto max-w-[1180px] px-6">
          <Reveal>
            <SectionHeading
              center
              kicker={t.activities.kicker}
              title={t.activities.title}
              lead={t.activities.lead}
              squiggleClass="text-milk"
              className="max-w-2xl [&_p]:text-ink"
            />
          </Reveal>
          <ul className="mt-6 grid grid-cols-4 gap-3.5">
            {ACTIVITY_IDS.map((id, index) => (
              <li key={id}>
                <Reveal delay={(index % 4) * 0.07} className="h-full">
                  <article
                    className={`group ${SHAPES[index % SHAPES.length]} h-full bg-milk p-4 shadow-soft transition-transform duration-300 ease-gentle hover:-translate-y-1`}
                  >
                    <span
                      className={`shape-pebble flex size-13 items-center justify-center ${ICON_BG[index]} transition-transform duration-300 ease-gentle group-hover:-rotate-6`}
                    >
                      <ActivityIcon id={id} className="size-7.5" />
                    </span>
                    <h3 className="mt-2.5 text-[1.06rem] leading-tight font-bold">
                      {t.activities.items[id].name}
                    </h3>
                    <p className="mt-1 text-[0.88rem] leading-snug text-ink-soft">
                      {t.activities.items[id].text}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delay={0.21} className="h-full">
                <div className="shape-c flex h-full flex-col justify-between gap-3 bg-ink p-4 text-milk shadow-soft">
                  <p className="font-display text-[1.06rem] leading-tight font-semibold">
                    {t.activities.ctaTitle}
                  </p>
                  <a
                    href={whatsappUrl(t.activities.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sun self-start !min-h-10 !px-3 !text-sm"
                  >
                    <WhatsAppIcon className="size-4.5" />
                    {t.activities.cta}
                  </a>
                </div>
              </Reveal>
            </li>
          </ul>
        </div>
      </div>
      <span className="cloud-edge cloud-edge-flip absolute inset-x-0 -bottom-[25px] z-10 text-mint" aria-hidden="true" />
    </section>
  );
}

export function DesktopNutrition() {
  const { t } = useLocale();

  return (
    <section id="nutrition" className="relative overflow-hidden pt-16 pb-12">
      <div className="absolute top-14 -right-24 size-[26rem] rounded-full bg-sun-soft" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[1fr_0.82fr]">
        <Reveal className="max-w-md">
          <SectionHeading kicker={t.nutrition.kicker} title={t.nutrition.title} lead={t.nutrition.text} />
          <a
            href={whatsappUrl(t.nutrition.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-mint mt-4"
          >
            <WhatsAppIcon className="size-5" />
            {t.nutrition.cta}
          </a>
        </Reveal>
        <Reveal>
          <PlateRing className="mx-auto w-full max-w-[22rem]" />
        </Reveal>
      </div>
    </section>
  );
}
