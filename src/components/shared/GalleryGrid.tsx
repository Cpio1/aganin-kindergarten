"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import type { SitePhoto } from "@/lib/media";
import { siteData } from "@/lib/site-data";
import { InstagramIcon } from "./Icons";
import { Lightbox } from "./Lightbox";
import { useLocale } from "./LocaleProvider";
import { Reveal } from "./Reveal";
import { useGallery } from "./useGallery";

/**
 * Сетка галереи. Раскладку задают версии сайта. Карточки одной высоты показывают снимок
 * без растягивания (object-cover), а при увеличении он виден целиком.
 */
export function GalleryGrid({
  images,
  gridClass,
  sizes,
}: {
  images: SitePhoto[];
  gridClass: string;
  sizes: string;
}) {
  const { t } = useLocale();
  const gallery = useGallery(images);

  if (images.length === 0) {
    return (
      <Reveal className="card accent-blue mx-auto flex max-w-xl flex-col items-center gap-3 p-6 text-center">
        <p className="text-ink-soft">{t.gallery.empty}</p>
        <a
          href={siteData.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.gallery.emptyCta} (${t.a11y.newTab})`}
          className="btn btn-mint"
        >
          <InstagramIcon className="size-5" />
          {t.gallery.emptyCta}
        </a>
      </Reveal>
    );
  }

  return (
    <>
      <ul className={`grid ${gridClass}`}>
        {gallery.visible.map((photo, index) => (
          <li key={photo.src}>
            <Reveal delay={(index % 3) * 0.06}>
              <button
                type="button"
                onClick={() => gallery.open(index)}
                aria-label={t.a11y.enlarge(index + 1)}
                className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-[1.25rem] bg-paper shadow-soft transition-[transform,box-shadow] duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift lg:aspect-[5/4]"
              >
                <Image
                  src={photo.src}
                  alt={t.gallery.alt(index + 1)}
                  fill
                  sizes={sizes}
                  loading="lazy"
                  className="object-cover transition-transform duration-500 ease-gentle group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {gallery.hasMore && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={gallery.toggleExpanded}
            aria-expanded={gallery.expanded}
            className="btn btn-ink"
          >
            {gallery.expanded ? t.gallery.showLess : t.gallery.showAll}
            {gallery.expanded ? (
              <ChevronUp className="size-4.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="size-4.5" aria-hidden="true" />
            )}
          </button>
        </div>
      )}

      {gallery.activeIndex !== null && (
        <Lightbox
          images={images}
          index={gallery.activeIndex}
          onClose={gallery.close}
          onStep={gallery.step}
        />
      )}
    </>
  );
}
