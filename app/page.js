"use client";

import { useState } from "react";
import Navbar from "../src/Components/Navbar.jsx";
import Hero from "../src/Components/Hero.jsx";
import Banner from "../src/Components/Banner.jsx";
import FeaturedCollection from "../src/Components/FeaturedCollection.jsx";
import WhyAloura from "../src/Components/WhyAloura.jsx";
import Testimonials from "../src/Components/Testimonials.jsx";
import BespokeCTA from "../src/Components/BespokeCTA.jsx";
import ContactUs from "../src/Components/ContactUs.jsx";
import Footer from "../src/Components/Footer.jsx";

export default function Page() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      {bannerVisible && <Banner onClose={() => setBannerVisible(false)} />}
      <Navbar />
      <Hero />
      <FeaturedCollection/>
      <WhyAloura />
      <Testimonials />
      <BespokeCTA />
      <ContactUs />
      <Footer />
    </>
  );
}
