import React, { createContext, useState, useEffect } from "react";

// ✅ Create a context for Cart
export const CartContext = createContext();

function CartProvider({ children }) {
  // ✅ State to store cart items
  const [Cart, setCart] = useState([]);

  // ✅ Load cart from localStorage when app starts (first render)
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(Cart));
  }, [Cart]);

  // ✅ Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existItem = prev.find((item) => item.id == product.id);

      if (existItem) {
        // If product exists → increase quantity
        return prev.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist → add new product with quantity = 1
        return [
          ...prev,
          {
            id: product.id,
            title: product.title || "Untitled Product", // fallback if missing
            price: product.price || 0, // fallback if missing
            images: product.images || ["https://via.placeholder.com/100"], // fallback image
            quantity: 1, // ✅ always start with quantity = 1
          },
        ];
      }
    });
  };

  // ✅ Decrease quantity of product
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // removes item if qty = 0
    );
  };

  // ✅ Remove product completely from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    // ✅ Provide cart data & functions to children
    <CartContext.Provider
      value={{ Cart, addToCart, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
