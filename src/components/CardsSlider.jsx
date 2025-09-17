import React, { useContext, useMemo, useState } from "react";
import { ProductsContext } from "../assets/context/Productcontext";
import { CartContext } from "../assets/context/CartContext";
import Card from "./Card";

function CardsSlider() {
  // ✅ Access Cart state and addToCart function from CartContext
  const { Cart, addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.title} added to cart`);
    setTimeout(() => setToastMessage(""), 3000); // Hide toast after 3 seconds
  };
  // ✅ Local state to show temporary toast notifications
  const [toastMessage, setToastMessage] = useState("");

  // ✅ Get products, loading, and error from ProductsContext
  const { products, loading, error } = useContext(ProductsContext);

  // ✅ Shuffle products randomly and take only 10 products for display
  const SaleProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [products]);

  // ✅ Add product to cart and show toast message


  return (
    <div className="flex w-full overflow-x-auto gap-4 p-4">
      {SaleProducts.map((product, index) => (
        <div key={product.id || index} className="flex-shrink-0 w-70 text-lg sm:w-[250px] md:w-[250px]">
      <Card
        product={product}
        index={index}
        onAddToCart={handleAddToCart}
      />
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
