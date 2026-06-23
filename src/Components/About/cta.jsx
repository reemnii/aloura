export default function CTA({
  eyebrow = "Discover Aloura: Our Philosophy",
  title = "Designed for spaces",
  highlightedText = " that deserve more.",
  description = "Explore our collection of luxury mirrors and discover pieces that bring light, depth, and elegance into your home.",
  items = [
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
  ],
  buttonLabel = "Explore Collection",
  containerClassName = "w-full max-w-[1600px] mx-auto px-6 lg:px-20",
}) {
  return (
    <>
      <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
        <section className="py-10 px-6 text-center bg-[#fef6e9]">
          <div className={`${containerClassName}`}>
          <span className="uppercase tracking-[0.25em] text-xs text-[#ac795a]">
            {eyebrow}
          </span>

          <h2 className="text-[clamp(2.5rem,3.6vw,4.5rem)] font-light mt-4 mb-6 max-w-4xl mx-auto">
            {title}
            <span className="italic text-[#ac795a]">{highlightedText}</span>
          </h2>

          <p className="max-w-2xl mx-auto text-[#5c4032]/75 mb-10">
            {description}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="border-2 border-[#5c4032]/10 rounded-3xl p-8 bg-white/35"
                >
                  <h3 className="text-xl md:text-2xl font-light mb-4">{item.title}</h3>

                  <p className="text-[#5c4032]/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          <button className="btn-brown px-8 py-4 mt-10 text-xs">
            {buttonLabel}
          </button>
          </div>
        </section>
      </main>
    </>
  );
}
