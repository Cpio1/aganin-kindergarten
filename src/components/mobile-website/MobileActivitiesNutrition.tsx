"use client";

import { accentAt } from "@/components/shared/accents";
import { FOOD_ITEMS } from "@/components/shared/FoodArt";
import { ActivityIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ACTIVITY_IDS, whatsappUrl } from "@/lib/site-data";

/** Компактные строки с цветным блоком слева: 7 кружков умещаются без огромных отступов. */
export function MobileActivities() {
  const { t } = useLocale();

  return (
    <section id="activities" className="relative mt-5">
      <span className="cloud-edge absolute inset-x-0 -top-[25px] text-mint-soft" aria-hidden="true" />
      <div className="bg-mint-soft py-5">
        <div className="mx-auto max-w-2xl px-4">
          <Reveal>
            <SectionHeading kicker={t.activities.kicker} title={t.activities.title} lead={t.activities.lead} />
          </Reveal>
          <ul className="mt-3.5 grid gap-2 sm:grid-cols-2">
            {ACTIVITY_IDS.map((id, index) => (
              <li key={id} className="sm:last:col-span-2">
                <Reveal delay={Math.min(index, 3) * 0.04} y={10} className="h-full">
                  <article className={`card flex h-full items-stretch overflow-hidden ${accentAt(index)}`}>
                    <span className="flex w-14 shrink-0 items-center justify-center bg-(--accent)">
                      <ActivityIcon id={id} className="size-7" />
                    </span>
                    <div className="min-w-0 px-3 py-2">
                      <h3 className="text-[0.98rem] leading-tight font-bold">{t.activities.items[id].name}</h3>
                      <p className="mt-0.5 text-[0.82rem] leading-snug text-ink-soft">
                        {t.activities.items[id].text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(t.activities.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink mt-3 w-full"
          >
            <WhatsAppIcon className="size-5" />
            {t.activities.cta}
          </a>
        </div>
      </div>
      <span className="cloud-edge cloud-edge-flip absolute inset-x-0 -bottom-[25px] z-10 text-mint-soft" aria-hidden="true" />
    </section>
  );
}

const FOOD_BG = ["bg-pink-soft", "bg-yellow-soft", "bg-blue-soft", "bg-green-soft", "bg-mint-soft"];
const FOOD_OFFSET = ["mt-2", "mt-0", "mt-3", "mt-0", "mt-2"];

export function MobileNutrition() {
  const { t } = useLocale();

  return (
    <section id="nutrition" className="mx-auto max-w-2xl px-4 pt-11 pb-6">
      <Reveal>
        <SectionHeading kicker={t.nutrition.kicker} title={t.nutrition.title} lead={t.nutrition.text} />
      </Reveal>
      <Reveal className="mx-auto mt-3 flex max-w-md items-start justify-between gap-1.5">
        {FOOD_ITEMS.map((Food, index) => (
          <span
            key={index}
            className={`flex aspect-square min-w-0 flex-1 items-center justify-center rounded-2xl p-2 ${FOOD_BG[index]} ${FOOD_OFFSET[index]}`}
          >
            <Food className="size-full" />
          </span>
        ))}
      </Reveal>
      <a
        href={whatsappUrl(t.nutrition.ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-green mt-4 w-full"
      >
        <WhatsAppIcon className="size-5" />
        {t.nutrition.cta}
      </a>
    </section>
  );
}
