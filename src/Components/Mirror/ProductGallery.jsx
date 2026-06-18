"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ProductGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(0);
  const [incomingReady, setIncomingReady] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const transitionTimerRef = useRef(null);
  const incomingFrameRef = useRef(null);

  const activeImage = useMemo(
    () => images[activeIndex] ?? images[0],
    [images, activeIndex]
  );
  const displayedImage = useMemo(
    () => images[displayIndex] ?? images[0],
    [images, displayIndex]
  );

  const clearTimers = () => {
    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }

    if (incomingFrameRef.current) {
      window.cancelAnimationFrame(incomingFrameRef.current);
      incomingFrameRef.current = null;
    }
  };

  const goToImage = (nextIndex) => {
    if (!images.length || nextIndex === activeIndex) return;

    clearTimers();

    setOutgoingIndex(displayIndex);
    setActiveIndex(nextIndex);
    setIsSliding(true);
    setIncomingReady(false);

    incomingFrameRef.current = window.requestAnimationFrame(() => {
      setIncomingReady(true);
    });

    transitionTimerRef.current = window.setTimeout(() => {
      setDisplayIndex(nextIndex);
      setIsSliding(false);
      setIncomingReady(false);
      setOutgoingIndex(nextIndex);
      transitionTimerRef.current = null;
    }, 500);
  };

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      goToImage((displayIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length, displayIndex, activeIndex]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  return (
    <>
      <div className="grid h-full gap-3 lg:grid-cols-[72px_1fr]">
        <div className="order-2 lg:order-1 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 lg:h-full">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => goToImage(index)}
              className={`relative h-16 w-16 lg:h-18 lg:w-18 flex-shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 ${
                index === activeIndex
                  ? "border-[#ac795a] shadow-[0_8px_18px_rgba(92,64,50,0.12)] scale-[1.03]"
                  : "border-[#ac795a]/12 hover:border-[#ac795a]/30"
              }`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="order-1 lg:order-2 group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_22px_60px_rgba(92,64,50,0.09)]"
        >
          <div className="relative h-full w-full">
            {isSliding ? (
              <>
                <Image
                  src={images[outgoingIndex] ?? images[0]}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={`object-cover transition-all duration-500 ease-out ${
                    incomingReady
                      ? "opacity-0 blur-[2px] scale-[1.02]"
                      : "opacity-100 blur-0 scale-100"
                  }`}
                />
                <Image
                  src={images[activeIndex] ?? images[0]}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={`object-cover transition-all duration-500 ease-out ${
                    incomingReady ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-[2px] scale-[1.01]"
                  }`}
                />
              </>
            ) : (
              <Image
                src={displayedImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.04]"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-[#5c4032]/24 via-transparent to-transparent" />
          </div>
        </button>
      </div>

      {lightboxOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#3b2518]/85 p-6 backdrop-blur-md"
        >
          <div className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] border border-[#fef6e9]/15 bg-[#fef6e9] shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full border border-[#ac795a]/15 bg-[#fef6e9]/90 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#5c4032] shadow-[0_10px_24px_rgba(92,64,50,0.08)]"
            >
              Close
            </button>
            <div className="relative h-[80vh] w-[min(90vw,1100px)]">
              <Image
                src={activeImage}
                alt={title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
