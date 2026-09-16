import Breadcrumbs from "@/components/wing/Breadcrumbs";
import WingHero from "@/components/wing/WingHero";
import WingPlaceholder from "@/components/wing/WingPlaceholder";
import { getWing } from "@/lib/wings";

export const metadata = { title: "Cross-Links & Connections — Emily's Life Wiki" };

export default function ConnectionsWingPage() {
  const wing = getWing("connections");
  return (
    <>
      <Breadcrumbs items={[{ label: wing.title }]} />
      <WingHero wing={wing} />
      <WingPlaceholder wingTitle={wing.title} />
    </>
  );
}
