"use client";

import { useState } from "react";
import Navbar from "../src/Components/Navbar.jsx";
import Hero from "../src/Components/Hero.jsx";
import Banner from "../src/Components/Banner.jsx";

export default function Page() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      {bannerVisible && <Banner onClose={() => setBannerVisible(false)} />}
      <Navbar bannerVisible={bannerVisible} />
      <Hero />
    </>
  );
}
