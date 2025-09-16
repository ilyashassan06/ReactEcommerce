import React, { createContext, useState, useEffect } from "react";

// ✅ Create context for products
export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  // ✅ State to store products, loading state, and error state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch products from API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch product list from API
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products"); // handle bad response
        }

        // Convert response to JSON
        const data = await response.json();

        // ✅ Set products (fallback to [] in case API returns null/undefined)
        setProducts(data || []);
      } catch (err) {
        // ✅ If error occurs, store error message
        setError(err.message);
      } finally {
        // ✅ Always stop loading once request is complete
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency → runs only once at mount

  return (
    // ✅ Provide products, loading, and error states to all children components
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
