export default function Hero({
  eyebrow,
  title,
  highlightedText,
  description,
  subtitle,
  image = "/hero-bg.png",
  height = "min-h-[80vh]",
  as: Wrapper = "main",
}) {
  const bodyCopy = description ?? subtitle;

  return (
    <Wrapper className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
      <section
        className={`relative ${height} flex items-center justify-center`}
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-br from-[#5c4032]/80 via-[#ac795a]/50 to-[#fef6e9]/10" />
          <div className="absolute inset-0 bg-linear-to-t from-[#5c4032]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#fef6e9]">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#ac795a]" />

            <span className="uppercase tracking-[0.3em] text-xs">
              {eyebrow}
            </span>

            <span className="w-8 h-px bg-[#ac795a]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-[0.95]">
            {title}

            {highlightedText && (
              <span className="block italic">
                {highlightedText}
              </span>
            )}
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-[#fef6e9]/75 leading-relaxed">
            {bodyCopy}
          </p>
        </div>
      </section>
    </Wrapper>
  );
}
