import Image from "next/image";
import type { SiteLogo } from "@/lib/media";
import { Star } from "./Art";

/**
 * Настоящий логотип с сохранёнными пропорциями. Пока файла нет, показывается
 * текстовое название: это типографика, а не выдуманный логотип.
 */
export function Logo({
  logo,
  heightClass = "h-10",
  sizes = "160px",
  priority = false,
  light = false,
}: {
  logo: SiteLogo | null;
  heightClass?: string;
  sizes?: string;
  priority?: boolean;
  /** Светлый текст названия для тёмного фона. */
  light?: boolean;
}) {
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt="AGANIN KIDS"
        width={logo.width}
        height={logo.height}
        sizes={sizes}
        priority={priority}
        unoptimized={logo.isVector}
        className={`${heightClass} w-auto max-w-full object-contain`}
      />
    );
  }

  return (
    <span
      className={`font-display inline-flex items-center gap-1.5 text-lg leading-none font-bold tracking-tight whitespace-nowrap ${
        light ? "text-milk" : "text-ink"
      }`}
    >
      <Star className="size-5 shrink-0 text-sun-deep" />
      AGANIN <span className={light ? "text-mint" : "rounded-md bg-mint px-1 py-0.5"}>KIDS</span>
    </span>
  );
}
