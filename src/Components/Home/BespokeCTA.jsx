export default function BespokeCTA() {
  return (
    <section id="bespoke-cta" className="relative overflow-hidden py-10 px-6 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5c4032] via-[#8f6348] to-[#ac795a]" />
      <div className="absolute inset-0 bg-[#fef6e9]/8" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(254,246,233,0.18)_0%,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-10 h-px bg-[#fef6e9]/75" />
              <span className="text-[#fef6e9] text-xs tracking-[0.3em] uppercase font-sans font-medium">
                Bespoke Mirrors
              </span>
            </div>

            <h2 className="font-serif text-5xl lg:text-7xl font-light text-[#fef6e9] leading-tight max-w-3xl">
              Made to{" "}
              <em className="italic text-[#fef6e9]">fit your space like it was always there</em>
            </h2>

            <p className="mt-6 text-[#fef6e9]/82 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Looking for a mirror that feels tailored, timeless, and a little
              bit unforgettable? We design bespoke pieces around your size,
              style, and finish so the final result feels built for the room,
              not just placed in it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex flex-row gap-2 cursor-pointer bg-[#fef6e9]/15 hover:bg-[#fef6e9]/25 border border-[#fef6e9]/25 text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 font-sans w-auto">
                Start your bespoke order
                <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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

          <div className="lg:col-span-2">
            <div className="rounded-[1.75rem] border border-[#fef6e9]/15 bg-[#fef6e9]/10 backdrop-blur-sm p-6 sm:p-8 shadow-[0_18px_50px_rgba(59,37,24,0.22)]">
              <p className="text-[#fef6e9]/78 text-xs tracking-[0.25em] uppercase font-sans mb-3">
                Why custom?
              </p>
              <ul className="space-y-4">
                {[
                  "Sized precisely for your wall, console, or entryway.",
                  "Finished to match your palette and the mood of the room.",
                  "Designed with materials that feel elevated and lasting.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[#fef6e9]/88 font-sans leading-relaxed"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#fef6e9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
