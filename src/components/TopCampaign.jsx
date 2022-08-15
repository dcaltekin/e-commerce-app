import React from "react";
import { ImTruck } from "react-icons/im";

function TopCampaign() {
  return (
    <div className="flex justify-center items-center bg-gray-300 p-2 gap-x-1">
      <ImTruck />
      <h3> Free shipping for 100$ or more</h3>
    </div>
  );
}

export default TopCampaign;
