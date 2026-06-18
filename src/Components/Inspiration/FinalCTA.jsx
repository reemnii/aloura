import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-6 pb-18 pt-4">
      <div className="max-w-7xl mx-auto border-t border-[#ac795a]/12 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.3em] text-[10px] text-[#ac795a] font-sans">
              Continue exploring
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight text-[#5c4032]">
              Find the mirror that completes the room.
            </h2>

            <p className="mt-5 max-w-2xl text-[#5c4032]/72 leading-relaxed font-sans">
              Browse the collections to discover sculptural mirrors designed with
              the same quiet luxury and warmth seen throughout the inspiration edit.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end lg:pt-2">
            <Link href="/collections" className="btn-brown px-6 py-3 text-[10px]">
              Explore collections
            </Link>
            <Link
              href="/about"
              className="btn-glass border-[#ac795a]/18 bg-white/70 px-6 py-3 text-[10px] text-[#5c4032]"
            >
              Learn about Aloura
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
