import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import TopCampaign from "../components/TopCampaign";
import TopSlider from "../components/TopSlider";

function Home() {
  return (
    <div>
      <Navbar />
      <TopSlider />
      <Products />
    </div>
  );
}

export default Home;
