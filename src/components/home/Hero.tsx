import { Premise } from "@/lib/types";

export default function Hero({ premise }: { premise: Premise }) {
  return (
    <section className="border-emberlight-blue/10 bg-purity-white relative overflow-hidden border-b">
      <div className="[background-image:radial-gradient(circle_at_1px_1px,theme(colors.emberlight-blue)_1px,transparent_0)] pointer-events-none absolute inset-0 [background-size:22px_22px] opacity-[0.04]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="text-antique-gold text-xs tracking-[0.5em] uppercase">
          ✦ The Personal Wiki ✦
        </p>

        <h1 className="text-emberlight-blue mt-6 font-serif text-5xl leading-tight md:text-7xl">
          {premise.title}
        </h1>

        <p className="text-ledger-gray mt-6 font-serif text-xl italic md:text-2xl">
          {premise.tagline}
        </p>

        <p className="text-ledger-gray/90 mx-auto mt-8 max-w-2xl text-sm leading-relaxed md:text-base">
          {premise.logline}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="#premise"
            className="bg-emberlight-blue text-purity-white hover:bg-emberlight-blue/90 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors"
          >
            Enter the Archive
          </a>
          <a
            href="#main-five"
            className="border-emberlight-blue/20 text-emberlight-blue hover:border-emberlight-blue/40 rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition-colors"
          >
            Meet the Main Five
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 text-left md:grid-cols-5">
          {premise.quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-ledger-gray/70 text-[10px] tracking-[0.2em] uppercase">
                {fact.label}
              </dt>
              <dd className="text-emberlight-blue mt-1 font-serif text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
