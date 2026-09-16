import Breadcrumbs from "@/components/wing/Breadcrumbs";
import WingHero from "@/components/wing/WingHero";
import WingPlaceholder from "@/components/wing/WingPlaceholder";
import { getWing } from "@/lib/wings";

export const metadata = { title: "The Royal Family — Emily's Life Wiki" };

export default function RoyalFamilyWingPage() {
  const wing = getWing("royal-family");
  return (
    <>
      <Breadcrumbs items={[{ label: wing.title }]} />
      <WingHero wing={wing} />
      <WingPlaceholder wingTitle={wing.title} />
    </>
  );
}
