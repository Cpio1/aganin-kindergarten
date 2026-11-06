"use client";

import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { DocumentsArt } from "@/components/shared/Art";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { useLocale } from "@/components/shared/LocaleProvider";
import { MapCard } from "@/components/shared/MapCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { SiteMedia } from "@/lib/media";
import { siteData, whatsappUrl } from "@/lib/site-data";

export function MobileGallery({ media }: { media: SiteMedia }) {
  const { t } = useLocale();

  return (
    <section id="gallery" className="bg-peach-soft/60 py-6">
      <div className="mx-auto max-w-2xl px-4">
        <Reveal>
          <SectionHeading kicker={t.gallery.kicker} title={t.gallery.title} className="mb-3.5" />
        </Reveal>
        <GalleryGrid images={media.gallery} columns={2} gapClass="gap-2" sizes="(min-width: 672px) 320px, 50vw" />
      </div>
    </section>
  );
}

export function MobileDocuments() {
  const { t } = useLocale();
  const { documents } = t;

  return (
    <section id="documents" className="mx-auto max-w-2xl px-4 py-6">
      <Reveal>
        <div className="shape-a relative overflow-hidden bg-sun p-4 shadow-soft">
          <DocumentsArt className="absolute -top-1 -right-2 w-20" />
          <p className="font-display text-sm font-semibold">{documents.kicker}</p>
          <h2 className="pr-16 text-xl leading-tight font-bold">{documents.title}</h2>
          <p className="mt-1.5 text-[0.9rem] leading-snug">
            {siteData.documentsUrl ? documents.text : documents.pending}
          </p>
          {siteData.documentsUrl ? (
            <a
              href={siteData.documentsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${documents.open} (${t.a11y.newTab})`}
              className="btn btn-ink mt-3 w-full"
            >
              {documents.open}
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <a
              href={whatsappUrl(documents.pendingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink mt-3 w-full"
            >
              <WhatsAppIcon className="size-5" />
              {documents.pendingCta}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export function MobileContacts() {
  const { t } = useLocale();
  const { contacts } = t;

  return (
    <section id="contacts" className="mx-auto max-w-2xl px-4 pb-5">
      <Reveal>
        <SectionHeading kicker={contacts.kicker} title={contacts.title} squiggleClass="text-mint-deep" />
      </Reveal>
      <Reveal className="mt-3">
        <address className="shape-b bg-mint-soft p-4 not-italic">
          <p className="font-display font-bold">{contacts.legalName}</p>
          <ul className="mt-2 space-y-1.5 text-[0.92rem]">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4.5 shrink-0" aria-hidden="true" />
              <span>
                <span className="sr-only">{contacts.address}: </span>
                {siteData.address}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4.5 shrink-0" aria-hidden="true" />
              <span>
                <span className="sr-only">{contacts.hours}: </span>
                {siteData.hours}
              </span>
            </li>
            <li>
              <a
                href={siteData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${siteData.instagram.handle} (${t.a11y.newTab})`}
                className="inline-flex min-h-8 items-center gap-2 underline decoration-mint-deep decoration-2 underline-offset-4"
              >
                <InstagramIcon className="size-4.5 shrink-0" />
                {siteData.instagram.handle}
              </a>
            </li>
          </ul>
          <ul className="mt-3 space-y-2">
            {siteData.phones.map((phone) => (
              <li key={phone.e164}>
                <a
                  href={`tel:${phone.e164}`}
                  aria-label={`${contacts.call}: ${phone.display}`}
                  className="btn btn-milk w-full"
                >
                  <Phone className="size-4.5 shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{phone.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl(t.common.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mint w-full"
              >
                <WhatsAppIcon className="size-5" />
                {contacts.whatsapp}
              </a>
            </li>
          </ul>
        </address>
      </Reveal>
      <Reveal className="mt-3">
        <MapCard className="shape-d h-72 sm:h-96" />
      </Reveal>
    </section>
  );
}
