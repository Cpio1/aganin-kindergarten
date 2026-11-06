import type { GroupArt } from "@/lib/site-data";

type ArtProps = { className?: string };

/* Вся графика декоративная: скрыта от скринридеров и нарисована вручную в стиле бумажной аппликации. */
const decorative = { "aria-hidden": true, focusable: false } as const;

export function Star({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1.8c.9 0 1.6.5 2 1.3l2.2 4.6 5 .7c1.9.3 2.6 2.6 1.3 3.9l-3.7 3.5.9 5c.3 1.9-1.7 3.3-3.4 2.4L12 20.8l-4.4 2.4c-1.7.9-3.7-.5-3.4-2.4l.9-5-3.7-3.5C.1 11.4.8 9.1 2.700 8.800l5-.7L10 3.100c.4-.8 1.100-1.300 2-1.300Z" />
    </svg>
  );
}

export function Cloud({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 120 70" fill="currentColor" className={className}>
      <path d="M28 68C13 68 2 58 2 45c0-12 10-22 23-22 2 0 4 0 6 1C35 11 47 2 61 2c16 0 29 11 32 25 14 0 25 9 25 21 0 11-10 20-23 20Z" />
    </svg>
  );
}

export function Sun({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 100 100" className={className}>
      <g stroke="#FFCF52" strokeWidth="6" strokeLinecap="round">
        <path d="M50 5v11M50 84v11M5 50h11M84 50h11M18 18l8 8M74 74l8 8M18 82l8-8M74 26l8-8" />
      </g>
      <circle cx="50" cy="50" r="26" fill="#FFE28A" />
    </svg>
  );
}

export function Squiggle({ className }: ArtProps) {
  return (
    <svg
      {...decorative}
      viewBox="0 0 120 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      preserveAspectRatio="none"
      className={className}
    >
      <path d="M3 8c10-7 18-7 28 0s18 7 28 0 18-7 28 0 18 7 30 0" />
    </svg>
  );
}

/** Сцена первого экрана: показывается, пока не загружена фотография main-page. */
export function HeroScene({ className }: ArtProps) {
  return (
    <svg
      {...decorative}
      viewBox="0 0 560 520"
      preserveAspectRatio="xMidYMax slice"
      className={className}
    >
      <rect width="560" height="520" fill="#E0F8EE" />
      <g className="anim-twinkle">
        <circle cx="430" cy="118" r="74" fill="#FFE28A" />
      </g>
      <circle cx="430" cy="118" r="50" fill="#FFCF52" />
      <path fill="#fff" d="M84 140c-16 0-28-10-28-24s12-24 27-24c5-15 19-26 36-26 19 0 34 13 37 30 15 0 27 10 27 22s-11 22-25 22Z" />
      <path fill="#fff" d="M306 214c-11 0-19-7-19-16s8-16 18-16c4-10 13-17 24-17 13 0 23 9 25 20 10 0 18 6 18 14s-8 15-17 15Z" />
      <g className="anim-sway">
        <path fill="#FFB69E" d="m228 62 48 22-31 50-44-36Z" />
        <path fill="#FF9676" d="m228 62 17 72 31-50Z" />
        <path fill="none" stroke="#283C46" strokeWidth="2.500" strokeLinecap="round" d="M245 134c-8 30 22 46 6 80s-30 42-26 76" />
      </g>
      <path fill="#A8E6CF" d="M0 372c86-62 196-72 300-34 94 34 180 24 260-26v208H0Z" />
      <g>
        <path fill="#FFB69E" d="M212 268h184v142H212Z" />
        <path fill="#283C46" d="M196 272c0-5 2-8 6-11l92-66c6-4 14-4 20 0l92 66c4 3 6 6 6 11 0 8-6 12-13 12H209c-7 0-13-4-13-12Z" />
        <path fill="#FFE28A" d="M242 322c0-14 10-24 22-24s22 10 22 24v22h-44ZM322 322c0-14 10-24 22-24s22 10 22 24v22h-44Z" />
        <path fill="#FFFDF6" d="M282 410v-34c0-13 9-22 22-22s22 9 22 22v34Z" />
        <path stroke="#283C46" strokeWidth="4" d="M304 196v-52" />
        <path fill="#FFE28A" d="M306 144h40l-11 13 11 13h-40Z" />
        <path fill="#FFCF52" d="M304 234a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
      </g>
      <path fill="#283C46" d="M116 372h10v60h-10z" />
      <circle cx="121" cy="344" r="42" fill="#74D2B0" />
      <circle cx="104" cy="360" r="24" fill="#A8E6CF" />
      <path fill="#283C46" d="M457 356h9v62h-9z" />
      <circle cx="462" cy="330" r="36" fill="#FFB69E" />
      <circle cx="476" cy="344" r="19" fill="#FFE8DF" />
      <path fill="#74D2B0" d="M0 438c104-40 214-40 312-8 90 30 170 24 248-10v100H0Z" />
      <path fill="#FFE28A" d="M0 486c120-26 244-22 344-4 84 14 150 10 216-8v46H0Z" />
      <g fill="#FFFDF6">
        <circle cx="62" cy="460" r="5" />
        <circle cx="500" cy="452" r="5" />
        <circle cx="384" cy="464" r="4" />
        <circle cx="176" cy="448" r="4" />
      </g>
    </svg>
  );
}

/** Композиция из кубиков, пока нет файла main-page2. */
export function BlocksScene({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 480 400" preserveAspectRatio="xMidYMax slice" className={className}>
      <rect width="480" height="400" fill="#FFF5D1" />
      <circle cx="378" cy="88" r="58" fill="#FFE28A" />
      <path fill="#fff" d="M92 124c-13 0-23-9-23-20s10-20 22-20c4-13 16-22 30-22 16 0 29 11 31 25 13 0 23 8 23 18s-10 19-21 19Z" />
      <path fill="#A8E6CF" d="M0 318c90-44 190-48 280-20 80 24 140 20 200-8v110H0Z" />
      <g>
        <rect x="104" y="232" width="84" height="84" rx="16" fill="#FFB69E" />
        <rect x="196" y="232" width="84" height="84" rx="16" fill="#74D2B0" />
        <rect x="288" y="232" width="84" height="84" rx="16" fill="#FFCF52" />
        <rect x="150" y="140" width="84" height="84" rx="16" fill="#FFE28A" />
        <rect x="242" y="140" width="84" height="84" rx="16" fill="#FF9676" />
        <rect x="196" y="48" width="84" height="84" rx="16" fill="#A8E6CF" />
      </g>
      <g fill="#283C46" fontFamily="var(--font-rubik), sans-serif" fontWeight="700" fontSize="44" textAnchor="middle">
        <text x="146" y="290">Ә</text>
        <text x="238" y="290">Қ</text>
        <text x="330" y="290">Ө</text>
        <text x="192" y="198">Ғ</text>
        <text x="284" y="198">Ң</text>
        <text x="238" y="106">Ү</text>
      </g>
      <path fill="#74D2B0" d="M0 366c120-26 260-22 360-6 50 8 88 6 120-2v42H0Z" />
    </svg>
  );
}

/** Герои-окошки групп. Рисунок не привязан к названию и возрасту группы. */
export function GroupCharacter({ art, className }: { art: GroupArt } & ArtProps) {
  const face = (
    <g>
      <circle cx="50" cy="56" r="3.600" fill="#283C46" />
      <circle cx="70" cy="56" r="3.600" fill="#283C46" />
      <path d="M52 66c4 5 12 5 16 0" fill="none" stroke="#283C46" strokeWidth="3" strokeLinecap="round" />
      <circle cx="42" cy="65" r="4.500" fill="#FF9676" opacity=".6" />
      <circle cx="78" cy="65" r="4.500" fill="#FF9676" opacity=".6" />
    </g>
  );
  return (
    <svg {...decorative} viewBox="0 0 120 110" className={className}>
      {art === "cloud" && (
        <path fill="#FFFDF6" d="M30 92C15 92 5 82 5 69c0-12 10-22 23-22h3c3-16 16-27 32-27 17 0 30 12 33 27 12 1 21 11 21 22 0 13-10 23-24 23Z" />
      )}
      {art === "star" && (
        <path fill="#FFCF52" d="M60 6c3 0 5 2 6 4l12 25 27 4c6 1 8 8 4 12L89 70l5 27c1 6-5 11-11 8l-23-13-23 13c-6 3-12-2-11-8l5-27L11 51c-4-4-2-11 4-12l27-4 12-25c1-2 3-4 6-4Z" />
      )}
      {art === "sun" && (
        <g>
          <g stroke="#FF9676" strokeWidth="6" strokeLinecap="round">
            <path d="M60 4v10M60 98v8M10 56h10M100 56h10M25 21l7 7M88 84l7 7M25 91l7-7M88 28l7-7" />
          </g>
          <circle cx="60" cy="56" r="32" fill="#FFB69E" />
        </g>
      )}
      {face}
    </svg>
  );
}

export function DocumentsArt({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 140 130" className={className}>
      <rect x="40" y="10" width="76" height="102" rx="12" fill="#FFE28A" transform="rotate(8 78 61)" />
      <rect x="26" y="16" width="78" height="104" rx="12" fill="#FFFDF6" transform="rotate(-5 65 68)" />
      <g stroke="#283C46" strokeWidth="5" strokeLinecap="round" transform="rotate(-5 65 68)">
        <path d="M42 42h46M42 60h46M42 78h28" />
      </g>
      <circle cx="96" cy="100" r="19" fill="#A8E6CF" />
      <path d="m88 100 6 6 10-12" fill="none" stroke="#283C46" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FooterHills({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 1440 90" preserveAspectRatio="none" className={className}>
      <path fill="#A8E6CF" d="M0 62c180-52 400-62 640-28s520 36 800-18v74H0Z" />
      <path fill="#283C46" d="M0 78c220-38 460-40 700-18s500 26 740-16v46H0Z" />
    </svg>
  );
}
