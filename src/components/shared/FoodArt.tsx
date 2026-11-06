/*
 * Декоративные иллюстрации продуктов. Это не меню: состав питания на сайте не указывается.
 */
const decorative = { "aria-hidden": true, focusable: false } as const;

function Apple({ className }: { className?: string }) {
  return (
    <svg {...decorative} viewBox="0 0 64 64" className={className}>
      <path fill="#F47CC3" d="M32 20c6-5 22-4 22 14 0 13-9 25-16 25-3 0-4-2-6-2s-3 2-6 2c-7 0-16-12-16-25 0-18 16-19 22-14Z" />
      <path fill="#F9A8DA" d="M18 30c0-6 4-9 8-9-3 3-5 7-5 12 0 2-3 1-3-3Z" />
      <path fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" d="M32 21c0-5 1-9 4-13" />
      <path fill="#7ED957" d="M36 14c3-6 9-8 15-6-2 6-8 9-15 6Z" />
    </svg>
  );
}

function Carrot({ className }: { className?: string }) {
  return (
    <svg {...decorative} viewBox="0 0 64 64" className={className}>
      <path fill="#7ED957" d="M43 19c-3-6-2-12 2-16 3 4 4 8 3 11 3-3 7-4 12-3-1 5-4 8-7 9 4 0 7 1 9 5-5 2-11 1-14-2Z" />
      <path fill="#F9A8DA" d="M41 18c5 0 9 4 8 9-1 6-29 31-38 31-3 0-5-2-5-5 0-9 25-34 35-35Z" />
      <g stroke="#F47CC3" strokeWidth="3" strokeLinecap="round">
        <path d="m31 26 5 4M23 34l4 4M16 43l4 3" />
      </g>
    </svg>
  );
}

function Pear({ className }: { className?: string }) {
  return (
    <svg {...decorative} viewBox="0 0 64 64" className={className}>
      <path fill="#F6C445" d="M32 12c6 0 10 5 10 11 0 7 12 11 12 22 0 9-9 15-22 15s-22-6-22-15c0-11 12-15 12-22 0-6 4-11 10-11Z" />
      <path fill="#F2B51F" d="M44 39c2 6-2 13-10 15 6 0 14-3 15-10 0-3-3-7-5-5Z" />
      <path fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" d="M32 13c0-4 1-7 3-9" />
      <path fill="#7ED957" d="M35 9c3-4 8-5 12-3-2 5-7 6-12 3Z" />
    </svg>
  );
}

function Bread({ className }: { className?: string }) {
  return (
    <svg {...decorative} viewBox="0 0 64 64" className={className}>
      <path fill="#F2B51F" d="M12 13h40c7 0 10 5 10 10s-3 8-6 9v18c0 3-2 5-5 5H13c-3 0-5-2-5-5V32c-3-1-6-4-6-9s3-10 10-10Z" />
      <path fill="#FEF6DC" d="M15 19h34c4 0 6 2 6 5 0 2-2 4-5 4v18c0 2-1 3-3 3H17c-2 0-3-1-3-3V28c-3 0-5-2-5-4 0-3 2-5 6-5Z" />
    </svg>
  );
}

function Cup({ className }: { className?: string }) {
  return (
    <svg {...decorative} viewBox="0 0 64 64" className={className}>
      <path fill="#BDF3F3" d="M12 20h34v28c0 6-5 11-11 11H23c-6 0-11-5-11-11Z" />
      <path fill="none" stroke="#BDF3F3" strokeWidth="6" d="M46 27h4c5 0 7 3 7 7s-3 8-7 8h-5" />
      <path fill="#FFFFFF" d="M16 24h26v6c-5 3-8-1-13 1s-9 3-13-1Z" />
      <g fill="none" stroke="#F9A8DA" strokeWidth="3" strokeLinecap="round">
        <path d="M22 13c-3-3 3-5 0-9M36 13c-3-3 3-5 0-9" />
      </g>
    </svg>
  );
}

export const FOOD_ITEMS = [Apple, Pear, Carrot, Bread, Cup];

const RING = [
  { left: "50%", top: "10%" },
  { left: "88%", top: "38%" },
  { left: "74%", top: "84%" },
  { left: "26%", top: "84%" },
  { left: "12%", top: "38%" },
];

/** Большая тарелка с пятью продуктами по кругу: по одному на каждый приём пищи. */
export function PlateRing({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="absolute inset-[14%] rounded-full bg-white shadow-lift" />
      <div className="absolute inset-[23%] rounded-full bg-yellow-soft" />
      <div className="font-display absolute inset-0 flex items-center justify-center text-7xl font-bold text-ink">
        5
      </div>
      {FOOD_ITEMS.map((Food, index) => (
        <div
          key={index}
          style={{ left: RING[index].left, top: RING[index].top, animationDelay: `${index * -1.3}s` }}
          className="anim-drift-slow absolute -mt-[11%] -ml-[11%] flex size-[22%] items-center justify-center rounded-full bg-white p-[3.500%] shadow-soft"
        >
          <Food className="size-full" />
        </div>
      ))}
    </div>
  );
}
