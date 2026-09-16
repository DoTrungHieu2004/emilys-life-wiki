import type { CharacterGroup, Premise, Wing } from "@/lib/types";

import premiseData from "@/data/premise.json";
import wingsData from "@/data/wings.json";
import charactersData from "@/data/groups.json";

import Hero from "@/components/home/Hero";
import PremiseSection from "@/components/home/PremiseSection";
import WingsGrid from "@/components/home/WingsGrid";
import MainFiveSpotlight from "@/components/home/MainFiveSpotlight";

export default function HomePage() {
  const premise = premiseData as Premise;
  const wings = (wingsData as { wings: Wing[] }).wings;
  const groups = (charactersData as { groups: CharacterGroup[] }).groups;

  const mainFive = groups.find((g) => g.id === "main-five");

  return (
    <>
      <main className="flex-1">
        <Hero premise={premise} />
        <PremiseSection premise={premise} />
        <WingsGrid wings={wings} />
        {mainFive && <MainFiveSpotlight group={mainFive} />}
      </main>
    </>
  );
}
