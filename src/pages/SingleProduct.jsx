import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import FlashSale from '../components/FlashSale';
import { CartContext } from '../assets/context/CartContext';

function SingleProduct() {
    const location = useLocation();
    const {product} = location.state || {}
const { addToCart } = useContext(CartContext);
     const [toastMessage, setToastMessage] = useState("");
    
      const handleAddToCart = () => {
        addToCart({product,quantity});
        setToastMessage(`${product.title} added to cart ✅`);
    
        // hide toast after 2 sec
        setTimeout(() => setToastMessage(""), 2000);
      };
 
  const [quantity, setQuantity] = useState(1);
 
  
  return (
    <>
     <div className="max-w-6xl mx-auto my-12 p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Images */}
      <div className="flex gap-4 w-[100%] justify-center items-center">
        <div className="flex flex-col border-2 border-gray-300 w-[100%] gap-4">
          <img
          src={product.images}
          alt="Selected"
          className="w-[100%] h-[100%] object-contain bg-gray-50 rounded"
        />
          {/* {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              onClick={() => setMainImg(img)}
              className={`w-20 h-20 object-cover rounded cursor-pointer border ${mainImg===img ? "border-blue-500" : "border-transparent"}`}
            />
          ))} */}
        </div>
        
      </div>

      {/* Right: Product Details */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-semibold text-2xl">{product.title}</h2>
          <div className="flex items-center gap-2 text-yellow-500 mt-2">
            <span>★</span>
            <span className="text-gray-600">{product.reviews[0].rating}</span>
            <span className="text-gray-500 text-sm">({product.reviews[0].comment})</span>
            <span className="ml-2 text-green-600 font-medium">{product.stock ? "In Stock" : "Out of Stock"}</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-2xl">${product.price}</span>
        </div>
        <div className="text-gray-600 text-[15px] leading-relaxed border-b pb-4">
          {product.description}
        </div>
       
        {/* Quantity and Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            className="border px-3 py-1 text-lg bg-white hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border px-3 py-1 text-lg bg-white hover:bg-gray-100"
          >
            +
          </button>
          <button
          onClick={handleAddToCart}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded px-6 py-2 ml-2">
           Add to Cart
          </button>
        </div>
        {/* Delivery / Return Info */}
        <div className="border rounded-xl p-4 mt-2 flex flex-col gap-3 bg-gray-50">
          <div className="flex gap-3 items-center">
            <span className="text-2xl">🚚</span>
            <span>
              <span className="font-semibold">Free Delivery</span>
              <br />
              <span className="text-gray-500 text-[14px] underline cursor-pointer">
                {product.deliveryNote || "Enter your postal code for Delivery Availability"}
              </span>
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-2xl">↩️</span>
            <span>
              <span className="font-semibold">Return Delivery</span>
              <br />
              <span className="text-gray-500 text-[14px]">
                {product.returnNote || "Free 30 Days Delivery Returns. "}
                <span className="underline cursor-pointer">Details</span>
              </span>
            </span>
          </div>
        </div>
      </div>
       {/* ✅ Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-300">
          {toastMessage}
        </div>
      )}
    </div>
    <FlashSale/>
    </>
  )
}

export default SingleProduct