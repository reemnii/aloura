import Banner from "../../src/Components/Home/Banner.jsx";
import Navbar from "../../src/Components/Home/Navbar.jsx";
import Hero from "../../src/Components/About/hero.jsx";
import Intro from "../../src/Components/About/cta.jsx";
import Showcase from "../../src/Components/Collections/showcase.jsx";
import CTA from "../../src/Components/Collections/cta.jsx";
import Footer from "../../src/Components/Home/Footer.jsx";
import { collectionPillars } from "../../src/Components/Collections/content.js";

export default function Page() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero
        eyebrow="Collections"
        title="Curated forms for spaces with quiet confidence."
        highlightedText="Elegant by design."
        description="Explore sculptural mirrors and refined editions that bring warmth, depth, and a sense of calm to every room."
        image="/hero-bg.png"
      />
      <Intro
        eyebrow="Collections philosophy"
        title="Designed for mirrors"
        highlightedText=" that hold the room."
        description="Explore our mirrors through a softer lens, where shape, finish, and scale are chosen to bring light and character to every interior."
        items={collectionPillars}
        buttonLabel="Browse mirrors"
      />
      <Showcase />
      <CTA />
      <Footer />
    </>
  );
}
