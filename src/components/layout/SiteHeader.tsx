import Link from "next/link";

const nav = [
  { href: "#premise", label: "Premise" },
  { href: "#wings", label: "Wings" },
  { href: "#main-five", label: "Main Five" },
];

export default function SideHeader() {
  return (
    <header className="border-emberlight-blue/10 bg-purity-white/85 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="bg-emberlight-blue text-purity-white grid h-9 w-9 place-items-center rounded-full">
            👑
          </span>
          <span className="text-emberlight-blue font-serif text-lg tracking-wide">
            Emily&rsquo;s Life <span className="text-antique-gold">Wiki</span>
          </span>
        </Link>

        <nav className="text-ledger-gray hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-emberlight-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
