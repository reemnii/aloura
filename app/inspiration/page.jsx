import Banner from "../../src/Components/Home/Banner.jsx";
import Navbar from "../../src/Components/Home/Navbar.jsx";
import Footer from "../../src/Components/Home/Footer.jsx";
import Hero from "../../src/Components/About/hero.jsx";
import InspirationExperience from "../../src/Components/Inspiration/InspirationExperience.jsx";
import MoodboardSwiper from "../../src/Components/Inspiration/MoodboardSwiper.jsx";
import FinalCTA from "../../src/Components/Inspiration/FinalCTA.jsx";

export const metadata = {
  title: "Gallery & Inspiration | Aloura",
  description:
    "Editorial mirror inspiration for living rooms, bedrooms, entryways, dining spaces, and bathrooms.",
};

export default function Page() {
  return (
    <main className="bg-[#fef6e9] text-[#5c4032]">
      <Banner />
      <Navbar />
      <Hero
        as="section"
        eyebrow="Inspiration"
        title="Reflections in beautiful spaces."
        description="Discover how mirrors transform interiors through light, proportion, and the quiet confidence of considered design."
        image="/hero-bg.png"
        height="min-h-[82vh]"
        containerClassName="w-full max-w-7xl mx-auto px-6 lg:px-12"
      />
      <InspirationExperience />
      <MoodboardSwiper />
      <FinalCTA />
      <Footer />
    </main>
  );
}
