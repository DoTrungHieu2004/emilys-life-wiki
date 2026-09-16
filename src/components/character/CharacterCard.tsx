import { Character } from "@/lib/types";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <article className="rouned-2xl border-emberlight-blue/10 flex h-full flex-col border bg-white/70 p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-emberlight-blue font-serif text-2xl leading-tight">
            {character.name}
          </h3>
          {character.alias && (
            <p className="text-super-ruby mt-1 text-xs tracking-[0.2em] uppercase">
              {character.alias}
            </p>
          )}
          <span className="text-3xl leading-none" aria-hidden="true">
            {character.emoji}
          </span>
        </div>
      </header>

      <p className="text-ledger-gray/80 mt-3 text-xs tracking-wide italic">{character.role}</p>
      <p className="text-ledger-gray mt-5 text-sm leading-relaxed">{character.summary}</p>

      {character.note && (
        <p className="border-antique-gold/50 text-ledger-gray/90 mt-4 border-l-2 pl-4 text-xs leading-relaxed italic">
          {character.note}
        </p>
      )}

      <ul className="mt-6 flex flex-wrap gap-2">
        {character.traits.map((trait) => (
          <li
            key={trait}
            className="border-emberlight-blue/15 text-emberlight-blue/80 rounded-full border px-3 py-1 text-[11px] tracking-wide"
          >
            {trait}
          </li>
        ))}
      </ul>
    </article>
  );
}
