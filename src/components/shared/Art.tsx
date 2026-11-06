import type { GroupArt } from "@/lib/site-data";

type ArtProps = { className?: string };

/* Вся графика декоративная: скрыта от скринридеров и нарисована вручную в цветах логотипа. */
const decorative = { "aria-hidden": true, focusable: false } as const;

export function Cloud({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 120 70" fill="currentColor" className={className}>
      <path d="M28 68C13 68 2 58 2 45c0-12 10-22 23-22 2 0 4 0 6 1C35 11 47 2 61 2c16 0 29 11 32 25 14 0 25 9 25 21 0 11-10 20-23 20Z" />
    </svg>
  );
}

/** Четыре цветных блока KIDS: подпись под заголовками разделов. */
export function KidsBar({ className = "" }: ArtProps) {
  return (
    <span aria-hidden="true" className={`flex gap-1 ${className}`}>
      <span className="size-2.5 rotate-6 rounded-[3px] bg-green" />
      <span className="size-2.5 -rotate-6 rounded-[3px] bg-yellow" />
      <span className="size-2.5 rotate-3 rounded-[3px] bg-blue" />
      <span className="size-2.5 -rotate-3 rounded-[3px] bg-pink" />
    </span>
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
      <rect width="560" height="520" fill="#E8FBFB" />
      <g className="anim-twinkle">
        <circle cx="430" cy="118" r="74" fill="#F6C445" />
      </g>
      <circle cx="430" cy="118" r="50" fill="#F2B51F" />
      <path fill="#fff" d="M84 140c-16 0-28-10-28-24s12-24 27-24c5-15 19-26 36-26 19 0 34 13 37 30 15 0 27 10 27 22s-11 22-25 22Z" />
      <path fill="#fff" d="M306 214c-11 0-19-7-19-16s8-16 18-16c4-10 13-17 24-17 13 0 23 9 25 20 10 0 18 6 18 14s-8 15-17 15Z" />
      <g className="anim-sway">
        <path fill="#F9A8DA" d="m228 62 48 22-31 50-44-36Z" />
        <path fill="#F47CC3" d="m228 62 17 72 31-50Z" />
        <path fill="none" stroke="#111111" strokeWidth="2.500" strokeLinecap="round" d="M245 134c-8 30 22 46 6 80s-30 42-26 76" />
      </g>
      <path fill="#BDF3F3" d="M0 372c86-62 196-72 300-34 94 34 180 24 260-26v208H0Z" />
      <g>
        <path fill="#FDEAF6" d="M212 268h184v142H212Z" />
        <path fill="#8DB4FF" d="M196 272c0-5 2-8 6-11l92-66c6-4 14-4 20 0l92 66c4 3 6 6 6 11 0 8-6 12-13 12H209c-7 0-13-4-13-12Z" />
        <path fill="#F6C445" d="M242 322c0-14 10-24 22-24s22 10 22 24v22h-44ZM322 322c0-14 10-24 22-24s22 10 22 24v22h-44Z" />
        <path fill="#7ED957" d="M282 410v-34c0-13 9-22 22-22s22 9 22 22v34Z" />
        <path stroke="#111111" strokeWidth="4" d="M304 196v-52" />
        <path fill="#F6C445" d="M306 144h40l-11 13 11 13h-40Z" />
        <path fill="#F2B51F" d="M304 234a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
      </g>
      <path fill="#111111" d="M116 372h10v60h-10z" />
      <circle cx="121" cy="344" r="42" fill="#7ED957" />
      <circle cx="104" cy="360" r="24" fill="#BDF3F3" />
      <path fill="#111111" d="M457 356h9v62h-9z" />
      <circle cx="462" cy="330" r="36" fill="#F9A8DA" />
      <circle cx="476" cy="344" r="19" fill="#FDE8F5" />
      <path fill="#7ED957" d="M0 438c104-40 214-40 312-8 90 30 170 24 248-10v100H0Z" />
      <path fill="#F6C445" d="M0 486c120-26 244-22 344-4 84 14 150 10 216-8v46H0Z" />
      <g fill="#FFFFFF">
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
      <rect width="480" height="400" fill="#E8FBFB" />
      <circle cx="378" cy="88" r="52" fill="#FEF6DC" />
      <path fill="#fff" d="M92 124c-13 0-23-9-23-20s10-20 22-20c4-13 16-22 30-22 16 0 29 11 31 25 13 0 23 8 23 18s-10 19-21 19Z" />
      <path fill="#BDF3F3" d="M0 318c90-44 190-48 280-20 80 24 140 20 200-8v110H0Z" />
      <g>
        <rect x="104" y="232" width="84" height="84" rx="16" fill="#7ED957" />
        <rect x="196" y="232" width="84" height="84" rx="16" fill="#F6C445" />
        <rect x="288" y="232" width="84" height="84" rx="16" fill="#8DB4FF" />
        <rect x="150" y="140" width="84" height="84" rx="16" fill="#F47CC3" />
        <rect x="242" y="140" width="84" height="84" rx="16" fill="#BDF3F3" />
        <rect x="196" y="48" width="84" height="84" rx="16" fill="#F6C445" />
      </g>
      <g fill="#111111" fontFamily="var(--font-rubik), sans-serif" fontWeight="700" fontSize="44" textAnchor="middle">
        <text x="146" y="290">Ә</text>
        <text x="238" y="290">Қ</text>
        <text x="330" y="290">Ө</text>
        <text x="192" y="198">Ғ</text>
        <text x="284" y="198">Ң</text>
        <text x="238" y="106">Ү</text>
      </g>
      <path fill="#7ED957" d="M0 366c120-26 260-22 360-6 50 8 88 6 120-2v42H0Z" />
    </svg>
  );
}

/** Герои-окошки групп. Рисунок не привязан к названию и возрасту группы. */
export function GroupCharacter({ art, className }: { art: GroupArt } & ArtProps) {
  const face = (
    <g>
      <circle cx="50" cy="56" r="3.600" fill="#111111" />
      <circle cx="70" cy="56" r="3.600" fill="#111111" />
      <path d="M52 66c4 5 12 5 16 0" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
      <circle cx="42" cy="65" r="4.500" fill="#F47CC3" opacity=".6" />
      <circle cx="78" cy="65" r="4.500" fill="#F47CC3" opacity=".6" />
    </g>
  );
  return (
    <svg {...decorative} viewBox="0 0 120 110" className={className}>
      {art === "cloud" && (
        <path fill="#FFFFFF" d="M30 92C15 92 5 82 5 69c0-12 10-22 23-22h3c3-16 16-27 32-27 17 0 30 12 33 27 12 1 21 11 21 22 0 13-10 23-24 23Z" />
      )}
      {art === "star" && (
        <path fill="#F2B51F" d="M60 6c3 0 5 2 6 4l12 25 27 4c6 1 8 8 4 12L89 70l5 27c1 6-5 11-11 8l-23-13-23 13c-6 3-12-2-11-8l5-27L11 51c-4-4-2-11 4-12l27-4 12-25c1-2 3-4 6-4Z" />
      )}
      {art === "sun" && (
        <g>
          <g stroke="#F47CC3" strokeWidth="6" strokeLinecap="round">
            <path d="M60 4v10M60 98v8M10 56h10M100 56h10M25 21l7 7M88 84l7 7M25 91l7-7M88 28l7-7" />
          </g>
          <circle cx="60" cy="56" r="32" fill="#F9A8DA" />
        </g>
      )}
      {face}
    </svg>
  );
}

export function DocumentsArt({ className }: ArtProps) {
  return (
    <svg {...decorative} viewBox="0 0 140 130" className={className}>
      <rect x="40" y="10" width="76" height="102" rx="12" fill="#F6C445" transform="rotate(8 78 61)" />
      <rect x="26" y="16" width="78" height="104" rx="12" fill="#FFFFFF" transform="rotate(-5 65 68)" />
      <g stroke="#111111" strokeWidth="5" strokeLinecap="round" transform="rotate(-5 65 68)">
        <path d="M42 42h46M42 60h46M42 78h28" />
      </g>
      <circle cx="96" cy="100" r="19" fill="#BDF3F3" />
      <path d="m88 100 6 6 10-12" fill="none" stroke="#111111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
