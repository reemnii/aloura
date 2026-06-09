"use client";

import { useState, useEffect } from "react";

export default function Navbar({ bannerVisible = true }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        bannerVisible ? "top-[3.75rem]" : "top-3"
      } ${
        scrolled
          ? "bg-[#fef6e9]/95 backdrop-blur-md border-b border-[#ac795a]/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <span
            className={`font-serif text-3xl font-light italic tracking-widest transition-colors duration-300 ${
              scrolled ? "text-[#ac795a]" : "text-[#fef6e9]"
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
              className={`text-sm tracking-[0.15em] uppercase transition-colors duration-200 ${
                scrolled
                  ? "text-[#5c4032]/80 hover:text-[#ac795a]"
                  : "text-[#fef6e9]/80 hover:text-[#fef6e9]"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="hidden md:inline-flex items-center gap-2 bg-[#ac795a] hover:bg-[#8f6348] border border-[#ac795a] text-[#fef6e9] text-sm tracking-widest uppercase px-5 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300">
          Shop Now
        </button>

        <button
          className={`md:hidden flex flex-col gap-1.5 transition-colors duration-300 ${
            scrolled ? "text-[#ac795a]" : "text-[#fef6e9]"
          }`}
        >
          <span className="block w-6 h-px bg-current" />
          <span className="block w-4 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>
    </nav>
  );
}
