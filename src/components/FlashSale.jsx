import React from "react";

import CardsSlider from "./CardsSlider";
import { useNavigate } from "react-router-dom";

function FlashSale() {
    const navigate = useNavigate(); // ✅ hook for navigation

  const handleClick = () => {
    navigate("/products"); // ✅ redirect to /products
  };

  return (
    <div className="mt-8   border-y-2 border-zinc-300 md:p-5 w-[96%] md:w-[100%] py-4 items-center  flex flex-col">
      <div className="w-full px-4  ">
        <h1 className="text-4xl Flashsale">
          Todays <span className="text-red-600">Flash</span> Sale
        </h1>
      </div>

      {/* Card slider component */}
      <CardsSlider />
      <button
      onClick={handleClick}
      className="w-40 text-white h-10 bg-[#DB4444] rounded">
        View All Products
      </button>
    </div>
  );
}

export default FlashSale;
