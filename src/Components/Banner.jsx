export default function Banner({ onClose }) {
  return (
    <div className="relative bg-[#ac795a] text-[#fef6e9] overflow-hidden">

      {/* shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fef6e9]/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-4">

        {/* Left line */}
        <span className="hidden sm:block w-12 h-px bg-[#fef6e9]/60" />

        {/* Text */}
        <p className="text-center text-sm tracking-[0.12em] text-[#fef6e9]/90">
          <span className="italic text-[#fef6e9] text-base mr-2">
            New arrivals
          </span>

          Free shipping on orders over $250 · Use code{" "}
          <span className="font-semibold text-[#fef6e9] tracking-widest">
            REFLECT
          </span>{" "}
          at checkout
        </p>

        {/* Right line */}
        <span className="hidden sm:block w-12 h-px bg-[#fef6e9]/60" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 text-[#fef6e9]/70 hover:text-[#fef6e9] transition-colors text-lg leading-none"
          aria-label="Dismiss banner"
        >
          ×
        </button>

      </div>
    </div>
  );
}
