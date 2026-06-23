import { collectionActions } from "./content";

export default function CTA() {
  return (
    <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
      <section className="py-12 px-6 lg:py-16">
        <div className="max-w-[1600px] mx-auto px-0 lg:px-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14 items-center">
            <div>
              <span className="uppercase tracking-[0.3em] text-xs text-[#ac795a] font-sans">
                Next steps
              </span>

              <h2 className="text-[clamp(2.5rem,3.4vw,4.25rem)] font-light mt-4 mb-5 max-w-2xl">
                Let us help you find
                <span className="italic text-[#ac795a]"> the right reflection.</span>
              </h2>

              <p className="text-[#5c4032]/75 leading-relaxed max-w-2xl">
                Whether you are styling one room or shaping an entire home,
                Aloura can guide you toward a collection that feels balanced,
                elegant, and entirely yours.
              </p>
            </div>

            <div className="space-y-4">
              {collectionActions.map((action) => (
                <div
                  key={action}
                  className="flex items-center gap-4 rounded-full border border-[#ac795a]/14 bg-white px-5 py-4"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ac795a]" />
                  <span className="text-sm md:text-base">{action}</span>
                </div>
              ))}

              <button className="btn-brown px-6 py-3 text-[10px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
