export default function ProductInfo({
  collection,
  title,
  description,
  price,
  availability,
  dimensions,
  finish,
  materials,
  installation = "Wall mounted",
  specs = [],
  ctaPrimary = "Add to Cart",
  ctaSecondary = "Request Bespoke Version",
}) {
  return (
    <aside className="max-w-lg lg:sticky lg:top-24 self-start">
      <div className="rounded-[2rem] border border-[#ac795a]/12 bg-[#fffaf2] p-5 md:p-6 shadow-[0_22px_60px_rgba(92,64,50,0.08)]">
        <span className="uppercase tracking-[0.3em] text-[10px] text-[#ac795a] font-sans">
          {collection}
        </span>

        <h1 className="mt-3 text-4xl md:text-[3.2rem] font-light leading-[0.95] text-[#5c4032]">
          {title}
        </h1>

        <p className="mt-4 max-w-lg text-[#5c4032]/75 leading-relaxed font-sans text-sm md:text-base">
          {description}
        </p>

        <div className="mt-2 flex items-end gap-4">
          <span className="text-3xl md:text-4xl font-light text-[#5c4032]">
            {price}
          </span>
          <span className="pb-1 text-[10px] uppercase tracking-[0.28em] text-[#8f6348] font-sans">
            {availability}
          </span>
        </div>

        <div className="mt-2 rounded-[1.5rem] p-4 md:p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Dimensions", value: dimensions },
              { label: "Finish", value: finish },
              { label: "Materials", value: materials },
              { label: "Installation", value: installation },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.1rem] border border-[#ac795a]/10 bg-[#fffaf2]/80 px-4 py-3"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5c4032]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-4">
          <button className="btn-brown px-6 py-3 text-[10px]">{ctaPrimary}</button>
          <button className="btn-glass border-[#ac795a]/18 bg-white/70 px-6 py-3 text-[10px] text-[#5c4032]">
            {ctaSecondary}
          </button>
        </div>
      </div>
    </aside>
  );
}
