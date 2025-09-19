import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"
import { ThemeContext } from "../assets/context/ThemeToggleContext";

function Card({ product, index,onAddToCart }) {

     const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Use context

     const navigate = useNavigate();
  return (
   <div
  key={product.id}
  className={`flex flex-shrink-0 flex-col items-start p-2 pb-4   rounded-xl shadow-md w-[90%] h-auto justify-between
   ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-white"
    }
  `}
>
  {/* ✅ Product Image */}
  <div className="w-full h-60 rounded-lg overflow-hidden p-2 flex items-center justify-center bg-gray-100">
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
  <div className={`w-full flex flex-col p-2 border-t-2 mt-2 ${theme === "light"
 ? "border-black"
      : "border-white"
    }`}  >
    <p
     style={{
    fontSize: "clamp(20px, 1vw, 22px)",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
      className="font-semibold text-center h-14 sm:h-14 flex items-start justify-start line-clamp-2 overflow-hidden"
      
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
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => onAddToCart(product)}
      className="w-[80%] h-10 text-white bg-[#db4444] rounded hover:bg-[#e57373]"
      style={{ fontSize: "clamp(18px, 1.5vw, 16px)" }}
    >
      Add To Cart
    </motion.button>
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/singleproduct/${product.id}`, { state: { product } })}
      className="w-[80%] h-10 text-white bg-[#05bc0b] rounded hover:bg-[#e57373]"
      style={{ fontSize: "clamp(18px, 1.5vw, 16px)" }}
    >
      See Details
    </motion.button>
  </div>
</div>

    
  );
}

export default Card;
