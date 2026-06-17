export default function Story() {
  return (
    <>
      <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
        <section className="py-10 px-6 bg-[#fffaf2]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="uppercase tracking-[0.25em] text-xs text-[#ac795a]">
                What Defines Us
              </span>

              <h2 className="text-4xl font-light mt-4">
                The Aloura Philosophy
              </h2>
            </div>

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
                  className="bg-white border border-[#ac795a]/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-light mb-4">{item.title}</h3>

                  <p className="text-[#5c4032]/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}