export default function SectionHeader({
  eyebrow,
  title,
  highlightedText,
  description,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`${alignClass} max-w-3xl`}>
      <span className="uppercase tracking-[0.3em] text-[10px] text-[#ac795a] font-sans">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight">
        {title}
        {highlightedText ? (
          <span className="italic text-[#ac795a]"> {highlightedText}</span>
        ) : null}
      </h2>

      {description ? (
        <p className="mt-5 text-[#5c4032]/75 leading-relaxed font-sans">
          {description}
        </p>
      ) : null}
    </header>
  );
}
