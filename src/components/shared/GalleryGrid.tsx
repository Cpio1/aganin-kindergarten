"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import type { SitePhoto } from "@/lib/media";
import { siteData } from "@/lib/site-data";
import { InstagramIcon } from "./Icons";
import { Lightbox } from "./Lightbox";
import { useLocale } from "./LocaleProvider";
import { Reveal } from "./Reveal";
import { useGallery, useMasonry } from "./useGallery";

const SHAPES = ["shape-a", "shape-b", "shape-d", "shape-c"];

/** Сетка галереи. Число колонок задают версии сайта: это единственное различие в поведении. */
export function GalleryGrid({
  images,
  columns,
  sizes,
  gapClass,
}: {
  images: SitePhoto[];
  columns: number;
  sizes: string;
  gapClass: string;
}) {
  const { t } = useLocale();
  const gallery = useGallery(images);
  const masonry = useMasonry(gallery.visible, columns);

  if (images.length === 0) {
    return (
      <Reveal className="shape-c mx-auto flex max-w-xl flex-col items-center gap-3 bg-milk p-6 text-center shadow-soft">
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
      <div className={`flex items-start ${gapClass}`}>
        {masonry.map((column, columnIndex) => (
          <div key={columnIndex} className={`flex min-w-0 flex-1 flex-col ${gapClass}`}>
            {column.map(({ photo, index }) => (
              <Reveal key={photo.src} delay={(index % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => gallery.open(index)}
                  aria-label={t.a11y.enlarge(index + 1)}
                  className={`group ${SHAPES[index % SHAPES.length]} block w-full cursor-zoom-in overflow-hidden bg-mint-soft shadow-soft`}
                >
                  <Image
                    src={photo.src}
                    alt={t.gallery.alt(index + 1)}
                    width={photo.width}
                    height={photo.height}
                    sizes={sizes}
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-500 ease-gentle group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        ))}
      </div>

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
