"use client";

import { useCallback, useState } from "react";
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
