"use client";

import { useCallback, useMemo, useState } from "react";
import type { SitePhoto } from "@/lib/media";

export const GALLERY_PREVIEW_COUNT = 6;

export function useGallery(images: SitePhoto[]) {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const total = images.length;
  const step = useCallback(
    (delta: number) =>
      setActiveIndex((index) => (index === null ? index : (index + delta + total) % total)),
    [total],
  );

  return {
    visible: expanded ? images : images.slice(0, GALLERY_PREVIEW_COUNT),
    hasMore: total > GALLERY_PREVIEW_COUNT,
    expanded,
    toggleExpanded: () => setExpanded((value) => !value),
    activeIndex,
    open: setActiveIndex,
    close: useCallback(() => setActiveIndex(null), []),
    step,
  };
}

export type IndexedPhoto = { photo: SitePhoto; index: number };

/**
 * Раскладка по колонкам: каждый снимок идёт в самую короткую колонку и показывается
 * в своих пропорциях, без обрезки. Первые фото не сдвигаются при раскрытии галереи.
 */
export function useMasonry(photos: SitePhoto[], columns: number): IndexedPhoto[][] {
  return useMemo(() => {
    const result: IndexedPhoto[][] = Array.from({ length: columns }, () => []);
    const heights = new Array<number>(columns).fill(0);
    photos.forEach((photo, index) => {
      const target = heights.indexOf(Math.min(...heights));
      result[target].push({ photo, index });
      heights[target] += photo.height / photo.width;
    });
    return result;
  }, [photos, columns]);
}
