import Banner from "../../src/Components/Home/Banner.jsx";
import Navbar from "../../src/Components/Home/Navbar.jsx";
import Footer from "../../src/Components/Home/Footer.jsx";
import MirrorDetailPage from "../../src/Components/Mirror/MirrorDetailPage.jsx";
import {
  getMirrorHref,
  mirrorProduct,
  mirrorSpecs,
  relatedCollections,
} from "../../src/Components/Mirror/content.js";

export const metadata = {
  title: "Mirror Details | Aloura",
  description:
    "Luxury mirror product details, room previews, specifications, and bespoke service options.",
};

export default function Page() {
  return (
    <main className="bg-[#fef6e9] text-[#5c4032]">
      <Banner />
      <Navbar />
      <MirrorDetailPage
        product={mirrorProduct}
        specs={mirrorSpecs}
        relatedProducts={relatedCollections.map((item) => ({
          ...item,
          href: getMirrorHref(item),
        }))}
      />
      <Footer />
    </main>
  );
}
