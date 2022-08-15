import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import TopCampaign from "../components/TopCampaign";

function Home() {
  return (
    <div>
      <TopCampaign />
      <Navbar />
      <Products />
    </div>
  );
}

export default Home;
