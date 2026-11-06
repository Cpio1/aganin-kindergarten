import Image from "next/image";
import type { SiteLogo } from "@/lib/media";

const WORDMARK_TILES = [
  { letter: "K", color: "bg-green", tilt: "-rotate-6" },
  { letter: "I", color: "bg-yellow", tilt: "rotate-3" },
  { letter: "D", color: "bg-blue", tilt: "-rotate-3" },
  { letter: "S", color: "bg-pink", tilt: "rotate-6" },
];

/**
 * Настоящий логотип с сохранёнными пропорциями. Пока файла нет, показывается
 * временное название текстом в той же цветовой логике.
 */
export function Logo({
  logo,
  heightClass = "h-10",
  sizes = "160px",
  priority = false,
  large = false,
}: {
  logo: SiteLogo | null;
  heightClass?: string;
  sizes?: string;
  priority?: boolean;
  /** Крупное текстовое название для первого экрана. */
  large?: boolean;
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
      role="img"
      aria-label="AGANIN KIDS"
      className={`font-display inline-flex items-center font-extrabold whitespace-nowrap text-ink ${
        large ? "gap-2.5 text-[2rem] leading-none" : "gap-1.5 text-[1.1rem] leading-none"
      }`}
    >
      <span className="brand-title tracking-tight">AGANIN</span>
      <span className="inline-flex gap-[0.1em]">
        {WORDMARK_TILES.map(({ letter, color, tilt }) => (
          <span
            key={letter}
            className={`inline-flex size-[1.2em] items-center justify-center rounded-[0.28em] text-[0.8em] ${color} ${tilt}`}
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}
