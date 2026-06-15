"use client";

const featured = [
  {
    id: 1,
    tag: "Editor's Pick",
    name: "Aurelia Arch",
    description:
      "A full-length arched mirror with hand-gilded brass detailing. Transforms any wall into a statement.",
    material: "Solid Oak · Brass Inlay",
    price: "$1,240",
    size: "large",
    image:
      "/aurelia-arc.webp",
  },
  {
    id: 2,
    tag: "New Arrival",
    name: "Celeste Round",
    description:
      "Hand-cast iron frame with a softly bevelled edge. Pairs with both modern and classical interiors.",
    material: "Cast Iron · Antique Finish",
    price: "$680",
    size: "small",
    image:
      "/celeste-round.jpg",
  },
  {
    id: 3,
    tag: "Bestseller",
    name: "Orion Slim",
    description:
      "Minimal profile, maximum presence. A leaner mirror for refined entryways and dressing rooms.",
    material: "Matte Black Steel",
    price: "$490",
    size: "small",
    image:
      "orion-slim.jpg",
  },
];

export default function FeaturedCollection() {
  return (
    <section id="featured-collections" className="bg-[#fef6e9] py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-10 h-px bg-[#ac795a]" />
          <span className="text-[#ac795a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Curated for you
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#5c4032] leading-tight">
            Featured <em className="italic text-[#ac795a]">Collections</em>
          </h2>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#5c4032]/60 hover:text-[#ac795a] text-xs tracking-[0.2em] uppercase transition-colors duration-200 group self-end sm:self-auto pb-1 border-b border-[#5c4032]/20 hover:border-[#ac795a]"
          >
            View all pieces
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 group relative overflow-hidden rounded-[1.75rem] bg-[#f7efe4] border border-[#ac795a]/15 shadow-[0_18px_50px_rgba(92,64,50,0.08)] cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[580px]">
            <img
              src={featured[0].image}
              alt={featured[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5c4032]/78 via-[#5c4032]/10 to-transparent" />

            <div className="absolute top-5 left-5">
              <span className="bg-[#fef6e9]/90 text-[#8f6348] text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full font-sans border border-[#ac795a]/20">
                {featured[0].tag}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[#fef6e9]/80 text-[10px] tracking-[0.25em] uppercase font-sans mb-2">
                {featured[0].material}
              </p>
              <h3 className="font-serif text-3xl font-light italic text-[#fef6e9] mb-2 leading-snug">
                {featured[0].name}
              </h3>
              <p className="text-[#fef6e9]/75 text-sm leading-relaxed font-sans mb-5 max-w-sm hidden sm:block">
                {featured[0].description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#fef6e9] font-light">
                  {featured[0].price}
                </span>
                <button className="cursor-pointer bg-[#fef6e9]/15 hover:bg-[#fef6e9]/25 border border-[#fef6e9]/25 text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 font-sans">
                  View piece
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {featured.slice(1).map((item) => (
            <div
              key={item.id}
              className="group relative flex-1 overflow-hidden rounded-[1.75rem] bg-[#f7efe4] border border-[#ac795a]/15 shadow-[0_18px_50px_rgba(92,64,50,0.08)] cursor-pointer"
            >
              <div className="relative overflow-hidden h-[260px] lg:h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5c4032]/72 via-[#5c4032]/8 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#fef6e9]/90 backdrop-blur-sm text-[#8f6348] text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-sans border border-[#ac795a]/20">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#fef6e9]/78 text-[9px] tracking-[0.25em] uppercase font-sans mb-1">
                    {item.material}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="font-serif text-xl font-light italic text-[#fef6e9] leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-serif text-xl text-[#fef6e9] font-light ml-4">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#5c4032]/18">
                  <button className="cursor-pointer bg-[#fef6e9] text-[#5c4032] text-xs tracking-widest uppercase px-6 py-3 rounded-full font-sans hover:bg-[#ac795a] hover:text-[#fef6e9] transition-colors duration-300 shadow-lg">
                    View piece
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
