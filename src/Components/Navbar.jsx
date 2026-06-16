"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Collections", href: "#featured-collections" },
    { label: "Why Aloura", href: "#why-aloura" },
    { label: "Bespoke", href: "#bespoke-cta" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);

    if (section) {
      const navbarHeight = 80; // h-20 = 80px

      const top =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const linkClass = scrolled
    ? "text-[#5c4032]/80 hover:text-[#8f6348]/50"
    : "text-[#5c4032]/75 hover:text-[#8f6348]/50";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#fef6e9]/96 backdrop-blur-sm border-b border-[#ac795a]/15 shadow-[0_10px_30px_rgba(92,64,50,0.05)]"
          : "bg-[#fef6e9]/90 backdrop-blur-sm border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className={`font-serif text-3xl font-light italic tracking-widest transition-colors duration-500 ${
              scrolled ? "text-[#8f6348]" : "text-[#a47454]"
            }`}
          >
            Aloura
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-[#ac795a]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`group relative font-sans text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${linkClass}`}
            >
              <span>{link.label}</span>

              <span className="absolute left-0 -bottom-2 h-px w-full origin-left scale-x-0 bg-[#ac795a] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("#featured-collections")}
          className="hidden md:inline-flex cursor-pointer items-center gap-2 bg-[#ac795a] hover:bg-[#8f6348] border border-[#ac795a] text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm font-sans"
        >
          Shop Now
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden flex cursor-pointer flex-col gap-1.5 text-[#ac795a] transition-colors duration-300">
          <span className="block w-6 h-px bg-current" />
          <span className="block w-4 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>
    </nav>
  );
}