import { CharacterGroup } from "@/lib/types";
import OrnamentDivider from "../layout/OrnamentDivider";
import CharacterCard from "../character/CharacterCard";

export default function MainFiveSpotlight({ group }: { group: CharacterGroup }) {
  return (
    <section id="main-five" className="bg-purity-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="text-center">
          <p className="text-antique-gold text-xs tracking-[0.4em] uppercase">Wing 02</p>
          <h2 className="text-emberlight-blue mt-3 font-serif text-3xl md:text-4xl">
            The Main Five {group.emoji}
          </h2>
          <p className="text-ledger-gray mx-auto mt-4 max-w-xl text-sm leading-relaxed">
            The core ensemble at the heart of the show — a princess, an indestructible hero, a sass
            master, a grump, and a bucket collector.
          </p>
        </header>

        <OrnamentDivider />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {group.characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <p className="text-ledger-gray/60 mt-12 text-center text-xs tracking-[0.3em] uppercase">
          Full dossiers arriving in future wings
        </p>
      </div>
    </section>
  );
}
