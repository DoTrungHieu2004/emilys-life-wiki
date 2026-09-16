export default function WingPlaceholder({ wingTitle }: { wingTitle: string }) {
  return (
    <section className="bg-purity-white">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-4xl" aria-hidden="true">
          📜
        </p>
        <h2 className="text-emberlight-blue mt-6 font-serif text-2xl">
          This wing is still being written.
        </h2>
        <p className="text-ledger-gray mt-4 text-sm leading-relaxed">
          The {wingTitle} section is scaffolded and ready. Its content arrives in a future pass —
          one wing at a time, as the archive grows.
        </p>
      </div>
    </section>
  );
}
