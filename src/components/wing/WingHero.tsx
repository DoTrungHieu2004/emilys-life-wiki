import { Wing } from "@/lib/types";

export default function WingHero({ wing }: { wing: Wing }) {
  return (
    <section className="border-emberlight-blue/10 bg-purity-white border-b">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <p className="text-antique-gold text-xs tracking-[0.4em] uppercase">Wing {wing.number}</p>
        <p className="mt-4 text-4xl" aria-hidden="true">
          {wing.emoji}
        </p>
        <h1 className="text-emberlight-blue mt-3 font-serif text-4xl md:text-5xl">{wing.title}</h1>
        <p className="text-ledger-gray mx-auto mt-5 max-w-2xl text-sm leading-relaxed md:text-base">
          {wing.description}
        </p>
      </div>
    </section>
  );
}
