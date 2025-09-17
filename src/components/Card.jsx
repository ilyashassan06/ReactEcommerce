import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ product, index,onAddToCart }) {

    

     const navigate = useNavigate();
  return (
   <div
  key={product.id}
  className="flex flex-shrink-0 flex-col items-start pb-4 bg-white rounded-xl shadow-md w-[90%] h-auto justify-between"
>
  {/* ✅ Product Image */}
  <div className="w-full h-60 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
    <img
      src={
        product?.images && product.images.length > 0
          ? product.images[0]
          : "/src/images/AltImg.svg"
      }
      alt={product.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* ✅ Title & Price Section */}
  <div className="w-full flex flex-col p-2">
    <p
      className="font-semibold text-center h-14 sm:h-18 flex items-start justify-start line-clamp-2 overflow-hidden"
      style={{ fontSize: "clamp(20px, 2vw, 22px)" }}
    >
      {product.title}
    </p>

    <p
      className="mt-2 text-red-500 font-bold text-center"
      style={{ fontSize: "clamp(24px, 2.5vw, 26px)" }}
    >
      ₹{product.price}
    </p>
  </div>

  {/* ✅ Add to Cart Button */}
  <div className="w-full mt-1 flex flex-col gap-1 justify-center items-center">
    <button
      onClick={() => onAddToCart(product)}
      className="w-[80%] h-10 text-white bg-[#db4444] rounded hover:bg-[#e57373]"
      style={{ fontSize: "clamp(18px, 1.5vw, 16px)" }}
    >
      Add To Cart
    </button>
    <button
      onClick={() => navigate(`/singleproduct/${product.id}`, { state: { product } })}
      className="w-[80%] h-10 text-white bg-[#05bc0b] rounded hover:bg-[#e57373]"
      style={{ fontSize: "clamp(18px, 1.5vw, 16px)" }}
    >
      See Details
    </button>
  </div>
</div>

    
  );
}

export default Card;
