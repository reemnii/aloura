const pillars = [
  {
    title: "Made for the light",
    description:
      "Each piece is composed to catch daylight softly and turn evening glow into atmosphere.",
  },
  {
    title: "Craft over trend",
    description:
      "We favor timeless silhouettes, honest materials, and finishes that age beautifully.",
  },
  {
    title: "Detail you can feel",
    description:
      "From bevels to frames, every edge is considered so the mirror feels refined from every angle.",
  },
];

export default function WhyAloura() {
  return (
    <section
      id="why-aloura"
      className="relative overflow-hidden py-20 px-6 lg:px-16  bg-[#fef6e9]/8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5c4032] via-[#8f6348] to-[#ac795a]" />
      <div className="absolute inset-0  bg-[#fef6e9]/8" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(254,246,233,0.16)_0%,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-10 h-px bg-[#fef6e9]/75" />
          <span className="text-[#fef6e9] text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Why Aloura
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#fef6e9] leading-tight">
              Crafted to <em className="italic text-[#fef6e9]">catch the room</em>
            </h2>
            <p className="mt-6 text-[#fef6e9]/80 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Aloura mirrors are built like statement pieces and finished like
              heirlooms: warm, precise, and quietly dramatic. We design for
              people who want the room to feel brighter, softer, and more
              intentional the moment they walk in.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Bespoke sizing", "Hand-finished frames", "Luxury materials"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#fef6e9]/20 bg-[#fef6e9]/10 text-[#fef6e9] text-xs tracking-[0.2em] uppercase font-sans backdrop-blur-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-3 grid gap-4">
            <div className="rounded-[1.75rem] border border-[#fef6e9]/15 bg-[#fef6e9]/10 shadow-[0_18px_50px_rgba(59,37,24,0.22)] p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-[#fef6e9]/80 text-[10px] tracking-[0.25em] uppercase font-sans mb-2">
                    The Aloura promise
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl italic text-[#fef6e9]">
                    Not just a mirror. A mood setter.
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="w-10 h-px bg-[#fef6e9]/70" />
                  <span className="text-[#fef6e9]/65 text-xs tracking-[0.2em] uppercase font-sans">
                    Crafted by hand
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl bg-[#fef6e9]/10 border border-[#fef6e9]/15 p-5"
                  >
                    <h4 className="font-serif text-xl italic text-[#fef6e9] mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#fef6e9]/78 font-sans">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#fef6e9]/15">
                <p className="text-sm text-[#fef6e9]/72 font-sans">
                  Designed to feel calm, polished, and unforgettable.
                </p>
                <button className="inline-flex items-center gap-2 bg-[#fef6e9] hover:bg-[#f5ece0] text-[#5c4032] px-6 py-3 rounded-full tracking-widest uppercase text-xs transition-colors duration-300 font-sans">
                  Discover the craft
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
