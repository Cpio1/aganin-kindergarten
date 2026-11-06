import type { ActivityId } from "@/lib/site-data";

/* lucide-react не содержит логотипов брендов, поэтому они нарисованы отдельно. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.200" />
      <path d="M17.300 6.700h.01" strokeWidth="2.600" />
    </svg>
  );
}

const ink = "#111111";

/** Иконки кружков в одном стиле: одинаково выглядят на всех устройствах, в отличие от эмодзи. */
export function ActivityIcon({ id, className }: { id: ActivityId; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 48 48" className={className}>
      {id === "chess" && (
        <g>
          <path fill={ink} d="M13 42c0-2 1-4 3-4h16c2 0 3 2 3 4 0 1-1 2-2 2H15c-1 0-2-1-2-2Z" />
          <path fill={ink} d="M18 36c0-5 7-8 8-14l-7 3c-2 1-4 1-5-1-1-1-1-3 0-4l7-9c0-3 1-5 3-6l2 3c7 1 12 7 12 15 0 5-1 9-3 13Z" />
          <circle cx="23.500" cy="14.500" r="2" fill="#FFFFFF" />
        </g>
      )}
      {id === "speech" && (
        <g>
          <path fill={ink} d="M24 6c10 0 18 7 18 16s-8 16-18 16c-2 0-4 0-6-1l-8 5c-1 1-3 0-2-2l2-7c-3-3-4-7-4-11C6 13 14 6 24 6Z" />
          <circle cx="17" cy="20" r="2.300" fill="#FFFFFF" />
          <circle cx="31" cy="20" r="2.300" fill="#FFFFFF" />
          <path d="M18 26c3 4 9 4 12 0" fill="none" stroke="#FFFFFF" strokeWidth="2.600" strokeLinecap="round" />
        </g>
      )}
      {id === "dance" && (
        <g fill="none" stroke={ink} strokeWidth="3.400" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="26" cy="8" r="4" fill={ink} stroke="none" />
          <path d="M25 15c-1 5-1 9 0 13M10 12c5 5 10 6 15 5 4-1 8-3 12-8" />
          <path fill={ink} stroke="none" d="M24 24h3l9 13c1 2-1 3-3 3H15c-2 0-4-1-3-3Z" />
          <path d="M20 40l-3 5M30 40l3 5" />
        </g>
      )}
      {id === "music" && (
        <g fill={ink}>
          <path d="M18 9c0-1 1-2 2-2l18-3c1 0 2 1 2 2v26h-4V14l-14 2v22h-4Z" />
          <ellipse cx="13" cy="38" rx="7" ry="5.500" />
          <ellipse cx="33" cy="33" rx="7" ry="5.500" />
        </g>
      )}
      {id === "mental" && (
        <g>
          <rect x="6" y="6" width="36" height="36" rx="6" fill="none" stroke={ink} strokeWidth="3.400" />
          <g stroke={ink} strokeWidth="2.400">
            <path d="M7 16h34M7 24h34M7 32h34" />
          </g>
          <g fill={ink}>
            <circle cx="14" cy="16" r="3.600" />
            <circle cx="22" cy="16" r="3.600" />
            <circle cx="32" cy="24" r="3.600" />
            <circle cx="16" cy="24" r="3.600" />
            <circle cx="24" cy="32" r="3.600" />
            <circle cx="33" cy="32" r="3.600" />
          </g>
        </g>
      )}
      {id === "english" && (
        <g>
          <path fill={ink} d="M8 8h32c2 0 3 1 3 3v21c0 2-1 3-3 3H22l-9 8c-1 1-3 0-3-1v-7H8c-2 0-3-1-3-3V11c0-2 1-3 3-3Z" />
          <text x="24" y="28" textAnchor="middle" fontFamily="var(--font-rubik), sans-serif" fontWeight="700" fontSize="15" fill="#FFFFFF">
            ABC
          </text>
        </g>
      )}
      {id === "aikido" && (
        <g>
          <path fill={ink} d="M14 5h20l7 8-6 6-3-3v27H16V16l-3 3-6-6Z" />
          <path fill="#FFFFFF" d="m24 19-7-13h4l3 7 3-7h4Z" />
          <path fill="#FFFFFF" d="M16 26h16v4H16Z" />
          <path fill="#FFFFFF" d="m20 30 3 2-3 7h-3Zm8 0-3 2 3 7h3Z" />
        </g>
      )}
    </svg>
  );
}
