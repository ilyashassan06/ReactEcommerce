import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import CardsSlider from "./CardsSlider";

function BestSale() {

   const navigate = useNavigate(); // ✅ hook for navigation

  const handleClick = () => {
    navigate("/products"); // ✅ redirect to /products
  };
  return (
    <div className="mt-8   border-y-2 border-zinc-300 md:p-5 w-[96%] md:w-[100%] py-4  flex flex-col  items-center">
      <div className="w-full px-4   ">
        <h1 className="text-4xl Flashsale">
          <span className="text-red-600">Best</span> Selling Product
        </h1>
      </div>
        {/* Card slider component */}
      <CardsSlider />

      <button 
      onClick={handleClick}
      className="w-40 h-10 text-white bg-[#DB4444] rounded">
        View All Products
      </button>
    </div>
  );
}

export default BestSale;
