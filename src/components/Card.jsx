import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ product, index,onAddToCart }) {

    

     const navigate = useNavigate();
  return (
    <div
      key={product.id}
      className="flex flex-shrink-0 flex-col items-start pb-4 bg-white rounded-xl shadow-md w-60 h-100 justify-between"
    >
      {/* ✅ Product Image */}
      <div className="w-[100%] h-[100%] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          src={
            product?.images && product.images.length > 0 && product.images[0]
              ? product.images[0]
              : "/src/images/AltImg.svg" // ✅ your local fallback image
          }
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Title & Price Section */}
      <div className="w-full flex flex-col">
        <p className="my-2 font-semibold text-center h-12 flex items-start justify-start line-clamp-2 overflow-hidden text-[]16px">
          {product.title}
        </p>
        <p className="mt-2 text-red-500 font-bold text-xl text-center">
          ₹{product.price}
        </p>
      </div>

      {/* ✅ Add to Cart Button */}
      <div className="w-full mt-2 flex flex-col gap-1 justify-center items-center">
        <button
          onClick={() =>onAddToCart(product)}
          className="w-40 h-10 text-white bg-[#db4444] rounded hover:bg-[#e57373]"
        >
          Add To Cart
        </button>
        <button
          onClick={() => navigate(`/singleproduct/${product.id}`,{state:{product}}) }
          className="w-40 h-10 text-white bg-[#db4444] rounded hover:bg-[#e57373]"
        >
          See Details
        </button>
      </div>
    </div>
    
  );
}

export default Card;
