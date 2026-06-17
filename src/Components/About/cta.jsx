export default function Story() {
  return (
    <>
      <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
        <section className="py-10 px-6 text-center bg-[#fffaf2]">
          <span className="uppercase tracking-[0.25em] text-xs text-[#ac795a]">
            Discover Aloura: Our Philosophy
          </span>

          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
            Designed for spaces
            <span className="italic"> that deserve more.</span>
          </h2>

          <p className="max-w-xl mx-auto text-[#5c4032]/75 mb-10">
            Explore our collection of luxury mirrors and discover pieces that
            bring light, depth, and elegance into your home.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Craftsmanship",
                  text: "Designed with meticulous attention to detail and enduring quality.",
                },
                {
                  title: "Timeless Design",
                  text: "Elegant forms inspired by classic architecture and modern interiors.",
                },
                {
                  title: "Quiet Luxury",
                  text: "Refined beauty that elevates a space without overwhelming it.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[#5c4032]/10 border-2 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-light mb-4">{item.title}</h3>

                  <p className="text-[#5c4032]/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          <button className="btn-brown px-8 py-4 mt-10 text-xs">
            Explore Collection
          </button>
        </section>
      </main>
    </>
  );
}