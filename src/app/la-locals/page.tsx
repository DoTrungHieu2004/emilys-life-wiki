import Breadcrumbs from "@/components/wing/Breadcrumbs";
import WingHero from "@/components/wing/WingHero";
import WingPlaceholder from "@/components/wing/WingPlaceholder";
import { getWing } from "@/lib/wings";

export const metadata = { title: "L.A. Locals — Emily's Life Wiki" };

export default function LaLocalsWingPage() {
  const wing = getWing("la-locals");
  return (
    <>
      <Breadcrumbs items={[{ label: wing.title }]} />
      <WingHero wing={wing} />
      <WingPlaceholder wingTitle={wing.title} />
    </>
  );
}
