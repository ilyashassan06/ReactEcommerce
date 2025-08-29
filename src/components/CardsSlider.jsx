import React, { useContext, useMemo } from "react";
import { ProductsContext } from "../assets/context/Productcontext";

function CardsSlider() {

     const { products, loading, error } = useContext(ProductsContext);
    const SaleProducts = useMemo(() => {
      return [...products].sort(() => Math.random() - 0.5).slice(0, 10);
    }, [products]);
  return (
     <div className="flex w-full overflow-x-auto gap-4  p-4">
    {SaleProducts.map((product, index) => (
      
        <div key={product.id} className="flex flex-shrink-0 flex-col items-start pb-4 bg-white rounded-xl shadow-md w-60 h-100   justify-between">
          {/* Image */}
          <div className="w-[100%] h-[100%] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Title */}
         <div className="w-full flex flex-col"  >
           <p className="my-2 font-semibold text-center h-12 flex items-start justify-start line-clamp-2 overflow-hidden text-[]16px">
            {product.title}
          </p>
          {/* Price */}
          <p className="mt-2 text-red-500 font-bold  text-xl text-center">
            ₹{product.price}
          </p>
         </div>
          <div className="w-full mt-2 flex justify-center items-center">
                  <button 
                  className="w-40 h-10 text-white bg-[#DB4444] rounded">
                      Add To Cart
                  </button>
          </div>
  
        </div>
     
    ))}
  
  
        </div>
  )
}

export default CardsSlider