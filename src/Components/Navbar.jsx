"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = scrolled
    ? "text-[#5c4032]/80 hover:text-[#ac795a]"
    : "text-[#5c4032]/75 hover:text-[#ac795a]";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#f6e7d3]/95 backdrop-blur-md border-b border-[#ac795a]/20 shadow-sm"
          : "bg-[#f6e7d3]/88 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <span
            className={`font-serif text-3xl font-light italic tracking-widest transition-colors duration-500 ${
              scrolled ? "text-[#ac795a]" : "text-[#a47454]"
            }`}
          >
            Aloura
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ac795a]" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Collections", "Bespoke", "Lookbook", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className={`text-sm tracking-[0.15em] uppercase transition-colors duration-200 ${linkClass}`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="hidden md:inline-flex items-center gap-2 bg-[#ac795a] hover:bg-[#8f6348] border border-[#ac795a] text-[#fef6e9] text-sm tracking-widest uppercase px-5 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm">
          Shop Now
        </button>

        <button className="md:hidden flex flex-col gap-1.5 text-[#ac795a] transition-colors duration-300">
          <span className="block w-6 h-px bg-current" />
          <span className="block w-4 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>
    </nav>
  );
}
