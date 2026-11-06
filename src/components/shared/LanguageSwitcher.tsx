"use client";

import type { Locale } from "@/lib/translations";
import { useLocale } from "./LocaleProvider";

const OPTIONS: { locale: Locale; label: string }[] = [
  { locale: "kk", label: "ҚАЗ" },
  { locale: "ru", label: "РУС" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={`inline-flex shrink-0 rounded-full bg-mint-soft p-0.5 ${className}`}
    >
      {OPTIONS.map((option) => {
        const active = option.locale === locale;
        return (
          <button
            key={option.locale}
            type="button"
            lang={option.locale}
            aria-pressed={active}
            onClick={() => setLocale(option.locale)}
            className={`font-display min-h-9 min-w-10 rounded-full px-2 text-xs font-semibold transition-colors ${
              active ? "bg-ink text-milk" : "text-ink hover:bg-mint"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
