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

export function DesktopGallery({ media }: { media: SiteMedia }) {
  const { t } = useLocale();

  return (
    <section id="gallery" className="relative py-12">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionHeading center kicker={t.gallery.kicker} title={t.gallery.title} className="mb-6" />
        </Reveal>
        <GalleryGrid
          images={media.gallery}
          gridClass="grid-cols-3 gap-4"
          sizes="(min-width: 1100px) 340px, 31vw"
        />
      </div>
    </section>
  );
}

export function DesktopDocuments() {
  const { t } = useLocale();
  const { documents } = t;

  return (
    <section id="documents" className="px-6 py-11">
      <Reveal className="mx-auto max-w-[1000px]">
        <div className="card-soft accent-yellow flex items-center gap-7 !rounded-[1.75rem] px-8 py-6">
          <DocumentsArt className="w-28 shrink-0" />
          <div className="flex-1">
            <p className="font-display text-sm font-semibold">{documents.kicker}</p>
            <h2 className="text-2xl leading-tight font-bold">{documents.title}</h2>
            <p className="mt-1 text-[0.95rem]">
              {siteData.documentsUrl ? documents.text : documents.pending}
            </p>
          </div>
          {siteData.documentsUrl ? (
            <a
              href={siteData.documentsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${documents.open} (${t.a11y.newTab})`}
              className="btn btn-ink shrink-0"
            >
              {documents.open}
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <a
              href={whatsappUrl(documents.pendingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink shrink-0"
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

export function DesktopContacts() {
  const { t } = useLocale();
  const { contacts } = t;

  return (
    <section id="contacts" className="pt-3 pb-8">
      <div className="mx-auto grid max-w-[1180px] gap-6 px-6 lg:grid-cols-[0.86fr_1fr]">
        <Reveal>
          <SectionHeading kicker={contacts.kicker} title={contacts.title} />
          <address className="card accent-mint mt-4 p-5 not-italic">
            <p className="font-display text-lg font-bold">{contacts.legalName}</p>
            <ul className="mt-2.5 space-y-2.5 text-[0.95rem]">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="sr-only">{contacts.address}: </span>
                  {siteData.address}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
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
                  className="inline-flex gap-2.5 underline decoration-mint-deep decoration-2 underline-offset-4 hover:decoration-ink"
                >
                  <InstagramIcon className="size-5 shrink-0" />
                  {siteData.instagram.handle}
                </a>
              </li>
            </ul>
            <ul className="mt-4 space-y-2">
              {siteData.phones.map((phone) => (
                <li key={phone.e164}>
                  <a
                    href={`tel:${phone.e164}`}
                    aria-label={`${contacts.call}: ${phone.display}`}
                    className="btn btn-white w-full !justify-start"
                  >
                    <Phone className="size-4.5 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">{phone.display}</span>
                    <span className="ml-auto text-sm font-medium text-ink-soft">{contacts.call}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl(t.common.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green w-full"
                >
                  <WhatsAppIcon className="size-5" />
                  {contacts.whatsapp}
                </a>
              </li>
            </ul>
          </address>
        </Reveal>
        <Reveal delay={0.08}>
          <MapCard className="h-full min-h-[24rem]" />
        </Reveal>
      </div>
    </section>
  );
}
