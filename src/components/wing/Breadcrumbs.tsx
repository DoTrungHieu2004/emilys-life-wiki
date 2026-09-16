import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-emberlight-blue/10 bg-purity-white border-b">
      <ol className="text-ledger-gray/70 mx-auto flex max-w-6xl items-center gap-2 px-6 py-3 text-[11px] tracking-[0.2em] uppercase">
        <li>
          <Link href="/" className="hover:text-emberlight-blue transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-antique-gold/60">
              ✦
            </span>
            {item.href ? (
              <Link href={item.href} className="hover:text-emberlight-blue transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-emberlight-blue">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
