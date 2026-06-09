export default function Banner({ onClose }) {
  return (
    <div className="relative bg-[#ac795a] text-[#fef6e9] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-2">
        <div className="overflow-hidden">
          <div className="banner-marquee flex w-max items-center gap-10 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block w-10 h-px bg-[#fef6e9]/60" />
              <p className="text-center text-xs sm:text-sm tracking-[0.12em] text-[#fef6e9]/90">
                <span className="italic text-[#fef6e9] text-sm sm:text-base mr-2">
                  New arrivals
                </span>
                Free shipping on orders over $250 · Use code{" "}
                <span className="font-semibold text-[#fef6e9] tracking-widest">
                  REFLECT
                </span>{" "}
                at checkout
              </p>
              <span className="hidden sm:block w-10 h-px bg-[#fef6e9]/60" />
            </div>
            <div className="flex items-center gap-3" aria-hidden="true">
              <span className="hidden sm:block w-10 h-px bg-[#fef6e9]/60" />
              <p className="text-center text-xs sm:text-sm tracking-[0.12em] text-[#fef6e9]/90">
                <span className="italic text-[#fef6e9] text-sm sm:text-base mr-2">
                  New arrivals
                </span>
                Free shipping on orders over $250 · Use code{" "}
                <span className="font-semibold text-[#fef6e9] tracking-widest">
                  REFLECT
                </span>{" "}
                at checkout
              </p>
              <span className="hidden sm:block w-10 h-px bg-[#fef6e9]/60" />
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#fef6e9]/70 hover:text-[#fef6e9] transition-colors text-base sm:text-lg leading-none"
          aria-label="Dismiss banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
