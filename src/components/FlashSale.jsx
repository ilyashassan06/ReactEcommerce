import React, { useContext, useMemo } from "react";
import { ProductsContext } from "../assets/context/Productcontext";
import { Component } from "react";
import Slider from "react-slick";

function FlashSale() {
     
  const { products, loading, error } = useContext(ProductsContext);
  const SaleProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [products]);


  return (
    <div className="mt-8   border-y-2 border-zinc-300 md:p-5 w-[96%] md:w-[90%] py-4  flex flex-col">
      <div className="w-full px-4">
        <h1 className="text-4xl Flashsale">
          Todays <span className="text-red-600">Flash</span> Sale
        </h1>
      </div>
      <div className="flex w-full overflow-x-auto gap-4 px-4">
    
  {SaleProducts.map((product, index) => (
    <div  className=" flex flex-shrink-0 py-6">
      <div key={product.id} className="flex flex-shrink flex-col items-start pb-4 bg-white rounded-xl shadow-md w-60 h-100   justify-between">
        {/* Image */}
        <div className="w-[100%] h-[100%] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Title */}
       <div w-full flex flex-col  >
         <p className="my-2 font-semibold text-center h-12 flex items-start justify-start line-clamp-2 overflow-hidden text-[]16px">
          {product.title}
        </p>
        {/* Price */}
        <p className="mt-2 text-red-500 font-bold  text-xl text-center">
          ₹{product.price}
        </p>
       </div>
        <div className="w-full mt-2 flex justify-center items-center">
                <button 
                className="w-40 h-10 bg-[#DB4444] rounded">
                    Add To Cart
                </button>
        </div>

      </div>
    </div>
  ))}


      </div>
    </div>
  );
}

export default FlashSale;
