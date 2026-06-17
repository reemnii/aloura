import { collectionActions } from "./content";

export default function CTA() {
  return (
    <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
        
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div>
                <span className="uppercase tracking-[0.3em] text-xs text-[#ac795a] font-sans">
                  Next steps
                </span>

                <h2 className="text-4xl md:text-5xl font-light mt-4 mb-5">
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

                <div className="pt-2 flex flex-wrap gap-3">
                  <button className="btn-brown px-6 py-3 text-[10px]">
                    Contact Us
                  </button>
                  <button className="btn-glass border-[#ac795a]/20 bg-white/70 px-6 py-3 text-[10px] text-[#5c4032]">
                    View all collections
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      </section>
    </main>
  );
}
