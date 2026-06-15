import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1800&auto=format&fit=crop&q=80"
          alt="Elegant mirror in a refined interior"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5c4032]/75 via-[#ac795a]/45 to-[#fef6e9]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5c4032]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(172,121,90,0.42)_100%)]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ac795a]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-[#fef6e9]/20 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 lg:px-12 pt-32 pb-24 text-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#ac795a]" />
          <span className="text-[#fef6e9] text-xs tracking-[0.3em] uppercase font-medium">
            Luxury Mirror Atelier
          </span>
          <span className="w-8 h-px bg-[#ac795a]" />
        </div>

        {/* Title */}
        <h1 className="text-white leading-[0.92] mb-6 max-w-4xl">
          <span className="block text-6xl sm:text-7xl lg:text-[7rem] font-light tracking-tight">
            Every Reflection
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-[7rem] font-light tracking-tight italic text-[#fef6e9]">
            tells a story.
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed mb-12 tracking-wide">
          Handcrafted mirrors designed to transform your space — where artistry meets the light you live in.
        </p>

        {/* Search */}
        <div className="w-full max-w-xl mb-12">
          <SearchBar />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">

          <button className="group inline-flex cursor-pointer items-center gap-3 bg-[#ac795a] hover:bg-[#8f6348] text-[#fef6e9] px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(172,121,90,0.35)] hover:shadow-[0_6px_32px_rgba(172,121,90,0.5)] text-sm tracking-widest uppercase">
            Explore Collection

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

          <button className="inline-flex cursor-pointer items-center gap-2 text-[#fef6e9]/80 hover:text-[#fef6e9] transition-colors duration-200 text-sm tracking-widest uppercase">
            <span className="w-5 h-px bg-current" />
            Bespoke Orders
          </button>

        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 border-t border-[#fef6e9]/15 backdrop-blur-sm bg-[#fef6e9]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 grid grid-cols-3 divide-x divide-[#fef6e9]/12">

          {[
            { value: "200+", label: "Mirror Designs" },
            { value: "12", label: "Materials" },
            { value: "Bespoke", label: "Customisation" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-4">
              <span className="text-2xl text-[#fef6e9] font-light italic">
                {value}
              </span>
              <span className="text-[#fef6e9]/65 text-xs tracking-[0.2em] uppercase">
                {label}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2 text-[#fef6e9]/45">
        <span className="text-[10px] tracking-[0.25em] uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#fef6e9]/40 to-transparent" />
      </div>

    </section>
  );
}
