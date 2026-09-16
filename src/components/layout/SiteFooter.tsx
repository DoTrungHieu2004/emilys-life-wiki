export default function SiteFooter() {
  return (
    <footer className="border-emberlight-blue/10 bg-emberlight-blue text-puriry-white/80 border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <p className="text-purity-white font-serif text-base">
          A personal archive for <span className="text-antique-gold">Emily&rsquo;s Life</span>.
        </p>
        <p className="mt-2 max-w-xl leading-relaxed">
          Built with Next.js, Tailwind, and a great deal of affection for a crown princess, her
          bumbling mentor, and one very secret antique store.
        </p>
        <p className="text-purity-white/50 mt-6 text-xs tracking-widest uppercase">
          ✦ Fan-made · Unofficial · No tracking ✦
        </p>
      </div>
    </footer>
  );
}
