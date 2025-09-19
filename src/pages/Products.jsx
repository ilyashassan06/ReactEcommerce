import React, { useContext, useState } from "react";
import FilterSection from "../components/FilterSection";
import { ProductsContext } from "../assets/context/Productcontext";
import Card from "../components/Card";
import { CartContext } from "../assets/context/CartContext";
import { ThemeContext } from "../assets/context/ThemeToggleContext";

function Products() {
  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Use context
  const { products, loading, error } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = (product) => {
    addToCart({ product, quantity: 1 } );
    setToastMessage(`${product.title} added to cart ✅`);

    // hide toast after 2 sec
    setTimeout(() => setToastMessage(""), 2000);
  };

  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // ✅ Apply filters
  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      selectedCategories.includes("All") ||
      selectedCategories.includes(p.category);
   
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];

    return categoryMatch && priceMatch;
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className={`w-full min-h-screen flex flex-col lg:flex-row px-4 py-4 lg:px-10 ${theme === "light"
        ? "bg-white   text-black"
        : "bg-[#0C0C0C]  text-white"
    }`}>
      {/* ✅ Sidebar Filter */}
      <div className={`lg:w-1/5 w--1 rounded-2xl   mb-6 lg:mb-0 ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-White"
    }`}>
        <FilterSection
          products={products}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>

      {/* ✅ Products Grid */}
      <div className="flex-1">
       <div className="flex flex-wrap justify-center  gap-y-10 md:gap-6 w-[100%] px-0 sm:px-4">

          {filteredProducts.map((product, index) => (
             <div key={product.id || index} className=" flex flex-shrink-0 justify-center  text-xl w-[50%]  md:w-65">
            <Card
              key={product.id || index} // ✅ unique key
              product={product}
              onAddToCart={handleAddToCart}
            />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Products;
