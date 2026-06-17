import Banner from "../../src/Components/Home/Banner.jsx";
import Navbar from "../../src/Components/Home/Navbar.jsx";
import Hero from "../../src/Components/About/hero.jsx";
import Story from "../../src/Components/About/story.jsx";
import Collections from "../../src/Components/Home/FeaturedCollection.jsx";
import CTA from "../../src/Components/About/cta.jsx";
import Footer from "../../src/Components/Home/Footer.jsx";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Story />
      <Collections />
      <CTA />
      <Footer />
    </>
  );
}