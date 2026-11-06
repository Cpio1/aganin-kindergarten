"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { m } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent, type TouchEvent } from "react";
import type { SitePhoto } from "@/lib/media";
import { useLocale } from "./LocaleProvider";

const SWIPE_THRESHOLD = 48;

type LightboxProps = {
  images: SitePhoto[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
};

/**
 * Построен на нативном <dialog>: браузер удерживает фокус внутри, закрывает окно
 * по Escape и возвращает фокус на миниатюру. Фото показывается целиком.
 */
export function Lightbox({ images, index, onClose, onStep }: LightboxProps) {
  const { t } = useLocale();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
      dialog.close();
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") onStep(-1);
    if (event.key === "ArrowRight") onStep(1);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) >= SWIPE_THRESHOLD) onStep(distance < 0 ? 1 : -1);
  };

  const several = images.length > 1;
  const photo = images[index];
  // Соседние фото загружаются заранее, чтобы листание было мгновенным.
  const neighbours = several
    ? [images[(index + 1) % images.length], images[(index - 1 + images.length) % images.length]]
    : [];
  const control =
    "flex size-11 items-center justify-center rounded-full bg-mint text-ink shadow-soft transition-transform hover:scale-105";

  return (
    <dialog
      ref={dialogRef}
      className="sheet"
      aria-label={t.gallery.title}
      onClose={onClose}
      onKeyDown={handleKeyDown}
    >
      <div className="flex h-full flex-col gap-3 p-3 lg:p-5">
        <div className="flex items-center justify-between">
          <p className="font-display pl-2 text-sm font-semibold" aria-live="polite">
            {t.a11y.photoCounter(index + 1, images.length)}
          </p>
          <button type="button" onClick={onClose} aria-label={t.a11y.close} className={control}>
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div
          className="relative min-h-0 flex-1"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <m.div
            key={photo.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={photo.src}
              alt={t.gallery.alt(index + 1)}
              fill
              loading="eager"
              sizes="100vw"
              className="object-contain"
            />
          </m.div>
          {neighbours.map((neighbour) => (
            <Image
              key={`preload-${neighbour.src}`}
              src={neighbour.src}
              alt=""
              aria-hidden="true"
              fill
              loading="eager"
              sizes="100vw"
              className="invisible object-contain"
            />
          ))}
          {several && (
            <>
              <button
                type="button"
                onClick={() => onStep(-1)}
                aria-label={t.a11y.previous}
                className={`${control} absolute top-1/2 left-1 -translate-y-1/2 lg:left-3`}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                aria-label={t.a11y.next}
                className={`${control} absolute top-1/2 right-1 -translate-y-1/2 lg:right-3`}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
