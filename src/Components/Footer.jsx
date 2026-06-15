export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3b2518] via-[#5c4032] to-[#8f6348] px-6 lg:px-16 pb-10 pt-4">
      <div className="max-w-7xl mx-auto border-t border-[#fef6e9]/15 pt-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-3xl font-light italic tracking-widest text-[#fef6e9]">
            Aloura
          </span>

          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#fef6e9]/78 font-sans">
            Elegant mirrors designed to catch the light, soften the room, and
            bring a quiet sense of luxury to everyday spaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-[0.22em] uppercase font-sans text-[#fef6e9]/65">
            <a
              className="cursor-pointer hover:text-[#fef6e9] transition-colors"
              href="#featured-collections"
            >
              Collections
            </a>
            <a
              className="cursor-pointer hover:text-[#fef6e9] transition-colors"
              href="#why-aloura"
            >
              Why Aloura
            </a>
            <a
              className="cursor-pointer hover:text-[#fef6e9] transition-colors"
              href="#contact-us"
            >
              Contact
            </a>
          </div>

          <p className="pt-2 text-[10px] tracking-[0.25em] uppercase text-[#fef6e9]/40 font-sans">
            © 2026 Aloura
          </p>
        </div>
      </div>
    </footer>
  );
}
