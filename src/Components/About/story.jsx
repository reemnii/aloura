export default function Story() {
  return (
    <>
      <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
        <section className="py-10 px-5">
          <div className="2xl:container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl mx-auto text-center lg:text-left">
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
                space, and design, bringing warmth and sophistication into
                every room.
              </p>
            </div>

            <div className="relative max-w-sm mx-auto lg:max-w-sm">
              <img
                src="/mirror.png"
                alt="Mirror Collection"
                className="w-full rounded-[2rem] shadow-2xl object-cover"
              />

              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-[#fffaf2] border border-[#ac795a]/15 p-4 md:p-5 rounded-3xl shadow-xl max-w-100 h-auto">
                <p className="italic text-[#5c4032]/75">
                  "Every reflection tells a story."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
