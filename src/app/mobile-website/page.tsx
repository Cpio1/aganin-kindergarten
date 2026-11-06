import { SiteExperience } from "@/components/shared/SiteExperience";
import { getSiteMedia } from "@/lib/media";

/** Статическая мобильная сборка главной: proxy.ts отдаёт её телефонам по адресу «/». */
export default async function MobileHomePage() {
  return <SiteExperience initialVariant="mobile" media={await getSiteMedia()} />;
}
