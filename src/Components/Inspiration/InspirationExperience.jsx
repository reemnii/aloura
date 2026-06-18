"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredInspirationSlides, inspirationCategories } from "./content.js";
import SectionHeader from "./SectionHeader.jsx";

function InspirationFilterButton({
  active,
  children,
  onClick,
  onMouseEnter,
  onFocus,
  buttonRef,
}) {
  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      aria-pressed={active}
      className={`relative z-10 whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 font-sans ${
        active ? "text-[#5c4032]" : "text-[#5c4032]/60 hover:text-[#5c4032]"
      }`}
    >
      {children}
    </button>
  );
}

export default function InspirationExperience() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });
  const filterRowRef = useRef(null);
  const filterButtonRefs = useRef({});
  const swiperRef = useRef(null);

  const slides = useMemo(() => {
    if (activeCategory === "All") {
      return featuredInspirationSlides;
    }

    return featuredInspirationSlides.filter(
      (slide) => slide.category === activeCategory
    );
  }, [activeCategory]);

  const currentSlide = slides[activeIndex] ?? slides[0];

  const moveIndicator = (category) => {
    const button = filterButtonRefs.current[category];
    const row = filterRowRef.current;

    if (!button || !row) return;

    const buttonRect = button.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    const left = buttonRect.left - rowRect.left;

    setIndicatorStyle({
      width: buttonRect.width,
      transform: `translateX(${left}px)`,
      opacity: 1,
    });
  };

  useEffect(() => {
    const category = hoveredCategory ?? activeCategory;
    moveIndicator(category);
  }, [activeCategory, hoveredCategory]);

  useEffect(() => {
    const handleResize = () => {
      moveIndicator(hoveredCategory ?? activeCategory);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory, hoveredCategory]);

  return (
    <section className="py-14 lg:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-end mb-6">
          <SectionHeader
            eyebrow="Featured inspiration"
            title="Spaces composed like an editorial spread."
            highlightedText=""
            description="Choose a room type to see how Aloura mirrors shift the mood of a space, from intimate bedrooms to more architectural entryways."
          />
          
          <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3 font-sans">
            <span className="rounded-full border border-[#ac795a]/15 bg-[#fffaf2] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#8f6348]">
              {activeCategory}
            </span>
            <span className="rounded-full border border-[#ac795a]/15 bg-[#fffaf2] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#8f6348]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="sticky top-20 z-30 -mx-2 mb-8 rounded-[1.75rem] border border-[#ac795a]/12 bg-[#fef6e9]/90 px-2 py-2 shadow-[0_18px_45px_rgba(92,64,50,0.06)] backdrop-blur-xl lg:-mx-4 lg:px-4">
          <div
            ref={filterRowRef}
            className="relative flex gap-2 overflow-x-auto rounded-full p-1 scrollbar-none"
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-1 left-1 rounded-full border border-[#ac795a]/18 bg-[#fffaf2] shadow-[0_10px_25px_rgba(92,64,50,0.08)] transition-[transform,width,opacity] duration-500 ease-out"
              style={{
                width: indicatorStyle.width,
                transform: indicatorStyle.transform,
                opacity: indicatorStyle.opacity,
              }}
            />

            {inspirationCategories.map((category) => (
              <InspirationFilterButton
                key={category}
                active={category === activeCategory}
                buttonRef={(node) => {
                  if (node) {
                    filterButtonRefs.current[category] = node;
                  } else {
                    delete filterButtonRefs.current[category];
                  }
                }}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveIndex(0);
                  setHoveredCategory(null);
                }}
                onMouseEnter={() => setHoveredCategory(category)}
                onFocus={() => setHoveredCategory(category)}
              >
                {category}
              </InspirationFilterButton>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-4xl border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_24px_80px_rgba(92,64,50,0.11)]">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#fef6e9]/20 bg-[#ac795a]  p-3 text-[#fef6e9] backdrop-blur-md transition-all duration-300 hover:bg-[#ac795a]/60"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#fef6e9]/20 p-3 text-[#fef6e9] bg-[#ac795a] backdrop-blur-md transition-all duration-300 hover:bg-[#ac795a]/60"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            key={activeCategory}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="gallery-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={`${slide.category}-${slide.collection}`}>
                <article className="grid lg:grid-cols-[0.85fr_1.15fr] min-h-130 lg:min-h-140">
                  <div className="relative min-h-75 lg:min-h-[560px] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.collection}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-[#5c4032]/78 via-[#5c4032]/20 to-transparent" />
                    <div className="absolute left-6 top-6">
                      <span className="rounded-full border border-[#fef6e9]/20 bg-[#fef6e9]/90 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#8f6348] backdrop-blur-sm">
                        {slide.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center bg-linear-to-br from-[#fffaf2] via-[#fff7ed] to-[#f5eadb] p-6 lg:p-8">
                    <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg xl:max-w-xl lg:pl-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans">
                        {slide.collection}
                      </p>
                      <h3 className="mt-4 text-3xl lg:text-[2.65rem] font-light leading-tight">
                        {slide.title}
                      </h3>
                      <p className="mt-5 max-w-lg text-[#5c4032]/75 leading-relaxed font-sans">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link href={slide.href} className="btn-brown px-6 py-3 text-[10px]">
                          {slide.cta}
                        </Link>
                        <button className="btn-glass border-[#ac795a]/20 bg-white/70 px-6 py-3 text-[10px] text-[#5c4032]">
                          Save to moodboard
                        </button>
                      </div>
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
