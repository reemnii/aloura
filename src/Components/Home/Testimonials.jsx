const testimonials = [
  {
    name: "Maya R.",
    role: "Interior Stylist",
    quote:
      "The piece changed the whole room instantly. It feels like a sculpture, not just a mirror.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Daniel K.",
    role: "Homeowner",
    quote:
      "Beautiful craftsmanship, warm finish, and exactly the quiet luxury I wanted.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Sofia L.",
    role: "Boutique Owner",
    quote:
      "Our customers notice the mirror before anything else. It anchors the space perfectly.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#fef6e9] py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-10 h-px bg-[#ac795a]" />
          <span className="text-[#ac795a] text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Testimonials
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#5c4032] leading-tight">
            Loved by <em className="italic text-[#ac795a]">real rooms</em>
          </h2>
          <p className="max-w-xl text-[#5c4032]/70 text-base sm:text-lg leading-relaxed font-sans">
            Small words from people who wanted a mirror to feel like part of the
            room, not just something hung on the wall.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.75rem] border border-[#ac795a]/15 bg-[#f7efe4] shadow-[0_18px_50px_rgba(92,64,50,0.08)] p-6 sm:p-7"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#fef6e9] shadow-sm"
              />
              <div>
                <h3 className="font-serif text-xl italic text-[#5c4032]">
                  {item.name}
                </h3>
                <p className="text-xs tracking-[0.22em] uppercase text-[#ac795a] font-sans">
                  {item.role}
                </p>
              </div>
            </div>

            <p className="font-serif text-2xl italic text-[#5c4032] leading-relaxed">
              "{item.quote}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
