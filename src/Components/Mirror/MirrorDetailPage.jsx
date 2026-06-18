import ProductGallery from "./ProductGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import RelatedProducts from "./RelatedProducts.jsx";

export default function MirrorDetailPage({ product, specs, relatedProducts }) {
  return (
    <>
      <section className="px-6 pt-10 pb-16">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery images={product.productImages} title={product.title} />
          <ProductInfo
            collection={product.collection}
            title={product.title}
            description={product.description}
            price={product.price}
            availability={product.availability}
            dimensions={product.dimensions}
            finish={product.finish}
            materials={product.materials}
          />
        </div>
      </section>

      <RelatedProducts items={relatedProducts} />
    </>
  );
}
