import React, { useContext, useMemo, useState } from "react";
import { ProductsContext } from "../assets/context/Productcontext";
import { CartContext } from "../assets/context/CartContext";

function CardsSlider() {
  // ✅ Access Cart state and addToCart function from CartContext
  const { Cart, addToCart } = useContext(CartContext);

  // ✅ Local state to show temporary toast notifications
  const [toastMessage, setToastMessage] = useState("");

  // ✅ Get products, loading, and error from ProductsContext
  const { products, loading, error } = useContext(ProductsContext);

  // ✅ Shuffle products randomly and take only 10 products for display
  const SaleProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [products]);

  // ✅ Add product to cart and show toast message
  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.title} added to cart`);
    setTimeout(() => setToastMessage(""), 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="flex w-full overflow-x-auto gap-4 p-4">
      {SaleProducts.map((product, index) => (
        <div
          key={product.id}
          className="flex flex-shrink-0 flex-col items-start pb-4 bg-white rounded-xl shadow-md w-60 h-100 justify-between"
        >
          {/* ✅ Product Image */}
          <div className="w-[100%] h-[100%] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src={product.images[0]}
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
          <div className="w-full mt-2 flex justify-center items-center">
            <button
              onClick={() => handleAddToCart(product)}
              className="w-40 h-10 text-white bg-[#db4444] rounded hover:bg-[#e57373]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default CardsSlider;
