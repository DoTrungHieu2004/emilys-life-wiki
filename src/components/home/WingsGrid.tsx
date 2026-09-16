import { Wing } from "@/lib/types";
import OrnamentDivider from "../layout/OrnamentDivider";

export default function WingsGrid({ wings }: { wings: Wing[] }) {
  return (
    <section id="wings" className="bg-purity-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="text-center">
          <p className="text-antique-gold text-xs tracking-[0.4em] uppercase">Navigation</p>
          <h2 className="text-emberlight-blue mt-3 font-serif text-3xl md:text-4xl">
            The Wings of the Archive
          </h2>
          <p className="text-ledger-gray mx-auto mt-4 max-w-xl text-sm leading-relaxed">
            Six distinct sections, each its own landing view. Every page is reachable from anywhere
            in three clicks or fewer.
          </p>
        </header>

        <OrnamentDivider />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wings.map((wing) => (
            <li
              key={wing.id}
              className="group border-emberlight-blue/10 hover:border-antique-gold/50 relative flex flex-col rounded-2xl border bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-antique-gold font-serif text-xs tracking-[0.3em]">
                  {wing.number}
                </span>
                <span className="text-xl" aria-hidden="true">
                  {wing.emoji}
                </span>
              </div>
              <h3 className="text-emberlight-blue mt-4 font-serif text-xl">{wing.title}</h3>
              <p className="text-ledger-gray mt-3 text-sm leading-relaxed">{wing.description}</p>
              <span className="text-ledger-gray/60 mt-6 text-[10px] tracking-[0.25em] uppercase">
                Coming soon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
