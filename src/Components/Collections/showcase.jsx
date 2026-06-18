"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "../Home/SearchBar.jsx";
import { filterGroups, mirrorCollections } from "./content";
import { getMirrorHref } from "../Mirror/content.js";

const defaultFilters = {
  shape: "All",
  finish: "All",
  room: "All",
};

function matchesFilter(value, selected) {
  return selected === "All" || value === selected;
}

export default function Showcase() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(defaultFilters);
  const [sortMode, setSortMode] = useState("name");
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleMirrors = mirrorCollections
    .filter((mirror) =>
      [
        mirror.name,
        mirror.tag,
        mirror.shape,
        mirror.finish,
        mirror.room,
        mirror.size,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .filter((mirror) => matchesFilter(mirror.shape, filters.shape))
    .filter((mirror) => matchesFilter(mirror.finish, filters.finish))
    .filter((mirror) => matchesFilter(mirror.room, filters.room))
    .sort((left, right) => {
      if (sortMode === "room") {
        return left.room.localeCompare(right.room);
      }

      if (sortMode === "size") {
        return left.size.localeCompare(right.size);
      }

      if (sortMode === "price-low") {
        return (left.price ?? 0) - (right.price ?? 0);
      }

      if (sortMode === "price-high") {
        return (right.price ?? 0) - (left.price ?? 0);
      }

      return left.name.localeCompare(right.name);
    });

  useEffect(() => {
    setVisibleCount(3);
  }, [query, filters.shape, filters.finish, filters.room, sortMode]);

  const bestSellers = mirrorCollections.filter((mirror) => mirror.bestSeller);
  const displayedMirrors = visibleMirrors.slice(0, visibleCount);
  const canLoadMore = visibleCount < visibleMirrors.length;

  const updateFilter = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
            <div>
              <span className="uppercase tracking-[0.3em] text-xs text-[#ac795a] font-sans">
                Browse the edit
              </span>
              <h2 className="text-4xl md:text-5xl font-light mt-4">
                Find the mirror that feels
                <span className="italic text-[#ac795a]"> right for the room.</span>
              </h2>
            </div>
          </div>

          
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search mirrors, rooms, finishes..."
              actionLabel="Filter"
              onAction={() => setSortMode("name")}
            />

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {Object.entries(filterGroups).map(([key, values]) => (
                <div
                  key={key}
                  className="rounded-[1.5rem] border border-[#ac795a]/10 bg-white/75 p-4"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <label
                      htmlFor={`${key}-filter`}
                      className="text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans"
                    >
                      {key}
                    </label>

                    <button
                      onClick={() => updateFilter(key, "All")}
                      className="text-[10px] uppercase tracking-[0.25em] text-[#5c4032]/45 hover:text-[#ac795a] transition-colors font-sans"
                    >
                      Clear
                    </button>
                  </div>

                  <div className="relative">
                    <select
                      id={`${key}-filter`}
                      value={filters[key]}
                      onChange={(event) => updateFilter(key, event.target.value)}
                      className="w-full appearance-none rounded-full border border-[#ac795a]/15 bg-white px-4 py-3 pr-10 text-sm text-[#5c4032] outline-none transition-all duration-200 hover:border-[#ac795a]/30 focus:border-[#ac795a] focus:ring-2 focus:ring-[#ac795a]/15"
                    >
                      {values.map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>

                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#ac795a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-[#5c4032]/70">
                Showing {Math.min(visibleCount, visibleMirrors.length)} of{" "}
                {visibleMirrors.length} mirror
                {visibleMirrors.length === 1 ? "" : "s"}
              </p>

              <div className="flex items-center gap-3">
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#ac795a] font-sans">
                  Sort
                </label>
                <select
                  value={sortMode}
                  onChange={(event) => setSortMode(event.target.value)}
                  className="rounded-full border border-[#ac795a]/15 bg-white px-4 py-2 text-sm outline-none"
                >
                  <option value="name">Name</option>
                  <option value="room">Room</option>
                  <option value="size">Size</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              

              {visibleMirrors.length === 0 ? (
                <div className="rounded-[2rem] border border-dashed border-[#ac795a]/20 bg-white/60 p-10 text-center text-[#5c4032]/70">
                  No mirrors match these filters yet. Try a different shape or
                  finish.
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {displayedMirrors.map((mirror) => (
                      <article
                        key={mirror.name}
                        className="group overflow-hidden rounded-[2rem] border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_20px_50px_rgba(92,64,50,0.06)]"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={mirror.image}
                            alt={mirror.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#5c4032]/80 via-[#5c4032]/18 to-transparent" />

                          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-[#fef6e9]/20 bg-[#fef6e9]/90 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#8f6348] font-sans">
                              {mirror.tag}
                            </span>
                            {mirror.bestSeller && (
                              <span className="rounded-full border border-[#fef6e9]/20 bg-[#ac795a] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#fef6e9] font-sans">
                                Best seller
                              </span>
                            )}
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0">
                                <p className="text-[#fef6e9]/72 text-[9px] uppercase tracking-[0.3em] font-sans mb-2">
                                  {mirror.shape} - {mirror.finish}
                                </p>
                                <h4 className="text-2xl font-light italic text-[#fef6e9]">
                                  {mirror.name}
                                </h4>
                              </div>

                              <span className="rounded-full border border-[#fef6e9]/20 bg-[#fef6e9]/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#fef6e9]/90 font-sans">
                                {mirror.size}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="text-[#5c4032]/75 leading-relaxed">
                            {mirror.description}
                          </p>
                          <div className="mt-5 flex items-center justify-between gap-4">
                            <span className="text-xs uppercase tracking-[0.25em] text-[#ac795a] font-sans">
                              {mirror.room}
                            </span>
                            <Link
                              href={getMirrorHref(mirror)}
                              className="btn-glass border-[#ac795a]/20 bg-white/70 px-4 py-2 text-[10px] text-[#5c4032]"
                            >
                              View piece
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {canLoadMore && (
                    <div className="mt-8 flex justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleCount((current) => current + 3)
                        }
                        className="rounded-full border border-[#ac795a]/20 bg-white px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#5c4032] transition-all duration-200 hover:border-[#ac795a]/35 hover:text-[#ac795a]"
                      >
                        Load more
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          
        </div>
      </section>

      <section className="py-2 px-6 pb-14">
        <div className="max-w-7xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans">
              Best sellers
            </span>
            <h3 className="text-2xl md:text-3xl font-light mt-3 mb-6">
              The pieces people 
              <span className="italic text-[#ac795a]"> come back for.</span>
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              {bestSellers.map((mirror) => (
                <div
                  key={mirror.name}
                  className="rounded-[1.5rem] border border-[#ac795a]/10 bg-white p-4"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={mirror.image}
                      alt={mirror.name}
                      className="h-20 w-20 rounded-2xl object-cover flex-shrink-0"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#ac795a] font-sans mb-2">
                        {mirror.tag}
                      </p>
                      <h4 className="text-lg font-light">{mirror.name}</h4>
                      <p className="text-sm text-[#5c4032]/70 leading-relaxed mt-2">
                        {mirror.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </main>
  );
}
