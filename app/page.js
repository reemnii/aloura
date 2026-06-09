"use client";

import { useState } from "react";
import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero.jsx";
import Banner from "../src/components/Banner";

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
