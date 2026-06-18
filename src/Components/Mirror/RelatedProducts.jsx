"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedProducts({ items }) {
  const swiperRef = useRef(null);

  return (
    <section className="py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-[#ac795a] font-sans">
              Related collections
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-light">
              More pieces with the 
              <span className="italic text-[#ac795a]"> same quiet presence.</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="rounded-full border border-[#ac795a]/18 bg-[#fffaf2] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#5c4032] transition-all duration-300 hover:bg-[#f7efe4]"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="rounded-full border border-[#ac795a]/18 bg-[#fffaf2] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#5c4032] transition-all duration-300 hover:bg-[#f7efe4]"
            >
              Next
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3.6 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="group mx-auto max-w-[360px] overflow-hidden rounded-[2rem] border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_18px_45px_rgba(92,64,50,0.06)]">
                <div className="relative aspect-[4/4.45] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#5c4032]/80 via-[#5c4032]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#fef6e9]/72 font-sans">
                      Related collection
                    </p>
                    <h3 className="mt-2 text-xl md:text-[1.35rem] font-light italic text-[#fef6e9]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#fef6e9]/78 font-sans">
                      {item.description}
                    </p>
                    <Link
                      href={item.href ?? "/collections"}
                      className="btn-glass mt-4 border-[#fef6e9]/20 bg-[#fef6e9]/10 px-4 py-2 text-[10px] text-[#fef6e9]"
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
