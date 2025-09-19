import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../assets/context/Productcontext";
import Card from "../components/Card";
import { CartContext } from "../assets/context/CartContext";
import { ThemeContext } from "../assets/context/ThemeToggleContext";

const Categories = () => {
  const location = useLocation();
   const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Use context
  const [toastMessage, setToastMessage] = useState("");
  const { products, loading, error } = useContext(ProductsContext);
   const { addToCart } = useContext(CartContext);
  const { cat } = location.state || {}; // Defaults to {} if state is null
   // Filter products matching the selected category
  const filteredProducts = products.filter(product => product.category === cat);
 const handleAddToCart = (product) => {
   addToCart({ product, quantity: 1 } );
    setToastMessage(`${product.title} added to cart ✅`);

    // hide toast after 2 sec
    setTimeout(() => setToastMessage(""), 2000);
  };
  // Optionally handle the no-data case:
  if (!cat) {
    return <div>No category data was passed.</div>;
  }

  return  <>
  <div className={`flex-1 my-2 ${theme === "light"
        ? "bg-white   text-black"
        : "bg-[#0C0C0C]  text-white"
    }`}>
       <div className={`flex flex-wrap justify-center gap-1 gap-y-8 mt-7  md:gap-6 w-[100%] px-0 sm:px-4 ${theme === "light"
        ? "bg-white   text-black"
        : "bg-[#0C0C0C]  text-white"
    }`}>

          {filteredProducts.map((product, index) => (
             <div key={product.id || index} className=" flex flex-shrink-0 justify-center gap-3  text-xl w-[49%]  md:w-65">
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
      )};
  </>
};

export default Categories
