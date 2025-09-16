// Import React and context hook
import React, { useContext } from "react";
import { CartContext } from "../assets/context/CartContext"; // ✅ Cart context

function Cart() {
  // ✅ Extract cart state & functions from context
  const { Cart, addToCart, decreaseQuantity, removeFromCart } =
    useContext(CartContext); 
  console.log("Cart Items:", Cart);

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* ✅ Show message if cart is empty */}
      {Cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {/* ✅ Loop through all cart items */}
          {Cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 h-auto border rounded-lg shadow-sm bg-white"
            >
              {/* Product Image (fallback if missing) */}
              <img
                src={item?.images?.[0] || "https://via.placeholder.com/100"}
                alt={item?.title || "Product"}
                className="w-20 h-20 object-cover rounded"
              />

              {/* Product Title & Price */}
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-red-500 font-bold">₹{item.price}</p>
              </div>

              {/* Quantity Controls + Remove Button */}
              <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                
                {/* Quantity Increase/Decrease */}
                <div className="flex items-center justify-center w-[100%] gap-2">
                  <button
                    className="bg-[#DB4444] w-6 h-6 text-white"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-[#DB4444] w-6 h-6 text-white flex justify-center items-center" 
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Item */}
                <button 
                  className="w-32 h-10 bg-orange-500 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
