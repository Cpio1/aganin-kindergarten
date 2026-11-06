import { SiteExperience } from "@/components/shared/SiteExperience";
import { getSiteMedia } from "@/lib/media";

export default async function HomePage() {
  return <SiteExperience initialVariant="desktop" media={await getSiteMedia()} />;
}
