import SectionHeader from "../Inspiration/SectionHeader.jsx";

export default function ProductDetails({ details, image }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Product details"
          title="Crafted to feel architectural and calm."
          highlightedText=""
          description="A more editorial look at the mirror's construction, finish, and the inspiration behind its silhouette."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6 text-[#5c4032]/78 leading-relaxed font-sans">
            <p>{details.craftsmanship}</p>
            <p>{details.materials}</p>
            <p>{details.finishing}</p>
            <p>{details.inspiration}</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#ac795a]/12 shadow-[0_18px_50px_rgba(92,64,50,0.08)] aspect-[4/5]">
            <img
              src={image}
              alt="Mirror detail inspiration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
