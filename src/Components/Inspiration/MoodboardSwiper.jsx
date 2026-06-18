"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { moodboards } from "./content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function MoodboardSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSwatches, setSelectedSwatches] = useState({});
  const swiperRef = useRef(null);

  return (
    <section className="pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end mb-10">
          <SectionHeader
            eyebrow="Moodboards"
            title="Different ways to set the tone."
            highlightedText=""
            description="A horizontal moodboard study for comparing palette, materiality, and the atmosphere each mirror brings into a room."
          />

          <span className="rounded-full border border-[#ac795a]/15 bg-[#fffaf2] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#8f6348] font-sans w-fit">
            {String(activeIndex + 1).padStart(2, "0")} / {String(moodboards.length).padStart(2, "0")}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_22px_70px_rgba(92,64,50,0.09)]">
          <button
            type="button"
            aria-label="Previous moodboard"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#fef6e9]/20 bg-[#5c4032]/70 p-3 text-[#fef6e9] backdrop-blur-md transition-all duration-300 hover:bg-[#5c4032]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next moodboard"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#fef6e9]/20 bg-[#5c4032]/70 p-3 text-[#fef6e9] backdrop-blur-md transition-all duration-300 hover:bg-[#5c4032]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            spaceBetween={20}
            slidesPerView={1.05}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.15,
              },
              1024: {
                slidesPerView: 2.05,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="px-6 py-6 lg:px-10 lg:py-8"
          >
            {moodboards.map((moodboard) => (
              <SwiperSlide key={moodboard.title}>
                <article className="overflow-hidden rounded-[1.8rem] border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_18px_40px_rgba(92,64,50,0.06)]">
                  <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                    <div className="p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans">
                          Moodboard
                        </span>
                        <h3 className="mt-4 text-3xl font-light">
                          {moodboard.title}
                        </h3>
                        <p className="mt-4 text-[#5c4032]/75 leading-relaxed font-sans">
                          {moodboard.description}
                        </p>
                      </div>

                      <div className="mt-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans mb-3">
                          Materials
                        </p>
                        <p className="text-sm text-[#5c4032]/75 font-sans">
                          {moodboard.materials}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {moodboard.palette.map((color, colorIndex) => {
                          const isSelected =
                            (selectedSwatches[moodboard.title] ?? 0) ===
                            colorIndex;

                          return (
                            <button
                              key={color}
                              type="button"
                              aria-label={`${moodboard.title} color ${colorIndex + 1}`}
                              aria-pressed={isSelected}
                              onClick={() =>
                                setSelectedSwatches((current) => ({
                                  ...current,
                                  [moodboard.title]: colorIndex,
                                }))
                              }
                              className={`h-8 w-8 rounded-full border transition-all duration-300 ease-out ${
                                isSelected
                                  ? "border-[#8f6348] ring-2 ring-[#8f6348]/25 ring-offset-2 ring-offset-[#fffaf2] scale-110 shadow-[0_8px_18px_rgba(92,64,50,0.12)]"
                                  : "border-[#5c4032]/10 shadow-sm hover:scale-105 hover:border-[#8f6348]/30"
                              }`}
                              style={{ backgroundColor: color }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="relative min-h-[320px] md:min-h-[460px] overflow-hidden">
                      <Image
                        src={moodboard.image}
                        alt={moodboard.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-linear-to-tr from-[#5c4032]/35 via-transparent to-transparent" />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
