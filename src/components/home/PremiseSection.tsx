import { Premise } from "@/lib/types";
import OrnamentDivider from "../layout/OrnamentDivider";

export default function PremiseSection({ premise }: { premise: Premise }) {
  return (
    <section id="premise" className="bg-purity-white">
      <div className="mx-auto max-w-3xl py-6 py-20">
        <header className="text-center">
          <p className="text-antique-gold text-xs tracking-[0.4em] uppercase">Wing 01</p>
          <h2 className="text-emberlight-blue mt-3 font-serif text-3xl md:text-4xl">The Premise</h2>
        </header>

        <OrnamentDivider />

        <div className="text-ledger-gray space-y-6 text-base leading-relaxed md:text-lg">
          {premise.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
