export default function Story() {
  return (
    <>
     <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#ac795a]">
                Our Story
              </span>

              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8">
                Luxury in its
                <span className="italic text-[#ac795a]"> quietest form.</span>
              </h2>

              <p className="leading-relaxed text-[#5c4032]/80 mb-6">
                Inspired by timeless interiors and architectural elegance,
                Aloura curates handcrafted mirrors that blend artistry,
                craftsmanship, and modern refinement.
              </p>

              <p className="leading-relaxed text-[#5c4032]/80">
                Every collection is designed to create harmony between light,
                space, and design—bringing warmth and sophistication into every
                room.
              </p>
            </div>

            <div className="relative">
              <img
                src="/mirror.png"
                alt="Mirror Collection"
                className="rounded-4xl shadow-2xl"
              />

              <div className="absolute -bottom-8 -left-8 bg-[#fffaf2] border border-[#ac795a]/15 p-6 rounded-3xl shadow-xl max-w-xs">
                <p className="italic text-[#5c4032]/75">
                  “Every reflection tells a story.”
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}