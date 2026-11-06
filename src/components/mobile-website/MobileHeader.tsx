"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Star } from "@/components/shared/Art";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import { useActiveSection } from "@/components/shared/useActiveSection";
import type { SiteMedia } from "@/lib/media";
import { SECTION_IDS, whatsappUrl, type SectionId } from "@/lib/site-data";

const TILE_BG = ["bg-mint", "bg-sun-soft", "bg-peach-soft", "bg-mint-soft", "bg-sun", "bg-peach-soft", "bg-mint-soft", "bg-sun-soft"];
const TILE_SHAPE = ["shape-a", "shape-b", "shape-b", "shape-a"];

/** Меню-шторка с плитками разделов: нативный <dialog> удерживает фокус и закрывается по Escape. */
export function MobileHeader({ media }: { media: SiteMedia }) {
  const { t } = useLocale();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  /* Сначала снимается блокировка прокрутки, и только потом страница едет к разделу. */
  const goTo = (event: MouseEvent, id: SectionId) => {
    event.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
        history.replaceState(null, "", `#${id}`);
      });
    });
  };

  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-milk shadow-soft">
      <div className="flex h-14 items-center justify-between gap-2 px-3">
        <a href="#home" aria-label={t.a11y.home} className="flex min-h-11 min-w-0 items-center">
          <Logo logo={media.logo} heightClass="h-10" sizes="130px" priority />
        </a>
        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.a11y.menuOpen}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full bg-ink text-milk"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="menu-sheet"
        aria-label={t.a11y.mainNav}
        onClose={() => setOpen(false)}
        onClick={onBackdropClick}
      >
        <div className="p-3 pb-4">
          <div className="flex h-10 items-center justify-between pl-1">
            <Logo logo={media.logo} heightClass="h-10" sizes="130px" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.a11y.menuClose}
              className="flex size-10 items-center justify-center rounded-full bg-ink text-milk"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={t.a11y.mainNav} className="mt-3">
            <ul className="grid grid-cols-2 gap-2">
              {SECTION_IDS.map((id, index) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => goTo(event, id)}
                    aria-current={active === id ? "true" : undefined}
                    className={`font-display ${TILE_SHAPE[index % 4]} ${TILE_BG[index]} relative flex min-h-13 items-center px-3.5 py-2 text-[0.95rem] leading-tight font-semibold`}
                  >
                    {t.nav[id]}
                    {active === id && <Star className="absolute top-2 right-2.5 size-3.5 text-ink" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={whatsappUrl(t.common.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink mt-3 w-full"
          >
            <WhatsAppIcon className="size-5" />
            {t.contacts.whatsapp}
          </a>
        </div>
      </dialog>
    </header>
  );
}
