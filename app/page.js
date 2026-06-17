"use client";

import { useState } from "react";
import Navbar from "../src/Components/Home/Navbar.jsx";
import Hero from "../src/Components/Home/Hero.jsx";
import Banner from "../src/Components/Home/Banner.jsx";
import FeaturedCollection from "../src/Components/Home/FeaturedCollection.jsx";
import WhyAloura from "../src/Components/Home/WhyAloura.jsx";
import Testimonials from "../src/Components/Home/Testimonials.jsx";
import BespokeCTA from "../src/Components/Home/BespokeCTA.jsx";
import ContactUs from "../src/Components/Home/ContactUs.jsx";
import Footer from "../src/Components/Home/Footer.jsx";


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
