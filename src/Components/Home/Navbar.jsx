"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Inspiration", href: "/inspiration" },
    { label: "Contact", href: "/contact" },
    
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);

    if (section) {
      const navbarHeight = 80;

      const top =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });


      setMobileMenuOpen(false);
    }
  };

  const isActiveLink = (href) => href === pathname;

  const linkClass = (active) =>
    `group relative font-sans text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
      active ? "text-[#8f6348]" : "hover:text-[#8f6348]"
    }`;

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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
  link.href.startsWith("#") ? (
    <a
      key={link.label}
      href={link.href}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(link.href);
      }}
      className={linkClass(false)}
    >
      <span className="relative pb-1">
        {link.label}
      </span>
    </a>
  ) : (
    <Link
      key={link.label}
      href={link.href}
      aria-current={isActiveLink(link.href) ? "page" : undefined}
      className={linkClass(isActiveLink(link.href))}
    >
      <span className="relative pb-1">
        {link.label}
        <span
          className={`absolute left-0 -bottom-0.5 h-px bg-current transition-all duration-300 ${
            isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </span>
    </Link>
  )
)}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("#featured-collections")}
          className="hidden md:inline-flex cursor-pointer bg-[#ac795a] hover:bg-[#8f6348] text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
        >
          Shop Now
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden cursor-pointer flex flex-col gap-1.5 text-[#ac795a]"
        >
          <span className="w-6 h-px bg-current" />
          <span className="w-4 h-px bg-current" />
          <span className="w-6 h-px bg-current" />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#fef6e9]/95 backdrop-blur-sm border-t border-[#ac795a]/10 ${
          mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href); // auto closes too
                }}
                className={`${linkClass(false)} px-6 py-4 hover:translate-x-1`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`${linkClass(isActiveLink(link.href))} px-6 py-4 hover:translate-x-1`}
              >
                <span className="relative pb-1">
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px bg-current transition-all duration-300 ${
                      isActiveLink(link.href) ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              </Link>
            )
          ))}

          <div className="px-6 pt-3">
            <button
              onClick={() =>
                scrollToSection("#featured-collections")
              }
              className="w-full bg-[#ac795a] hover:bg-[#8f6348] text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-3 rounded-full"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
