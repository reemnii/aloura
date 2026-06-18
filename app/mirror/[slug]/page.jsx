import { notFound } from "next/navigation";
import Banner from "../../../src/Components/Home/Banner.jsx";
import Navbar from "../../../src/Components/Home/Navbar.jsx";
import Footer from "../../../src/Components/Home/Footer.jsx";
import MirrorDetailPage from "../../../src/Components/Mirror/MirrorDetailPage.jsx";
import {
  getMirrorDetailByIdentifier,
  getMirrorHref,
  mirrorDetails,
  relatedCollections,
} from "../../../src/Components/Mirror/content.js";

export function generateStaticParams() {
  return mirrorDetails.flatMap((mirror) => [
    { slug: mirror.slug },
    { slug: String(mirror.id) },
    { slug: `${mirror.id}-${mirror.slug}` },
  ]);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getMirrorDetailByIdentifier(slug);

  if (!product) {
    return {
      title: "Mirror Details | Aloura",
    };
  }

  return {
    title: `${product.title} | Aloura`,
    description: product.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getMirrorDetailByIdentifier(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = relatedCollections
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4)
    .map((item) => ({
      ...item,
      href: getMirrorHref(item),
    }));

  return (
    <main className="bg-[#fef6e9] text-[#5c4032] overflow-hidden">
      <Banner />
      <Navbar />
      <MirrorDetailPage
        product={product}
        specs={product.specs}
        relatedProducts={relatedProducts}
      />
      <Footer />
    </main>
  );
}
