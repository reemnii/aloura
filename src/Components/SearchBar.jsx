"use client";

import { useState } from "react";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div
      className={`relative flex items-center w-full max-w-xl transition-all duration-300 ${
        focused ? "scale-[1.02]" : "scale-100"
      }`}
    >
      {/* Glass container */}
      <div
        className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
          focused
            ? "bg-[#fef6e9]/85 border-[#ac795a]/60 shadow-[0_8px_40px_rgba(172,121,90,0.28)]"
            : "bg-[#fef6e9]/70 border-[#ac795a]/30 shadow-[0_4px_24px_rgba(172,121,90,0.12)]"
        }`}
      >
        {/* Search icon */}
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${
            focused ? "text-[#ac795a]" : "text-[#ac795a]/70"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search mirrors, styles, sizes…"
          className="flex-1 bg-transparent text-[#5c4032] placeholder-[#5c4032]/50 text-sm tracking-wide outline-none"
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => setQuery("")}
            className="cursor-pointer text-[#5c4032]/50 hover:text-[#ac795a] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Divider */}
        <span className="w-px h-4 bg-[#ac795a]/30" />

        {/* Action */}
        <button className="cursor-pointer text-[#5c4032]/70 hover:text-[#ac795a] transition-colors text-xs tracking-widest uppercase whitespace-nowrap">
          Explore
        </button>
      </div>

      {/* Focus glow */}
      {focused && (
        <div className="absolute inset-0 rounded-2xl ring-1 ring-[#ac795a]/40 pointer-events-none" />
      )}
    </div>
  );
}
