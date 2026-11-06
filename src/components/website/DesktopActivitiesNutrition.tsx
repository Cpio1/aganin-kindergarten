"use client";

import { accentAt } from "@/components/shared/accents";
import { Cloud } from "@/components/shared/Art";
import { PlateRing } from "@/components/shared/FoodArt";
import { ActivityIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ACTIVITY_IDS, whatsappUrl } from "@/lib/site-data";

export function DesktopActivities() {
  const { t } = useLocale();

  return (
    <section id="activities" className="relative mt-7">
      <span className="cloud-edge absolute inset-x-0 -top-[25px] text-mint-soft" aria-hidden="true" />
      <div className="relative overflow-hidden bg-mint-soft py-11">
        <Cloud className="anim-drift absolute top-9 right-[10%] w-24 text-white" />
        <Cloud className="anim-drift-slow absolute top-20 left-[7%] w-16 text-white" />
        <div className="relative mx-auto max-w-[1180px] px-6">
          <Reveal>
            <SectionHeading
              center
              kicker={t.activities.kicker}
              title={t.activities.title}
              lead={t.activities.lead}
              className="max-w-2xl"
            />
          </Reveal>
          <ul className="mt-7 grid grid-cols-4 gap-4">
            {ACTIVITY_IDS.map((id, index) => (
              <li key={id}>
                <Reveal delay={(index % 4) * 0.07} className="h-full">
                  <article className={`card card-hover group h-full p-4 ${accentAt(index)}`}>
                    <span className={`tile size-14 ${index % 2 ? "tile-alt" : ""}`}>
                      <ActivityIcon id={id} className="size-8" />
                    </span>
                    <h3 className="mt-3.5 text-[1.08rem] leading-tight font-bold">
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
                <div className="flex h-full flex-col justify-between gap-3 rounded-[1.35rem] bg-mint p-4 shadow-soft">
                  <p className="font-display text-[1.08rem] leading-tight font-bold">
                    {t.activities.ctaTitle}
                  </p>
                  <a
                    href={whatsappUrl(t.activities.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ink self-start !min-h-10 !px-3 !text-sm"
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
      <span className="cloud-edge cloud-edge-flip absolute inset-x-0 -bottom-[25px] z-10 text-mint-soft" aria-hidden="true" />
    </section>
  );
}

export function DesktopNutrition() {
  const { t } = useLocale();

  return (
    <section id="nutrition" className="relative overflow-hidden pt-16 pb-12">
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[1fr_0.82fr]">
        <Reveal className="max-w-md">
          <SectionHeading kicker={t.nutrition.kicker} title={t.nutrition.title} lead={t.nutrition.text} />
          <a
            href={whatsappUrl(t.nutrition.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green mt-4"
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
