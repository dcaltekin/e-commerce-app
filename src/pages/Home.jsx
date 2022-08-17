import React from "react";
import Footer from "../components/Footer";
import LifeQuality from "../components/LifeQuality";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import TopSlider from "../components/TopSlider";

function Home() {
  return (
    <div>
      <Navbar />

      <TopSlider />
      <LifeQuality />

      <Products />

      <Footer />
    </div>
  );
}

export default Home;
